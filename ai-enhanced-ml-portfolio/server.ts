import express from "express";
import { createServer as createViteServer } from "vite";
import { OAuth2Client } from "google-auth-library";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cookieParser());
  app.use(express.json());

  const clientID = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const appUrl = process.env.APP_URL || `http://localhost:${PORT}`;

  const oauth2Client = new OAuth2Client(
    clientID,
    clientSecret,
    `${appUrl}/auth/google/callback`
  );

  // API routes
  app.get("/api/auth/google/url", (req: express.Request, res: express.Response) => {
    if (!clientID || !clientSecret) {
      return res.status(500).json({ error: "Google OAuth credentials not configured" });
    }

    const url = oauth2Client.generateAuthUrl({
      access_type: "offline",
      scope: ["https://www.googleapis.com/auth/drive.metadata.readonly"],
      prompt: "consent",
    });

    res.json({ url });
  });

  app.get(["/auth/google/callback", "/auth/google/callback/"], async (req: express.Request, res: express.Response) => {
    const { code } = req.query;

    if (!code) {
      return res.status(400).send("No code provided");
    }

    try {
      const { tokens } = await oauth2Client.getToken(code as string);
      // In a real app, you'd store tokens in a secure session/database
      // For this demo, we'll just send a success message back to the opener
      
      res.send(`
        <html>
          <body style="background: #050505; color: #00ff41; font-family: monospace; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0;">
            <div style="text-align: center; border: 1px solid #00ff41; padding: 2rem; border-radius: 1rem; background: rgba(0,255,65,0.05);">
              <h2 style="margin-top: 0;">UPLINK_SUCCESS</h2>
              <p style="color: rgba(255,255,255,0.6);">Google Drive access granted. Handshaking...</p>
              <script>
                if (window.opener) {
                  window.opener.postMessage({ type: 'OAUTH_AUTH_SUCCESS', provider: 'google' }, '*');
                  setTimeout(() => window.close(), 1000);
                } else {
                  window.location.href = '/';
                }
              </script>
            </div>
          </body>
        </html>
      `);
    } catch (error) {
      console.error("Error exchanging code for tokens:", error);
      res.status(500).send("Authentication failed");
    }
  });

  app.get("/api/health", (req: express.Request, res: express.Response) => {
    res.json({ status: "ok", drive_access: !!clientID });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static("dist"));
    app.get("*", (req: express.Request, res: express.Response) => {
      res.sendFile("dist/index.html", { root: "." });
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

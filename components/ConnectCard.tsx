
import React from 'react';

const ConnectCard: React.FC = () => {
  const [isDriveConnected, setIsDriveConnected] = React.useState(false);

  React.useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const origin = event.origin;
      if (!origin.endsWith('.run.app') && !origin.includes('localhost')) return;
      
      if (event.data?.type === 'OAUTH_AUTH_SUCCESS' && event.data?.provider === 'google') {
        setIsDriveConnected(true);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div className="bento-card glow-blue h-full group">
      {/* Radar Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 w-full h-full border border-signal-blue/30 rounded-full radar-wave"></div>
        <div className="absolute top-1/2 left-1/2 w-2/3 h-2/3 border border-signal-blue/20 rounded-full radar-wave" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-1/3 h-1/3 border border-signal-blue/10 rounded-full radar-wave" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 flex justify-between items-start">
        <div className="w-14 h-14 bg-signal-blue/10 border border-signal-blue/20 rounded-2xl flex items-center justify-center text-signal-blue shadow-[0_0_20px_rgba(1,112,251,0.2)]">
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </div>
        <div className="flex items-center gap-3 px-4 py-2 bg-signal-blue/5 border border-signal-blue/20 rounded-xl">
          <div className={`w-1.5 h-1.5 rounded-full ${isDriveConnected ? 'bg-data-green shadow-[0_0_8px_#00ff41]' : 'bg-signal-blue animate-pulse shadow-[0_0_8px_#0170fb]'}`}></div>
          <span className={`text-[10px] font-mono uppercase tracking-widest font-bold ${isDriveConnected ? 'text-data-green' : 'text-signal-blue'}`}>
            {isDriveConnected ? 'Drive_Synced' : 'Signal_Active'}
          </span>
        </div>
      </div>

      <div className="relative z-10 mt-auto space-y-4">
        <div className="space-y-1">
          <h3 className="text-5xl font-bold tracking-tighter leading-none">Connect</h3>
          <p className="text-[10px] font-mono text-white/30 uppercase tracking-[0.4em]">Networking_Protocol_v1.2</p>
        </div>
        
        <div className="grid grid-cols-1 gap-3">
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group/link flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-signal-blue/10 hover:border-signal-blue/40 transition-all duration-300 shadow-lg"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-signal-blue/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-signal-blue" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <span className="text-[10px] font-mono tracking-[0.1em] text-white/70 group-hover/link:text-white font-bold transition-colors uppercase">LinkedIn_Uplink</span>
            </div>
            <svg className="w-4 h-4 text-signal-blue transform transition-transform group-hover/link:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </a>

          <button 
            onClick={async () => {
              if (isDriveConnected) return;
              try {
                const res = await fetch('/api/auth/google/url');
                const { url } = await res.json();
                if (url) {
                  window.open(url, 'google_oauth', 'width=600,height=700');
                }
              } catch (e) {
                console.error('Failed to initiate Drive uplink', e);
              }
            }}
            disabled={isDriveConnected}
            className={`group/drive flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10 transition-all duration-300 shadow-lg ${isDriveConnected ? 'opacity-50 cursor-default' : 'hover:bg-data-green/10 hover:border-data-green/40'}`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${isDriveConnected ? 'bg-data-green/40' : 'bg-data-green/20'}`}>
                <svg className={`w-4 h-4 ${isDriveConnected ? 'text-white' : 'text-data-green'}`} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.71 3.502L1.15 15l3.446 6.002L11.157 9.502zM9.73 15l3.447 6.002h13.146l-3.448-6.002zM22.71 15L16.15 3.502H9.27L15.83 15z"/>
                </svg>
              </div>
              <span className="text-[10px] font-mono tracking-[0.1em] text-white/70 group-hover/drive:text-white font-bold transition-colors uppercase">
                {isDriveConnected ? 'Uplink_Active' : 'Drive_Access'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[8px] font-mono text-white/20 uppercase group-hover/drive:text-data-green/60 transition-colors">
                {isDriveConnected ? 'Handshake_OK' : 'Grant_Access'}
              </span>
              <svg className={`w-4 h-4 transform transition-transform group-hover/drive:translate-x-0.5 ${isDriveConnected ? 'text-data-green' : 'text-data-green'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectCard;

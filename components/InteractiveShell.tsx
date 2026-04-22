import React, { useState, useEffect, useRef } from 'react';

const InteractiveShell: React.FC = () => {
  const [lines, setLines] = useState<string[]>([]);
  const cvUrl = "https://resume-60bb3.web.app/";
  
  const fullText = [
    '>>> initializing_uplink...',
    '>>> pip install abdellah-portfolio',
    'Collecting abdellah-portfolio...',
    '  Downloading stats_v4.tar.gz (45kB)',
    'Installing collected packages: skills, projects, experience',
    'Successfully installed abdellah-portfolio-2024.1',
    '>>> abdellah.fetch_cv()',
    'Uplink established to: resume-60bb3.web.app'
  ];

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    let currentLineIndex = 0;
    
    timerRef.current = setInterval(() => {
      if (currentLineIndex < fullText.length) {
        const nextLine = fullText[currentLineIndex];
        setLines(prev => [...prev, nextLine]);
        currentLineIndex++;
      } else {
        if (timerRef.current) clearInterval(timerRef.current);
      }
    }, 800);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="bento-card glow-green h-full group/term p-0">
      <div className="bg-white/[0.03] p-5 flex items-center justify-between border-b border-white/5 backdrop-blur-md">
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/40"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/40"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/40"></div>
        </div>
        <div className="text-[9px] font-mono text-white/20 tracking-[0.3em] uppercase font-bold">BASH_SHELL -- 80x24</div>
      </div>
      
      <div className="p-6 flex-1 text-[11px] font-mono space-y-2.5 overflow-y-auto scrollbar-hide bg-black/20">
        {lines.map((line, idx) => {
          const isCommand = line.startsWith('>>>');
          const isSuccess = line.includes('Successfully') || line.includes('established');
          
          return (
            <div key={idx} className="flex gap-3 animate-fadeIn">
              <div className={`leading-relaxed break-all ${isCommand ? 'text-signal-blue font-bold' : isSuccess ? 'text-data-green' : 'text-white/50'}`}>
                {line}
              </div>
            </div>
          );
        })}
        <div className="flex items-center gap-3">
          <span className="text-signal-blue font-bold">&gt;&gt;&gt;</span>
          <div className="w-2 h-4 bg-data-green/60 animate-pulse shadow-[0_0_8px_rgba(0,255,65,0.4)]"></div>
        </div>
      </div>
      
      <div className="p-5 bg-white/[0.02] border-t border-white/5">
        <a 
          href={cvUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-data-green/5 border border-data-green/10 text-data-green hover:bg-data-green hover:text-black transition-all duration-300 group/btn shadow-lg"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-data-green group-hover/btn:bg-black animate-pulse"></div>
          <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase">Open_Resume_Node</span>
          <svg className="w-3.5 h-3.5 transform transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default InteractiveShell;
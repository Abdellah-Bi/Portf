import React from 'react';
import profileImg from './profile.png';

const ProfileCard: React.FC = () => {
  const tags = ['Machine Learning MSc', 'Full-Stack Developer', 'Database Admin', 'SH Scholar'];
  const cvUrl = "https://resume-60bb3.web.app/";

  return (
    <div className="bento-card group glow-blue h-full">
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-signal-blue/5 rounded-full blur-3xl group-hover:bg-signal-blue/10 transition-all duration-700"></div>
      
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="flex items-start justify-between mb-10">
          <div className="relative">
            <div className="w-28 h-28 rounded-3xl border border-white/10 p-1.5 overflow-hidden bg-[#111] rotate-3 group-hover:rotate-0 transition-transform duration-500">
              <img 
                src={profileImg} 
                alt="Abdellah Bichlifene" 
                className="w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#050505] rounded-xl border border-white/10 p-1.5 flex items-center justify-center">
              <div className="w-full h-full bg-data-green rounded-lg animate-pulse shadow-[0_0_12px_#00ff41]"></div>
            </div>
          </div>
          
          <div className="text-right space-y-1.5">
            <div className="text-white/30 text-[9px] font-mono tracking-[0.3em] uppercase">Auth_Status</div>
            <div className="px-3 py-1 rounded-lg bg-data-green/5 border border-data-green/20 text-data-green text-[10px] font-mono font-bold tracking-tighter">
              ENGR_01_VERIFIED
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-1">
            <div className="text-signal-blue font-mono text-[9px] tracking-[0.4em] uppercase opacity-60">Identity_Node</div>
            <h1 className="text-4xl font-bold tracking-tight leading-none">
              Abdellah <span className="text-signal-blue">Bichlifen</span>
            </h1>
          </div>
          
          <p className="text-white/50 text-sm leading-relaxed max-w-[380px] font-light">
            Specializing in the intersection of <span className="text-white/80 font-medium">Machine Learning</span> and <span className="text-white/80 font-medium">Full-Stack Engineering</span>. Architecting scalable data systems with high-fidelity interfaces.
          </p>
          
          <div className="flex gap-4 pt-2">
            <a 
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-signal-blue text-white text-[11px] font-mono font-bold hover:bg-signal-blue/80 transition-all group/cv shadow-[0_8px_20px_-6px_rgba(1,112,251,0.4)]"
            >
              <svg className="w-4 h-4 transition-transform group-hover/cv:-translate-y-0.5 group-hover/cv:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span>UPLINK_RESUME</span>
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/5 text-[9px] font-mono text-white/40 hover:border-signal-blue/30 hover:text-signal-blue transition-all cursor-default uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

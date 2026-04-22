import React from 'react';

const SkillsCard: React.FC = () => {
  const techStack = [
    { name: 'C / C++', icon: '⚡', level: 90 },
    { name: 'Arduino', icon: '🤖', level: 85 },
    { name: 'Java/SQL', icon: '☕', level: 80 },
    { name: 'Python', icon: '🐍', level: 88 },
    { name: 'PHP/Web', icon: '🌐', level: 75 },
    { name: 'Linux', icon: '🐧', level: 82 }
  ];

  const languages = [
    { name: 'Arabic', level: 'Native', code: 'AR' },
    { name: 'Tachlhit', level: 'Native', code: 'SH' },
    { name: 'English', level: 'C1_ADV', code: 'EN' },
    { name: 'French', level: 'B2_INT', code: 'FR' }
  ];

  return (
    <div className="bento-card glow-blue h-full group">
      <div className="flex items-center justify-between mb-8">
        <div className="space-y-1">
          <div className="text-signal-blue text-[9px] font-mono font-bold tracking-[0.3em] uppercase opacity-70">Capability_Matrix</div>
          <h3 className="text-xl font-bold tracking-tight">Core Tech Stack</h3>
        </div>
        <div className="w-10 h-10 rounded-2xl bg-signal-blue/5 border border-signal-blue/10 flex items-center justify-center">
          <svg className="w-5 h-5 text-signal-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </div>
      </div>

      <div className="space-y-8 flex-1">
        <div className="space-y-4">
          <div className="text-[9px] font-mono text-white/20 uppercase tracking-[0.3em] flex items-center gap-3">
            <span>Technical_Protocols</span>
            <div className="h-px flex-1 bg-white/5"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {techStack.map((skill) => (
              <div 
                key={skill.name} 
                className="bg-white/[0.02] border border-white/5 rounded-2xl p-3 hover:bg-white/[0.04] hover:border-signal-blue/30 transition-all group/skill"
              >
                <div className="flex items-center gap-3">
                  <span className="text-base group-hover/skill:scale-110 transition-transform duration-300">{skill.icon}</span>
                  <span className="text-[10px] font-mono font-bold text-white/70 uppercase tracking-wider">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-[9px] font-mono text-white/20 uppercase tracking-[0.3em] flex items-center gap-3">
            <span>Linguistic_Processing</span>
            <div className="h-px flex-1 bg-white/5"></div>
          </div>
          <div className="space-y-2">
            {languages.map((lang) => (
              <div key={lang.name} className="flex items-center justify-between p-3.5 bg-white/[0.02] border border-white/5 rounded-2xl group/lang hover:bg-white/[0.04] transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[8px] font-mono text-white/40 group-hover/lang:text-data-green group-hover/lang:border-data-green/30 transition-all">
                    {lang.code}
                  </div>
                  <span className="text-xs font-medium text-white/80">{lang.name}</span>
                </div>
                <span className="text-[9px] font-mono text-data-green font-bold tracking-widest uppercase opacity-60 group-hover/lang:opacity-100 transition-opacity">
                  {lang.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
        <div className="text-[9px] font-mono text-white/20 uppercase tracking-widest">System_Ready</div>
        <div className="flex gap-1.5">
          {[1, 2, 3].map(i => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-signal-blue/40 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
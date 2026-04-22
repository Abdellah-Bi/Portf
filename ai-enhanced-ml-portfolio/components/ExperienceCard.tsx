import React from 'react';

const ExperienceCard: React.FC = () => {
  const history = [
    { 
      role: 'Website Admin & Developer', 
      org: 'Rental Car Co, Agadir', 
      date: '2023 – 2024',
      tasks: ['Booking optimization', 'System performance', 'Full-stack maintenance']
    },
    { 
      role: 'Int. E-commerce Manager', 
      org: 'eBay Store, EU/US', 
      date: '2018 – 2020',
      tasks: ['Storefront operations', 'Client relations', 'Inventory automation']
    }
  ];

  return (
    <div className="bento-card glow-green h-full group">
      <div className="flex items-center justify-between mb-8">
        <div className="space-y-1">
          <div className="text-data-green text-[9px] font-mono font-bold tracking-[0.3em] uppercase opacity-70">Career_Archive_v2</div>
          <h3 className="text-xl font-bold tracking-tight">Experience Logs</h3>
        </div>
        <div className="w-10 h-10 rounded-2xl bg-data-green/5 border border-data-green/10 flex items-center justify-center">
          <svg className="w-5 h-5 text-data-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
        </div>
      </div>

      <div className="space-y-8 flex-1">
        {history.map((job, idx) => (
          <div key={idx} className="relative pl-8 border-l border-white/5 group/item">
            <div className="absolute top-0 left-[-1.5px] w-[3px] h-8 bg-data-green/40 group-hover/item:bg-data-green transition-colors"></div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
              <h4 className="text-sm font-bold text-white/90 group-hover/item:text-white transition-colors">{job.role}</h4>
              <span className="text-[10px] font-mono text-white/30 bg-white/[0.02] px-2 py-0.5 rounded-lg border border-white/5">{job.date}</span>
            </div>
            <p className="text-[10px] font-mono text-data-green/80 uppercase mb-4 tracking-widest font-bold">{job.org}</p>
            <div className="flex flex-wrap gap-2">
              {job.tasks.map(task => (
                <span key={task} className="text-[9px] px-2.5 py-1 rounded-xl bg-white/[0.03] text-white/40 border border-white/5 hover:border-data-green/20 hover:text-white/60 transition-all cursor-default">
                  {task}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-10 pt-6 flex justify-between items-center border-t border-white/5">
        <div className="text-[9px] font-mono text-white/20 uppercase tracking-widest">Total_Uptime: 6+ Years</div>
        <div className="flex gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-data-green shadow-[0_0_8px_#00ff41]"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-data-green/50"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-data-green/20"></div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
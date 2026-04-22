import React from 'react';

const ExperienceCard: React.FC = () => {
  const history = [
    { 
      role: 'Website Admin & Developer', 
      org: 'Rental Car Co, Agadir', 
      date: '2023 – 2024',
      tasks: ['Booking optimization', 'System performance']
    },
    { 
      role: 'Int. E-commerce Manager', 
      org: 'eBay Store, EU/US', 
      date: '2018 – 2020',
      tasks: ['Storefront operations', 'Client relations']
    }
  ];

  return (
    <div className="glass rounded-[2rem] h-full p-8 flex flex-col glow-green transition-all duration-500 group relative overflow-hidden">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 rounded-lg bg-data-green/10 border border-data-green/20 flex items-center justify-center text-data-green">
           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
        </div>
        <div>
          <h3 className="text-xl font-bold">Experience Logs</h3>
          <p className="text-white/40 text-[9px] font-mono uppercase tracking-[0.2em] mt-0.5">Career_Archive_v1</p>
        </div>
      </div>

      <div className="space-y-6">
        {history.map((job, idx) => (
          <div key={idx} className="relative pl-6 border-l border-white/10 group/item">
            <div className="absolute top-0 left-[-4px] w-2 h-2 rounded-full bg-data-green scale-0 group-hover/item:scale-100 transition-transform"></div>
            <div className="flex justify-between items-start mb-1">
              <h4 className="text-sm font-bold text-white/90">{job.role}</h4>
              <span className="text-[9px] font-mono text-white/30">{job.date}</span>
            </div>
            <p className="text-[10px] font-mono text-data-green/80 uppercase mb-2 tracking-tight">{job.org}</p>
            <div className="flex flex-wrap gap-2">
              {job.tasks.map(task => (
                <span key={task} className="text-[9px] px-2 py-0.5 rounded bg-white/5 text-white/40 border border-white/5">
                  {task}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-auto pt-6 flex justify-between items-center border-t border-white/5">
        <div className="text-[9px] font-mono text-white/20">Uptime: 6+ Years Total</div>
        <div className="flex gap-1">
          <div className="w-1 h-1 rounded-full bg-data-green"></div>
          <div className="w-1 h-1 rounded-full bg-data-green opacity-50"></div>
          <div className="w-1 h-1 rounded-full bg-data-green opacity-20"></div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
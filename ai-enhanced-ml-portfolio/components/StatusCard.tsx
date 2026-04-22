import React, { useState, useEffect } from 'react';

const StatusCard: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const budapestTime = time.toLocaleTimeString('en-GB', {
    timeZone: 'Europe/Budapest',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });

  const achievements = [
    { title: "Talent Day 1st Place", detail: "Autonomous Navigation (2022)", type: "AWARD" },
    { title: "Scientific Conf. 3rd Place", detail: "Computer Vision (2021)", type: "RESEARCH" },
    { title: "SH Scholar", detail: "BSc & MSc Full Funding", type: "ACADEMIC" }
  ];

  return (
    <div className="bento-card glow-green h-full">
      <div className="flex justify-between items-start mb-8">
        <div className="space-y-1">
          <div className="text-data-green text-[9px] font-mono font-bold tracking-[0.3em] uppercase opacity-70">Location_Proxy</div>
          <h2 className="text-2xl font-bold tracking-tight">Budapest_Node</h2>
        </div>
        <div className="flex items-center gap-3 px-4 py-2 bg-data-green/5 border border-data-green/20 rounded-xl">
          <div className="w-1.5 h-1.5 rounded-full bg-data-green animate-ping"></div>
          <span className="text-[10px] font-mono text-data-green font-bold tracking-widest">SYSTEM_READY</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center py-10 relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
          <div className="w-64 h-64 border border-white rounded-full"></div>
          <div className="absolute w-48 h-48 border border-white rounded-full"></div>
        </div>
        <div className="text-7xl font-mono font-bold text-white tracking-tighter tabular-nums drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          {budapestTime}
        </div>
        <div className="flex items-center gap-3 mt-4">
          <div className="h-[1px] w-8 bg-white/10"></div>
          <div className="text-[10px] font-mono text-white/30 uppercase tracking-[0.5em]">
            CET_TIME_PROTOCOL
          </div>
          <div className="h-[1px] w-8 bg-white/10"></div>
        </div>
      </div>

      <div className="space-y-4 mt-8">
        <div className="flex items-center justify-between text-white/20 text-[9px] font-mono uppercase tracking-[0.3em] border-b border-white/5 pb-2">
          <span>Honor_Archive_v2</span>
          <span>Total_Entries: 03</span>
        </div>
        <div className="grid grid-cols-1 gap-2.5">
          {achievements.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between bg-white/[0.02] rounded-2xl p-4 border border-white/5 hover:border-data-green/30 hover:bg-white/[0.04] transition-all group/item">
              <div className="space-y-1">
                <div className="text-[11px] font-bold text-white/90 group-hover/item:text-white transition-colors">{item.title}</div>
                <div className="text-[9px] text-white/30 font-mono uppercase tracking-tight">{item.detail}</div>
              </div>
              <div className="px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-[8px] font-mono text-white/40 group-hover/item:text-data-green group-hover/item:border-data-green/30 transition-all">
                {item.type}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
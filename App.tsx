import React from 'react';
import ProfileCard from './components/ProfileCard';
import StatusCard from './components/StatusCard';
import ProjectLeadCard from './components/ProjectLeadCard';
import InteractiveShell from './components/InteractiveShell';
import AIAssistant from './components/AIAssistant';
import SkillsCard from './components/SkillsCard';
import ExperienceCard from './components/ExperienceCard';
import ConnectCard from './components/ConnectCard';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#050505]">
      {/* Background Data Stream Effect */}
      <div className="fixed inset-0 pointer-events-none grid-bg opacity-30"></div>
      
      {/* Moving Vertical Streams */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-[15%] w-[1px] h-full bg-gradient-to-b from-transparent via-[#0170fb]/30 to-transparent animate-[pulse_6s_infinite] opacity-50"></div>
        <div className="absolute top-0 left-[45%] w-[1px] h-full bg-gradient-to-b from-transparent via-[#00ff41]/20 to-transparent animate-[pulse_8s_infinite_1s] opacity-30"></div>
        <div className="absolute top-0 left-[75%] w-[1px] h-full bg-gradient-to-b from-transparent via-[#0170fb]/20 to-transparent animate-[pulse_10s_infinite_2s] opacity-40"></div>
      </div>

      {/* Navigation / System Bar */}
      <header className="sticky top-0 z-50 glass border-b border-white/5 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-3 h-3 rounded-full bg-data-green animate-pulse shadow-[0_0_8px_#00ff41]"></div>
          <span className="font-mono text-[10px] tracking-widest text-white/50 uppercase">AB_SYSTEM_v4.2_STABLE</span>
        </div>
        <nav className="hidden md:flex gap-8 text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">
          <a href="#" className="hover:text-signal-blue transition-colors">Nodes</a>
          <a href="#" className="hover:text-signal-blue transition-colors">Neural_Net</a>
          <a href="#" className="hover:text-signal-blue transition-colors">Archive</a>
        </nav>
        <div className="text-[10px] font-mono text-signal-blue animate-pulse flex items-center gap-2">
          <span className="opacity-50">UPLINK_STATUS:</span>
          <span className="font-bold uppercase tracking-tighter">ESTABLISHED</span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4 md:p-8 space-y-6">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-auto">
          
          {/* Top Section */}
          <div className="md:col-span-2">
            <ProfileCard />
          </div>
          <div className="md:col-span-2">
            <StatusCard />
          </div>

          {/* Middle Section (Hero Projects) */}
          <div className="md:col-span-3">
            <ProjectLeadCard />
          </div>
          <div className="md:col-span-1">
            <AIAssistant />
          </div>

          {/* Bottom Section */}
          <div className="md:col-span-1">
            <SkillsCard />
          </div>
          <div className="md:col-span-2">
            <ExperienceCard />
          </div>
          <div className="md:col-span-1">
            <ConnectCard />
          </div>

        </div>
      </main>

      {/* Footer / Info Bar */}
      <footer className="glass border-t border-white/5 p-6 mt-12 flex flex-col md:flex-row items-center justify-between gap-4 text-[9px] font-mono text-white/30 tracking-widest uppercase">
        <div className="flex flex-wrap gap-x-8 gap-y-2 justify-center">
          <span>&copy; 2024 MACHINE_LEARNING_PROTOCOLS</span>
          <span className="flex items-center gap-1"><div className="w-1 h-1 bg-signal-blue rounded-full"></div> LATENCY: 14ms</span>
          <span className="flex items-center gap-1"><div className="w-1 h-1 bg-data-green rounded-full"></div> UPLINK: BUDA_01</span>
        </div>
        <div className="flex gap-6">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-data-green/50"></span>
            ENCRYPTION: AES-256
          </span>
          <span className="text-white/20">|</span>
          <span>DESIGN_ESTHETIC: MATTE_BLACK</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
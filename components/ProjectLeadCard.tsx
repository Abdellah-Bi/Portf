import React, { useState } from 'react';
import ProjectSpecsModal from './ProjectSpecsModal';
import carFrontImg from '../car_img.png';
import frontMLImg from '../front_ML.png';

const ProjectLeadCard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'FULLSTACK' | 'ML' | 'EMBEDDED'>('FULLSTACK');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const githubUrl = "https://github.com/Nicckless/NAN";

  return (
    <div className="bento-card glow-blue h-full group/main">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-signal-blue/5 rounded-full blur-[120px] pointer-events-none group-hover/main:bg-signal-blue/10 transition-all duration-700"></div>
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-6">
          <div className="flex items-center gap-5">
            <div className="p-3 rounded-2xl bg-signal-blue/10 border border-signal-blue/20 shadow-[0_0_15px_rgba(1,112,251,0.1)]">
              <svg className="w-6 h-6 text-signal-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
            </div>
            <div>
              <span className="text-[9px] font-mono text-white/30 uppercase tracking-[0.4em] block mb-1">Project_Hub_v4.2</span>
              <h2 className="text-2xl font-bold tracking-tight">Featured Projects</h2>
            </div>
          </div>
          
          <div className="flex bg-white/[0.03] rounded-2xl p-1.5 border border-white/5 backdrop-blur-md">
            {(['FULLSTACK', 'ML', 'EMBEDDED'] as const).map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-xl text-[10px] font-mono transition-all duration-300 uppercase tracking-widest font-bold ${
                  activeTab === tab 
                    ? tab === 'FULLSTACK' ? 'bg-white/10 text-white shadow-lg border border-white/10' 
                    : tab === 'ML' ? 'bg-signal-blue/20 text-signal-blue shadow-lg border border-signal-blue/20'
                    : 'bg-data-green/20 text-data-green shadow-lg border border-data-green/20'
                    : 'text-white/30 hover:text-white/60'
                }`}
              >
                {tab === 'FULLSTACK' ? 'NAN_CORE' : tab === 'ML' ? 'ML_MODELS' : 'EMBEDDED'}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col lg:flex-row gap-10">
          <div className="flex-1 flex flex-col justify-between py-2">
            {activeTab === 'FULLSTACK' ? (
              <div className="animate-fadeIn space-y-6">
                <div className="flex flex-wrap gap-2.5">
                  <span className="px-3 py-1 rounded-lg text-[9px] font-mono bg-white/5 text-white/60 border border-white/10 uppercase tracking-wider">Team_Lead</span>
                  <span className="px-3 py-1 rounded-lg text-[9px] font-mono bg-signal-blue/5 text-signal-blue/70 border border-signal-blue/10 uppercase tracking-wider">Architecture</span>
                  <span className="px-3 py-1 rounded-lg text-[9px] font-mono bg-data-green/5 text-data-green/70 border border-data-green/10 uppercase tracking-wider">Full_Stack</span>
                </div>
                <div className="space-y-4">
                  <h2 className="text-5xl font-bold tracking-tighter">Project <span className="text-white">NAN</span></h2>
                  <p className="text-white/50 text-base leading-relaxed max-w-xl font-light">
                    Engineered a high-concurrency collaborative system. As <span className="text-white/80 font-medium">Lead Engineer</span>, I architected the distributed state synchronization protocol and optimized relational data workflows for real-time multi-user environments.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-5 pt-4">
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 group/stat hover:border-white/10 transition-colors">
                    <div className="text-[9px] font-mono text-white/20 uppercase tracking-widest mb-2">Primary_Stack</div>
                    <div className="text-xs text-white/70 font-mono">React / SQL / Node.js</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 group/stat hover:border-white/10 transition-colors">
                    <div className="text-[9px] font-mono text-white/20 uppercase tracking-widest mb-2">Sync_Engine</div>
                    <div className="text-xs text-white/70 font-mono">WebSockets / Redis</div>
                  </div>
                </div>
              </div>
            ) : activeTab === 'ML' ? (
              <div className="animate-fadeIn space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-lg text-[9px] font-mono bg-signal-blue/10 text-signal-blue border border-signal-blue/20 uppercase tracking-widest font-bold">ML_ENGINEERING</span>
                </div>
                <div className="space-y-4">
                  <h2 className="text-5xl font-bold tracking-tighter">Hedonic <span className="text-signal-blue">Modeling</span></h2>
                  <p className="text-white/50 text-base leading-relaxed max-w-xl font-light">
                    Advanced predictive engine utilizing <span className="text-white/80 font-medium">Gradient Boosting</span>. Integrated spatial econometrics and temporal market features to achieve high-precision real estate valuation benchmarks.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 pt-4">
                  {['XGBOOST', 'SCIKIT_LEARN', 'PANDAS', 'MATPLOTLIB'].map(tech => (
                    <div key={tech} className="px-4 py-2 bg-white/[0.02] border border-white/5 rounded-xl text-[10px] font-mono text-signal-blue/80 font-bold tracking-widest">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="animate-fadeIn space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-lg text-[9px] font-mono bg-data-green/10 text-data-green border border-data-green/20 uppercase tracking-widest font-bold">EMBEDDED_SYSTEMS</span>
                </div>
                <div className="space-y-4">
                  <h2 className="text-5xl font-bold tracking-tighter">Autonomous <span className="text-data-green">Unit</span></h2>
                  <p className="text-white/50 text-base leading-relaxed max-w-xl font-light">
                    Low-latency firmware development for <span className="text-white/80 font-medium">Obstacle Avoidance</span>. Implemented sensor fusion algorithms and PID control logic on AVR-based microcontrollers.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 pt-4">
                  {['C / C++', 'ARDUINO', 'BLUETOOTH', 'PWM'].map(tech => (
                    <div key={tech} className="px-4 py-2 bg-white/[0.02] border border-white/5 rounded-xl text-[10px] font-mono text-data-green/80 font-bold tracking-widest">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <div className="flex flex-wrap gap-5 mt-10">
              <button 
                onClick={() => setIsModalOpen(true)}
                className={`px-10 py-4 rounded-2xl text-[11px] font-mono tracking-[0.25em] uppercase font-bold transition-all flex items-center gap-3 group/btn ${
                  activeTab === 'FULLSTACK' ? 'bg-white text-black hover:bg-white/90 shadow-[0_10px_30px_-10px_rgba(255,255,255,0.3)]' 
                  : activeTab === 'ML' ? 'bg-signal-blue text-white hover:bg-signal-blue/90 shadow-[0_10px_30px_-10px_rgba(1,112,251,0.5)]' 
                  : 'bg-data-green text-black hover:bg-data-green/90 shadow-[0_10px_30px_-10px_rgba(0,255,65,0.5)]'
                }`}
              >
                <span>Access_Specs</span>
                <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </button>
              {activeTab === 'FULLSTACK' && (
                <a 
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-4 rounded-2xl text-[11px] font-mono tracking-[0.25em] uppercase font-bold border border-white/10 hover:bg-white/5 transition-all flex items-center gap-3 group/git text-white/60 hover:text-white"
                >
                  <span>Uplink_Repo</span>
                  <svg className="w-5 h-5 opacity-50 group-hover/git:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              )}
            </div>
          </div>

          <div className="flex-1 bg-black/40 rounded-[2rem] border border-white/5 p-8 flex items-center justify-center relative overflow-hidden min-h-[400px] group/visual">
            {activeTab === 'FULLSTACK' ? (
              <div className="w-full h-full flex items-center justify-center">
                <div className="relative w-64 h-64">
                  <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_20s_linear_infinite]"></div>
                  <div className="absolute inset-6 border border-signal-blue/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                  <div className="absolute inset-12 border border-data-green/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center group-hover/visual:scale-110 transition-transform duration-700">
                      <span className="text-6xl font-black tracking-tighter text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">NAN</span>
                      <div className="h-0.5 w-16 bg-signal-blue mx-auto mt-3 shadow-[0_0_10px_#0170fb]"></div>
                    </div>
                  </div>
                  {/* Orbital nodes */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-5 h-5 bg-signal-blue rounded-xl shadow-[0_0_20px_#0170fb] rotate-45"></div>
                  <div className="absolute top-3/4 left-0 w-4 h-4 bg-data-green rounded-lg shadow-[0_0_20px_#00ff41] -rotate-12"></div>
                  <div className="absolute top-3/4 right-0 w-4 h-4 bg-white rounded-full shadow-[0_0_20px_#ffffff]"></div>
                </div>
              </div>
            ) : activeTab === 'ML' ? (
              <div className="w-full h-full relative group/ml overflow-hidden rounded-3xl border border-signal-blue/20">
                <img 
                  src={frontMLImg} 
                  alt="Hedonic Price Modeling" 
                  className="w-full h-full object-cover opacity-60 group-hover/ml:opacity-90 group-hover/ml:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-signal-blue animate-pulse shadow-[0_0_10px_#0170fb]"></div>
                    <span className="text-[11px] font-mono text-signal-blue uppercase tracking-[0.3em] font-bold">Model_Engine_v2.1</span>
                  </div>
                </div>
                {/* Data stream effect */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(1,112,251,0.15),transparent_70%)]"></div>
                </div>
              </div>
            ) : (
              <div className="w-full h-full relative group/car overflow-hidden rounded-3xl border border-data-green/20">
                <img 
                  src={carFrontImg} 
                  alt="Autonomous Car" 
                  className="w-full h-full object-cover opacity-60 group-hover/car:opacity-90 group-hover/car:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-data-green animate-pulse shadow-[0_0_10px_#00ff41]"></div>
                    <span className="text-[11px] font-mono text-data-green uppercase tracking-[0.3em] font-bold">Live_Unit_01</span>
                  </div>
                </div>
                {/* Scanning line effect */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-data-green/40 to-transparent absolute top-0 animate-[scanline_6s_linear_infinite]"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <ProjectSpecsModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        project={activeTab}
      />
    </div>
  );
};

export default ProjectLeadCard;

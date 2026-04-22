import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import carCircuitImg from '../circuit.png';

interface ProjectSpecsModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: 'FULLSTACK' | 'ML' | 'EMBEDDED';
}

const ProjectSpecsModal: React.FC<ProjectSpecsModalProps> = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  const embeddedSpecs = {
    title: "AUTONOMOUS_UNIT_v1.0",
    subtitle: "Obstacle Avoidance & Navigation System",
    accent: "text-data-green",
    bgAccent: "bg-data-green",
    manifestLabel: "HARDWARE_MANIFEST_v4.2",
    components: [
      { id: "MCU_01", name: "Arduino Uno R3", role: "Central Processing" },
      { id: "SNS_01", name: "HC-SR04 Ultrasonic", role: "Obstacle Detection" },
      { id: "SNS_02", name: "IR Sensor Array", role: "Line Tracking" },
      { id: "DRV_01", name: "L293D Shield", role: "Motor Interface" },
      { id: "ACT_01", name: "SG90 Servo", role: "Scanning Actuator" },
      { id: "PWR_01", name: "9V DC Source", role: "Power Supply" }
    ],
    wiring: [
      { from: "Motor 1-4", to: "L293D M1-M4", signal: "PWM_DRIVE" },
      { from: "IR_ARRAY", to: "MCU_A0-A1", signal: "ANALOG_IN" },
      { from: "HC_TRIG", to: "MCU_A2", signal: "DIGITAL_OUT" },
      { from: "HC_ECHO", to: "MCU_A3", signal: "DIGITAL_IN" },
      { from: "SERVO_SIG", to: "MCU_D10", signal: "PWM_POS" }
    ],
    firmware: `// CORE NAVIGATION LOGIC
void loop() {
  int distance = readUltrasonic();
  if (distance < 20) {
    stopMotors();
    scanEnvironment();
    decidePath();
  } else {
    followLine();
  }
}`
  };

  const mlSpecs = {
    title: "HEDONIC_PRICE_ENGINE_v2.1",
    subtitle: "Housing Value Prediction Pipeline",
    accent: "text-signal-blue",
    bgAccent: "bg-signal-blue",
    manifestLabel: "PIPELINE_MANIFEST_v1.0",
    components: [
      { id: "P_01", name: "SimpleImputer", role: "Median Imputation" },
      { id: "P_02", name: "FeatureAdder", role: "Ratio Engineering" },
      { id: "P_03", name: "StandardScaler", role: "Standardization" },
      { id: "M_01", name: "Gradient Boosting", role: "Optimized Regressor" }
    ],
    metrics: [
      { label: "Final RMSE", value: "$49,850.21", status: "OPTIMIZED" },
      { label: "Final R2 Score", value: "0.8115", status: "VALIDATED" },
      { label: "CV Folds", value: "5-Fold", status: "ROBUST" }
    ],
    models: [
      { name: "Linear Regression", score: "RMSE: $73.6k", win: false },
      { name: "Random Forest", score: "RMSE: $73.2k", win: false },
      { name: "Gradient Boosting", score: "RMSE: $49.8k", win: true }
    ],
    features: [
      { name: "Median Income", weight: "0.525" },
      { name: "Longitude", weight: "0.128" },
      { name: "Latitude", weight: "0.119" },
      { name: "Pop/Household", weight: "0.089" }
    ],
    dataset: {
      name: "California Housing",
      trainRows: "17,000",
      testRows: "3,000",
      columns: "9 (Numerical)"
    }
  };

  const fullstackSpecs = {
    title: "PROJECT_NAN_v4.0",
    subtitle: "Collaborative Asset Management System",
    accent: "text-white",
    bgAccent: "bg-white",
    manifestLabel: "SYSTEM_MANIFEST_v4.0",
    components: [
      { id: "S_01", name: "React 18", role: "Frontend UI Protocol" },
      { id: "S_02", name: "Express.js", role: "API Orchestration" },
      { id: "S_03", name: "PostgreSQL", role: "Relational Store" },
      { id: "S_04", name: "Redis", role: "Cache & Pub/Sub" },
      { id: "S_05", name: "WebSockets", role: "Real-time Sync" }
    ]
  };

  const currentSpecs = project === 'EMBEDDED' ? embeddedSpecs : project === 'ML' ? mlSpecs : fullstackSpecs;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/90 backdrop-blur-xl"
        />
        
        <motion.div 
          initial={{ scale: 0.95, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 30 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-6xl bg-[#0a0a0a] border border-white/10 rounded-[3rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] flex flex-col lg:flex-row h-[85vh] lg:h-auto max-h-[90vh]"
        >
          {/* Left Panel: Specs */}
          <div className="w-full lg:w-2/5 p-10 border-b lg:border-b-0 lg:border-r border-white/5 bg-[#0d0d0d] flex flex-col">
            <div className="flex items-center gap-4 mb-10">
              <div className={`w-2.5 h-2.5 rounded-full ${currentSpecs.bgAccent} animate-pulse shadow-[0_0_12px_currentColor]`}></div>
              <span className={`font-mono text-[11px] ${currentSpecs.accent} tracking-[0.4em] uppercase font-bold`}>{currentSpecs.title}</span>
            </div>
            
            <div className="space-y-2 mb-10">
              <h2 className="text-3xl font-bold tracking-tight">{currentSpecs.subtitle}</h2>
              <p className="text-white/30 text-[10px] font-mono uppercase tracking-widest">{currentSpecs.manifestLabel}</p>
            </div>

            <div className="flex-1 space-y-6 overflow-y-auto pr-4 scrollbar-hide">
              <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
                <span>Core_Components</span>
                <div className="h-px flex-1 bg-white/5"></div>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {currentSpecs.components.map((comp) => (
                  <div key={comp.id} className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all group">
                    <div>
                      <div className="text-xs font-bold text-white/90 group-hover:text-white transition-colors">{comp.name}</div>
                      <div className="text-[9px] font-mono text-white/30 uppercase tracking-wider mt-1">{comp.role}</div>
                    </div>
                    <div className={`text-[9px] font-mono ${currentSpecs.accent} opacity-40 group-hover:opacity-100 transition-opacity font-bold`}>{comp.id}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel: Details */}
          <div className="w-full lg:w-3/5 p-10 flex flex-col bg-[#080808]">
            <div className="flex justify-between items-start mb-10">
              <div className="space-y-1">
                <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.4em]">
                  {project === 'EMBEDDED' ? 'Circuit_Topology' : project === 'ML' ? 'Model_Performance' : 'System_Architecture'}
                </div>
                <div className={`h-0.5 w-12 ${currentSpecs.bgAccent} opacity-60 shadow-[0_0_10px_currentColor]`}></div>
              </div>
              <button 
                onClick={onClose} 
                className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all group"
              >
                <svg className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <div className="flex-1 space-y-10 overflow-y-auto pr-4 custom-scrollbar">
              {project === 'EMBEDDED' ? (
                <div className="space-y-10">
                  <div className="rounded-[2rem] border border-white/10 overflow-hidden bg-black/60 group/circuit relative">
                    <img 
                      src={carCircuitImg} 
                      alt="Circuit Diagram" 
                      className="w-full h-auto opacity-60 group-hover/circuit:opacity-100 group-hover/circuit:scale-[1.02] transition-all duration-1000"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl bg-black/80 border border-white/10 text-[9px] font-mono text-white/50 uppercase tracking-widest backdrop-blur-md">
                      Schematic_v1.4_Stable
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-3 text-[10px] font-mono text-white/20 uppercase tracking-widest mb-4 px-4">
                      <span>Source_Node</span>
                      <span>Target_Node</span>
                      <span className="text-right">Signal_Type</span>
                    </div>
                    <div className="space-y-2">
                      {embeddedSpecs.wiring.map((wire, idx) => (
                        <div key={idx} className="grid grid-cols-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-[11px] font-mono hover:bg-white/[0.04] transition-colors">
                          <span className="text-white/60">{wire.from}</span>
                          <span className="text-white/40 flex items-center gap-2">
                            <span className="text-data-green/40">→</span> {wire.to}
                          </span>
                          <span className="text-right text-data-green/80 font-bold tracking-tighter">{wire.signal}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 rounded-[2rem] bg-black border border-white/5 relative group/code overflow-hidden">
                    <div className="absolute top-4 right-6 text-[9px] font-mono text-white/20 uppercase tracking-widest">Firmware_Core_v1</div>
                    <div className="absolute inset-0 bg-gradient-to-b from-data-green/5 to-transparent opacity-0 group-hover/code:opacity-100 transition-opacity duration-500"></div>
                    <pre className="text-[11px] font-mono text-data-green/70 leading-relaxed relative z-10">
                      <code>{embeddedSpecs.firmware}</code>
                    </pre>
                  </div>
                </div>
              ) : project === 'ML' ? (
                <div className="space-y-10">
                  <div className="p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 space-y-6">
                    <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">Dataset_Profile: {mlSpecs.dataset.name}</div>
                    <div className="grid grid-cols-3 gap-6">
                      <div className="space-y-1">
                        <div className="text-[9px] font-mono text-white/30 uppercase tracking-wider">Training_Set</div>
                        <div className="text-xl font-bold text-white">{mlSpecs.dataset.trainRows}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-[9px] font-mono text-white/30 uppercase tracking-wider">Testing_Set</div>
                        <div className="text-xl font-bold text-white">{mlSpecs.dataset.testRows}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-[9px] font-mono text-white/30 uppercase tracking-wider">Feature_Dim</div>
                        <div className="text-xl font-bold text-white">{mlSpecs.dataset.columns}</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    {mlSpecs.metrics.map((metric, idx) => (
                      <div key={idx} className="p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 flex justify-between items-center hover:bg-white/[0.04] transition-all group">
                        <div className="space-y-1">
                          <div className="text-[10px] font-mono text-white/30 uppercase tracking-wider">{metric.label}</div>
                          <div className="text-2xl font-bold text-white group-hover:text-signal-blue transition-colors">{metric.value}</div>
                        </div>
                        <div className="px-3 py-1.5 rounded-xl bg-signal-blue/10 border border-signal-blue/20 text-[9px] font-mono text-signal-blue uppercase font-bold tracking-widest">
                          {metric.status}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-6">
                    <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">Model_Benchmark_Results</div>
                    <div className="space-y-3">
                      {mlSpecs.models.map((model, idx) => (
                        <div key={idx} className={`p-5 rounded-2xl border transition-all ${model.win ? 'bg-signal-blue/10 border-signal-blue/30 shadow-[0_0_20px_rgba(1,112,251,0.1)]' : 'bg-white/[0.02] border-white/5'}`}>
                          <div className="flex justify-between items-center">
                            <div className="text-sm font-bold text-white/90">{model.name}</div>
                            <div className="flex items-center gap-4">
                              <div className="text-[11px] font-mono text-white/40">{model.score}</div>
                              {model.win && <div className="w-2 h-2 rounded-full bg-signal-blue animate-pulse shadow-[0_0_10px_#0170fb]"></div>}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">Feature_Importance_Weights</div>
                    <div className="space-y-5 px-2">
                      {mlSpecs.features.map((feat, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="flex justify-between text-[11px] font-mono">
                            <span className="text-white/60">{feat.name}</span>
                            <span className="text-signal-blue font-bold">{feat.weight}</span>
                          </div>
                          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${parseFloat(feat.weight) * 100}%` }}
                              transition={{ duration: 1.5, delay: idx * 0.1, ease: "circOut" }}
                              className="h-full bg-gradient-to-r from-signal-blue/40 to-signal-blue shadow-[0_0_10px_rgba(1,112,251,0.5)]"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-6 opacity-30 py-20">
                  <div className="p-6 rounded-full bg-white/5 border border-white/10">
                    <svg className="w-16 h-16 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-mono uppercase tracking-[0.5em]">System_Specs_Pending_Uplink</div>
                    <p className="text-xs text-white/40 font-mono">Awaiting architectural handshake...</p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-10 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-data-green/40"></div>
                <div className="text-[10px] font-mono text-white/20 uppercase tracking-widest font-bold">Auth_Node: ENGR_01_BICH</div>
              </div>
              <button 
                onClick={onClose}
                className={`w-full sm:w-auto px-10 py-3.5 rounded-2xl bg-white text-black text-[11px] font-mono font-bold uppercase tracking-[0.3em] hover:${currentSpecs.bgAccent} hover:text-white transition-all shadow-[0_10px_30px_-10px_rgba(255,255,255,0.2)]`}
              >
                Terminate_Uplink
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectSpecsModal;

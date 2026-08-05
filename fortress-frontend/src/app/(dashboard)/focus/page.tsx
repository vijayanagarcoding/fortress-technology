"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { 
  ArrowLeft, 
  Play, 
  Pause, 
  RotateCcw, 
  CheckCircle2, 
  Zap, 
  Award, 
  Clock, 
  ShieldAlert, 
  Target,
  Crown,
  Trophy,
  History,
  Activity,
  Plus,
  X,
  Sparkles
} from "lucide-react";

interface FocusPreset {
  id: string;
  name: string;
  durationMins: number;
  breakMins: number;
  baseFC: number;
  description: string;
  badgeColor: string;
  isCustom?: boolean;
}

const DEFAULT_PRESETS: FocusPreset[] = [
  { id: "sprint", name: "Sprint", durationMins: 15, breakMins: 3, baseFC: 15, description: "Quick tactical bursts for fast objectives.", badgeColor: "border-sky-500/30 bg-sky-500/10 text-sky-400" },
  { id: "pomodoro", name: "Pomodoro", durationMins: 25, breakMins: 5, baseFC: 25, description: "Classic interval for balanced productivity.", badgeColor: "border-indigo-500/30 bg-indigo-500/10 text-indigo-400" },
  { id: "deep-focus", name: "Deep Focus", durationMins: 50, breakMins: 10, baseFC: 55, description: "High-level problem solving and coding.", badgeColor: "border-purple-500/30 bg-purple-500/10 text-purple-400" },
  { id: "flow-state", name: "Flow State", durationMins: 90, breakMins: 15, baseFC: 110, description: "Uninterrupted work blocks for master builds.", badgeColor: "border-amber-500/30 bg-amber-500/10 text-amber-400" },
];

export default function FocusSessionEngine() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const linkedTaskTitle = searchParams.get("task");

  // Presets List State (Supports Custom Session Templates)
  const [presets, setPresets] = useState<FocusPreset[]>(DEFAULT_PRESETS);
  const [selectedPreset, setSelectedPreset] = useState<FocusPreset>(DEFAULT_PRESETS[1]);

  // Timer Engine State
  const [secondsRemaining, setSecondsRemaining] = useState(DEFAULT_PRESETS[1].durationMins * 60);
  const [sessionStatus, setSessionStatus] = useState<"IDLE" | "RUNNING" | "PAUSED" | "EVALUATING" | "COMPLETED">("IDLE");
  const [interruptionCount, setInterruptionCount] = useState(0);

  // Custom Mode Creator Modal State
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const [customName, setCustomName] = useState("");
  const [customDuration, setCustomDuration] = useState(70);
  const [customBreak, setCustomBreak] = useState(10);
  const [customBaseFC, setCustomBaseFC] = useState(70);

  // User Stats State
  const [userLifetimeHours, setUserLifetimeHours] = useState(18.5);
  const [userCoins, setUserCoins] = useState(1250);
  const [longestSessionMins, setLongestSessionMins] = useState(90);
  const [completedTasksCount, setCompletedTasksCount] = useState(24);
  const [activeTaskTitle] = useState<string | null>(linkedTaskTitle || "MongoDB Aggregation Pipeline");

  // Session History Log State
  const [historyLogs, setHistoryLogs] = useState([
    { id: "SESS-104", mode: "Deep Focus", duration: "50 mins", fcEarned: "+55 FC", task: "MongoDB Aggregation Pipeline", date: "Today, 14:20" },
    { id: "SESS-103", mode: "Pomodoro", duration: "25 mins", fcEarned: "+25 FC", task: "UI Accessibility Specs", date: "Yesterday, 18:05" },
    { id: "SESS-102", mode: "Sprint", duration: "15 mins", fcEarned: "+15 FC", task: "DB Indexing Audit", date: "Aug 2, 2026" },
  ]);

  const getUserTier = (hours: number) => {
    if (hours >= 2000) return { tier: "Master", color: "text-red-400 border-red-500/40 bg-red-500/10" };
    if (hours >= 500) return { tier: "Diamond", color: "text-cyan-400 border-cyan-500/40 bg-cyan-500/10" };
    if (hours >= 100) return { tier: "Gold", color: "text-amber-400 border-amber-500/40 bg-amber-500/10" };
    if (hours >= 10) return { tier: "Silver", color: "text-slate-300 border-slate-400/40 bg-slate-400/10" };
    return { tier: "Bronze", color: "text-amber-700 border-amber-800/40 bg-amber-900/10" };
  };

  const userTier = getUserTier(userLifetimeHours);

  // Progress Calculation
  const totalSeconds = selectedPreset.durationMins * 60;
  const elapsedSeconds = totalSeconds - secondsRemaining;
  const progressPercent = Math.min(100, Math.round((elapsedSeconds / totalSeconds) * 100));

  // Projected FC Return
  const calculateEstimatedFC = () => {
    let returnFC = selectedPreset.baseFC;
    if (interruptionCount > 2) {
      returnFC = Math.round(returnFC * 0.7);
    }
    return returnFC;
  };

  const estimatedFC = calculateEstimatedFC();

  // Handle Custom Session Creation
  const handleCreateCustomPreset = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customName.trim()) return;

    const newPreset: FocusPreset = {
      id: `custom-${Date.now()}`,
      name: customName.trim(),
      durationMins: Number(customDuration),
      breakMins: Number(customBreak),
      baseFC: Number(customBaseFC),
      description: "Custom operative sprint block.",
      badgeColor: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
      isCustom: true,
    };

    setPresets([...presets, newPreset]);
    setSelectedPreset(newPreset);
    setSecondsRemaining(newPreset.durationMins * 60);
    setSessionStatus("IDLE");
    setIsCustomModalOpen(false);
    setCustomName("");
  };

  // Countdown Interval Effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (sessionStatus === "RUNNING" && secondsRemaining > 0) {
      interval = setInterval(() => setSecondsRemaining((prev) => prev - 1), 1000);
    } else if (secondsRemaining === 0 && sessionStatus === "RUNNING") {
      setSessionStatus("EVALUATING");
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [sessionStatus, secondsRemaining]);

  const handleSelectPreset = (preset: FocusPreset) => {
    if (sessionStatus === "RUNNING") return;
    setSelectedPreset(preset);
    setSecondsRemaining(preset.durationMins * 60);
    setSessionStatus("IDLE");
    setInterruptionCount(0);
  };

  const handleStartSession = () => setSessionStatus("RUNNING");
  const handlePauseSession = () => {
    setSessionStatus("PAUSED");
    setInterruptionCount((prev) => prev + 1);
  };

  const handleFinalizeSession = (progressedTask: boolean) => {
    let finalFC = estimatedFC;
    if (!progressedTask) finalFC = Math.round(finalFC * 0.5);

    setUserCoins((prev) => prev + finalFC);
    setUserLifetimeHours((prev) => parseFloat((prev + selectedPreset.durationMins / 60).toFixed(1)));
    
    if (selectedPreset.durationMins > longestSessionMins) {
      setLongestSessionMins(selectedPreset.durationMins);
    }

    if (progressedTask) {
      setCompletedTasksCount((prev) => prev + 1);
    }

    const newLog = {
      id: `SESS-${105 + historyLogs.length}`,
      mode: selectedPreset.name,
      duration: `${selectedPreset.durationMins} mins`,
      fcEarned: `+${finalFC} FC`,
      task: activeTaskTitle || "General Focus Sprint",
      date: "Just Now",
    };

    setHistoryLogs([newLog, ...historyLogs]);
    setSessionStatus("COMPLETED");
  };

  const handleReset = () => {
    setSecondsRemaining(selectedPreset.durationMins * 60);
    setSessionStatus("IDLE");
    setInterruptionCount(0);
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainderSecs = secs % 60;
    return `${mins.toString().padStart(2, "0")}:${remainderSecs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-[#070913] text-white p-4 sm:p-6 md:p-10 relative overflow-x-hidden selection:bg-indigo-500 selection:text-white space-y-8">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[400px] bg-gradient-to-b from-indigo-600/15 via-purple-600/10 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-[1500px] mx-auto relative z-10 space-y-8">
        
        {/* Navigation & Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-slate-800/80">
          <Link href="/tasks" className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-xs font-bold text-slate-300 hover:text-white transition-all shadow-md group">
            <ArrowLeft className="w-4 h-4 text-indigo-400 group-hover:-translate-x-1 transition-transform" /> Return to Bounties Board
          </Link>

          <div className="flex items-center gap-3">
            <div className={`px-3.5 py-1 rounded-full border text-xs font-black flex items-center gap-1.5 ${userTier.color}`}>
              <Crown className="w-3.5 h-3.5" /> USER LEVEL: {userTier.tier.toUpperCase()} ({userLifetimeHours}h)
            </div>
            <div className="px-3.5 py-1 bg-slate-900 border border-amber-500/30 text-amber-400 text-xs font-black rounded-full font-mono">
              {userCoins} FC
            </div>
          </div>
        </div>

        {/* METRICS SUMMARY */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-900/60 border border-slate-800/90 rounded-3xl p-5 backdrop-blur-xl flex flex-col justify-between">
            <div className="flex items-center justify-between text-slate-400 text-[10px] font-black tracking-wider uppercase mb-2">
              <span>ONGOING TARGET TASK</span>
              <Target className="w-4 h-4 text-indigo-400" />
            </div>
            <p className="text-sm font-bold text-white truncate">{activeTaskTitle || "No task attached"}</p>
            <span className="text-[10px] text-indigo-400 font-semibold mt-2">Active Target</span>
          </div>

          <div className="bg-slate-900/60 border border-slate-800/90 rounded-3xl p-5 backdrop-blur-xl flex flex-col justify-between">
            <div className="flex items-center justify-between text-slate-400 text-[10px] font-black tracking-wider uppercase mb-2">
              <span>LONGEST SESSION RECORD</span>
              <Trophy className="w-4 h-4 text-amber-400" />
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-black text-white font-mono">{longestSessionMins} mins</span>
              <span className="text-[10px] text-amber-400 font-bold bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">Personal Best</span>
            </div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800/90 rounded-3xl p-5 backdrop-blur-xl flex flex-col justify-between">
            <div className="flex items-center justify-between text-slate-400 text-[10px] font-black tracking-wider uppercase mb-2">
              <span>COMPLETED TASKS</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-black text-white font-mono">{completedTasksCount} Tasks</span>
              <span className="text-xs text-emerald-400 font-semibold">100% Verified</span>
            </div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800/90 rounded-3xl p-5 backdrop-blur-xl flex flex-col justify-between">
            <div className="flex items-center justify-between text-slate-400 text-[10px] font-black tracking-wider uppercase mb-2">
              <span>VERIFIED LIFETIME FOCUS</span>
              <Clock className="w-4 h-4 text-purple-400" />
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-black text-white font-mono">{userLifetimeHours} hrs</span>
              <span className="text-xs text-purple-400 font-semibold">Mastery Logged</span>
            </div>
          </div>
        </div>

        {/* PRESET SELECTOR & CUSTOM CREATOR */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-black uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Zap className="w-4 h-4 text-indigo-400" /> Focus Mode Templates
            </h2>

            {/* Custom Mode Button */}
            <button
              onClick={() => setIsCustomModalOpen(true)}
              className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold rounded-xl flex items-center gap-1.5 transition-all hover:scale-105"
            >
              <Plus className="w-3.5 h-3.5 text-indigo-400" /> Create Custom Session
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {presets.map((preset) => {
              const isSelected = selectedPreset.id === preset.id;
              return (
                <div
                  key={preset.id}
                  onClick={() => handleSelectPreset(preset)}
                  className={`p-5 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "bg-indigo-950/30 border-indigo-500 shadow-lg shadow-indigo-950/40 scale-[1.02]"
                      : "bg-slate-900/60 border-slate-800/80 hover:border-slate-700 opacity-80"
                  }`}
                >
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold border ${preset.badgeColor}`}>
                        {preset.name} {preset.isCustom && "(Custom)"}
                      </span>
                      <span className="text-xs font-black text-amber-400 font-mono">+{preset.baseFC} FC</span>
                    </div>
                    <h3 className="text-2xl font-black text-white mb-1 font-mono">
                      {preset.durationMins} <span className="text-xs font-sans text-slate-400 font-normal">mins</span>
                    </h3>
                    <p className="text-slate-400 text-[11px] leading-relaxed mb-4">{preset.description}</p>
                  </div>
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-500 font-bold">
                    <span>Break: {preset.breakMins} mins</span>
                    {isSelected && <span className="text-indigo-400 font-extrabold">Selected</span>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* TIMER DISPLAY */}
        <div className="bg-slate-900/70 border border-indigo-500/30 rounded-3xl p-8 md:p-12 backdrop-blur-xl text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto">
            
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs font-extrabold text-slate-300">
                <Clock className="w-3.5 h-3.5 text-indigo-400" /> MODE: <span className="text-indigo-400">{selectedPreset.name.toUpperCase()}</span>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-extrabold text-amber-300">
                <Award className="w-3.5 h-3.5 text-amber-400" /> PROJECTED FC YIELD: <span className="font-mono text-amber-400">+{estimatedFC} FC</span>
              </div>
            </div>

            <div className="text-7xl sm:text-8xl font-black font-mono tracking-widest text-white mb-6">
              {formatTime(secondsRemaining)}
            </div>

            {/* ESTIMATED PROGRESS */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 mb-8">
              <div className="flex justify-between items-center mb-2 text-xs">
                <span className="text-slate-400 font-bold flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-indigo-400" /> Estimated Work Execution State
                </span>
                <span className="font-mono font-black text-indigo-400">{progressPercent}% Completed</span>
              </div>

              <div className="w-full bg-slate-800 rounded-full h-3 p-0.5 border border-slate-700/60 mb-2">
                <div
                  style={{ width: `${progressPercent}%` }}
                  className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-full rounded-full transition-all duration-300 shadow-md shadow-indigo-500/30"
                />
              </div>
            </div>

            {/* CONTROLS */}
            {sessionStatus !== "EVALUATING" && sessionStatus !== "COMPLETED" && (
              <div className="flex justify-center items-center gap-4 mb-6">
                {sessionStatus === "RUNNING" ? (
                  <button
                    onClick={handlePauseSession}
                    className="px-8 py-4 bg-amber-600 hover:bg-amber-500 font-bold text-xs text-white rounded-2xl shadow-lg transition-all flex items-center gap-2"
                  >
                    <Pause className="w-4 h-4" /> Pause Session
                  </button>
                ) : (
                  <button
                    onClick={handleStartSession}
                    className="px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:opacity-90 font-black text-xs text-white shadow-xl shadow-indigo-600/30 flex items-center gap-2 transition-all hover:scale-105"
                  >
                    <Play className="w-4 h-4" /> Start Focus Session
                  </button>
                )}

                <button
                  onClick={handleReset}
                  className="p-4 bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 rounded-2xl transition-all"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* EVALUATION */}
            {sessionStatus === "EVALUATING" && (
              <div className="p-6 bg-slate-950/80 border border-indigo-500/40 rounded-2xl text-left animate-in fade-in zoom-in duration-200">
                <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" /> Focus Session Completed!
                </h3>
                <p className="text-slate-400 text-xs mb-6">
                  {activeTaskTitle ? `Did you successfully progress "${activeTaskTitle}"?` : "Did you progress your planned task objectives?"}
                </p>

                <div className="flex gap-3">
                  <button
                    onClick={() => handleFinalizeSession(true)}
                    className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all"
                  >
                    Yes, Task Progressed (+{estimatedFC} FC)
                  </button>
                  <button
                    onClick={() => handleFinalizeSession(false)}
                    className="flex-1 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs rounded-xl transition-all"
                  >
                    No, Interrupted Early (50% FC)
                  </button>
                </div>
              </div>
            )}

            {sessionStatus === "COMPLETED" && (
              <div className="p-6 bg-emerald-950/20 border border-emerald-500/40 rounded-2xl text-center">
                <h3 className="text-lg font-black text-emerald-400 mb-1">Session Saved to Permanent Record!</h3>
                <p className="text-xs text-slate-400 mb-4">FC tokens issued to your Treasury Vault and lifetime focus updated.</p>

                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl border border-slate-700"
                >
                  Start Another Session
                </button>
              </div>
            )}

          </div>
        </div>

        {/* SESSION HISTORY FEED */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-base font-black text-white flex items-center gap-2">
                <History className="w-5 h-5 text-indigo-400" /> Focus Session History Feed
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">Chronological record of verified completed sprints.</p>
            </div>
            <span className="text-xs text-slate-500 font-mono">Synced to Fortress Ledger</span>
          </div>

          <div className="space-y-3">
            {historyLogs.map((log) => (
              <div key={log.id} className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-mono font-bold text-xs shrink-0">
                    {log.id.split("-")[1]}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-bold text-white text-sm">{log.mode} Session</p>
                      <span className="text-[10px] font-bold text-slate-400 bg-slate-800 px-2 py-0.5 rounded-md border border-slate-700">
                        {log.duration}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Target: <span className="text-slate-300 font-medium">{log.task}</span> • {log.date}
                    </p>
                  </div>
                </div>

                <span className="font-mono font-black text-amber-400 text-sm">{log.fcEarned}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* CUSTOM FOCUS SESSION MODAL */}
      {isCustomModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-indigo-500/30 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setIsCustomModalOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Create Custom Focus Mode</h3>
                <p className="text-xs text-slate-400">Define custom duration, breaks, and base FC yield.</p>
              </div>
            </div>

            <form onSubmit={handleCreateCustomPreset} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase">Preset Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. My DSA Practice Mode"
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700/80 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase">Duration (Mins)</label>
                  <input
                    type="number"
                    required
                    min={5}
                    max={240}
                    value={customDuration}
                    onChange={(e) => {
                      const dur = Number(e.target.value);
                      setCustomDuration(dur);
                      setCustomBaseFC(dur); // Default 1 FC per min
                    }}
                    className="w-full bg-slate-800 border border-slate-700/80 rounded-xl p-3 text-xs text-white font-mono focus:outline-none focus:border-indigo-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase">Break (Mins)</label>
                  <input
                    type="number"
                    required
                    min={1}
                    max={60}
                    value={customBreak}
                    onChange={(e) => setCustomBreak(Number(e.target.value))}
                    className="w-full bg-slate-800 border border-slate-700/80 rounded-xl p-3 text-xs text-white font-mono focus:outline-none focus:border-indigo-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase">Base FC Payout</label>
                <input
                  type="number"
                  required
                  min={5}
                  max={500}
                  value={customBaseFC}
                  onChange={(e) => setCustomBaseFC(Number(e.target.value))}
                  className="w-full bg-slate-800 border border-slate-700/80 rounded-xl p-3 text-xs text-amber-400 font-mono focus:outline-none focus:border-indigo-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 font-bold text-xs text-white rounded-xl shadow-lg transition-all mt-2"
              >
                Save & Select Custom Mode
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  Crown, 
  Award, 
  Clock, 
  Flame, 
  CheckCircle2, 
  Sparkles, 
  Zap, 
  Lock, 
  Trophy,
  Shield,
  ArrowLeft,
  History,
  Target,
  ShoppingBag,
  Check,
  TrendingUp
} from "lucide-react";

export default function CompleteProfileMasteryPage() {
  const router = useRouter();

  // Operative Lifetime State
  const [lifetimeHours] = useState(18.5);
  const [userCoins] = useState(1250);
  const [userXP] = useState(850);
  const [longestSessionMins] = useState(90);
  const [completedTasksCount] = useState(24);

  // Permanent Session History Audit Feed
  const [sessionHistory] = useState([
    { id: "SESS-104", mode: "Deep Focus", duration: "50 mins", fcEarned: "+55 FC", date: "Today, 14:20", interrupted: false, task: "MongoDB Aggregation Pipeline" },
    { id: "SESS-103", mode: "Pomodoro", duration: "25 mins", fcEarned: "+25 FC", date: "Yesterday, 18:05", interrupted: false, task: "UI Accessibility Specs" },
    { id: "SESS-102", mode: "Sprint", duration: "15 mins", fcEarned: "+15 FC", date: "Aug 2, 2026", interrupted: false, task: "DB Indexing Audit" },
    { id: "SESS-101", mode: "Flow State", duration: "90 mins", fcEarned: "+55 FC", date: "Aug 1, 2026", interrupted: true, task: "Backend Auth Architecture" },
  ]);

  // Lifetime Focus Tier Thresholds
  const tiers = [
    { name: "Bronze", hoursNeeded: 0, unlocked: true, perk: "Base 1.0x FC Earnings" },
    { name: "Silver", hoursNeeded: 10, unlocked: true, perk: "+10% FC Bounty Bonus" },
    { name: "Gold", hoursNeeded: 100, unlocked: false, perk: "+20% FC Bounty + Theme Access" },
    { name: "Diamond", hoursNeeded: 500, unlocked: false, perk: "+35% FC Bounty + Free Shield" },
    { name: "Master", hoursNeeded: 2000, unlocked: false, perk: "2x FC Yield + Custom Modes" },
  ];

  // Active Multipliers & Unlocked Perks
  const activeBuffs = [
    { name: "7-Day Streak Multiplier", boost: "+1.2x Yield", icon: Flame, color: "text-amber-400 border-amber-500/30 bg-amber-500/10" },
    { name: "Silver Operative Bonus", boost: "+10% Bounties", icon: Crown, color: "text-slate-300 border-slate-400/30 bg-slate-400/10" },
    { name: "Streak Freeze Shield", boost: "1 Charge Active", icon: Shield, color: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10" },
  ];

  return (
    <div className="p-4 sm:p-6 md:p-10 max-w-[1500px] mx-auto space-y-8 selection:bg-indigo-500 selection:text-white">
      
      {/* 0. NAVIGATION BACK HEADER */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
        <Link 
          href="/user-dashboard" 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-xs font-bold text-slate-300 hover:text-white transition-all shadow-md group"
        >
          <ArrowLeft className="w-4 h-4 text-indigo-400 group-hover:-translate-x-1 transition-transform" />
          Return to Command Hub
        </Link>

        {/* Navigation Pills */}
        <div className="flex items-center gap-2">
          <Link
            href="/focus"
            className="px-3.5 py-1.5 rounded-xl bg-indigo-600/15 hover:bg-indigo-600/25 border border-indigo-500/30 text-indigo-300 font-bold text-xs flex items-center gap-1.5 transition-all"
          >
            <Zap className="w-3.5 h-3.5 text-indigo-400" /> Focus Vault
          </Link>
          <Link
            href="/tasks"
            className="px-3.5 py-1.5 rounded-xl bg-emerald-600/15 hover:bg-emerald-600/25 border border-emerald-500/30 text-emerald-300 font-bold text-xs flex items-center gap-1.5 transition-all"
          >
            <Target className="w-3.5 h-3.5 text-emerald-400" /> Bounties Board
          </Link>
          <Link
            href="/marketplace"
            className="px-3.5 py-1.5 rounded-xl bg-purple-600/15 hover:bg-purple-600/25 border border-purple-500/30 text-purple-300 font-bold text-xs flex items-center gap-1.5 transition-all"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-purple-400" /> Marketplace
          </Link>
        </div>
      </div>

      {/* 1. OPERATIVE IDENTITY & MASTERY HERO BANNER */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center gap-5 relative z-10">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-tr from-amber-500 via-indigo-500 to-purple-600 p-[2px] shadow-2xl shadow-indigo-500/20 shrink-0">
            <div className="w-full h-full bg-[#0d1121] rounded-[22px] flex items-center justify-center">
              <Crown className="w-10 h-10 sm:w-12 sm:h-12 text-amber-400" />
            </div>
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-3 mb-1.5">
              <h1 className="text-2xl sm:text-3xl font-black text-white">Aneesh T S</h1>
              <span className="px-3 py-0.5 rounded-full bg-gradient-to-r from-amber-500/20 to-amber-600/10 border border-amber-500/30 text-amber-300 text-[10px] font-black tracking-widest uppercase">
                Silver Operative
              </span>
            </div>
            <p className="text-xs text-slate-400 flex items-center gap-2">
              <span>aneesh@fortress.io</span>
              <span className="text-slate-700">•</span>
              <span className="text-indigo-400 font-semibold">Engineering Division</span>
            </p>
          </div>
        </div>

        {/* Treasury Vault & Lifetime Stats Grid */}
        <div className="flex flex-wrap items-center gap-4 bg-slate-950/80 p-4 sm:p-5 rounded-2xl border border-slate-800/80 w-full lg:w-auto justify-between relative z-10">
          <div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Treasury Balance</p>
            <p className="text-xl font-black text-amber-400 font-mono">{userCoins} FC</p>
          </div>
          <div className="w-px h-10 bg-slate-800 hidden sm:block" />
          <div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Lifetime Focus</p>
            <p className="text-xl font-black text-white font-mono">{lifetimeHours} hrs</p>
          </div>
          <div className="w-px h-10 bg-slate-800 hidden sm:block" />
          <div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Bounties Cleared</p>
            <p className="text-xl font-black text-emerald-400 font-mono">{completedTasksCount} Tasks</p>
          </div>
          <div className="w-px h-10 bg-slate-800 hidden sm:block" />
          <div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Longest Session</p>
            <p className="text-xl font-black text-purple-400 font-mono">{longestSessionMins}m Record</p>
          </div>
        </div>
      </div>

      {/* 2. OPERATIVE LEVEL & ACTIVE BUFFS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Level Progress */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-black uppercase text-slate-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" /> Operative Level 14
              </span>
              <span className="text-xs font-mono font-bold text-amber-400">{userXP} / 1000 XP</span>
            </div>

            <div className="w-full bg-slate-800 rounded-full h-3 p-0.5 border border-slate-700/60 mb-3">
              <div
                style={{ width: `${(userXP / 1000) * 100}%` }}
                className="bg-gradient-to-r from-amber-500 to-amber-300 h-full rounded-full transition-all duration-500 shadow-md shadow-amber-500/20"
              />
            </div>
            <p className="text-[11px] text-slate-400">
              150 XP needed to reach Level 15 and unlock custom Focus Modes.
            </p>
          </div>

          <div className="pt-4 mt-6 border-t border-slate-800/80 flex justify-between items-center text-xs">
            <span className="text-slate-400">Active Multiplier:</span>
            <span className="font-bold text-emerald-400 font-mono">1.3x Total Yield</span>
          </div>
        </div>

        {/* Active Vault Buffs */}
        <div className="lg:col-span-2 bg-slate-900/60 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl">
          <h2 className="text-xs font-black uppercase tracking-wider text-slate-300 mb-4 flex items-center gap-2">
            <Zap className="w-4 h-4 text-indigo-400" /> Active Vault Buffs & Yield Multipliers
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {activeBuffs.map((buff, idx) => {
              const Icon = buff.icon;
              return (
                <div key={idx} className={`p-4 rounded-2xl border ${buff.color} flex flex-col justify-between`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-white">{buff.name}</span>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-black font-mono mt-2">{buff.boost}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. LIFETIME FOCUS TIER PROGRESSION */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-base font-black text-white flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-400" /> Lifetime Focus Tier Progression
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">Tiers are tied permanently to cumulative verified focus hours across all sessions.</p>
          </div>
          <span className="text-xs font-mono font-bold text-slate-400">{lifetimeHours} / 100 hrs to Gold</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                t.unlocked
                  ? "bg-amber-500/10 border-amber-500/40 text-white shadow-lg shadow-amber-950/20"
                  : "bg-slate-800/30 border-slate-800 opacity-60"
              }`}
            >
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-black">{t.name} Tier</span>
                  {t.unlocked ? <CheckCircle2 className="w-4 h-4 text-amber-400" /> : <Lock className="w-4 h-4 text-slate-600" />}
                </div>
                <p className="text-[10px] text-slate-400 font-mono mb-4">{t.hoursNeeded} hrs Lifetime Focus</p>
              </div>

              <div className="pt-3 border-t border-slate-800/80">
                <p className="text-[10px] font-semibold text-slate-300">{t.perk}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. PERMANENT SESSION AUDIT LOG WITH LINKED TASKS */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-base font-black text-white flex items-center gap-2">
              <History className="w-5 h-5 text-indigo-400" /> Permanent Session Audit Log
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">Immutable record of every completed focus session and linked task bounty.</p>
          </div>
          <span className="text-xs text-slate-500 font-mono">Synced to Ledger</span>
        </div>

        <div className="space-y-3">
          {sessionHistory.map((s) => (
            <div key={s.id} className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs hover:border-slate-600 transition-all">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-mono font-bold text-xs shrink-0">
                  {s.id.split("-")[1]}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-white text-sm">{s.mode} Session</p>
                    <span className="text-[10px] font-bold text-slate-400 bg-slate-800 px-2 py-0.5 rounded-md border border-slate-700">
                      {s.duration}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Target Bounty: <span className="text-emerald-400 font-medium">{s.task}</span> • {s.date} {s.interrupted && <span className="text-amber-400 font-bold">(Interrupted Penalty)</span>}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 justify-end">
                <span className="font-mono font-black text-amber-400 text-sm">{s.fcEarned}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
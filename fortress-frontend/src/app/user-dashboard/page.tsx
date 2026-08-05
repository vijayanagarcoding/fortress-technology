"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  Shield, 
  Flame, 
  Award, 
  Clock, 
  LogOut, 
  Sparkles,
  Target,
  ShoppingBag,
  Trophy,
  User,
  Zap,
  ArrowRight,
  BarChart3
} from "lucide-react";

export default function FullscreenMotivationalDashboard() {
  const router = useRouter();
  const [userCoins] = useState(1250);

  // Weekly Focus Graph Data
  const weeklyFocus = [
    { day: "Mon", hours: 3.5, active: false },
    { day: "Tue", hours: 4.2, active: false },
    { day: "Wed", hours: 2.8, active: false },
    { day: "Thu", hours: 5.0, active: true },
    { day: "Fri", hours: 3.0, active: false },
    { day: "Sat", hours: 1.5, active: false },
    { day: "Sun", hours: 0.0, active: false },
  ];

  // Top Operatives Leaderboard
  const topOperatives = [
    { rank: 1, name: "Sarah Jenkins", fc: "3,450 FC" },
    { rank: 2, name: "Dev User", fc: "2,890 FC" },
    { rank: 3, name: "Aniket Subrahmanya", fc: "1,940 FC" },
  ];

  // Active Bounties Stream
  const activeTasks = [
    { id: 1, title: "Optimize DB Indexing Scheme", bounty: "+150 FC", category: "Engineering" },
    { id: 2, title: "Implement MongoDB Aggregation Logic", bounty: "+200 FC", category: "Backend" },
    { id: 3, title: "Draft Sprint Architecture Specs", bounty: "+120 FC", category: "Docs" },
  ];

  return (
    <div className="min-h-screen bg-[#060813] text-white p-4 sm:p-6 md:p-8 relative overflow-x-hidden selection:bg-indigo-500 selection:text-white">
      {/* Background Cyberpunk Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[450px] bg-gradient-to-b from-indigo-600/20 via-purple-600/10 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1550px] mx-auto relative z-10">
        
        {/* TOP NAVBAR HEADER */}
        <header className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8 pb-6 border-b border-slate-800/80 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <div className="relative group cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-[2px] shadow-xl shadow-indigo-500/20 transition-transform group-hover:scale-105">
                <div className="w-full h-full bg-[#0d1121] rounded-[14px] flex items-center justify-center">
                  <Shield className="w-7 h-7 text-indigo-400" />
                </div>
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-400 border-2 border-[#060813] rounded-full animate-pulse" />
            </div>

            <div>
              <div className="flex items-center gap-2.5">
                <h1 className="text-2xl font-black tracking-tight text-white">Aneesh T S</h1>
                <span className="px-3 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px] font-black tracking-widest uppercase">
                  Gold Tier Operative
                </span>
              </div>
              <p className="text-slate-400 text-xs mt-0.5 flex items-center gap-2">
                <span>aneesh@fortress.io</span>
                <span className="text-slate-700">•</span>
                <span className="text-indigo-400 font-semibold">Engineering Division</span>
              </p>
            </div>
          </div>

          {/* Action Header Controls */}
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto justify-between lg:justify-end">
            <div className="px-4 py-2 bg-slate-900/90 border border-amber-500/30 rounded-2xl flex items-center gap-2.5 shadow-lg shadow-amber-950/20 backdrop-blur-xl">
              <Award className="w-4 h-4 text-amber-400" />
              <div>
                <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Treasury Balance</p>
                <p className="text-xs font-black text-amber-400 font-mono">{userCoins} FC</p>
              </div>
            </div>

            <Link
              href="/profile"
              className="flex items-center gap-2 px-4 py-2.5 bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/40 text-indigo-300 font-bold text-xs rounded-2xl transition-all shadow-md shadow-indigo-950/30"
            >
              <User className="w-4 h-4 text-indigo-400" />
              Profile
            </Link>

            <button
              onClick={() => router.push("/login")}
              className="flex items-center gap-2 px-4 py-2.5 bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700/80 font-semibold text-xs rounded-2xl transition-all"
            >
              <LogOut className="w-3.5 h-3.5 text-slate-400" />
              Sign Out
            </button>
          </div>
        </header>

        {/* TOP STATS BAR */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-slate-900/60 border border-slate-800/90 rounded-3xl p-5 backdrop-blur-xl hover:border-amber-500/40 transition-all group">
            <div className="flex items-center justify-between text-slate-400 text-xs font-black tracking-wider uppercase mb-3">
              <span>ACTIVE STREAK</span>
              <Flame className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-3xl font-black text-white">7 Days</span>
              <span className="text-[10px] text-amber-400 font-bold bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                +1.2x Yield
              </span>
            </div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800/90 rounded-3xl p-5 backdrop-blur-xl hover:border-indigo-500/40 transition-all group">
            <div className="flex items-center justify-between text-slate-400 text-xs font-black tracking-wider uppercase mb-3">
              <span>FOCUS HOURS</span>
              <Clock className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-3xl font-black text-white">18.5 hrs</span>
              <span className="text-xs text-indigo-400 font-semibold">This Week</span>
            </div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800/90 rounded-3xl p-5 backdrop-blur-xl hover:border-emerald-500/40 transition-all group">
            <div className="flex items-center justify-between text-slate-400 text-xs font-black tracking-wider uppercase mb-3">
              <span>BOUNTIES CLEARED</span>
              <Target className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-3xl font-black text-white">24 Tasks</span>
              <span className="text-xs text-emerald-400 font-semibold">100% Rate</span>
            </div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800/90 rounded-3xl p-5 backdrop-blur-xl hover:border-purple-500/40 transition-all group">
            <div className="flex items-center justify-between text-slate-400 text-xs font-black tracking-wider uppercase mb-3">
              <span>GLOBAL RANKING</span>
              <Trophy className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-3xl font-black text-white">#4</span>
              <span className="text-xs text-purple-400 font-semibold">Top 5% Operative</span>
            </div>
          </div>
        </div>

        {/* MAIN LAYOUT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* LEFT COLUMN (8 Columns) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* HERO MOTIVATION BANNER */}
            <div className="relative bg-gradient-to-r from-indigo-950/80 via-slate-900/90 to-purple-950/80 border border-indigo-500/30 rounded-3xl p-8 backdrop-blur-xl shadow-2xl overflow-hidden">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-black mb-6">
                <Flame className="w-4 h-4 text-amber-400" /> 7-DAY STREAK MAINTAINED (+1.2x YIELD)
              </div>

              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-4 leading-tight">
                Ready to Lock In and <br />
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Crush Your Next Sprint?
                </span>
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed mb-8">
                You are <span className="text-amber-400 font-semibold">6.5 focus hours away</span> from reaching your weekly Gold Tier cap and unlocking double FC bounty rewards. Select a mission below to begin.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/focus"
                  className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:opacity-95 font-black text-xs text-white shadow-xl shadow-indigo-600/30 flex items-center gap-2 transition-all hover:scale-105"
                >
                  <Zap className="w-4 h-4" /> Start Focus Session <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/tasks"
                  className="px-6 py-3.5 rounded-2xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 font-bold text-xs transition-all flex items-center gap-2"
                >
                  <Target className="w-4 h-4 text-emerald-400" /> Claim Task Bounties
                </Link>
              </div>
            </div>

            {/* LAUNCHPAD MODULES */}
            <div>
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-400" /> Operational Launchpad
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <Link
                  href="/focus"
                  className="group bg-slate-900/80 border border-slate-800 hover:border-indigo-500/60 p-6 rounded-3xl transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-indigo-600/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Zap className="w-6 h-6 text-indigo-400" />
                    </div>
                    <h4 className="text-lg font-extrabold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                      Deep Focus Vault
                    </h4>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      Start Pomodoro sprint timers and build streak yields.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-indigo-400">
                    <span>Enter Focus Room</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>

                <Link
                  href="/tasks"
                  className="group bg-slate-900/80 border border-slate-800 hover:border-emerald-500/60 p-6 rounded-3xl transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-emerald-600/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Target className="w-6 h-6 text-emerald-400" />
                    </div>
                    <h4 className="text-lg font-extrabold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                      Task Bounties Board
                    </h4>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      View priority tickets and claim instant FC payouts.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-emerald-400">
                    <span>View Bounties</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>

                <Link
                  href="/marketplace"
                  className="group bg-slate-900/80 border border-slate-800 hover:border-purple-500/60 p-6 rounded-3xl transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-purple-600/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <ShoppingBag className="w-6 h-6 text-purple-400" />
                    </div>
                    <h4 className="text-lg font-extrabold text-white mb-1 group-hover:text-purple-300 transition-colors">
                      Perks Marketplace
                    </h4>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      Redeem FC for shields, multipliers, and custom themes.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-purple-400">
                    <span>Open Vault Store</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            </div>

            {/* ACTIVE BOUNTIES PREVIEW */}
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-3xl p-6 backdrop-blur-xl">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-300 flex items-center gap-2">
                  <Target className="w-4 h-4 text-emerald-400" /> High-Priority Active Bounties
                </h3>
                <Link href="/tasks" className="text-xs font-bold text-emerald-400 hover:underline">
                  All Tasks
                </Link>
              </div>

              <div className="space-y-3">
                {activeTasks.map((t) => (
                  <div key={t.id} className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/60 flex justify-between items-center text-xs">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      <div>
                        <p className="font-bold text-white">{t.title}</p>
                        <p className="text-[10px] text-slate-500 uppercase">{t.category}</p>
                      </div>
                    </div>
                    <span className="font-mono font-black text-amber-400">{t.bounty}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT SIDEBAR (4 Columns) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* WEEKLY FOCUS BAR CHART */}
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-3xl p-6 backdrop-blur-xl">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-300 flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-indigo-400" /> Weekly Activity
                </h3>
                <span className="text-xs font-mono font-bold text-indigo-400">18.5h Total</span>
              </div>

              <div className="grid grid-cols-7 gap-2 items-end h-28 pt-2 px-1">
                {weeklyFocus.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-1.5 h-full justify-end">
                    <div className="w-full bg-slate-800 rounded-lg h-full flex items-end p-0.5 overflow-hidden">
                      <div
                        style={{ height: `${Math.min(100, (item.hours / 6) * 100)}%` }}
                        className={`w-full rounded-md transition-all ${
                          item.active ? "bg-gradient-to-t from-indigo-600 to-purple-500" : "bg-slate-700"
                        }`}
                      />
                    </div>
                    <span className={`text-[10px] font-bold ${item.active ? "text-indigo-400" : "text-slate-500"}`}>
                      {item.day}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* LEADERBOARD SNAPSHOT */}
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-3xl p-6 backdrop-blur-xl">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-300 flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-purple-400" /> Leaderboard Rankings
                </h3>
                <span className="text-[10px] text-slate-500 font-bold uppercase">Top Operatives</span>
              </div>

              <div className="space-y-3">
                {topOperatives.map((op) => (
                  <div key={op.rank} className="p-3.5 rounded-2xl bg-slate-800/40 border border-slate-700/60 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-3">
                      <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-mono text-xs font-black ${
                        op.rank === 1 ? "bg-amber-500 text-slate-950" : "bg-slate-800 text-slate-400"
                      }`}>
                        #{op.rank}
                      </span>
                      <p className="font-bold text-white">{op.name}</p>
                    </div>
                    <span className="font-mono font-bold text-purple-400">{op.fc}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
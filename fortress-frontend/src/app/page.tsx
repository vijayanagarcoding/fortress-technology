"use client";

import React from "react";
import Link from "next/link";
import { 
  Shield, 
  Sparkles, 
  Flame, 
  Target, 
  Zap, 
  Trophy, 
  ArrowRight, 
  Lock, 
  LogIn 
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0d18] text-white relative overflow-hidden selection:bg-indigo-500 selection:text-white">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-indigo-600/20 via-purple-600/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Navbar */}
      <header className="relative z-10 border-b border-slate-800/60 backdrop-blur-md bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-black tracking-wider bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              FORTRESS
            </span>
          </Link>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="/admin/login"
              className="text-xs text-slate-400 hover:text-slate-200 px-3 py-2 transition-colors hidden sm:block"
            >
              Admin Access
            </Link>
            <Link
              href="/login"
              className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 transition-all"
            >
              <LogIn className="w-3.5 h-3.5 text-indigo-400" />
              Sign In
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white text-xs font-bold rounded-xl shadow-lg shadow-indigo-600/25 transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
        {/* Glowing Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-bold rounded-full mb-8 shadow-inner shadow-indigo-500/10">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>GAMIFIED PRODUCTIVITY ECOSYSTEM</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight mb-6">
          Turn Your Daily Focus Into <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Unlockable Vault Rewards.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg mb-10 leading-relaxed">
          Level up your deep-work sessions, crush priority bounties, and earn <span className="text-amber-400 font-semibold">Fortress Currency (FC)</span> to unlock exclusive theme perks, multipliers, and custom inventory gear.
        </p>

        {/* Primary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Link
            href="/register"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:opacity-95 font-bold text-base text-white shadow-xl shadow-indigo-600/30 hover:scale-105 transition-all flex items-center justify-center gap-2"
          >
            Start Your Focus Streak <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/login"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900/80 border border-slate-700/80 hover:bg-slate-800 text-slate-200 font-semibold text-base transition-all flex items-center justify-center gap-2"
          >
            Enter Workspace
          </Link>
        </div>

        {/* Gamified Core Loop Showcase */}
        <div className="text-left max-w-5xl mx-auto">
          <h2 className="text-xs font-extrabold uppercase tracking-widest text-slate-500 mb-6 text-center">
            How Fortress Gamifies Your Work
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/40 p-6 rounded-3xl backdrop-blur-xl transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Flame className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">1. Lock In Deep Work</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Log uninterrupted focus sprints. Maintain streak multipliers that boost your hourly token yield.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/40 p-6 rounded-3xl backdrop-blur-xl transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">2. Complete Bounties</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Transform daily task lists into tactical operational bounties. Earn instant FC payouts upon completion.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/40 p-6 rounded-3xl backdrop-blur-xl transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Trophy className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">3. Unlock Vault Perks</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Redeem earned currency in the Marketplace for custom profile badges, visual mastery themes, and perks.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-800/60 py-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Fortress Productivity Ecosystem. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/login" className="hover:text-slate-300 transition-colors">User Sign In</Link>
            <span className="text-slate-700">•</span>
            <Link href="/admin/login" className="hover:text-slate-300 transition-colors">Admin Access</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  ShieldAlert, 
  Users, 
  Coins, 
  Activity, 
  Clock, 
  LogOut, 
  ArrowRight,
  Sparkles,
  Sliders,
  ShieldCheck,
  BarChart3,
  TrendingUp,
  Lock
} from "lucide-react";

export default function AdminCommandHub() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#0a0d18] text-white p-6 md:p-10 selection:bg-red-500 selection:text-white relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-red-600/15 via-amber-600/10 to-transparent blur-3xl pointer-events-none" />

      {/* Top Header */}
      <header className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10 pb-6 border-b border-slate-800/80 relative z-10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-red-600 to-amber-600 flex items-center justify-center shadow-xl shadow-red-600/20">
            <ShieldAlert className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-black tracking-tight">Admin Command Center</h1>
              <span className="px-2.5 py-0.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-[10px] font-extrabold tracking-wider">
                ELEVATED PERMISSIONS
              </span>
            </div>
            <p className="text-slate-400 text-xs mt-0.5">Global system telemetry, token minting, and operative control.</p>
          </div>
        </div>

        {/* Global Controls */}
        <div className="flex items-center gap-3">
          <Link
            href="/treasury"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:opacity-90 text-white font-bold text-xs rounded-2xl shadow-lg shadow-amber-600/20 transition-all"
          >
            <Coins className="w-4 h-4" /> Mint Treasury FC
          </Link>

          <button
            onClick={() => router.push("/admin/login")}
            className="flex items-center gap-2 px-4 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 border border-red-500/30 font-semibold text-xs rounded-2xl transition-all"
          >
            <LogOut className="w-3.5 h-3.5" /> Sign Out
          </button>
        </div>
      </header>

      {/* Hero Stats HUD */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10 relative z-10">
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl hover:border-red-500/30 transition-all group">
          <div className="flex items-center justify-between text-slate-400 text-xs font-black tracking-wider uppercase mb-3">
            <span>REGISTERED OPERATIVES</span>
            <Users className="w-5 h-5 text-red-400 group-hover:scale-110 transition-transform" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-white">1,420</span>
            <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              +12% Active
            </span>
          </div>
        </div>

        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl hover:border-amber-500/30 transition-all group">
          <div className="flex items-center justify-between text-slate-400 text-xs font-black tracking-wider uppercase mb-3">
            <span>FC CIRCULATION</span>
            <Coins className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-white">450,200</span>
            <span className="text-xs text-amber-400 font-bold">FC Tokens</span>
          </div>
        </div>

        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl hover:border-indigo-500/30 transition-all group">
          <div className="flex items-center justify-between text-slate-400 text-xs font-black tracking-wider uppercase mb-3">
            <span>TOTAL FOCUS HOURS</span>
            <Clock className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-white">8,540 hrs</span>
            <span className="text-xs text-indigo-400 font-bold">System Wide</span>
          </div>
        </div>

        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl hover:border-emerald-500/30 transition-all group">
          <div className="flex items-center justify-between text-slate-400 text-xs font-black tracking-wider uppercase mb-3">
            <span>SYSTEM TELEMETRY</span>
            <Activity className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-emerald-400">99.9%</span>
            <span className="text-xs text-slate-400 font-medium">Operational</span>
          </div>
        </div>
      </div>

      {/* Module Launcher Navigation Grid */}
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-xs font-extrabold uppercase tracking-widest text-slate-500 mb-6 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-red-400" /> Admin Module Control
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1. Operative Directory Module */}
          <Link
            href="/users"
            className="group relative bg-slate-900/70 border border-slate-800 hover:border-red-500/50 p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-red-600/10 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Operative Management</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Inspect user accounts, manage permission tiers, suspend policy violators, and filter active user records.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-red-400">
              <span>Launch Directory</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* 2. Treasury & Economy Module */}
          <Link
            href="/treasury"
            className="group relative bg-slate-900/70 border border-slate-800 hover:border-amber-500/50 p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-amber-600/10 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Coins className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">FC Treasury & Minting</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Issue Fortress Currency tokens directly to users, monitor circulating supply, and track bounty redemption metrics.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-amber-400">
              <span>Manage Treasury</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* 3. System Telemetry & Logs Module */}
          <Link
            href="/analytics"
            className="group relative bg-slate-900/70 border border-slate-800 hover:border-indigo-500/50 p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-indigo-600/10 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Telemetry & Security Audit</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Review automated security logs, database query health, system latency specs, and real-time event feeds.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-indigo-400">
              <span>View Security Logs</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
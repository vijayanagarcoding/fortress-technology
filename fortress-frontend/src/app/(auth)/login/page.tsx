"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Shield, Mail, Lock, ArrowRight, Eye } from "lucide-react";

export default function OriginalLoginPage() {
  const router = useRouter();
  const [role, setRole] = useState<"USER" | "ADMIN">("USER");
  const [email, setEmail] = useState("aneeshsrikanth@gmail.com");
  const [password, setPassword] = useState("••••••••");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Set auth token cookie
    document.cookie = "fortress_token=active_session; path=/;";

    setTimeout(() => {
      setIsLoading(false);
      // Route based on tab selection
      if (role === "ADMIN") {
        router.push("/dashboard");
      } else {
        router.push("/user-dashboard");
      }
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#070913] text-white flex items-center justify-center p-4 relative overflow-hidden selection:bg-indigo-500 selection:text-white">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Centered Login Card */}
      <div className="w-full max-w-[420px] bg-[#0d101d]/90 border border-slate-800/80 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative z-10">
        
        {/* Role Toggle Switcher */}
        <div className="bg-[#070913] p-1 rounded-2xl border border-slate-800/80 flex gap-1 mb-8">
          <button
            type="button"
            onClick={() => setRole("USER")}
            className={`flex-1 py-2 rounded-xl text-[11px] font-bold transition-all flex items-center justify-center gap-1.5 ${
              role === "USER"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Shield className="w-3.5 h-3.5" /> Standard User
          </button>
          <button
            type="button"
            onClick={() => setRole("ADMIN")}
            className={`flex-1 py-2 rounded-xl text-[11px] font-bold transition-all flex items-center justify-center gap-1.5 ${
              role === "ADMIN"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Shield className="w-3.5 h-3.5" /> Admin Portal
          </button>
        </div>

        {/* Brand Shield & Welcome Title */}
        <div className="text-center mb-8">
          <div className="w-10 h-10 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 mx-auto flex items-center justify-center text-indigo-400 mb-3 shadow-lg shadow-indigo-600/10">
            <Shield className="w-5 h-5" />
          </div>
          <h1 className="text-xs font-black tracking-widest text-indigo-400 uppercase mb-1">FORTRESS</h1>
          <h2 className="text-xl font-bold text-white">Welcome Back</h2>
          <p className="text-[11px] text-slate-400 mt-1">Enter your credentials to access your user workspace.</p>
        </div>

        {/* Form Inputs */}
        <form onSubmit={handleSignIn} className="space-y-4">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              WORK EMAIL
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#131728] border border-slate-700/60 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-all font-mono"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                PASSWORD
              </label>
              <button type="button" className="text-[10px] text-indigo-400 hover:underline">
                Forgot password?
              </button>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#131728] border border-slate-700/60 rounded-xl pl-10 pr-10 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-all font-mono"
              />
              <Eye className="w-4 h-4 text-slate-500 absolute right-3.5 top-1/2 -translate-y-1/2 cursor-pointer hover:text-slate-300" />
            </div>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 font-bold text-xs text-white rounded-xl shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] mt-2 disabled:opacity-50"
          >
            <span>{isLoading ? "Signing In..." : "Sign In"}</span>
            {!isLoading && <ArrowRight className="w-4 h-4" />}
          </button>
        </form>

        {/* Create Account Link */}
        <p className="text-center text-[11px] text-slate-400 mt-6">
          Don't have an account?{" "}
          <span className="text-indigo-400 font-bold hover:underline cursor-pointer">
            Create Account
          </span>
        </p>

      </div>
    </div>
  );
}
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShieldAlert, Mail, Lock, Eye, EyeOff, KeyRound } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "", adminSecretKey: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in Admin:", formData);
    // Redirect to Admin Dashboard
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#0a0d18] text-white flex items-center justify-center p-6 selection:bg-red-500 selection:text-white">
      <div className="w-full max-w-md bg-slate-900/80 border border-red-500/30 backdrop-blur-xl p-8 rounded-3xl shadow-2xl shadow-red-950/20">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold rounded-full mb-3">
            <ShieldAlert className="w-3.5 h-3.5" /> RESTRICTED ACCESS
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight">Admin Portal</h1>
          <p className="text-slate-400 text-xs mt-1">Authenticate to manage users, economy, and system health.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">Admin Email</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                placeholder="admin@fortress.io"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-slate-800/80 border border-slate-700/60 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-red-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">Secret Passkey</label>
            <div className="relative">
              <KeyRound className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                placeholder="Admin Key"
                value={formData.adminSecretKey}
                onChange={(e) => setFormData({ ...formData, adminSecretKey: e.target.value })}
                className="w-full bg-slate-800/80 border border-slate-700/60 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-red-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="••••••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full bg-slate-800/80 border border-slate-700/60 rounded-xl pl-10 pr-10 py-2.5 text-sm text-white focus:outline-none focus:border-red-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 font-bold text-sm text-white shadow-lg shadow-red-600/20 hover:opacity-90 transition-all flex items-center justify-center gap-2"
          >
            Authorize Admin Access
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-slate-800 text-center text-xs text-slate-400">
          <Link href="/login" className="text-slate-400 hover:text-white underline">
            ← Switch to Standard User Login
          </Link>
        </div>
      </div>
    </div>
  );
}
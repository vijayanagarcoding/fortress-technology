"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  Shield, 
  ShieldAlert, 
  User, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  KeyRound, 
  Building, 
  ArrowRight,
  UserPlus
} from "lucide-react";

export default function CombinedRegisterPage() {
  const router = useRouter();
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    department: "Engineering",
    password: "",
    adminInviteCode: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isAdminMode) {
      console.log("Registering Admin Account:", formData);
      // Redirect to Admin Command Center
      router.push("/dashboard");
    } else {
      console.log("Registering User Account:", formData);
      // Redirect to User Workspace
      router.push("/user-dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0d18] text-white flex items-center justify-center p-6 relative overflow-hidden selection:bg-indigo-500 selection:text-white">
      {/* Ambient Background Glow */}
      <div 
        className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl pointer-events-none transition-colors duration-500 ${
          isAdminMode ? "bg-red-600/15" : "bg-indigo-600/15"
        }`} 
      />

      <div className={`w-full max-w-md bg-slate-900/70 border backdrop-blur-xl p-8 rounded-3xl shadow-2xl relative z-10 transition-colors duration-300 ${
        isAdminMode ? "border-red-500/30 shadow-red-950/20" : "border-slate-800 shadow-slate-950/40"
      }`}>
        
        {/* Role Toggle Switch */}
        <div className="bg-slate-950/80 p-1.5 rounded-2xl border border-slate-800/80 mb-8 flex items-center gap-1">
          <button
            type="button"
            onClick={() => setIsAdminMode(false)}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
              !isAdminMode 
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/20" 
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <UserPlus className="w-3.5 h-3.5" /> User Registration
          </button>
          <button
            type="button"
            onClick={() => setIsAdminMode(true)}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
              isAdminMode 
                ? "bg-gradient-to-r from-red-600 to-amber-600 text-white shadow-md shadow-red-600/20" 
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5" /> Admin Onboarding
          </button>
        </div>

        {/* Header Content */}
        <div className="text-center mb-6">
          <Link href="/" className="inline-flex items-center gap-3 mb-3 group">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-lg transition-all ${
              isAdminMode 
                ? "bg-gradient-to-tr from-red-600 to-amber-600 shadow-red-500/20" 
                : "bg-gradient-to-tr from-indigo-600 to-purple-600 shadow-indigo-500/20"
            }`}>
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-black tracking-wider text-white">
              FORTRESS
            </span>
          </Link>

          <h1 className="text-2xl font-bold tracking-tight">
            {isAdminMode ? "Register Administrator" : "Create Account"}
          </h1>
          <p className="text-slate-400 text-xs mt-1">
            {isAdminMode 
              ? "Provision elevated admin permissions for Fortress." 
              : "Join Fortress to log focus sprints and unlock rewards."}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
              {isAdminMode ? "Admin Name" : "Full Name"}
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                placeholder="Aneesh T S"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className={`w-full bg-slate-800/60 border rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                  isAdminMode ? "border-slate-700/60 focus:border-red-500" : "border-slate-700/60 focus:border-indigo-500"
                }`}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
              {isAdminMode ? "Organization Email" : "Work Email"}
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                placeholder={isAdminMode ? "admin@fortress.io" : "aneesh@fortress.io"}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full bg-slate-800/60 border rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                  isAdminMode ? "border-slate-700/60 focus:border-red-500" : "border-slate-700/60 focus:border-indigo-500"
                }`}
              />
            </div>
          </div>

          {/* Department Selection (User Mode) */}
          {!isAdminMode && (
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                Department
              </label>
              <div className="relative">
                <Building className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <select
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  className="w-full bg-slate-800/60 border border-slate-700/60 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 appearance-none cursor-pointer"
                >
                  <option value="Engineering" className="bg-slate-900">Engineering</option>
                  <option value="Product Design" className="bg-slate-900">Product Design</option>
                  <option value="Analytics" className="bg-slate-900">Analytics</option>
                  <option value="Operations" className="bg-slate-900">Operations</option>
                </select>
              </div>
            </div>
          )}

          {/* Admin Security Key (Admin Mode) */}
          {isAdminMode && (
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                Admin Security Invite Key
              </label>
              <div className="relative">
                <KeyRound className="w-4 h-4 text-amber-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  placeholder="FT-ADMIN-SECRET-KEY"
                  value={formData.adminInviteCode}
                  onChange={(e) => setFormData({ ...formData, adminInviteCode: e.target.value })}
                  className="w-full bg-slate-800/80 border border-amber-500/40 rounded-xl pl-10 pr-4 py-2.5 text-sm text-amber-200 focus:outline-none focus:border-amber-400 transition-all"
                />
              </div>
            </div>
          )}

          {/* Password */}
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="••••••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className={`w-full bg-slate-800/60 border rounded-xl pl-10 pr-10 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                  isAdminMode ? "border-slate-700/60 focus:border-red-500" : "border-slate-700/60 focus:border-indigo-500"
                }`}
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

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full mt-2 py-3 rounded-xl font-bold text-sm text-white shadow-lg transition-all flex items-center justify-center gap-2 ${
              isAdminMode 
                ? "bg-gradient-to-r from-red-600 to-amber-600 shadow-red-600/20 hover:opacity-90" 
                : "bg-gradient-to-r from-indigo-600 to-purple-600 shadow-indigo-600/25 hover:opacity-90"
            }`}
          >
            {isAdminMode ? "Register Administrator" : "Create Account"} <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Footer Login Link */}
        <div className="mt-6 pt-6 border-t border-slate-800/80 text-center text-xs text-slate-400">
          Already registered?{" "}
          <Link 
            href="/login" 
            className={`font-bold hover:underline ${isAdminMode ? "text-red-400" : "text-indigo-400"}`}
          >
            Sign In Here
          </Link>
        </div>
      </div>
    </div>
  );
}
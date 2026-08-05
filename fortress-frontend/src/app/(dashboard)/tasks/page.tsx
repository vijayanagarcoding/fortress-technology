"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  ArrowLeft, 
  Target, 
  CheckCircle2, 
  Award, 
  Plus, 
  Search, 
  Zap, 
  ShoppingBag, 
  User, 
  X,
  Sparkles,
  Play
} from "lucide-react";

export default function TasksBountiesPage() {
  const router = useRouter();

  // Tasks State
  const [tasks, setTasks] = useState([
    { id: 1, title: "Optimize DB Indexing Scheme", bounty: 150, completed: false, category: "Engineering", tag: "High Priority" },
    { id: 2, title: "Review UI Accessibility Standards", bounty: 100, completed: true, category: "Design", tag: "Completed" },
    { id: 3, title: "Implement MongoDB Aggregation Logic", bounty: 200, completed: false, category: "Engineering", tag: "Core Module" },
    { id: 4, title: "Draft Sprint Architecture Specs", bounty: 120, completed: false, category: "Documentation", tag: "Urgent" },
  ]);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newBounty, setNewBounty] = useState(150);
  const [newCategory, setNewCategory] = useState("Engineering");
  const [newTag, setNewTag] = useState("High Priority");

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [userCoins, setUserCoins] = useState(1250);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        const nextCompleted = !task.completed;
        setUserCoins(prev => nextCompleted ? prev + task.bounty : prev - task.bounty);
        return { ...task, completed: nextCompleted };
      }
      return task;
    }));
  };

  const handleCreateTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newTask = {
      id: Date.now(),
      title: newTitle.trim(),
      bounty: Number(newBounty),
      completed: false,
      category: newCategory,
      tag: newTag,
    };

    setTasks([newTask, ...tasks]);
    setNewTitle("");
    setNewBounty(150);
    setIsModalOpen(false);
  };

  // Navigate to focus room with task title attached
  const handleSprintTask = (taskTitle: string) => {
    router.push(`/focus?task=${encodeURIComponent(taskTitle)}`);
  };

  return (
    <div className="p-4 sm:p-6 md:p-10 max-w-[1500px] mx-auto space-y-8 selection:bg-emerald-500 selection:text-white relative">
      
      {/* Navigation Back Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
        <Link 
          href="/user-dashboard" 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-xs font-bold text-slate-300 hover:text-white transition-all shadow-md group"
        >
          <ArrowLeft className="w-4 h-4 text-emerald-400 group-hover:-translate-x-1 transition-transform" />
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
            href="/marketplace"
            className="px-3.5 py-1.5 rounded-xl bg-purple-600/15 hover:bg-purple-600/25 border border-purple-500/30 text-purple-300 font-bold text-xs flex items-center gap-1.5 transition-all"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-purple-400" /> Marketplace
          </Link>
          <Link
            href="/profile"
            className="px-3.5 py-1.5 rounded-xl bg-amber-600/15 hover:bg-amber-600/25 border border-amber-500/30 text-amber-300 font-bold text-xs flex items-center gap-1.5 transition-all"
          >
            <User className="w-3.5 h-3.5 text-amber-400" /> Profile & Mastery
          </Link>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center gap-5 relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-xl shadow-emerald-500/20 shrink-0">
            <Target className="w-8 h-8" />
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-white">Task Bounties Board</h1>
            <p className="text-xs text-slate-400 mt-1">Complete ticketed objectives to claim instant Fortress Currency payouts.</p>
          </div>
        </div>

        {/* Treasury Pill & Add Task Button */}
        <div className="flex flex-wrap items-center gap-3 relative z-10">
          <div className="px-4 py-2.5 bg-slate-950/80 border border-amber-500/30 rounded-2xl flex items-center gap-2.5">
            <Award className="w-4 h-4 text-amber-400" />
            <div>
              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Treasury Balance</p>
              <p className="text-xs font-black text-amber-400 font-mono">{userCoins} FC</p>
            </div>
          </div>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-2xl flex items-center gap-2 shadow-lg shadow-emerald-600/20 transition-all hover:scale-105"
          >
            <Plus className="w-4 h-4" /> Create Bounty
          </button>
        </div>
      </div>

      {/* Operations List */}
      <div className="bg-slate-900/60 border border-slate-800/80 rounded-3xl p-6 sm:p-8 backdrop-blur-xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h2 className="text-base font-black text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-400" /> Active Operations List ({tasks.length})
          </h2>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search tasks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-800/80 border border-slate-700/60 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-all"
              />
            </div>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300 rounded-xl px-3 py-2 focus:outline-none cursor-pointer"
            >
              <option value="All">All Categories</option>
              <option value="Engineering">Engineering</option>
              <option value="Documentation">Documentation</option>
              <option value="Design">Design</option>
            </select>
          </div>
        </div>

        <div className="space-y-3">
          {tasks
            .filter(t => 
              t.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
              (selectedCategory === "All" || t.category === selectedCategory)
            )
            .map((task) => (
              <div
                key={task.id}
                className={`p-5 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                  task.completed
                    ? "bg-emerald-950/10 border-emerald-500/30 opacity-70"
                    : "bg-slate-800/40 border-slate-700/60 hover:border-emerald-500/50"
                }`}
              >
                {/* Clickable area to toggle completion */}
                <div 
                  onClick={() => toggleTask(task.id)}
                  className="flex items-center gap-4 cursor-pointer flex-1"
                >
                  <div className={`w-6 h-6 rounded-lg border flex items-center justify-center transition-all shrink-0 ${
                    task.completed ? "bg-emerald-500 border-emerald-400 text-white" : "border-slate-600"
                  }`}>
                    {task.completed && <CheckCircle2 className="w-4 h-4" />}
                  </div>
                  <div>
                    <p className={`text-sm font-semibold ${task.completed ? "line-through text-slate-400" : "text-white"}`}>
                      {task.title}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] font-bold text-slate-500 uppercase">{task.category}</span>
                      <span className="text-slate-700">•</span>
                      <span className="text-[10px] font-semibold text-slate-400">{task.tag}</span>
                    </div>
                  </div>
                </div>

                {/* Right Actions: Bounty + Sprint Button */}
                <div className="flex items-center gap-3 justify-end">
                  <div className="flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-xl">
                    <Award className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-black text-amber-300">+{task.bounty} FC</span>
                  </div>

                  {!task.completed && (
                    <button
                      onClick={() => handleSprintTask(task.title)}
                      className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-md shadow-indigo-600/20 transition-all hover:scale-105"
                      title="Launch Focus Session for this Task"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" /> Sprint Task
                    </button>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Modal Popup for Creating Tasks */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Create New Bounty Task</h3>
                <p className="text-xs text-slate-400">Define ticket parameters and payout rewards.</p>
              </div>
            </div>

            <form onSubmit={handleCreateTask} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase">Task Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Implement Auth Refresh Token Rotation"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700/80 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase">Category</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700/80 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-emerald-400"
                  >
                    <option value="Engineering">Engineering</option>
                    <option value="Documentation">Documentation</option>
                    <option value="Design">Design</option>
                    <option value="Research">Research</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase">Priority Tag</label>
                  <select
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700/80 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-emerald-400"
                  >
                    <option value="High Priority">High Priority</option>
                    <option value="Core Module">Core Module</option>
                    <option value="Urgent">Urgent</option>
                    <option value="Optional">Optional</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase">Bounty Reward (FC Tokens)</label>
                <input
                  type="number"
                  required
                  min={10}
                  max={1000}
                  value={newBounty}
                  onChange={(e) => setNewBounty(Number(e.target.value))}
                  className="w-full bg-slate-800 border border-slate-700/80 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-emerald-400 font-mono"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 font-bold text-xs text-white rounded-xl shadow-lg shadow-emerald-600/20 transition-all mt-2"
              >
                Publish Bounty Ticket
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
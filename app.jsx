import React, { useState } from 'react';
import { TrendingUp, Users, Clock, BarChart3, Award, Heart, Briefcase, Globe } from 'lucide-react';

export default function HRISDashboard() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const tabs = ['📊 Executive', '🛠️ HR Operations', '🤝 HR Service Delivery', '🎓 HR COE', '🏥 HR OHSW', '🚀 Strategic HR'];

  const companies = {
    PSC: { name: 'PSC Construction', hc: 95, performers: 27, ttf: 32, costPerHire: '₱34K', r1: '-9%', r2: '88%', r3: '+6%', r4: '94%' },
    ABC: { name: 'ABC Manufacturing', hc: 52, performers: 15, ttf: 36, costPerHire: '₱36K', r1: '-7%', r2: '82%', r3: '+4%', r4: '90%' },
    CSI: { name: 'CSI Manufacturing', hc: 33, performers: 8, ttf: 38, costPerHire: '₱35K', r1: '-8%', r2: '80%', r3: '+3%', r4: '92%' },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-black p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl md:rounded-3xl p-6 md:p-8 mb-6 md:mb-8 shadow-2xl">
          <h1 className="text-3xl md:text-5xl font-black mb-2">SBU: Construction & Manufacturing Group</h1>
          <p className="text-lg md:text-2xl font-bold text-white/90 mb-2">(CMG)</p>
          <p className="text-lg md:text-xl font-semibold text-white/95 mb-3">HR Shared Services</p>
          <p className="text-base md:text-lg mb-3">PSC • ABC • CSI</p>
          <p className="text-xs md:text-sm text-white/70">6 HR Functional Units • 180 Employees • All values in Philippine Peso (₱)</p>
        </div>

        {/* TABS */}
        <div className="flex gap-2 overflow-x-auto mb-6 md:mb-8 pb-3 md:pb-4 bg-white/5 p-2 md:p-3 rounded-2xl">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-xl font-bold whitespace-nowrap text-sm md:text-base transition transform ${
                activeTab === i
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white/10 text-gray-300 shadow-md hover:bg-white/20'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ========== TAB 0: EXECUTIVE ========== */}
        {activeTab === 0 && (
          <div className="space-y-6">
            {/* COMPANY SELECTOR */}
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {['PSC', 'ABC', 'CSI'].map((code) => (
                <button
                  key={code}
                  onClick={() => setSelectedCompany(code)}
                  className={`p-3 md:p-4 rounded-xl md:rounded-2xl font-bold text-sm md:text-base transition transform hover:scale-105 ${
                    selectedCompany === code
                      ? 'bg-gradient-to-br from-cyan-400 to-blue-600 text-white shadow-2xl'
                      : 'bg-white/10 text-white shadow-lg hover:bg-white/20'
                  }`}
                >
                  {code}
                </button>
              ))}
            </div>

            {/* COMPANY BREAKDOWN */}
            {selectedCompany && (
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl md:rounded-3xl p-6 md:p-8 border-2 border-cyan-400 shadow-2xl">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl md:text-4xl font-black text-white">{companies[selectedCompany].name}</h2>
                    <p className="text-cyan-300 font-bold text-sm md:text-base">Company Breakdown</p>
                  </div>
                  <button onClick={() => setSelectedCompany(null)} className="text-white/60 hover:text-white text-2xl">✕</button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                  <div className="bg-white/10 rounded-lg p-3 md:p-4 text-center">
                    <p className="text-white/70 text-xs md:text-sm">Headcount</p>
                    <p className="text-2xl md:text-4xl font-black text-cyan-300">{companies[selectedCompany].hc}</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 md:p-4 text-center">
                    <p className="text-white/70 text-xs md:text-sm">High Performers</p>
                    <p className="text-2xl md:text-4xl font-black text-green-400">{companies[selectedCompany].performers}</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 md:p-4 text-center">
                    <p className="text-white/70 text-xs md:text-sm">Time-to-Fill</p>
                    <p className="text-2xl md:text-4xl font-black text-yellow-400">{companies[selectedCompany].ttf}d</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 md:p-4 text-center">
                    <p className="text-white/70 text-xs md:text-sm">Cost-per-Hire</p>
                    <p className="text-xl md:text-3xl font-black text-purple-400">{companies[selectedCompany].costPerHire}</p>
                  </div>
                </div>
              </div>
            )}

            {/* ROCKS OVERVIEW */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
              <div className="bg-gradient-to-br from-emerald-400 to-green-600 text-white rounded-2xl p-4 md:p-8 shadow-xl">
                <p className="text-white/80 font-semibold text-xs md:text-sm">ROCK 1</p>
                <h3 className="text-lg md:text-2xl font-black mt-2">Cash Position</h3>
                <p className="text-3xl md:text-5xl font-black mt-3">-8%</p>
                <p className="text-white/70 text-xs md:text-sm mt-1">Cost-per-Hire Savings</p>
              </div>
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-2xl p-4 md:p-8 shadow-xl">
                <p className="text-white/80 font-semibold text-xs md:text-sm">ROCK 2</p>
                <h3 className="text-lg md:text-2xl font-black mt-2">Succession</h3>
                <p className="text-3xl md:text-5xl font-black mt-3">85%</p>
                <p className="text-white/70 text-xs md:text-sm mt-1">Coverage Target</p>
              </div>
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 text-white rounded-2xl p-4 md:p-8 shadow-xl">
                <p className="text-white/80 font-semibold text-xs md:text-sm">ROCK 3</p>
                <h3 className="text-lg md:text-2xl font-black mt-2">Productivity</h3>
                <p className="text-3xl md:text-5xl font-black mt-3">+5%</p>
                <p className="text-white/70 text-xs md:text-sm mt-1">FTE Output Gain</p>
              </div>
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded-2xl p-4 md:p-8 shadow-xl">
                <p className="text-white/80 font-semibold text-xs md:text-sm">ROCK 4</p>
                <h3 className="text-lg md:text-2xl font-black mt-2">Partnership</h3>
                <p className="text-3xl md:text-5xl font-black mt-3">92%</p>
                <p className="text-white/70 text-xs md:text-sm mt-1">Mgmt Readiness</p>
              </div>
            </div>

            {/* CMG KPIs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-4 md:p-6 shadow-lg">
                <p className="text-white/80 text-xs md:text-sm font-medium">Active Headcount</p>
                <p className="text-3xl md:text-5xl font-black mt-3">180</p>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl p-4 md:p-6 shadow-lg">
                <p className="text-white/80 text-xs md:text-sm font-medium">High Performers</p>
                <p className="text-3xl md:text-5xl font-black mt-3">50</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-500 to-orange-600 text-white rounded-2xl p-4 md:p-6 shadow-lg">
                <p className="text-white/80 text-xs md:text-sm font-medium">Time-to-Fill</p>
                <p className="text-3xl md:text-5xl font-black mt-3">35d</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-2xl p-4 md:p-6 shadow-lg">
                <p className="text-white/80 text-xs md:text-sm font-medium">Employee Satisfaction</p>
                <p className="text-3xl md:text-5xl font-black mt-3">4.3</p>
              </div>
            </div>
          </div>
        )}

        {/* ========== TAB 1: HR OPERATIONS ========== */}
        {activeTab === 1 && (
          <div className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-black text-white">HR Operations</h2>
            
            {/* RECRUITMENT */}
            <div className="bg-gradient-to-br from-green-900 to-emerald-800 rounded-2xl p-6 md:p-8 border border-green-500 shadow-xl">
              <h3 className="text-xl md:text-2xl font-black text-green-300 mb-6">Recruitment & Selection Pipeline</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="text-white/70 text-sm">Open PRFs</p>
                  <p className="text-4xl md:text-5xl font-black text-green-400 mt-2">15</p>
                  <p className="text-xs text-white/50 mt-1">Awaiting filling</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="text-white/70 text-sm">Time-to-Fill</p>
                  <p className="text-4xl md:text-5xl font-black text-yellow-400 mt-2">35</p>
                  <p className="text-xs text-white/50 mt-1">days average</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="text-white/70 text-sm">Cost-per-Hire</p>
                  <p className="text-3xl md:text-4xl font-black text-purple-400 mt-2">₱35K</p>
                  <p className="text-xs text-white/50 mt-1">CMG average</p>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-white font-bold text-sm mb-3">Recruitment Funnel (120 applications)</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs md:text-sm">
                    <span className="text-white">Screening Pass: 45</span>
                    <span className="text-white/50">38%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded h-2"><div className="bg-green-500 h-2 rounded w-3/8"></div></div>
                  <div className="flex justify-between text-xs md:text-sm mt-3">
                    <span className="text-white">Technical Interview: 18</span>
                    <span className="text-white/50">40%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded h-2"><div className="bg-yellow-500 h-2 rounded w-2/5"></div></div>
                  <div className="flex justify-between text-xs md:text-sm mt-3">
                    <span className="text-white">Final Approved: 5</span>
                    <span className="text-white/50">28%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded h-2"><div className="bg-purple-500 h-2 rounded w-1/4"></div></div>
                </div>
              </div>
            </div>

            {/* PERFORMANCE MANAGEMENT */}
            <div className="bg-gradient-to-br from-yellow-900 to-orange-800 rounded-2xl p-6 md:p-8 border border-yellow-500 shadow-xl">
              <h3 className="text-xl md:text-2xl font-black text-yellow-300 mb-6">Performance Management</h3>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-6">
                <div className="bg-white/10 rounded-lg p-4 text-center border-l-4 border-red-500">
                  <p className="text-white/70 text-xs md:text-sm">Rating 1</p>
                  <p className="text-2xl md:text-3xl font-black text-red-400 mt-2">5</p>
                  <p className="text-xs text-white/50">Unsatisfactory</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center border-l-4 border-orange-500">
                  <p className="text-white/70 text-xs md:text-sm">Rating 2</p>
                  <p className="text-2xl md:text-3xl font-black text-orange-400 mt-2">15</p>
                  <p className="text-xs text-white/50">Needs Improvement</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center border-l-4 border-yellow-500">
                  <p className="text-white/70 text-xs md:text-sm">Rating 3</p>
                  <p className="text-2xl md:text-3xl font-black text-yellow-400 mt-2">110</p>
                  <p className="text-xs text-white/50">Meets Expectation</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center border-l-4 border-blue-500">
                  <p className="text-white/70 text-xs md:text-sm">Rating 4</p>
                  <p className="text-2xl md:text-3xl font-black text-blue-400 mt-2">42</p>
                  <p className="text-xs text-white/50">Exceeds</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center border-l-4 border-green-500">
                  <p className="text-white/70 text-xs md:text-sm">Rating 5</p>
                  <p className="text-2xl md:text-3xl font-black text-green-400 mt-2">8</p>
                  <p className="text-xs text-white/50">Outstanding</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-white font-bold text-sm mb-3">Performance-Based Compensation YTD</p>
                  <p className="text-3xl md:text-4xl font-black text-yellow-400">₱828K</p>
                  <p className="text-xs text-white/50 mt-1">Total compensation impact across all ratings</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-white font-bold text-sm mb-3">Eligible for Promotion</p>
                  <p className="text-3xl md:text-4xl font-black text-green-400">18</p>
                  <p className="text-xs text-white/50 mt-1">Rating ≥3 for 2+ periods</p>
                </div>
              </div>
            </div>

            {/* TRAINING & DEVELOPMENT */}
            <div className="bg-gradient-to-br from-blue-900 to-indigo-800 rounded-2xl p-6 md:p-8 border border-blue-500 shadow-xl">
              <h3 className="text-xl md:text-2xl font-black text-blue-300 mb-6">Training & Development</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-white font-bold text-sm mb-3">Compliance Rate</p>
                  <p className="text-4xl md:text-5xl font-black text-blue-400">88%</p>
                  <p className="text-xs text-white/50 mt-1">Target: 95%</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-white font-bold text-sm mb-3">Active Programs</p>
                  <p className="text-4xl md:text-5xl font-black text-cyan-400">20</p>
                  <p className="text-xs text-white/50 mt-1">Ongoing training catalog</p>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-white font-bold text-sm mb-3">Enrollment by Category</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs md:text-sm">
                    <span className="text-white">Mandatory/Regulatory</span>
                    <span className="text-white/50">45/93%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded h-2"><div className="bg-red-500 h-2 rounded" style={{width: '93%'}}></div></div>
                  <div className="flex justify-between text-xs md:text-sm mt-3">
                    <span className="text-white">Technical/Skills</span>
                    <span className="text-white/50">60/80%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded h-2"><div className="bg-blue-500 h-2 rounded" style={{width: '80%'}}></div></div>
                  <div className="flex justify-between text-xs md:text-sm mt-3">
                    <span className="text-white">Leadership Development</span>
                    <span className="text-white/50">20/80%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded h-2"><div className="bg-purple-500 h-2 rounded" style={{width: '80%'}}></div></div>
                  <div className="flex justify-between text-xs md:text-sm mt-3">
                    <span className="text-white">Professional Development</span>
                    <span className="text-white/50">15/80%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded h-2"><div className="bg-green-500 h-2 rounded" style={{width: '80%'}}></div></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========== TAB 2: HR SERVICE DELIVERY ========== */}
        {activeTab === 2 && (
          <div className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-black text-white">HR Service Delivery</h2>
            
            {/* COMPENSATION */}
            <div className="bg-gradient-to-br from-purple-900 to-pink-800 rounded-2xl p-6 md:p-8 border border-purple-500 shadow-xl">
              <h3 className="text-xl md:text-2xl font-black text-purple-300 mb-6">Compensation Management</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 rounded-lg p-4 border-l-4 border-purple-400">
                  <p className="text-white/70 text-sm">Performance-Based Pay YTD</p>
                  <p className="text-4xl md:text-5xl font-black text-purple-400 mt-2">₱828K</p>
                  <p className="text-xs text-white/50 mt-1">Multiplier range: 0% - 15%</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 border-l-4 border-pink-400">
                  <p className="text-white/70 text-sm">Salary Structure Compliance</p>
                  <p className="text-4xl md:text-5xl font-black text-pink-400 mt-2">98%</p>
                  <p className="text-xs text-white/50 mt-1">Within approved JG bands</p>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-white font-bold text-sm mb-3">Compensation by Rating</p>
                <div className="space-y-2 text-xs md:text-sm">
                  <div className="flex justify-between">
                    <span className="text-white">Rating 5 (+15%)</span>
                    <span className="text-purple-300 font-bold">8 employees • ₱48K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white">Rating 4 (+12%)</span>
                    <span className="text-purple-300 font-bold">42 employees • ₱252K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white">Rating 3 (+10%)</span>
                    <span className="text-purple-300 font-bold">110 employees • ₱528K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white">Rating 1-2 (+0%)</span>
                    <span className="text-purple-300 font-bold">20 employees • ₱0K</span>
                  </div>
                </div>
              </div>
            </div>

            {/* BENEFITS */}
            <div className="bg-gradient-to-br from-teal-900 to-cyan-800 rounded-2xl p-6 md:p-8 border border-teal-500 shadow-xl">
              <h3 className="text-xl md:text-2xl font-black text-teal-300 mb-6">Benefits Administration</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-white/70 text-sm">Total Benefits Spend</p>
                  <p className="text-3xl md:text-4xl font-black text-teal-400 mt-2">₱25.5M</p>
                  <p className="text-xs text-white/50 mt-1">Annual company contribution</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-white/70 text-sm">Enrollment Rate</p>
                  <p className="text-3xl md:text-4xl font-black text-cyan-400 mt-2">95%</p>
                  <p className="text-xs text-white/50 mt-1">Average across all benefits</p>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-white font-bold text-sm mb-3">Benefits Breakdown</p>
                <div className="space-y-2 text-xs md:text-sm">
                  <div className="flex justify-between"><span className="text-white">Health Insurance</span><span className="text-cyan-300">178/180 (99%)</span></div>
                  <div className="flex justify-between"><span className="text-white">Life Insurance</span><span className="text-cyan-300">176/180 (98%)</span></div>
                  <div className="flex justify-between"><span className="text-white">Pension Fund</span><span className="text-cyan-300">165/180 (92%)</span></div>
                  <div className="flex justify-between"><span className="text-white">HMO/Medical Card</span><span className="text-cyan-300">160/180 (89%)</span></div>
                  <div className="flex justify-between"><span className="text-white">Educational Assistance</span><span className="text-cyan-300">45/180 (25%)</span></div>
                </div>
              </div>
            </div>

            {/* TOTAL REWARDS */}
            <div className="bg-gradient-to-br from-rose-900 to-red-800 rounded-2xl p-6 md:p-8 border border-rose-500 shadow-xl">
              <h3 className="text-xl md:text-2xl font-black text-rose-300 mb-6">Total Rewards Program</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-white font-bold text-sm mb-3">Total Rewards Pool</p>
                  <p className="text-3xl md:text-4xl font-black text-rose-400">₱207.2M</p>
                  <p className="text-xs text-white/50 mt-1">Annual all-in compensation</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-white font-bold text-sm mb-3">Avg per Employee</p>
                  <p className="text-3xl md:text-4xl font-black text-pink-400">₱1.15M</p>
                  <p className="text-xs text-white/50 mt-1">Salary + benefits + incentives</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========== TAB 3: HR COE ========== */}
        {activeTab === 3 && (
          <div className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-black text-white">HR Center of Excellence</h2>

            {/* ENGAGEMENT */}
            <div className="bg-gradient-to-br from-green-900 to-emerald-800 rounded-2xl p-6 md:p-8 border border-green-500 shadow-xl">
              <h3 className="text-xl md:text-2xl font-black text-green-300 mb-6">Team Building & Engagement</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <p className="text-white/70 text-sm">Overall Engagement</p>
                  <p className="text-4xl md:text-5xl font-black text-green-400 mt-2">4.3</p>
                  <p className="text-xs text-white/50 mt-1">Out of 5.0 (Target: 4.5)</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <p className="text-white/70 text-sm">Participation Rate</p>
                  <p className="text-4xl md:text-5xl font-black text-cyan-400 mt-2">68%</p>
                  <p className="text-xs text-white/50 mt-1">122 of 180 employees</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <p className="text-white/70 text-sm">Annual Budget</p>
                  <p className="text-3xl md:text-4xl font-black text-yellow-400 mt-2">₱900K</p>
                  <p className="text-xs text-white/50 mt-1">Team building activities</p>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-white font-bold text-sm mb-3">Engagement Survey Dimensions</p>
                <div className="space-y-2 text-xs md:text-sm">
                  <div className="flex justify-between"><span className="text-white">Leadership & Management</span><span className="text-green-300">4.2/5</span></div>
                  <div className="flex justify-between"><span className="text-white">Work Environment</span><span className="text-green-300">4.4/5</span></div>
                  <div className="flex justify-between"><span className="text-white">Career Development</span><span className="text-yellow-300">3.9/5</span></div>
                  <div className="flex justify-between"><span className="text-white">Recognition & Rewards</span><span className="text-yellow-300">3.8/5</span></div>
                  <div className="flex justify-between"><span className="text-white">Team Collaboration</span><span className="text-green-300">4.5/5</span></div>
                </div>
              </div>
            </div>

            {/* CSR */}
            <div className="bg-gradient-to-br from-blue-900 to-indigo-800 rounded-2xl p-6 md:p-8 border border-blue-500 shadow-xl">
              <h3 className="text-xl md:text-2xl font-black text-blue-300 mb-6">Corporate Social Responsibility</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 rounded-lg p-4 border-l-4 border-blue-400">
                  <p className="text-white/70 text-sm">Total CSR Investment</p>
                  <p className="text-3xl md:text-4xl font-black text-blue-400 mt-2">₱810K</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 border-l-4 border-cyan-400">
                  <p className="text-white/70 text-sm">Volunteer Hours</p>
                  <p className="text-3xl md:text-4xl font-black text-cyan-400 mt-2">480 hrs</p>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-white font-bold text-sm mb-3">CSR Initiatives</p>
                <div className="space-y-2 text-xs md:text-sm">
                  <div className="flex justify-between"><span className="text-white">Community Construction Program</span><span className="text-blue-300">25 families</span></div>
                  <div className="flex justify-between"><span className="text-white">Educational Scholarship</span><span className="text-blue-300">12 scholars</span></div>
                  <div className="flex justify-between"><span className="text-white">Environmental Cleanup</span><span className="text-blue-300">3 communities</span></div>
                  <div className="flex justify-between"><span className="text-white">Health Outreach</span><span className="text-blue-300">150 beneficiaries</span></div>
                </div>
              </div>
            </div>

            {/* KNOWLEDGE MANAGEMENT */}
            <div className="bg-gradient-to-br from-violet-900 to-purple-800 rounded-2xl p-6 md:p-8 border border-violet-500 shadow-xl">
              <h3 className="text-xl md:text-2xl font-black text-violet-300 mb-6">Knowledge Management</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-white/70 text-sm">Document Repository</p>
                  <p className="text-3xl md:text-4xl font-black text-violet-400 mt-2">1,200+</p>
                  <p className="text-xs text-white/50 mt-1">Knowledge base articles</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-white/70 text-sm">Best Practices Captured</p>
                  <p className="text-3xl md:text-4xl font-black text-pink-400 mt-2">18</p>
                  <p className="text-xs text-white/50 mt-1">Implemented improvements</p>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-white font-bold text-sm mb-3">Knowledge Sharing Channels</p>
                <div className="space-y-2 text-xs md:text-sm">
                  <div className="flex justify-between"><span className="text-white">Brown Bag Lunch & Learn</span><span className="text-violet-300">8 sessions/monthly</span></div>
                  <div className="flex justify-between"><span className="text-white">Technical Workshops</span><span className="text-violet-300">6 sessions/quarterly</span></div>
                  <div className="flex justify-between"><span className="text-white">Mentorship Program</span><span className="text-violet-300">12 pairs active</span></div>
                  <div className="flex justify-between"><span className="text-white">SME Network</span><span className="text-violet-300">45 experts (25%)</span></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========== TAB 4: HR OHSW ========== */}
        {activeTab === 4 && (
          <div className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-black text-white">HR Occupational Health, Safety & Wellbeing</h2>

            {/* SAFETY TRAINING */}
            <div className="bg-gradient-to-br from-red-900 to-orange-800 rounded-2xl p-6 md:p-8 border border-red-500 shadow-xl">
              <h3 className="text-xl md:text-2xl font-black text-red-300 mb-6">Safety Training & Compliance</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-6">
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <p className="text-white/70 text-xs md:text-sm">Training Compliance</p>
                  <p className="text-3xl md:text-4xl font-black text-red-400 mt-2">92%</p>
                  <p className="text-xs text-white/50">307/329 trained</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <p className="text-white/70 text-xs md:text-sm">Incident Rate</p>
                  <p className="text-3xl md:text-4xl font-black text-orange-400 mt-2">1.2%</p>
                  <p className="text-xs text-white/50">Target: 1.0%</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <p className="text-white/70 text-xs md:text-sm">Near Misses YTD</p>
                  <p className="text-3xl md:text-4xl font-black text-yellow-400 mt-2">18</p>
                  <p className="text-xs text-white/50">Down 15% from last yr</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <p className="text-white/70 text-xs md:text-sm">Lost-Time Injuries</p>
                  <p className="text-3xl md:text-4xl font-black text-green-400 mt-2">1</p>
                  <p className="text-xs text-white/50">YTD (strong performance)</p>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-white font-bold text-sm mb-3">Safety Program Effectiveness</p>
                <div className="space-y-2 text-xs md:text-sm">
                  <div className="flex justify-between"><span className="text-white">Monthly Hazard Audits</span><span className="text-red-300">24 conducted</span></div>
                  <div className="flex justify-between"><span className="text-white">Hazards Identified</span><span className="text-red-300">156 total</span></div>
                  <div className="flex justify-between"><span className="text-white">Corrective Actions</span><span className="text-green-300">148 completed (95%)</span></div>
                  <div className="flex justify-between"><span className="text-white">Safety Committee Meetings</span><span className="text-red-300">12/year (monthly)</span></div>
                </div>
              </div>
            </div>

            {/* HEALTH & WELLNESS */}
            <div className="bg-gradient-to-br from-green-900 to-teal-800 rounded-2xl p-6 md:p-8 border border-green-500 shadow-xl">
              <h3 className="text-xl md:text-2xl font-black text-green-300 mb-6">Overall Wellbeing & Health</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-white/70 text-sm">Wellness Participation</p>
                  <p className="text-4xl md:text-5xl font-black text-green-400 mt-2">68%</p>
                  <p className="text-xs text-white/50 mt-1">122 of 180 employees</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-white/70 text-sm">Absence Rate</p>
                  <p className="text-4xl md:text-5xl font-black text-cyan-400 mt-2">2.8%</p>
                  <p className="text-xs text-white/50 mt-1">Industry avg: 4.2% ✓</p>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-white font-bold text-sm mb-3">Wellness Program Participation</p>
                <div className="space-y-2 text-xs md:text-sm">
                  <div className="flex justify-between"><span className="text-white">Physical Wellness</span><span className="text-green-300">54 participants (30%)</span></div>
                  <div className="flex justify-between"><span className="text-white">Mental Wellness</span><span className="text-green-300">24 participants (13%)</span></div>
                  <div className="flex justify-between"><span className="text-white">Financial Wellness</span><span className="text-green-300">12 participants (7%)</span></div>
                  <div className="flex justify-between"><span className="text-white">Social & Occupational</span><span className="text-green-300">162 participants (90%)</span></div>
                </div>
              </div>
            </div>

            {/* HEALTH RECORDS */}
            <div className="bg-gradient-to-br from-indigo-900 to-blue-800 rounded-2xl p-6 md:p-8 border border-indigo-500 shadow-xl">
              <h3 className="text-xl md:text-2xl font-black text-indigo-300 mb-6">Employee Health & Medical Records</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-white/70 text-sm">Annual Medical Checkup</p>
                  <p className="text-3xl md:text-4xl font-black text-indigo-400 mt-2">172/180</p>
                  <p className="text-xs text-white/50 mt-1">96% completion rate</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-white/70 text-sm">Return-to-Work Rate</p>
                  <p className="text-3xl md:text-4xl font-black text-blue-400 mt-2">99%</p>
                  <p className="text-xs text-white/50 mt-1">Post-medical leave</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========== TAB 5: STRATEGIC HR ========== */}
        {activeTab === 5 && (
          <div className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-black text-white">Strategic HR</h2>

            {/* ROCKS ALIGNMENT */}
            <div className="bg-gradient-to-br from-violet-900 to-purple-800 rounded-2xl p-6 md:p-8 border border-violet-500 shadow-xl">
              <h3 className="text-xl md:text-2xl font-black text-violet-300 mb-6">PGB Rocks Alignment</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 rounded-lg p-4 border-l-4 border-green-400">
                  <p className="text-white font-bold">Rock 1: Cash Position</p>
                  <p className="text-3xl md:text-4xl font-black text-green-400 mt-2">90%</p>
                  <p className="text-xs text-white/50 mt-1">Cost optimization on track</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 border-l-4 border-blue-400">
                  <p className="text-white font-bold">Rock 2: Succession</p>
                  <p className="text-3xl md:text-4xl font-black text-blue-400 mt-2">88%</p>
                  <p className="text-xs text-white/50 mt-1">Coverage at 85%, close to target</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 border-l-4 border-yellow-400">
                  <p className="text-white font-bold">Rock 3: Productivity</p>
                  <p className="text-3xl md:text-4xl font-black text-yellow-400 mt-2">85%</p>
                  <p className="text-xs text-white/50 mt-1">Process efficiency improving</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 border-l-4 border-orange-400">
                  <p className="text-white font-bold">Rock 4: Partnership</p>
                  <p className="text-3xl md:text-4xl font-black text-orange-400 mt-2">90%</p>
                  <p className="text-xs text-white/50 mt-1">Mgmt readiness strong at 92%</p>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center border-2 border-violet-400">
                <p className="text-white font-bold text-sm mb-2">Overall CMG Rocks Alignment</p>
                <p className="text-5xl md:text-6xl font-black text-violet-400">88%</p>
                <p className="text-sm text-white/70 mt-2">Target Q4 2026: 92% 📈</p>
              </div>
            </div>

            {/* 5 Ms ALIGNMENT */}
            <div className="bg-gradient-to-br from-rose-900 to-red-800 rounded-2xl p-6 md:p-8 border border-rose-500 shadow-xl">
              <h3 className="text-xl md:text-2xl font-black text-rose-300 mb-6">Strategic Alignment (5 Ms)</h3>
              <div className="space-y-3">
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-white font-bold text-sm mb-2">💰 Money (Financial Efficiency)</p>
                  <p className="text-xs text-white/70 space-y-1">
                    <div>• Cost-per-Hire: ₱35K (-8% target achieved)</div>
                    <div>• Payroll Accuracy: 99.8%</div>
                    <div>• Benefits Control: 13% of total comp</div>
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-white font-bold text-sm mb-2">⚙️ Method (Process Efficiency)</p>
                  <p className="text-xs text-white/70 space-y-1">
                    <div>• Time-to-Fill: 35 days (industry standard)</div>
                    <div>• Selection Quality: 87% 90-day success rate</div>
                    <div>• Onboarding: 100% 100-day completion</div>
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-white font-bold text-sm mb-2">👥 Manpower (Workforce Planning)</p>
                  <p className="text-xs text-white/70 space-y-1">
                    <div>• Right-sizing: 8.3% vacancy rate (15 open positions)</div>
                    <div>• Competency Coverage: 72% at L2+ level</div>
                    <div>• Succession Ready: 5 ready now, 15 high potentials</div>
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-white font-bold text-sm mb-2">🔧 Machines (Systems & Tools)</p>
                  <p className="text-xs text-white/70 space-y-1">
                    <div>• HRIS Adoption: 85% planned</div>
                    <div>• Data Accuracy: 96% records complete</div>
                    <div>• System Uptime: 99.5%</div>
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-white font-bold text-sm mb-2">📊 Materials (Information & Insights)</p>
                  <p className="text-xs text-white/70 space-y-1">
                    <div>• Analytics Dashboards: 6 live</div>
                    <div>• Data-Driven Decisions: 75% of HR decisions</div>
                    <div>• Best Practices Documented: 18 YTD</div>
                  </p>
                </div>
              </div>
            </div>

            {/* STRATEGIC INITIATIVES */}
            <div className="bg-gradient-to-br from-indigo-900 to-blue-800 rounded-2xl p-6 md:p-8 border border-indigo-500 shadow-xl">
              <h3 className="text-xl md:text-2xl font-black text-indigo-300 mb-6">Strategic Initiatives Tracking</h3>
              <div className="space-y-3">
                <div className="bg-white/10 rounded-lg p-4 border-l-4 border-green-400">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-white font-bold">Succession Acceleration Program</p>
                      <p className="text-xs text-white/50">Accelerate high-potential development</p>
                    </div>
                    <span className="text-green-400 font-black">ON TRACK</span>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 border-l-4 border-yellow-400">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-white font-bold">Process Reengineering</p>
                      <p className="text-xs text-white/50">Boost productivity & efficiency</p>
                    </div>
                    <span className="text-yellow-400 font-black">IN PROGRESS</span>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 border-l-4 border-blue-400">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-white font-bold">Competency Gap Closure</p>
                      <p className="text-xs text-white/50">Targeted technical training program</p>
                    </div>
                    <span className="text-blue-400 font-black">ONGOING</span>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 border-l-4 border-purple-400">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-white font-bold">Recruitment Tightening</p>
                      <p className="text-xs text-white/50">Cost control & quality improvement</p>
                    </div>
                    <span className="text-purple-400 font-black">Q4 FOCUS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* FOOTER */}
      <div className="max-w-7xl mx-auto mt-8 md:mt-12 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-center py-6 md:py-8 rounded-2xl shadow-lg">
        <p className="text-xs md:text-base font-bold">PGB HRIS Executive Dashboard | CMG Pilot (PSC, ABC, CSI) | All values in Philippine Peso (₱)</p>
        <p className="text-xs text-white/50 mt-2">Last Updated: August 2026 | Mock Data for Executive Review</p>
      </div>
    </div>
  );
}

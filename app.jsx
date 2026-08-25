import React, { useState } from 'react';

export default function HRISDashboard() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ['📊 Executive', '💼 Recruitment', '⭐ Performance', '🎯 Talent', '📚 Training', '🏥 OHSW', '🛠️ Service'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-3xl p-8 mb-8 shadow-2xl">
          <h1 className="text-6xl font-black mb-2">PGB HRIS</h1>
          <p className="text-xl">PSC • ABC • CSI</p>
        </div>

        {/* TABS */}
        <div className="flex gap-2 overflow-x-auto mb-8 pb-4">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-6 py-3 rounded-xl font-bold whitespace-nowrap transition transform ${
                activeTab === i
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 shadow-md hover:shadow-lg'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* EXECUTIVE DASHBOARD */}
        {activeTab === 0 && (
          <div className="space-y-8">
            {/* ROCKS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-emerald-400 to-green-600 text-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition transform hover:scale-105">
                <div className="text-5xl mb-3">💰</div>
                <p className="text-white/80 font-semibold">ROCK 1</p>
                <h3 className="text-2xl font-black mt-2">Cash Position</h3>
                <p className="text-4xl font-black mt-3">-8%</p>
                <p className="text-white/70 text-sm mt-1">Cost-per-Hire Savings</p>
              </div>

              <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition transform hover:scale-105">
                <div className="text-5xl mb-3">👥</div>
                <p className="text-white/80 font-semibold">ROCK 2</p>
                <h3 className="text-2xl font-black mt-2">Succession</h3>
                <p className="text-4xl font-black mt-3">85%</p>
                <p className="text-white/70 text-sm mt-1">Coverage Target</p>
              </div>

              <div className="bg-gradient-to-br from-purple-400 to-purple-600 text-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition transform hover:scale-105">
                <div className="text-5xl mb-3">📈</div>
                <p className="text-white/80 font-semibold">ROCK 3</p>
                <h3 className="text-2xl font-black mt-2">Productivity</h3>
                <p className="text-4xl font-black mt-3">+5%</p>
                <p className="text-white/70 text-sm mt-1">FTE Output Gain</p>
              </div>

              <div className="bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition transform hover:scale-105">
                <div className="text-5xl mb-3">🤝</div>
                <p className="text-white/80 font-semibold">ROCK 4</p>
                <h3 className="text-2xl font-black mt-2">Partnership</h3>
                <p className="text-4xl font-black mt-3">92%</p>
                <p className="text-white/70 text-sm mt-1">Mgmt Readiness</p>
              </div>
            </div>

            {/* KPIs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
                <p className="text-white/80 text-sm font-medium">Active Headcount</p>
                <p className="text-5xl font-black mt-3">180</p>
                <p className="text-white/70 text-xs mt-1">Employees</p>
              </div>

              <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
                <p className="text-white/80 text-sm font-medium">High Performers</p>
                <p className="text-5xl font-black mt-3">50</p>
                <p className="text-white/70 text-xs mt-1">Rating 4-5</p>
              </div>

              <div className="bg-gradient-to-br from-yellow-500 to-orange-600 text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
                <p className="text-white/80 text-sm font-medium">Time-to-Fill</p>
                <p className="text-5xl font-black mt-3">35</p>
                <p className="text-white/70 text-xs mt-1">Days Avg</p>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
                <p className="text-white/80 text-sm font-medium">Cost-per-Hire</p>
                <p className="text-4xl font-black mt-3">₱35K</p>
                <p className="text-white/70 text-xs mt-1">CMG Average</p>
              </div>
            </div>

            {/* SUMMARY */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-100 to-emerald-200 rounded-2xl p-8 border-3 border-green-300 shadow-lg hover:shadow-xl transition">
                <h3 className="text-2xl font-black text-green-900 mb-4">✓ Highlights</h3>
                <ul className="space-y-2 text-green-800 font-semibold">
                  <li>✓ 180 active headcount</li>
                  <li>✓ 28% high performer rate</li>
                  <li>✓ 85% succession coverage</li>
                  <li>✓ 35-day time-to-fill</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-yellow-100 to-orange-200 rounded-2xl p-8 border-3 border-yellow-300 shadow-lg hover:shadow-xl transition">
                <h3 className="text-2xl font-black text-yellow-900 mb-4">⚠️ Areas to Watch</h3>
                <ul className="space-y-2 text-yellow-800 font-semibold">
                  <li>• 3 critical positions open</li>
                  <li>• Training compliance 88%</li>
                  <li>• 2 employees on PIP</li>
                  <li>• 1 incident in July</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-100 to-cyan-200 rounded-2xl p-8 border-3 border-blue-300 shadow-lg hover:shadow-xl transition">
                <h3 className="text-2xl font-black text-blue-900 mb-4">⏰ Next 90 Days</h3>
                <ul className="space-y-2 text-blue-800 font-semibold">
                  <li>1. Finalize Succession</li>
                  <li>2. Talent Calibration</li>
                  <li>3. Dev Plan Launch</li>
                  <li>4. Q4 Reviews</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* RECRUITMENT */}
        {activeTab === 1 && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-400 to-emerald-600 text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
                <p className="text-white/80 text-sm font-medium">Time-to-Fill</p>
                <p className="text-5xl font-black mt-3">35</p>
                <p className="text-white/70 text-xs mt-1">days</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-400 to-teal-600 text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
                <p className="text-white/80 text-sm font-medium">Quality-of-Hire</p>
                <p className="text-5xl font-black mt-3">87%</p>
                <p className="text-white/70 text-xs mt-1">Success Rate</p>
              </div>
              <div className="bg-gradient-to-br from-teal-400 to-cyan-600 text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
                <p className="text-white/80 text-sm font-medium">Cost-per-Hire</p>
                <p className="text-4xl font-black mt-3">₱35K</p>
                <p className="text-white/70 text-xs mt-1">Avg</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-emerald-200 rounded-2xl p-8 border-3 border-green-400 shadow-lg">
              <h2 className="text-4xl font-black text-green-900 mb-6">Recruitment Pipeline</h2>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-5xl font-black text-green-700">15</p>
                  <p className="text-green-800 font-bold mt-2">Open PRFs</p>
                </div>
                <div>
                  <p className="text-5xl font-black text-emerald-700">120</p>
                  <p className="text-emerald-800 font-bold mt-2">Candidates</p>
                </div>
                <div>
                  <p className="text-5xl font-black text-teal-700">5</p>
                  <p className="text-teal-800 font-bold mt-2">Final Round</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PERFORMANCE */}
        {activeTab === 2 && (
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-yellow-100 to-orange-200 rounded-2xl p-8 border-3 border-yellow-400 shadow-lg">
              <h2 className="text-4xl font-black text-yellow-900 mb-6">Performance Management</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-yellow-700 font-bold">Compensation Impact</p>
                  <p className="text-5xl font-black text-yellow-900 mt-2">₱828K</p>
                  <p className="text-yellow-700 font-semibold">YTD</p>
                </div>
                <div className="text-center">
                  <p className="text-orange-700 font-bold">Multiplier</p>
                  <p className="text-5xl font-black text-orange-900 mt-2">+15%</p>
                  <p className="text-orange-700 font-semibold">Rating Based</p>
                </div>
                <div className="text-center">
                  <p className="text-amber-700 font-bold">Rating Scale</p>
                  <p className="text-5xl font-black text-amber-900 mt-2">1-5</p>
                  <p className="text-amber-700 font-semibold">Levels</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TALENT */}
        {activeTab === 3 && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-8 border-3 border-purple-400 shadow-lg text-center hover:shadow-xl transition">
                <p className="text-purple-700 font-bold text-lg">Succession Coverage</p>
                <p className="text-6xl font-black text-purple-900 mt-2">85%</p>
                <p className="text-purple-700 font-semibold">Critical Roles</p>
              </div>
              <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl p-8 border-3 border-pink-400 shadow-lg text-center hover:shadow-xl transition">
                <p className="text-pink-700 font-bold text-lg">High Potentials</p>
                <p className="text-6xl font-black text-pink-900 mt-2">15</p>
                <p className="text-pink-700 font-semibold">In Pipeline</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-2xl p-8 border-3 border-indigo-400 shadow-lg text-center hover:shadow-xl transition">
                <p className="text-indigo-700 font-bold text-lg">Ready Now</p>
                <p className="text-6xl font-black text-indigo-900 mt-2">5</p>
                <p className="text-indigo-700 font-semibold">Immediate Promotion</p>
              </div>
            </div>
          </div>
        )}

        {/* TRAINING */}
        {activeTab === 4 && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-indigo-100 to-blue-200 rounded-2xl p-8 border-3 border-indigo-400 shadow-lg text-center hover:shadow-xl transition">
                <p className="text-indigo-700 font-bold text-lg">Compliance Rate</p>
                <p className="text-6xl font-black text-indigo-900 mt-2">88%</p>
                <p className="text-indigo-700 font-semibold">Target: 95%</p>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-cyan-200 rounded-2xl p-8 border-3 border-blue-400 shadow-lg text-center hover:shadow-xl transition">
                <p className="text-blue-700 font-bold text-lg">Programs</p>
                <p className="text-6xl font-black text-blue-900 mt-2">20</p>
                <p className="text-blue-700 font-semibold">Active</p>
              </div>
              <div className="bg-gradient-to-br from-cyan-100 to-teal-200 rounded-2xl p-8 border-3 border-cyan-400 shadow-lg text-center hover:shadow-xl transition">
                <p className="text-cyan-700 font-bold text-lg">Completion</p>
                <p className="text-6xl font-black text-cyan-900 mt-2">82%</p>
                <p className="text-cyan-700 font-semibold">Avg Rate</p>
              </div>
            </div>
          </div>
        )}

        {/* OHSW */}
        {activeTab === 5 && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-2xl p-8 border-3 border-red-400 shadow-lg text-center hover:shadow-xl transition">
                <p className="text-red-700 font-bold text-lg">Safety Training</p>
                <p className="text-5xl font-black text-red-900 mt-2">92%</p>
              </div>
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-8 border-3 border-orange-400 shadow-lg text-center hover:shadow-xl transition">
                <p className="text-orange-700 font-bold text-lg">Incident Rate</p>
                <p className="text-5xl font-black text-orange-900 mt-2">1.2</p>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-emerald-200 rounded-2xl p-8 border-3 border-green-400 shadow-lg text-center hover:shadow-xl transition">
                <p className="text-green-700 font-bold text-lg">Wellness</p>
                <p className="text-5xl font-black text-green-900 mt-2">68%</p>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-cyan-200 rounded-2xl p-8 border-3 border-blue-400 shadow-lg text-center hover:shadow-xl transition">
                <p className="text-blue-700 font-bold text-lg">Cost Avoidance</p>
                <p className="text-4xl font-black text-blue-900 mt-2">₱2.7M</p>
              </div>
            </div>
          </div>
        )}

        {/* SERVICE */}
        {activeTab === 6 && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { sla: 'New Hire Onboarding', target: '95%', actual: '98%', bg: 'from-teal-100 to-cyan-200', border: 'border-teal-400', color: 'text-teal-900' },
                { sla: 'Benefits Enrollment', target: '90%', actual: '94%', bg: 'from-cyan-100 to-blue-200', border: 'border-cyan-400', color: 'text-cyan-900' },
                { sla: 'Document Processing', target: '85%', actual: '91%', bg: 'from-blue-100 to-indigo-200', border: 'border-blue-400', color: 'text-blue-900' },
                { sla: 'Employee Support', target: '80%', actual: '89%', bg: 'from-indigo-100 to-purple-200', border: 'border-indigo-400', color: 'text-indigo-900' },
              ].map((item, i) => (
                <div key={i} className={`bg-gradient-to-br ${item.bg} rounded-2xl p-8 border-3 ${item.border} shadow-lg hover:shadow-xl transition`}>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className={`font-black ${item.color} text-xl`}>{item.sla}</p>
                      <p className={`${item.color} font-semibold`}>Target: {item.target}</p>
                    </div>
                    <span className="px-4 py-2 bg-green-500 text-white font-black rounded-lg text-sm">Exceeding</span>
                  </div>
                  <p className={`text-5xl font-black ${item.color}`}>{item.actual}</p>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-teal-100 to-cyan-200 rounded-2xl p-8 border-3 border-teal-400 shadow-lg">
              <div className="flex items-center gap-6">
                <p className="text-7xl font-black text-teal-900">4.3</p>
                <div>
                  <p className="text-3xl font-black text-teal-900">Employee Satisfaction</p>
                  <p className="text-teal-700 font-semibold">Out of 5.0</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* FOOTER */}
      <div className="max-w-7xl mx-auto mt-12 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-center py-8 rounded-2xl shadow-lg">
        <p className="font-bold text-lg">PGB HRIS Dashboard | PSC • ABC • CSI</p>
      </div>
    </div>
  );
}

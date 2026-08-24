import React, { useState, useMemo } from 'react';
import { Users, Briefcase, TrendingUp, Heart, AlertCircle, CheckCircle, Clock, BarChart3 } from 'lucide-react';

const generateEmployees = () => {
  const roles = ['Engineer', 'Manager', 'Specialist', 'Supervisor'];
  const firstNames = ['Juan', 'Maria', 'Jose', 'Ana', 'Miguel'];
  const lastNames = ['Santos', 'Garcia', 'Rodriguez', 'Martinez', 'Lopez'];
  const employees = [];
  const bas = ['PSC', 'ABC', 'CSI'];
  
  for (let i = 1; i <= 200; i++) {
    const ba = bas[Math.floor(Math.random() * bas.length)];
    const jg = Math.floor(Math.random() * 25) + 1;
    employees.push({
      id: `EMP${i}`,
      name: `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`,
      ba, jg,
      salary: 150000 + (jg * 15000),
      status: Math.random() > 0.1 ? 'Active' : 'Inactive',
    });
  }
  return employees;
};

export default function HRISDashboard() {
  const [activeTab, setActiveTab] = useState('executive');
  const employees = useMemo(() => generateEmployees(), []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Top Nav */}
      <div className="bg-white/10 backdrop-blur border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-white">PGB HRIS Dashboard</h1>
            <p className="text-slate-300 text-lg">CMG Pilot • Philippine Peso (₱)</p>
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2">
            {[
              { id: 'executive', label: '📊 Executive' },
              { id: 'recruitment', label: '💼 Recruitment' },
              { id: 'performance', label: '⭐ Performance' },
              { id: 'talent', label: '🎯 Talent' },
              { id: 'training', label: '📚 Training' },
              { id: 'ohsw', label: '🏥 OHSW' },
              { id: 'service', label: '🛠️ Service' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-lg font-semibold text-sm whitespace-nowrap transition ${
                  activeTab === tab.id
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
                    : 'bg-white/10 text-slate-200 hover:bg-white/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {activeTab === 'executive' && (
          <div className="space-y-8">
            {/* Header Card */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-12 text-white border border-blue-400/30">
              <h2 className="text-5xl font-bold mb-4">Executive Overview</h2>
              <p className="text-xl text-blue-100">CMG Pilot (PSC, ABC, CSI) | 180 Active Employees</p>
            </div>

            {/* Rocks Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { rock: 'Cash Position', value: '-8%', desc: 'Cost-per-Hire', icon: '💰', color: 'from-emerald-500 to-teal-600' },
                { rock: 'Succession', value: '85%', desc: 'Coverage', icon: '👥', color: 'from-blue-500 to-cyan-600' },
                { rock: 'Productivity', value: '+5%', desc: 'FTE Output', icon: '📈', color: 'from-purple-500 to-pink-600' },
                { rock: 'Partnership', value: '92%', desc: 'Readiness', icon: '🤝', color: 'from-orange-500 to-red-600' },
              ].map((rock, i) => (
                <div key={i} className={`bg-gradient-to-br ${rock.color} rounded-xl p-8 text-white border border-white/20 shadow-xl hover:shadow-2xl transition`}>
                  <div className="text-4xl mb-2">{rock.icon}</div>
                  <div className="text-sm font-semibold text-white/80">Rock {i+1}: {rock.rock}</div>
                  <div className="text-4xl font-bold mt-2">{rock.value}</div>
                  <div className="text-sm text-white/70 mt-1">{rock.desc}</div>
                </div>
              ))}
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: 'Total Headcount', value: '180', unit: 'Active Employees' },
                { label: 'High Performers', value: '50', unit: 'Rating 4-5' },
                { label: 'Time-to-Fill', value: '35 days', unit: 'Avg Recruitment' },
                { label: 'Cost-per-Hire', value: '₱35,000', unit: 'CMG Average' },
              ].map((m, i) => (
                <div key={i} className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 hover:bg-white/20 transition">
                  <div className="text-slate-300 text-sm font-medium">{m.label}</div>
                  <div className="text-4xl font-bold text-white mt-3">{m.value}</div>
                  <div className="text-slate-400 text-xs mt-2">{m.unit}</div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 border border-emerald-500/30 rounded-xl p-8">
                <h3 className="text-white font-bold text-lg mb-4">✓ Highlights</h3>
                <ul className="space-y-2 text-slate-200">
                  <li>✓ 180 active headcount</li>
                  <li>✓ 28% high performer rate</li>
                  <li>✓ 85% succession coverage</li>
                  <li>✓ 35-day time-to-fill</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-500/20 to-orange-600/20 border border-orange-500/30 rounded-xl p-8">
                <h3 className="text-white font-bold text-lg mb-4">⚠️ To Watch</h3>
                <ul className="space-y-2 text-slate-200">
                  <li>• 3 critical positions open</li>
                  <li>• Training 88% vs 95% target</li>
                  <li>• 2 employees on PIP</li>
                  <li>• 1 incident in July</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-600/20 border border-cyan-500/30 rounded-xl p-8">
                <h3 className="text-white font-bold text-lg mb-4">⏰ Next 90 Days</h3>
                <ul className="space-y-2 text-slate-200">
                  <li>1. Finalize Succession Plan</li>
                  <li>2. Talent Review Calibration</li>
                  <li>3. Launch Development Plans</li>
                  <li>4. Q4 Performance Reviews</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'recruitment' && (
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-8">Recruitment Pipeline</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-500/30 to-cyan-600/30 rounded-lg p-6 border border-blue-400/30">
                <Clock className="text-blue-300 mb-2" size={28} />
                <div className="text-4xl font-bold text-white">35 days</div>
                <div className="text-slate-300 text-sm mt-2">Average Time-to-Fill</div>
              </div>
              <div className="bg-gradient-to-br from-emerald-500/30 to-teal-600/30 rounded-lg p-6 border border-emerald-400/30">
                <TrendingUp className="text-emerald-300 mb-2" size={28} />
                <div className="text-4xl font-bold text-white">87%</div>
                <div className="text-slate-300 text-sm mt-2">Quality-of-Hire</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/30 to-pink-600/30 rounded-lg p-6 border border-purple-400/30">
                <BarChart3 className="text-purple-300 mb-2" size={28} />
                <div className="text-4xl font-bold text-white">₱35,000</div>
                <div className="text-slate-300 text-sm mt-2">Cost-per-Hire</div>
              </div>
            </div>
            <div className="text-slate-300 text-center py-12">15 Open Requisitions • All tied to PGB Rocks</div>
          </div>
        )}

        {activeTab === 'performance' && (
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-8">Performance Management</h2>
            <div className="bg-gradient-to-r from-blue-500/30 to-purple-600/30 rounded-lg p-8 border border-purple-400/30 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div><div className="text-slate-300 text-sm mb-2">Compensation Impact (YTD)</div><div className="text-4xl font-bold text-blue-300">₱828,000</div></div>
                <div><div className="text-slate-300 text-sm mb-2">Rating Range</div><div className="text-4xl font-bold text-purple-300">+0% to +15%</div></div>
                <div><div className="text-slate-300 text-sm mb-2">Distribution</div><div className="text-4xl font-bold text-emerald-300">1-5 Scale</div></div>
              </div>
            </div>
            <div className="text-slate-300 text-center py-12">Performance directly tied to compensation • Rocks alignment active</div>
          </div>
        )}

        {activeTab === 'talent' && (
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-8">Talent & Succession</h2>
            <div className="bg-gradient-to-r from-emerald-500/30 to-blue-600/30 rounded-lg p-8 border border-emerald-400/30">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div><div className="text-slate-300 text-sm mb-2">Succession Coverage</div><div className="text-4xl font-bold text-emerald-300">85%</div><div className="text-slate-400 text-xs mt-1">Critical Roles</div></div>
                <div><div className="text-slate-300 text-sm mb-2">High Potentials</div><div className="text-4xl font-bold text-blue-300">15</div><div className="text-slate-400 text-xs mt-1">In Pipeline</div></div>
                <div><div className="text-slate-300 text-sm mb-2">Ready Now</div><div className="text-4xl font-bold text-purple-300">5</div><div className="text-slate-400 text-xs mt-1">Immediate Promotion</div></div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'training' && (
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-8">Training & Development</h2>
            <div className="bg-gradient-to-r from-orange-500/30 to-pink-600/30 rounded-lg p-8 border border-orange-400/30">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div><div className="text-slate-300 text-sm mb-2">Compliance</div><div className="text-4xl font-bold text-orange-300">88%</div></div>
                <div><div className="text-slate-300 text-sm mb-2">Programs</div><div className="text-4xl font-bold text-pink-300">20</div></div>
                <div><div className="text-slate-300 text-sm mb-2">Completion</div><div className="text-4xl font-bold text-purple-300">82%</div></div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'ohsw' && (
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-8">Safety & Wellness</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-red-500/30 to-orange-600/30 rounded-lg p-6 border border-red-400/30">
                <AlertCircle className="text-red-300 mb-2" size={28} />
                <div className="text-4xl font-bold text-red-300">92%</div>
                <div className="text-slate-300 text-sm mt-2">Safety Training</div>
              </div>
              <div className="bg-gradient-to-br from-orange-500/30 to-yellow-600/30 rounded-lg p-6 border border-orange-400/30">
                <TrendingUp className="text-orange-300 mb-2" size={28} />
                <div className="text-4xl font-bold text-orange-300">1.2</div>
                <div className="text-slate-300 text-sm mt-2">Incident Rate</div>
              </div>
              <div className="bg-gradient-to-br from-emerald-500/30 to-teal-600/30 rounded-lg p-6 border border-emerald-400/30">
                <Heart className="text-emerald-300 mb-2" size={28} />
                <div className="text-4xl font-bold text-emerald-300">68%</div>
                <div className="text-slate-300 text-sm mt-2">Wellness Program</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-lg p-6 border border-blue-400/30">
                <BarChart3 className="text-blue-300 mb-2" size={28} />
                <div className="text-4xl font-bold text-blue-300">₱2.7M</div>
                <div className="text-slate-300 text-sm mt-2">Cost Avoidance</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'service' && (
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-8">Service Delivery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                { sla: 'Onboarding', target: '95%', actual: '98%' },
                { sla: 'Benefits', target: '90%', actual: '94%' },
                { sla: 'Documents', target: '85%', actual: '91%' },
                { sla: 'Support', target: '80%', actual: '89%' },
              ].map((item, i) => (
                <div key={i} className="bg-gradient-to-br from-green-500/30 to-emerald-600/30 rounded-lg p-6 border border-emerald-400/30">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-white font-semibold">{item.sla}</div>
                      <div className="text-slate-400 text-sm">Target: {item.target}</div>
                    </div>
                    <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">Exceeding</span>
                  </div>
                  <div className="text-3xl font-bold text-green-300 mt-3">{item.actual}</div>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-blue-500/30 to-purple-600/30 rounded-lg p-8 border border-purple-400/30">
              <div className="flex items-center gap-4">
                <div className="text-6xl font-bold text-blue-300">4.3</div>
                <div><div className="text-xl font-semibold text-white">Employee Satisfaction</div><div className="text-slate-400 text-sm">Out of 5.0</div></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-black/50 text-slate-400 text-center py-8 text-sm mt-12 border-t border-white/10">
        <p>PGB HRIS Dashboard | CMG Pilot (PSC, ABC, CSI) | All values in Philippine Peso (₱)</p>
      </div>
    </div>
  );
}

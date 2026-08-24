import React, { useState, useMemo } from 'react';
import { TrendingUp, Users, Briefcase, Heart, AlertCircle, CheckCircle, Clock, BarChart3, Target, BookOpen, Zap } from 'lucide-react';

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

  const tabs = [
    { id: 'executive', label: '📊 Executive', color: 'from-blue-500 to-cyan-500' },
    { id: 'recruitment', label: '💼 Recruitment', color: 'from-green-500 to-emerald-500' },
    { id: 'performance', label: '⭐ Performance', color: 'from-yellow-500 to-orange-500' },
    { id: 'talent', label: '🎯 Talent', color: 'from-purple-500 to-pink-500' },
    { id: 'training', label: '📚 Training', color: 'from-indigo-500 to-blue-500' },
    { id: 'ohsw', label: '🏥 OHSW', color: 'from-red-500 to-pink-500' },
    { id: 'service', label: '🛠️ Service', color: 'from-teal-500 to-cyan-500' },
  ];

  const KPICard = ({ label, value, unit, icon: Icon, bg, border }) => (
    <div className={`${bg} rounded-2xl p-6 shadow-lg hover:shadow-xl transition transform hover:scale-105`}>
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <p className="text-white/80 text-sm font-medium">{label}</p>
          <h3 className="text-5xl font-bold text-white mt-2">{value}</h3>
          <p className="text-white/70 text-xs mt-1">{unit}</p>
        </div>
        <div className="text-white/30 ml-4">
          <Icon size={40} />
        </div>
      </div>
    </div>
  );

  const RockCard = ({ num, title, value, desc, icon, colors }) => (
    <div className={`bg-gradient-to-br ${colors} rounded-2xl p-8 shadow-lg hover:shadow-xl transition text-white border-2 border-white/20`}>
      <div className="text-5xl mb-3">{icon}</div>
      <p className="text-white/80 text-sm font-semibold">ROCK {num}</p>
      <h3 className="text-2xl font-bold mt-2">{title}</h3>
      <div className="mt-4">
        <p className="text-5xl font-black">{value}</p>
        <p className="text-white/70 text-sm mt-1">{desc}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto mb-8">
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 text-white shadow-2xl mb-8">
          <h1 className="text-5xl md:text-6xl font-black mb-2">PGB HRIS</h1>
          <p className="text-xl text-white/90">CMG Pilot • PSC • ABC • CSI</p>
          <p className="text-lg text-white/80 mt-1">Philippine Peso (₱)</p>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-4 mb-8">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-bold text-sm whitespace-nowrap transition transform hover:scale-105 ${
                activeTab === tab.id
                  ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                  : 'bg-white text-gray-700 shadow-md hover:shadow-lg'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'executive' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <RockCard num="1" title="Cash Position" value="-8%" desc="Cost-per-Hire" icon="💰" colors="from-emerald-400 to-green-600" />
              <RockCard num="2" title="Succession" value="85%" desc="Coverage" icon="👥" colors="from-blue-400 to-blue-600" />
              <RockCard num="3" title="Productivity" value="+5%" desc="FTE Output" icon="📈" colors="from-purple-400 to-purple-600" />
              <RockCard num="4" title="Partnership" value="92%" desc="Readiness" icon="🤝" colors="from-orange-400 to-orange-600" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <KPICard label="Active Headcount" value="180" unit="Employees" icon={Users} bg="bg-gradient-to-br from-blue-500 to-blue-600" />
              <KPICard label="High Performers" value="50" unit="Rating 4-5" icon={TrendingUp} bg="bg-gradient-to-br from-green-500 to-emerald-600" />
              <KPICard label="Time-to-Fill" value="35 days" unit="Recruitment" icon={Clock} bg="bg-gradient-to-br from-yellow-500 to-orange-600" />
              <KPICard label="Cost-per-Hire" value="₱35,000" unit="CMG Average" icon={BarChart3} bg="bg-gradient-to-br from-purple-500 to-pink-600" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-100 to-emerald-200 rounded-2xl p-8 border-2 border-green-300 shadow-lg">
                <h3 className="text-2xl font-black text-green-900 mb-4">✓ Highlights</h3>
                <ul className="space-y-3">
                  <li className="text-green-800 font-semibold">✓ 180 active headcount</li>
                  <li className="text-green-800 font-semibold">✓ 28% high performer rate</li>
                  <li className="text-green-800 font-semibold">✓ 85% succession coverage</li>
                  <li className="text-green-800 font-semibold">✓ 35-day time-to-fill</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-yellow-100 to-orange-200 rounded-2xl p-8 border-2 border-yellow-300 shadow-lg">
                <h3 className="text-2xl font-black text-yellow-900 mb-4">⚠️ Areas to Watch</h3>
                <ul className="space-y-3">
                  <li className="text-yellow-800 font-semibold">• 3 critical positions open</li>
                  <li className="text-yellow-800 font-semibold">• Training compliance 88%</li>
                  <li className="text-yellow-800 font-semibold">• 2 employees on PIP</li>
                  <li className="text-yellow-800 font-semibold">• 1 incident in July</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-100 to-cyan-200 rounded-2xl p-8 border-2 border-blue-300 shadow-lg">
                <h3 className="text-2xl font-black text-blue-900 mb-4">⏰ Next 90 Days</h3>
                <ul className="space-y-3">
                  <li className="text-blue-800 font-semibold">1. Finalize Succession</li>
                  <li className="text-blue-800 font-semibold">2. Talent Calibration</li>
                  <li className="text-blue-800 font-semibold">3. Dev Plan Launch</li>
                  <li className="text-blue-800 font-semibold">4. Q4 Reviews</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'recruitment' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <KPICard label="Average Time-to-Fill" value="35 days" unit="Recruitment Cycle" icon={Clock} bg="bg-gradient-to-br from-green-500 to-emerald-600" />
              <KPICard label="Quality-of-Hire" value="87%" unit="6+ Month Retention" icon={TrendingUp} bg="bg-gradient-to-br from-emerald-500 to-teal-600" />
              <KPICard label="Cost-per-Hire" value="₱35,000" unit="Below ₱48K baseline" icon={BarChart3} bg="bg-gradient-to-br from-teal-500 to-cyan-600" />
            </div>

            <div className="bg-gradient-to-br from-green-100 to-emerald-200 rounded-2xl p-8 border-3 border-green-400 shadow-lg">
              <h2 className="text-4xl font-black text-green-900 mb-4">Recruitment Pipeline</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-5xl font-black text-green-700">15</p>
                  <p className="text-green-800 font-bold">Open PRFs</p>
                </div>
                <div>
                  <p className="text-5xl font-black text-emerald-700">120</p>
                  <p className="text-emerald-800 font-bold">Active Candidates</p>
                </div>
                <div>
                  <p className="text-5xl font-black text-teal-700">5</p>
                  <p className="text-teal-800 font-bold">Final Round</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'performance' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-yellow-100 to-orange-200 rounded-2xl p-8 border-3 border-yellow-400 shadow-lg">
              <h2 className="text-4xl font-black text-yellow-900 mb-6">Performance Management</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <p className="text-yellow-700 font-bold text-lg">Compensation Impact</p>
                  <p className="text-5xl font-black text-yellow-900 mt-2">₱828K</p>
                  <p className="text-yellow-700 font-semibold">YTD</p>
                </div>
                <div className="text-center">
                  <p className="text-orange-700 font-bold text-lg">Performance Multiplier</p>
                  <p className="text-5xl font-black text-orange-900 mt-2">+0% to +15%</p>
                  <p className="text-orange-700 font-semibold">Rating Based</p>
                </div>
                <div className="text-center">
                  <p className="text-amber-700 font-bold text-lg">Rating Scale</p>
                  <p className="text-5xl font-black text-amber-900 mt-2">1-5</p>
                  <p className="text-amber-700 font-semibold">Levels</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'talent' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-8 border-3 border-purple-400 shadow-lg text-center">
                <p className="text-purple-700 font-bold text-lg">Succession Coverage</p>
                <p className="text-6xl font-black text-purple-900 mt-2">85%</p>
                <p className="text-purple-700 font-semibold">Critical Roles</p>
              </div>
              <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl p-8 border-3 border-pink-400 shadow-lg text-center">
                <p className="text-pink-700 font-bold text-lg">High Potentials</p>
                <p className="text-6xl font-black text-pink-900 mt-2">15</p>
                <p className="text-pink-700 font-semibold">In Pipeline</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-2xl p-8 border-3 border-indigo-400 shadow-lg text-center">
                <p className="text-indigo-700 font-bold text-lg">Ready Now</p>
                <p className="text-6xl font-black text-indigo-900 mt-2">5</p>
                <p className="text-indigo-700 font-semibold">Immediate Promotion</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'training' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-indigo-100 to-blue-200 rounded-2xl p-8 border-3 border-indigo-400 shadow-lg text-center">
                <p className="text-indigo-700 font-bold text-lg">Compliance Rate</p>
                <p className="text-6xl font-black text-indigo-900 mt-2">88%</p>
                <p className="text-indigo-700 font-semibold">Target: 95%</p>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-cyan-200 rounded-2xl p-8 border-3 border-blue-400 shadow-lg text-center">
                <p className="text-blue-700 font-bold text-lg">Active Programs</p>
                <p className="text-6xl font-black text-blue-900 mt-2">20</p>
                <p className="text-blue-700 font-semibold">Courses</p>
              </div>
              <div className="bg-gradient-to-br from-cyan-100 to-teal-200 rounded-2xl p-8 border-3 border-cyan-400 shadow-lg text-center">
                <p className="text-cyan-700 font-bold text-lg">Avg Completion</p>
                <p className="text-6xl font-black text-cyan-900 mt-2">82%</p>
                <p className="text-cyan-700 font-semibold">Rate</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'ohsw' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-2xl p-8 border-3 border-red-400 shadow-lg text-center">
                <p className="text-red-700 font-bold text-lg">Safety Training</p>
                <p className="text-5xl font-black text-red-900 mt-2">92%</p>
                <p className="text-red-700 font-semibold">Completion</p>
              </div>
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-8 border-3 border-orange-400 shadow-lg text-center">
                <p className="text-orange-700 font-bold text-lg">Incident Rate</p>
                <p className="text-5xl font-black text-orange-900 mt-2">1.2</p>
                <p className="text-orange-700 font-semibold">Per 100 employees</p>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-emerald-200 rounded-2xl p-8 border-3 border-green-400 shadow-lg text-center">
                <p className="text-green-700 font-bold text-lg">Wellness Program</p>
                <p className="text-5xl font-black text-green-900 mt-2">68%</p>
                <p className="text-green-700 font-semibold">Participation</p>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-cyan-200 rounded-2xl p-8 border-3 border-blue-400 shadow-lg text-center">
                <p className="text-blue-700 font-bold text-lg">Cost Avoidance</p>
                <p className="text-4xl font-black text-blue-900 mt-2">₱2.7M</p>
                <p className="text-blue-700 font-semibold">Incident Reduction</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'service' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { sla: 'New Hire Onboarding', target: '95%', actual: '98%', bg: 'from-teal-100 to-cyan-200', border: 'border-teal-400' },
                { sla: 'Benefits Enrollment', target: '90%', actual: '94%', bg: 'from-cyan-100 to-blue-200', border: 'border-cyan-400' },
                { sla: 'Document Processing', target: '85%', actual: '91%', bg: 'from-blue-100 to-indigo-200', border: 'border-blue-400' },
                { sla: 'Employee Support', target: '80%', actual: '89%', bg: 'from-indigo-100 to-purple-200', border: 'border-indigo-400' },
              ].map((item, i) => (
                <div key={i} className={`bg-gradient-to-br ${item.bg} rounded-2xl p-8 border-3 ${item.border} shadow-lg`}>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="font-black text-gray-900 text-xl">{item.sla}</p>
                      <p className="text-gray-700 font-semibold">Target: {item.target}</p>
                    </div>
                    <span className="px-4 py-2 bg-green-500 text-white font-black rounded-lg text-sm">Exceeding</span>
                  </div>
                  <p className="text-5xl font-black text-gray-900">{item.actual}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto mt-12 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-center py-8 rounded-2xl shadow-lg">
        <p className="font-bold text-lg">PGB HRIS Dashboard | CMG Pilot (PSC, ABC, CSI) | All values in Philippine Peso (₱)</p>
      </div>
    </div>
  );
}

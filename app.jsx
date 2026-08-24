import React, { useState, useMemo } from 'react';
import { ChevronDown, ChevronRight, Plus, Download, Filter, Eye, BarChart3, Users, Briefcase, TrendingUp, AlertCircle, CheckCircle, Clock } from 'lucide-react';

// ============================================================================
// MOCK DATA GENERATION
// ============================================================================

const CMG_ORG_DATA = {
  sbuName: "CMG (Construction & Manufacturing Group)",
  businessAffiliates: {
    PSC: { name: "PSC (Construction)", buCount: 6 },
    ABC: { name: "ABC (Manufacturing)", buCount: 2 },
    CSI: { name: "CSI (Manufacturing)", buCount: 4 }
  }
};

// Generate mock employees
const generateEmployees = () => {
  const roles = ['Engineer', 'Manager', 'Specialist', 'Supervisor', 'Associate', 'Director', 'Coordinator'];
  const firstNames = ['Juan', 'Maria', 'Jose', 'Ana', 'Miguel', 'Rosa', 'Carlos', 'Elena', 'Antonio', 'Sofia'];
  const lastNames = ['Santos', 'Garcia', 'Rodriguez', 'Martinez', 'Lopez', 'Fernandez', 'Chavez', 'Morales', 'Reyes', 'Gutierrez'];
  
  const employees = [];
  const bas = ['PSC', 'ABC', 'CSI'];
  
  for (let i = 1; i <= 200; i++) {
    const ba = bas[Math.floor(Math.random() * bas.length)];
    const jg = Math.floor(Math.random() * 25) + 1;
    
    employees.push({
      id: `EMP${String(i).padStart(5, '0')}`,
      name: `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`,
      ba: ba,
      bu: `BU${Math.floor(Math.random() * 6) + 1}`,
      fu: roles[Math.floor(Math.random() * roles.length)],
      jg: jg,
      salary: 150000 + (jg * 15000), // PHP: 150k base + 15k per JG level
      hireDate: new Date(2020 + Math.floor(Math.random() * 4), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1),
      lastAppraisal: Math.floor(Math.random() * 5) + 1,
      status: Math.random() > 0.1 ? 'Active' : 'Inactive',
      isHighPotential: Math.random() > 0.85,
      isCriticalRole: jg >= 15
    });
  }
  
  return employees;
};

// Generate mock recruitment data
const generateRecruitmentData = () => {
  const statuses = ['Open', 'Screening', 'Interview', 'Selection', 'Offer', 'Closed'];
  const prf = [];
  
  for (let i = 1; i <= 15; i++) {
    prf.push({
      id: `PRF-2024-${String(i).padStart(3, '0')}`,
      role: ['Project Engineer', 'Site Manager', 'Safety Officer', 'QA Specialist', 'Equipment Operator'][i % 5],
      ba: ['PSC', 'ABC', 'CSI'][i % 3],
      jg: Math.floor(Math.random() * 15) + 5,
      status: statuses[Math.floor(Math.random() * statuses.length)],
      requester: `Manager ${i}`,
      daysOpen: Math.floor(Math.random() * 60) + 1,
      candidates: Math.floor(Math.random() * 8) + 2,
      targetHireDate: new Date(2024, 8 + Math.floor(Math.random() * 4), Math.floor(Math.random() * 28) + 1),
      rocksLink: ['Rock 1: Cash Position', 'Rock 3: Productivity', 'Rock 4: Partnership'][i % 3]
    });
  }
  
  return prf;
};

// Generate performance data
const generatePerformanceData = (employees) => {
  return employees.slice(0, 50).map(emp => ({
    empId: emp.id,
    name: emp.name,
    ba: emp.ba,
    kpiScore: (Math.random() * 5).toFixed(1),
    competencyScore: (Math.random() * 5).toFixed(1),
    attributeScore: (Math.random() * 5).toFixed(1),
    overallRating: Math.floor(Math.random() * 5) + 1,
    appraisalDate: new Date(2024, 6, Math.floor(Math.random() * 28) + 1),
    recommendedAction: ['Promotion Track', 'Development Plan', 'Performance Improvement', 'Retention Bonus'][Math.floor(Math.random() * 4)],
    rockAlignment: ['Rock 1', 'Rock 2', 'Rock 3', 'Rock 4'][Math.floor(Math.random() * 4)]
  }));
};

// Generate training data
const generateTrainingData = () => {
  const categories = ['Mandatory', 'Technical', 'Leadership', 'Professional'];
  const training = [];
  
  for (let i = 1; i <= 20; i++) {
    const category = categories[i % 4];
    training.push({
      id: `TRAIN-${String(i).padStart(3, '0')}`,
      title: ['Safety Training', 'PEBS Advanced', 'Team Management', 'Construction Methods', 'First Aid', 'Communication Skills', 'Project Management', 'AutoCAD Basics', 'Leadership Development', 'Quality Control'][i % 10],
      category: category,
      targetJG: Math.floor(Math.random() * 15) + 5,
      scheduled: new Date(2024, 8 + Math.floor(Math.random() * 4), Math.floor(Math.random() * 28) + 1),
      enrolled: Math.floor(Math.random() * 30) + 5,
      completed: Math.floor(Math.random() * 25) + 2,
      competencyImprovement: (Math.random() * 2 + 0.5).toFixed(1),
      budget: 50000 + Math.random() * 200000, // PHP
      rocksLink: category === 'Technical' ? 'Rock 3: Productivity' : 'Rock 2: Succession'
    });
  }
  
  return training;
};

// Generate talent data
const generateTalentData = (employees) => {
  const highPotentials = employees.filter(e => e.isHighPotential).slice(0, 15);
  
  return highPotentials.map(emp => ({
    empId: emp.id,
    name: emp.name,
    currentJG: emp.jg,
    currentRole: emp.fu,
    targetRole: emp.jg < 20 ? `Director Level (JG${emp.jg + 5})` : 'Executive Level',
    readinessLevel: ['Ready Now', 'Ready in 1-2 Years', 'Long-term Pipeline'][Math.floor(Math.random() * 3)],
    developmentGaps: Math.floor(Math.random() * 3) + 1,
    mentorAssigned: Math.random() > 0.3,
    developmentPlanStartDate: new Date(2024, 6, Math.floor(Math.random() * 28) + 1),
    successorToRole: `JG${emp.jg + 3} Position`,
    rocksLink: 'Rock 2: Succession Plan'
  }));
};

// Generate OHSW data
const generateOHSWData = () => {
  const incidents = [];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];
  
  for (let i = 0; i < 8; i++) {
    incidents.push({
      month: months[i],
      incidentCount: Math.floor(Math.random() * 5) + 1,
      nearMissCount: Math.floor(Math.random() * 8) + 2,
      injuryRate: (Math.random() * 2 + 0.5).toFixed(2),
      trainingCompletion: Math.floor(Math.random() * 15) + 85
    });
  }
  
  return {
    incidents: incidents,
    wellnessParticipation: Math.floor(Math.random() * 30) + 60,
    screeningCompletion: Math.floor(Math.random() * 20) + 75,
    eapUtilization: Math.floor(Math.random() * 5) + 8,
    rocksLink: 'Rock 1: Cash Position (Incident Reduction = Cost Savings)'
  };
};

// Generate service delivery data
const generateServiceDeliveryData = () => {
  return {
    leaveRequests: Math.floor(Math.random() * 20) + 10,
    averageSLAHours: Math.floor(Math.random() * 12) + 8,
    certificateRequests: Math.floor(Math.random() * 8) + 3,
    benchmarkHours: 24,
    satisfactionScore: (Math.random() * 0.2 + 4.2).toFixed(1)
  };
};

// ============================================================================
// MAIN APP COMPONENT
// ============================================================================

export default function PGBHRISMockup() {
  const [activeTab, setActiveTab] = useState('executive');
  const [expandedSection, setExpandedSection] = useState(null);
  const [employees] = useState(generateEmployees());
  const [recruitmentData] = useState(generateRecruitmentData());
  const [performanceData] = useState(generatePerformanceData(employees));
  const [trainingData] = useState(generateTrainingData());
  const [talentData] = useState(generateTalentData(employees));
  const [ohswData] = useState(generateOHSWData());
  const [serviceData] = useState(generateServiceDeliveryData());

  // Calculate key metrics
  const metrics = useMemo(() => {
    const activeEmps = employees.filter(e => e.status === 'Active');
    const highPerformers = performanceData.filter(p => p.overallRating >= 4).length;
    const successorCoverage = Math.floor(Math.random() * 25) + 75;
    const recruitmentEfficiency = Math.floor(Math.random() * 20) + 70;
    
    return {
      totalHeadcount: activeEmps.length,
      highPerformers: highPerformers,
      highPotentials: talentData.length,
      openRequisitions: recruitmentData.filter(r => r.status === 'Open').length,
      successorCoverage: successorCoverage,
      trainingCompliance: Math.floor(Math.random() * 15) + 85,
      avgTimeToFill: '35 days',
      costPerHire: '₱35,000',
      rocksContribution: 'Rock 1-4 aligned'
    };
  }, [employees, performanceData, talentData, recruitmentData]);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // ============================================================================
  // EXECUTIVE DASHBOARD
  // ============================================================================
  const ExecutiveDashboard = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg">
        <h1 className="text-3xl font-bold mb-2">PGB HRIS Executive Dashboard</h1>
        <p className="text-blue-100">CMG Pilot (PSC, ABC, CSI) | Aug 2024</p>
      </div>

      {/* Rocks Alignment Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { rock: 'Rock 1: Cash Position', metric: '-8%', label: 'Cost-per-Hire', icon: TrendingUp, color: 'green' },
          { rock: 'Rock 2: Succession', metric: '85%', label: 'Coverage Target', icon: Users, color: 'blue' },
          { rock: 'Rock 3: Productivity', metric: '+5%', label: 'FTE Output', icon: BarChart3, color: 'purple' },
          { rock: 'Rock 4: Partnership', metric: '92%', label: 'Mgmt Readiness', icon: Briefcase, color: 'orange' }
        ].map((card, idx) => (
          <div key={idx} className={`bg-${card.color}-50 border-2 border-${card.color}-200 p-6 rounded-lg`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-sm">{card.rock}</h3>
              <card.icon className={`text-${card.color}-600`} size={20} />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{card.metric}</div>
            <p className="text-sm text-gray-600">{card.label}</p>
          </div>
        ))}
      </div>

      {/* Key Metrics */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Key HR Metrics (CMG Pilot)</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Total Headcount', value: metrics.totalHeadcount, unit: 'employees' },
            { label: 'High Performers', value: metrics.highPerformers, unit: 'Rating 4-5' },
            { label: 'High Potentials', value: metrics.highPotentials, unit: 'in pipeline' },
            { label: 'Open Positions', value: metrics.openRequisitions, unit: 'requisitions' },
            { label: 'Successor Coverage', value: `${metrics.successorCoverage}%`, unit: 'critical roles' },
            { label: 'Training Compliance', value: `${metrics.trainingCompliance}%`, unit: 'target met' },
            { label: 'Avg Time-to-Fill', value: metrics.avgTimeToFill, unit: 'recruitment cycle' },
            { label: 'Cost-per-Hire', value: metrics.costPerHire, unit: 'vs ₱48K baseline' }
          ].map((metric, idx) => (
            <div key={idx} className="bg-gray-50 p-4 rounded border border-gray-200">
              <div className="text-2xl font-bold text-blue-600">{metric.value}</div>
              <div className="text-xs text-gray-600 mt-1">{metric.label}</div>
              <div className="text-xs text-gray-500">{metric.unit}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Executive Summary Boxes */}
      <div className="space-y-4">
        {[
          { title: '📊 Executive Highlights', content: '✓ Headcount optimized to 180 active (vs. 200 budget)\n✓ Time-to-fill improved to 35 days (target: 30)\n✓ High performer rate: 28% (strong talent base)\n✓ Succession coverage: 85% (focus on JG15+)' },
          { title: '⚠️ Areas for Attention', content: '• 3 open critical positions (PEBS Leads, Site Managers)\n• Training compliance at 88% (target: 95%)\n• 2 employees on PIP (performance support ongoing)\n• OHSW: 1 incident in July (investigation complete)' },
          { title: '✅ Next 90 Days', content: '1. Finalize Succession Plan (Sept)\n2. Complete talent review calibration (Oct)\n3. Launch development plans for high potentials (Oct)\n4. Execute Q4 performance appraisals (Oct-Nov)\n5. Publish training calendar 2025 (Dec)' }
        ].map((box, idx) => (
          <div key={idx} className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
            <h3 className="font-bold text-amber-900 mb-2">{box.title}</h3>
            <p className="text-sm text-amber-800 whitespace-pre-line">{box.content}</p>
          </div>
        ))}
      </div>
    </div>
  );

  // ============================================================================
  // RECRUITMENT DASHBOARD
  // ============================================================================
  const RecruitmentDashboard = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Recruitment Pipeline & PRF Tracking</h2>
      
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold">Personnel Requisition Forms (PRF)</h3>
          <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2 text-sm">
            <Plus size={16} /> New PRF
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="text-left p-3 font-bold">PRF ID</th>
                <th className="text-left p-3 font-bold">Role</th>
                <th className="text-left p-3 font-bold">BA</th>
                <th className="text-left p-3 font-bold">JG</th>
                <th className="text-left p-3 font-bold">Status</th>
                <th className="text-left p-3 font-bold">Days Open</th>
                <th className="text-left p-3 font-bold">Candidates</th>
                <th className="text-left p-3 font-bold">Target Hire</th>
                <th className="text-left p-3 font-bold">Rocks Link</th>
                <th className="text-left p-3 font-bold">Action</th>
              </tr>
            </thead>
            <tbody>
              {recruitmentData.map(prf => (
                <tr key={prf.id} className="border-b hover:bg-gray-50">
                  <td className="p-3 font-mono text-blue-600">{prf.id}</td>
                  <td className="p-3">{prf.role}</td>
                  <td className="p-3 font-bold">{prf.ba}</td>
                  <td className="p-3">JG{prf.jg}</td>
                  <td className="p-3">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      prf.status === 'Open' ? 'bg-red-100 text-red-800' :
                      prf.status === 'Closed' ? 'bg-green-100 text-green-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {prf.status}
                    </span>
                  </td>
                  <td className="p-3 text-center">{prf.daysOpen}</td>
                  <td className="p-3 text-center font-bold">{prf.candidates}</td>
                  <td className="p-3 text-sm">{prf.targetHireDate.toLocaleDateString()}</td>
                  <td className="p-3 text-xs font-bold text-blue-600">{prf.rocksLink}</td>
                  <td className="p-3"><Eye size={16} className="cursor-pointer" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recruitment Efficiency Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
          <Clock size={24} className="text-green-600 mb-2" />
          <div className="text-2xl font-bold">35 days</div>
          <div className="text-sm text-gray-600">Average Time-to-Fill</div>
          <div className="text-xs text-green-600 mt-1">↓ 12% vs. target (30 days)</div>
        </div>
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
          <TrendingUp size={24} className="text-blue-600 mb-2" />
          <div className="text-2xl font-bold">87%</div>
          <div className="text-sm text-gray-600">Quality-of-Hire Rate</div>
          <div className="text-xs text-blue-600 mt-1">New hires retained 6mo+</div>
        </div>
        <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
          <BarChart3 size={24} className="text-purple-600 mb-2" />
          <div className="text-2xl font-bold">₱35,000</div>
          <div className="text-sm text-gray-600">Cost-per-Hire (CMG Avg)</div>
          <div className="text-xs text-purple-600 mt-1">↓ ₱13,000 vs ₱48K baseline</div>
        </div>
      </div>
    </div>
  );

  // ============================================================================
  // PERFORMANCE MANAGEMENT DASHBOARD
  // ============================================================================
  const PerformanceDashboard = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Performance Management & Appraisals</h2>
      
      {/* Performance Distribution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-bold mb-4">Performance Rating Distribution</h3>
          {[
            { rating: '5 - Outstanding', count: 8, pct: 16, color: 'bg-green-500' },
            { rating: '4 - Exceeds', count: 14, pct: 28, color: 'bg-blue-500' },
            { rating: '3 - Meets', count: 22, pct: 44, color: 'bg-gray-400' },
            { rating: '2 - Needs Improvement', count: 4, pct: 8, color: 'bg-yellow-500' },
            { rating: '1 - Unsatisfactory', count: 2, pct: 4, color: 'bg-red-500' }
          ].map(bar => (
            <div key={bar.rating} className="mb-3">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-bold">{bar.rating}</span>
                <span className="text-sm font-bold">{bar.count} ({bar.pct}%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-6">
                <div className={`${bar.color} h-6 rounded-full flex items-center justify-end pr-2`} style={{ width: `${bar.pct}%` }}>
                  {bar.pct >= 20 && <span className="text-white text-xs font-bold">{bar.pct}%</span>}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-bold mb-4">Compensation Impact (YTD)</h3>
          {[
            { component: 'Salary Increases (3%+)', amount: '+₱270,000', desc: 'Tied to performance rating' },
            { component: 'Performance Bonuses', amount: '+₱468,000', desc: 'Ratings 3-5 multiplier' },
            { component: 'Promotion Adjustments', amount: '+₱138,000', desc: '4 promotions this year' },
            { component: 'PIP Adjustment', amount: '-₱48,000', desc: '2 employees on improvement' }
          ].map(comp => (
            <div key={comp.component} className="mb-4 pb-4 border-b">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-bold text-sm">{comp.component}</div>
                  <div className="text-xs text-gray-600">{comp.desc}</div>
                </div>
                <div className={`font-bold text-lg ${comp.amount.startsWith('-') ? 'text-red-600' : 'text-green-600'}`}>
                  {comp.amount}
                </div>
              </div>
            </div>
          ))}
          <div className="bg-blue-50 p-3 rounded text-sm font-bold text-blue-900">
            Total Impact: <span className="text-blue-600">+₱828,000</span> (aligned to Rocks)
          </div>
        </div>
      </div>

      {/* Recent Appraisals Table */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-bold mb-4">Recent Appraisals (Sampled)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="text-left p-3 font-bold">Employee</th>
                <th className="text-left p-3 font-bold">BA</th>
                <th className="text-center p-3 font-bold">KPI</th>
                <th className="text-center p-3 font-bold">Competencies</th>
                <th className="text-center p-3 font-bold">Attributes</th>
                <th className="text-center p-3 font-bold">Overall</th>
                <th className="text-left p-3 font-bold">Action</th>
                <th className="text-left p-3 font-bold">Rock</th>
              </tr>
            </thead>
            <tbody>
              {performanceData.slice(0, 10).map(perf => (
                <tr key={perf.empId} className="border-b hover:bg-gray-50">
                  <td className="p-3 font-bold text-sm">{perf.name}</td>
                  <td className="p-3">{perf.ba}</td>
                  <td className="p-3 text-center font-bold">{perf.kpiScore}</td>
                  <td className="p-3 text-center font-bold">{perf.competencyScore}</td>
                  <td className="p-3 text-center font-bold">{perf.attributeScore}</td>
                  <td className="p-3 text-center">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      perf.overallRating >= 4 ? 'bg-green-100 text-green-800' :
                      perf.overallRating === 3 ? 'bg-gray-100 text-gray-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {perf.overallRating}
                    </span>
                  </td>
                  <td className="p-3 text-xs">{perf.recommendedAction}</td>
                  <td className="p-3 text-xs font-bold text-blue-600">{perf.rockAlignment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  // ============================================================================
  // TALENT MANAGEMENT DASHBOARD
  // ============================================================================
  const TalentDashboard = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Talent Management & Succession Planning</h2>
      
      {/* Succession Coverage */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-300 rounded-lg p-6">
          <CheckCircle className="text-green-600 mb-3" size={28} />
          <div className="text-3xl font-bold text-green-700">85%</div>
          <div className="text-sm text-green-600 font-bold">Succession Coverage</div>
          <div className="text-xs text-green-600 mt-2">Critical roles with Ready-Now successor</div>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-300 rounded-lg p-6">
          <Users className="text-blue-600 mb-3" size={28} />
          <div className="text-3xl font-bold text-blue-700">{talentData.length}</div>
          <div className="text-sm text-blue-600 font-bold">High Potentials Identified</div>
          <div className="text-xs text-blue-600 mt-2">In active development plans</div>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-300 rounded-lg p-6">
          <TrendingUp className="text-purple-600 mb-3" size={28} />
          <div className="text-3xl font-bold text-purple-700">92%</div>
          <div className="text-sm text-purple-600 font-bold">Development Plan Completion</div>
          <div className="text-xs text-purple-600 mt-2">On track with milestones</div>
        </div>
      </div>

      {/* High Potential Pipeline */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-bold mb-4">High Potential Pipeline (Sampled)</h3>
        <div className="space-y-3">
          {talentData.slice(0, 8).map(talent => (
            <div key={talent.empId} className="border border-gray-200 rounded p-4 hover:bg-gray-50">
              <div className="grid grid-cols-1 md:grid-cols-6 gap-3 text-sm">
                <div>
                  <div className="font-bold">{talent.name}</div>
                  <div className="text-xs text-gray-600">{talent.currentRole}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-600">Current</div>
                  <div className="font-bold">JG{talent.currentJG}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-600">Target</div>
                  <div className="font-bold text-blue-600">{talent.targetRole}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-600">Readiness</div>
                  <div className="font-bold text-sm">
                    <span className={`px-2 py-1 rounded text-xs ${
                      talent.readinessLevel === 'Ready Now' ? 'bg-green-100 text-green-800' :
                      talent.readinessLevel === 'Ready in 1-2 Years' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {talent.readinessLevel}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-600">Dev Gaps</div>
                  <div className="font-bold">{talent.developmentGaps}</div>
                </div>
                <div>
                  <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-bold">
                    View Plan
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Succession Plan Snapshot */}
      <div className="bg-amber-50 border border-amber-300 rounded-lg p-6">
        <h3 className="text-lg font-bold text-amber-900 mb-4">Critical Role Succession (Snapshot)</h3>
        <div className="space-y-4">
          {[
            { criticalRole: 'SBU Head (JG24)', currentHolder: 'Mr. Santos (3 yrs to retire)', readyNow: 'Garcia, JG18 - PEBS', readyIn1_2: 'Rodriguez, JG17 - Eng Mgr' },
            { criticalRole: 'Finance Manager (JG15)', currentHolder: 'Ms. Elena (5 yrs tenure)', readyNow: 'Martinez - Ready', readyIn1_2: 'Lopez (in development)' },
            { criticalRole: 'PSC Project Director (JG14)', currentHolder: 'Mr. Carlos (4 yrs)', readyNow: 'Fernandez - Ready', readyIn1_2: 'Chavez (high potential)' }
          ].map((role, idx) => (
            <div key={idx} className="border-t pt-4">
              <div className="font-bold text-amber-900 mb-2">{role.criticalRole}</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
                <div>
                  <div className="text-xs text-gray-600">Current Holder</div>
                  <div>{role.currentHolder}</div>
                </div>
                <div>
                  <div className="text-xs text-green-600 font-bold">✓ Ready Now</div>
                  <div>{role.readyNow}</div>
                </div>
                <div>
                  <div className="text-xs text-blue-600 font-bold">→ Ready in 1-2 Yrs</div>
                  <div>{role.readyIn1_2}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // ============================================================================
  // TRAINING & DEVELOPMENT DASHBOARD
  // ============================================================================
  const TrainingDashboard = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Training & Development</h2>
      
      {/* Training Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Training Programs', value: '20', desc: 'Active this year' },
          { label: 'Avg Enrollment', value: '18', desc: 'Per program' },
          { label: 'Completion Rate', value: '88%', desc: 'Vs. 95% target' },
          { label: 'Budget Utilization', value: '72%', desc: 'YTD spend' }
        ].map((metric, idx) => (
          <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="text-2xl font-bold text-blue-600">{metric.value}</div>
            <div className="text-sm font-bold text-gray-900">{metric.label}</div>
            <div className="text-xs text-gray-600 mt-1">{metric.desc}</div>
          </div>
        ))}
      </div>

      {/* Training Calendar */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-bold mb-4">Training Calendar (Q4 2024)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="text-left p-3 font-bold">Training</th>
                <th className="text-left p-3 font-bold">Category</th>
                <th className="text-center p-3 font-bold">Target JG</th>
                <th className="text-center p-3 font-bold">Scheduled</th>
                <th className="text-center p-3 font-bold">Enrolled</th>
                <th className="text-center p-3 font-bold">Completed</th>
                <th className="text-center p-3 font-bold">Budget</th>
                <th className="text-left p-3 font-bold">Rocks Link</th>
              </tr>
            </thead>
            <tbody>
              {trainingData.slice(0, 10).map(train => (
                <tr key={train.id} className="border-b hover:bg-gray-50">
                  <td className="p-3 font-bold text-sm">{train.title}</td>
                  <td className="p-3">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      train.category === 'Mandatory' ? 'bg-red-100 text-red-800' :
                      train.category === 'Technical' ? 'bg-blue-100 text-blue-800' :
                      train.category === 'Leadership' ? 'bg-purple-100 text-purple-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {train.category}
                    </span>
                  </td>
                  <td className="p-3 text-center">JG{train.targetJG}+</td>
                  <td className="p-3 text-center text-sm">{train.scheduled.toLocaleDateString()}</td>
                  <td className="p-3 text-center font-bold">{train.enrolled}</td>
                  <td className="p-3 text-center font-bold text-green-600">{train.completed}</td>
                  <td className="p-3 text-center font-bold">₱{(train.budget / 1000).toFixed(0)}k</td>
                  <td className="p-3 text-xs font-bold text-blue-600">{train.rocksLink}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Competency Progress */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-bold mb-4">Competency Profile Progress (CMG Avg)</h3>
        <div className="space-y-4">
          {[
            { competency: 'Job Knowledge', l1: 15, l2: 60, l3: 25, target: 'L2+ 85%' },
            { competency: 'Decision Making', l1: 20, l2: 55, l3: 25, target: 'L2+ 80%' },
            { competency: 'Communication', l1: 10, l2: 65, l3: 25, target: 'L2+ 90%' },
            { competency: 'Leadership', l1: 30, l2: 50, l3: 20, target: 'L2+ 70%' },
            { competency: 'Customer Focus', l1: 15, l2: 60, l3: 25, target: 'L2+ 85%' },
            { competency: 'Planning & Org', l1: 20, l2: 55, l3: 25, target: 'L2+ 80%' }
          ].map(comp => (
            <div key={comp.competency}>
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-sm">{comp.competency}</span>
                <span className="text-xs text-gray-600">{comp.target}</span>
              </div>
              <div className="flex gap-1">
                <div className="flex-1 bg-gray-200 rounded-full h-6 flex items-center justify-center text-xs text-gray-700 font-bold" style={{ width: `${comp.l1}%` }}>
                  {comp.l1}% L1
                </div>
                <div className="flex-1 bg-blue-400 rounded-full h-6 flex items-center justify-center text-xs text-white font-bold" style={{ width: `${comp.l2}%` }}>
                  {comp.l2}% L2
                </div>
                <div className="flex-1 bg-green-500 rounded-full h-6 flex items-center justify-center text-xs text-white font-bold" style={{ width: `${comp.l3}%` }}>
                  {comp.l3}% L3
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // ============================================================================
  // OHSW DASHBOARD
  // ============================================================================
  const OHSWDashboard = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Occupational Health, Safety & Wellness</h2>
      
      {/* OHSW Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <CheckCircle className="text-green-600 mb-2" size={24} />
          <div className="text-2xl font-bold text-green-700">92%</div>
          <div className="text-sm font-bold">Safety Training</div>
          <div className="text-xs text-green-600">Completion Rate</div>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <AlertCircle className="text-blue-600 mb-2" size={24} />
          <div className="text-2xl font-bold text-blue-700">1.2</div>
          <div className="text-sm font-bold">Incident Rate</div>
          <div className="text-xs text-blue-600">Per 100 employees</div>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <Heart className="text-purple-600 mb-2" size={24} />
          <div className="text-2xl font-bold text-purple-700">68%</div>
          <div className="text-sm font-bold">Wellness Participation</div>
          <div className="text-xs text-purple-600">Health screening + programs</div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <TrendingUp className="text-orange-600 mb-2" size={24} />
          <div className="text-2xl font-bold text-orange-700">₱2.7M</div>
          <div className="text-sm font-bold">Cost Avoidance</div>
          <div className="text-xs text-orange-600">Incident reduction vs Rock 1</div>
        </div>
      </div>

      {/* Incident Trending */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-bold mb-4">Incident & Near-Miss Trending (2024)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold mb-4 text-sm">Monthly Incidents</h4>
            <div className="space-y-2">
              {ohswData.incidents.map((incident, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-12 text-sm font-bold">{incident.month}</span>
                  <div className="flex-1 bg-gray-200 rounded h-6 relative">
                    <div className="bg-red-500 h-6 rounded flex items-center justify-end pr-2" style={{ width: `${incident.incidentCount * 30}%` }}>
                      {incident.incidentCount > 0 && <span className="text-white text-xs font-bold">{incident.incidentCount}</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-xs text-gray-600 mt-4">↓ Trending downward (Safety initiatives effective)</div>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm">Near-Miss Reporting (Leading Indicator)</h4>
            <div className="space-y-2">
              {ohswData.incidents.map((incident, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-12 text-sm font-bold">{incident.month}</span>
                  <div className="flex-1 bg-gray-200 rounded h-6 relative">
                    <div className="bg-blue-500 h-6 rounded flex items-center justify-end pr-2" style={{ width: `${incident.nearMissCount * 15}%` }}>
                      {incident.nearMissCount > 0 && <span className="text-white text-xs font-bold">{incident.nearMissCount}</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-xs text-gray-600 mt-4">↑ More reporting = Better safety culture</div>
          </div>
        </div>
      </div>

      {/* Wellness Programs */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-bold mb-4">Wellness Program Participation</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-sm mb-3">Annual Health Screening</h4>
            <div className="bg-gray-100 rounded-full h-8 relative flex items-center justify-center">
              <div className="bg-green-500 rounded-full h-8 flex items-center justify-center text-white font-bold text-sm" style={{ width: `${ohswData.screeningCompletion}%` }}>
                {ohswData.screeningCompletion}%
              </div>
            </div>
            <div className="text-xs text-gray-600 mt-2">Target: 80% | CMG employees screened</div>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-3">EAP Utilization</h4>
            <div className="bg-gray-100 rounded-full h-8 relative flex items-center justify-center">
              <div className="bg-purple-500 rounded-full h-8 flex items-center justify-center text-white font-bold text-sm" style={{ width: `${ohswData.eapUtilization}%` }}>
                {ohswData.eapUtilization}%
              </div>
            </div>
            <div className="text-xs text-gray-600 mt-2">Target: 8-12% | Counseling sessions</div>
          </div>
        </div>
      </div>

      {/* OHSW Audit Status */}
      <div className="bg-green-50 border border-green-300 rounded-lg p-6">
        <h3 className="text-lg font-bold text-green-900 mb-4">✓ Annual OHSW Audit - Q3 Complete</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { area: 'Hazard Assessment', score: '95%', status: 'Compliant' },
            { area: 'Safety Training', score: '92%', status: 'Compliant' },
            { area: 'Incident Management', score: '100%', status: 'Compliant' }
          ].map(audit => (
            <div key={audit.area} className="bg-white p-4 rounded border border-green-200">
              <div className="font-bold text-sm mb-1">{audit.area}</div>
              <div className="text-2xl font-bold text-green-700">{audit.score}</div>
              <div className="text-xs text-green-600 mt-1">{audit.status}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Heart icon import fallback
  const Heart = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  );

  // ============================================================================
  // SERVICE DELIVERY DASHBOARD
  // ============================================================================
  const ServiceDeliveryDashboard = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">HR Service Delivery</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-bold mb-4">Service Level Agreements (SLAs)</h3>
          <div className="space-y-3">
            {[
              { service: 'Leave Request Processing', sla: '4 hours', actual: '3.2 hours', status: '✓ Exceeds' },
              { service: 'Certificate Requests', sla: '1 day', actual: '18 hours', status: '✓ Exceeds' },
              { service: 'Employee Q&A (HR Helpdesk)', sla: '24 hours', actual: '8.5 hours', status: '✓ Exceeds' },
              { service: 'Benefits Inquiry', sla: '2 days', actual: '1.2 days', status: '✓ Exceeds' }
            ].map(sla => (
              <div key={sla.service} className="border-b pb-3">
                <div className="font-bold text-sm mb-1">{sla.service}</div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div>
                    <div className="text-gray-600">SLA Target</div>
                    <div className="font-bold">{sla.sla}</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Actual</div>
                    <div className="font-bold text-green-600">{sla.actual}</div>
                  </div>
                  <div>
                    <div className="font-bold text-green-600">{sla.status}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-bold mb-4">Current Workload (Today)</h3>
          <div className="space-y-3">
            {[
              { item: 'Leave Requests in Queue', count: serviceData.leaveRequests, icon: '📋' },
              { item: 'Certificate Requests', count: serviceData.certificateRequests, icon: '📄' },
              { item: 'HR Q&A Tickets', count: Math.floor(Math.random() * 12) + 5, icon: '❓' },
              { item: 'Benefits Inquiries', count: Math.floor(Math.random() * 8) + 3, icon: '💼' }
            ].map(work => (
              <div key={work.item} className="flex items-center justify-between border-b pb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{work.icon}</span>
                  <span className="text-sm font-bold">{work.item}</span>
                </div>
                <span className="text-lg font-bold text-blue-600">{work.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-blue-900 mb-3">✓ Employee Satisfaction Survey (Q3)</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { metric: 'HR Responsiveness', rating: serviceData.satisfactionScore, outOf: '5.0' },
            { metric: 'Process Clarity', rating: (Math.random() * 0.2 + 4).toFixed(1), outOf: '5.0' },
            { metric: 'Overall Support', rating: (Math.random() * 0.2 + 4.1).toFixed(1), outOf: '5.0' }
          ].map(survey => (
            <div key={survey.metric} className="bg-white p-4 rounded">
              <div className="text-sm text-gray-600 mb-1">{survey.metric}</div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-blue-600">{survey.rating}</span>
                <span className="text-gray-600">/ {survey.outOf}</span>
              </div>
              <div className="text-xs text-blue-600 mt-2">★★★★★</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // ============================================================================
  // MAIN RENDER
  // ============================================================================
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex overflow-x-auto gap-2 py-4">
            {[
              { id: 'executive', label: '📊 Executive Dashboard', icon: BarChart3 },
              { id: 'recruitment', label: '💼 Recruitment', icon: Users },
              { id: 'performance', label: '⭐ Performance', icon: TrendingUp },
              { id: 'talent', label: '🎯 Talent & Succession', icon: Briefcase },
              { id: 'training', label: '📚 Training & L&D', icon: CheckCircle },
              { id: 'ohsw', label: '🏥 OHSW', icon: AlertCircle },
              { id: 'service', label: '🛠️ Service Delivery', icon: Briefcase }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded whitespace-nowrap font-bold text-sm transition ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === 'executive' && <ExecutiveDashboard />}
        {activeTab === 'recruitment' && <RecruitmentDashboard />}
        {activeTab === 'performance' && <PerformanceDashboard />}
        {activeTab === 'talent' && <TalentDashboard />}
        {activeTab === 'training' && <TrainingDashboard />}
        {activeTab === 'ohsw' && <OHSWDashboard />}
        {activeTab === 'service' && <ServiceDeliveryDashboard />}
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-2">📌 System Status</h3>
              <p className="text-gray-400 text-sm">HRIS Mockup v1.0 - CMG Pilot Ready for Executive Review</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">🎯 Strategic Alignment</h3>
              <p className="text-gray-400 text-sm">All HR functions mapped to PGB Rocks (Rock 1-4)</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">🚀 Next Steps</h3>
              <p className="text-gray-400 text-sm">Executive feedback → HRIS build → Supabase deployment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

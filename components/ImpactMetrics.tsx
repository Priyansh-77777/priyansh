import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import { RETENTION_DATA, HIGHLIGHTS } from '../constants';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-800 border border-slate-700 p-4 rounded-lg shadow-xl">
        <p className="text-slate-200 font-bold mb-2">{label}</p>
        <p className="text-slate-400 text-sm">
          Before: <span className="text-red-400">{payload[0].payload.before}%</span>
        </p>
        <p className="text-white font-medium text-lg">
          After: <span className="text-green-400">{payload[0].payload.after}%</span>
        </p>
      </div>
    );
  }
  return null;
};

const ImpactMetrics: React.FC = () => {
  return (
    <section id="impact" className="py-20 px-6 md:px-12 bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Quantifiable Impact</h2>
          <p className="text-slate-400 max-w-2xl">
            My product philosophy is simple: measure, experiment, iterate. Here are key outcomes from my time at Terra and Studio Sirah.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {HIGHLIGHTS.map((item, idx) => (
            <div key={idx} className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl hover:bg-slate-800 transition-colors">
              <div className="bg-slate-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-slate-700">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Chart Section */}
        <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-8">
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white">Core Retention Improvement (Terra)</h3>
            <p className="text-slate-400 text-sm">Comparison of key health metrics before and after product interventions.</p>
          </div>
          
          <div className="w-full h-[400px]" style={{ minHeight: '400px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={RETENTION_DATA}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                barSize={40}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  stroke="#94a3b8" 
                  tick={{fill: '#94a3b8'}} 
                  axisLine={{stroke: '#475569'}}
                />
                <YAxis 
                  stroke="#94a3b8" 
                  tick={{fill: '#94a3b8'}} 
                  axisLine={{stroke: '#475569'}}
                  unit="%"
                />
                <Tooltip content={<CustomTooltip />} cursor={{fill: '#1e293b'}} />
                <Bar dataKey="before" fill="#ef4444" radius={[4, 4, 0, 0]} name="Before" />
                <Bar dataKey="after" fill="#22c55e" radius={[4, 4, 0, 0]} name="After">
                  {RETENTION_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#3b82f6' : index === 1 ? '#8b5cf6' : '#10b981'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
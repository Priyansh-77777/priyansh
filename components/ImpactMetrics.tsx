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
      <div className="bg-white border border-line p-4 shadow-xl">
        <p className="text-ink font-serif font-bold mb-2 text-lg">{label}</p>
        <p className="text-graphite text-sm border-b border-line pb-2 mb-2">
          Before: <span className="text-red-500 font-mono">{payload[0].payload.before}%</span>
        </p>
        <p className="text-ink font-medium text-base">
          After: <span className="text-green-600 font-mono">{payload[0].payload.after}%</span>
        </p>
      </div>
    );
  }
  return null;
};

const ImpactMetrics: React.FC = () => {
  return (
    <section id="impact" className="border-b border-line">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4">
          
          {/* Section Title Sidebar */}
          <div className="p-6 md:p-12 border-b lg:border-b-0 lg:border-r border-line lg:sticky lg:top-24 h-fit">
            <span className="text-xs font-bold uppercase tracking-widest text-graphite mb-4 block">01 — Impact</span>
            <h2 className="text-4xl font-serif font-medium text-ink mb-6">
              Quantifiable <br /> <span className="italic text-graphite">Outcomes</span>
            </h2>
            <p className="text-graphite text-sm leading-relaxed">
              My philosophy: Measure, experiment, iterate. Data from live products.
            </p>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              {HIGHLIGHTS.map((item, idx) => (
                <div key={idx} className={`p-8 md:p-12 border-b border-line ${idx % 2 === 0 ? 'md:border-r' : ''} hover:bg-white transition-colors duration-500`}>
                  <div className="mb-6 text-ink">
                    {React.cloneElement(item.icon as any, { className: "w-8 h-8", strokeWidth: 1.5 })}
                  </div>
                  <h3 className="text-2xl font-serif font-medium text-ink mb-2">{item.title}</h3>
                  <p className="text-graphite font-light">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Chart Section */}
            <div className="p-8 md:p-12 bg-white/50">
              <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-ink">Core Retention Improvement</h3>
                  <p className="text-graphite text-sm">Terra Game Studio Metrics (2024-2025)</p>
                </div>
                <div className="flex gap-4 text-xs font-mono">
                   <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-zinc-300"></div> Before
                   </div>
                   <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-ink"></div> After
                   </div>
                </div>
              </div>
              
              <div className="w-full h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={RETENTION_DATA}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    barSize={60}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" vertical={false} />
                    <XAxis 
                      dataKey="name" 
                      stroke="#4a4a4a" 
                      tick={{fill: '#4a4a4a', fontFamily: 'Inter'}} 
                      axisLine={{stroke: '#e5e5e5'}}
                      tickLine={false}
                    />
                    <YAxis 
                      stroke="#4a4a4a" 
                      tick={{fill: '#4a4a4a', fontFamily: 'Inter'}} 
                      axisLine={false}
                      tickLine={false}
                      unit="%"
                    />
                    <Tooltip content={<CustomTooltip />} cursor={{fill: '#f4f4f0'}} />
                    <Bar dataKey="before" fill="#d4d4d8" radius={[0, 0, 0, 0]} animationDuration={1500} />
                    <Bar dataKey="after" fill="#111111" radius={[0, 0, 0, 0]} animationDuration={1500}>
                      {RETENTION_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill="#111111" />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
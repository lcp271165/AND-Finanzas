import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, MoreVertical } from 'lucide-react';
import { cn } from '../../lib/utils';

const marginData = [
  { name: 'Jan', gross: 45, op: 32 },
  { name: 'Feb', gross: 52, op: 35 },
  { name: 'Mar', gross: 48, op: 30 },
  { name: 'Apr', gross: 61, op: 42 },
  { name: 'May', gross: 55, op: 38 },
  { name: 'Jun', gross: 65, op: 45 },
];

export default function Profitability() {
  return (
    <div className="space-y-24 animate-in fade-in duration-700">
      <section className="relative">
        <div className="h-1 w-16 bg-accent mb-8"></div>
        <h1 className="text-[120px] font-black tracking-tighter text-white leading-[0.75] mb-8">
          Profit<br/><span className="text-accent font-serif font-light italic">Analysis.</span>
        </h1>
        <p className="text-white/40 text-sm max-w-sm tracking-[2px] uppercase font-bold leading-relaxed">
          Comprehensive evaluation of organizational efficiency and value creation silhouettes.
        </p>
      </section>

      {/* KPI Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-y border-white/10">
        {[
          {label: 'MARGEN NETO', value: '18.2%', change: '+1.2% vs Q2', status: 'Strong'},
          {label: 'ROE', value: '22.1%', change: '+2.5% vs Q2', status: 'Optimal'},
          {label: 'ROA', value: '8.4%', change: 'Stable', status: 'Moderate'},
        ].map((kpi, idx) => (
          <div key={kpi.label} className={cn(
            "p-12 border-white/10 flex flex-col items-start",
            idx !== 2 && "md:border-r border-b md:border-b-0"
          )}>
            <div className="flex justify-between items-center w-full mb-6 text-[10px] font-bold text-white/20 uppercase tracking-[4px]">
               <span>0{idx + 1} / {kpi.label}</span>
               <TrendingUp className="w-4 h-4 text-accent/20" />
            </div>
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-6xl font-black text-white tracking-tighter">{kpi.value}</span>
              <span className="text-[10px] text-white/40 font-bold uppercase tracking-[2px]">{kpi.change}</span>
            </div>
            <div className="mt-auto">
              <span className={cn(
                "inline-flex items-center px-4 py-1 border border-white/10 text-[9px] font-bold uppercase tracking-[3px]",
                kpi.status === 'Strong' ? "text-accent border-accent/20" :
                kpi.status === 'Optimal' ? "text-accent border-accent/20" : "text-white/40"
              )}>
                {kpi.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/10">
        {/* Margin Evolution Chart */}
        <div className="lg:col-span-2 p-10 lg:p-16">
          <div className="flex justify-between items-center mb-16">
            <h3 className="text-3xl font-serif italic text-white underline decoration-accent/40 decoration-4 underline-offset-8">Margin Trajectory</h3>
            <button className="text-white/20 hover:text-white"><MoreVertical className="w-5 h-5" /></button>
          </div>
          <div className="h-80 w-full opacity-60">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={marginData}>
                <defs>
                  <linearGradient id="colorGross" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#D4FF00" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#D4FF00" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="0" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: 'rgba(255,255,255,0.2)', fontWeight: 'bold'}} />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{backgroundColor: '#000', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0'}}
                />
                <Area type="monotone" dataKey="gross" stroke="#D4FF00" strokeWidth={3} fillOpacity={1} fill="url(#colorGross)" />
                <Area type="monotone" dataKey="op" stroke="rgba(255,255,255,0.2)" strokeWidth={1} strokeDasharray="10 5" fill="none" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-12 mt-12 mb-8">
             <div className="flex items-center gap-3 text-[9px] font-bold text-white/30 uppercase tracking-[3px]">
              <div className="w-2 h-2 bg-accent rounded-full"></div> Gross Margin
            </div>
            <div className="flex items-center gap-3 text-[9px] font-bold text-white/30 uppercase tracking-[3px]">
              <div className="w-2 h-2 border border-white/30 rounded-full"></div> Operational
            </div>
          </div>
        </div>

        {/* Breakdown Panel */}
        <div className="bg-surface-container p-12 border-l border-white/10 flex flex-col">
          <h3 className="text-xl font-serif italic text-white mb-16">Revenue Matrix.</h3>
          <div className="flex-1 space-y-10">
            {[
              {label: 'Revenue', value: '100%', color: 'bg-white'},
              {label: 'COGS', value: '-40%', color: 'bg-accent/40', align: 'end'},
              {label: 'Gross', value: '60%', color: 'bg-accent'},
              {label: 'OPEX', value: '-30%', color: 'bg-accent/20', align: 'end'},
            ].map((item) => (
              <div key={item.label} className="space-y-2">
                <div className="flex justify-between text-[9px] font-bold text-white/40 uppercase tracking-[2px]">
                  <span>{item.label}</span>
                  <span className={cn(item.value.startsWith('-') ? "text-white/60" : "text-accent")}>{item.value}</span>
                </div>
                <div className={cn("h-1 flex", item.align === 'end' ? "justify-end" : "justify-start")}>
                  <div className={cn("h-full", item.color)} style={{width: item.value.replace('-', '')}}></div>
                </div>
              </div>
            ))}
            <div className="pt-8 mt-4 border-t border-white/5 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[11px] font-black text-white uppercase tracking-[4px]">Net Income</span>
                <span className="text-2xl font-black text-accent tracking-tighter">30%</span>
              </div>
               <div className="h-0.5 bg-accent w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

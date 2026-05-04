import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell
} from 'recharts';
import {TrendingUp, TrendingDown, ArrowRight} from 'lucide-react';

const revenueData = [
  {name: 'Jan', revenue: 15, ebitda: 8},
  {name: 'Feb', revenue: 22, ebitda: 12},
  {name: 'Mar', revenue: 18, ebitda: 10},
  {name: 'Apr', revenue: 30, ebitda: 18},
  {name: 'May', revenue: 38, ebitda: 22},
  {name: 'Jun', revenue: 42, ebitda: 25},
  {name: 'Jul', revenue: 48, ebitda: 30},
];

const comparativeData = [
  {year: '2022', revenue: 320, netIncome: 120},
  {year: '2023', revenue: 450, netIncome: 180},
  {year: '2024', revenue: 580, netIncome: 240},
];

export default function Overview() {
  return (
    <div className="space-y-24 animate-in fade-in duration-1000">
      <section className="relative">
        <div className="h-1 w-16 bg-accent mb-8"></div>
        <h1 className="text-[140px] font-black tracking-tighter text-white leading-[0.75] mb-8">
          Raw<br/><span className="text-accent font-serif font-light italic">Data.</span>
        </h1>
        <p className="text-white/40 text-sm max-w-sm tracking-[2px] uppercase font-bold leading-relaxed">
          A curated exploration of fiscal architecture and minimalist performance silhouettes.
        </p>
      </section>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/10">
        {[
          {label: 'Current Ratio', value: '2.4x', change: '+0.15 from Q2', trend: 'up'},
          {label: 'Debt to Equity', value: '0.45', change: '-0.02 from Q2', trend: 'down'},
          {label: 'Net Profit Margin', value: '18.2%', change: '+1.2% from Q2', trend: 'up'},
        ].map((kpi, idx) => (
          <div key={kpi.label} className={cn(
            "py-16 px-4 md:px-10 border-white/10",
            idx !== 2 && "md:border-r"
          )}>
            <div className="font-serif italic text-white/10 text-xl mb-6">0{idx + 1}</div>
            <p className="text-[10px] font-bold text-accent uppercase tracking-[4px] mb-8">{kpi.label}</p>
            <div className="flex items-baseline gap-2">
              <span className="text-7xl font-black text-white tracking-tighter">{kpi.value}</span>
            </div>
            <div className={cn(
              "text-[10px] font-bold uppercase tracking-[2px] mt-8 flex items-center gap-2",
              kpi.trend === 'up' ? "text-accent" : "text-rose-500"
            )}>
              <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
              {kpi.change}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 border-y border-white/10">
        {/* Main Chart Area */}
        <div className="lg:col-span-2 p-10 lg:p-16">
          <div className="flex justify-between items-start mb-16">
            <h3 className="text-4xl font-serif italic text-white">Market Evolution</h3>
            <div className="flex gap-10 text-[9px] font-bold uppercase tracking-[3px] text-white/30">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div> REVENUE
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 border border-white/30 rounded-full"></div> EBITDA
              </div>
            </div>
          </div>
          <div className="h-96 w-full opacity-60 flex items-end">
             <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData} barGap={4}>
                <CartesianGrid strokeDasharray="0" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 9, fill: 'rgba(255,255,255,0.2)', fontWeight: 'black'}} />
                <YAxis hide />
                <Bar dataKey="revenue" fill="#D4FF00" radius={[0, 0, 0, 0]} />
                <Bar dataKey="ebitda" fill="rgba(255,255,255,0.1)" radius={[0, 0, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Side Table Summary */}
        <div className="bg-surface-container p-10 lg:p-16 border-l border-white/10">
          <div className="text-[11px] font-bold text-accent uppercase tracking-[6px] mb-12">Performance Index</div>
          <div className="space-y-12">
            {[
              {year: '2022', revenue: '320M', netIncome: '120M'},
              {year: '2023', revenue: '450M', netIncome: '180M'},
              {year: '2024', revenue: '580M', netIncome: '240M'},
            ].map((entry) => (
              <div key={entry.year} className="group cursor-pointer">
                <div className="font-serif italic text-white/30 text-xs mb-2">FY {entry.year}</div>
                <div className="flex justify-between items-end">
                  <div className="text-3xl font-black text-white group-hover:text-accent transition-colors tracking-tighter">
                    {entry.revenue}
                  </div>
                  <div className="text-[10px] font-bold text-white/40 uppercase tracking-[2px] mb-1">
                    NET: {entry.netIncome}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-20 w-full py-8 bg-accent text-black text-[12px] font-black uppercase tracking-[4px] hover:bg-white transition-all flex justify-between px-8 items-center">
            <span>Exploration</span>
            <span className="text-xl">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

import {cn} from '@/src/lib/utils';

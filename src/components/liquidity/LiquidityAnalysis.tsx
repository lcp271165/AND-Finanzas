import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import {TrendingUp, Droplets, CreditCard, Wallet, CloudDownload} from 'lucide-react';
import {cn} from '@/src/lib/utils';

const liquidityBreakdown = [
  {name: 'Efectivo', value: 45, color: '#D4FF00'},
  {name: 'Cuentas x Cobrar', value: 30, color: 'rgba(255,255,255,0.4)'},
  {name: 'Inventario', value: 25, color: 'rgba(255,255,255,0.1)'},
];

const liquidityAccounts = [
  {name: 'Efectivo y Equivalentes', current: '$1,250,000', previous: '$980,000', change: '+27.5%', status: 'Saludable'},
  {name: 'Cuentas por Cobrar', current: '$850,000', previous: '$920,000', change: '-7.6%', status: 'Mejorando'},
  {name: 'Inventario', current: '$2,100,000', previous: '$1,850,000', change: '+13.5%', status: 'Atención'},
];

export default function LiquidityAnalysis() {
  return (
    <div className="space-y-24 animate-in fade-in duration-700">
      <section className="relative flex justify-between items-end">
        <div>
          <div className="h-1 w-16 bg-accent mb-8"></div>
          <h1 className="text-[120px] font-black tracking-tighter text-white leading-[0.75] mb-8">
            Liquid<br/><span className="text-accent font-serif font-light italic">Flow.</span>
          </h1>
          <p className="text-white/40 text-sm max-w-sm tracking-[2px] uppercase font-bold leading-relaxed">
            Dynamic monitoring of immediate obligation capacity and terminal cash architectures.
          </p>
        </div>
        <div className="flex gap-4 mb-4">
           <button className="flex items-center gap-3 px-8 py-4 border border-white/10 text-[10px] font-black uppercase tracking-[4px] text-white/40 hover:text-accent hover:border-accent/40 transition-all">
            <CloudDownload className="w-4 h-4" />
            Archive PDF
          </button>
        </div>
      </section>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-y border-white/10">
        {[
          {label: 'CURRENT RATIO', value: '2.4x', delta: '+0.2', deltaType: 'positive', sub: 'Current Assets / Current Liabs'},
          {label: 'PRUEBA ÁCIDA', value: '1.8x', delta: '+0.1', deltaType: 'positive', sub: '(Current Assets - Inv) / Liabs'},
          {label: 'CASH RATIO', value: '0.9x', delta: '-0.05', deltaType: 'negative', sub: 'Cash / Current Liabilities'},
        ].map((kpi, idx) => (
          <div key={kpi.label} className={cn(
            "p-12 border-white/10 flex flex-col items-start",
             idx !== 2 && "md:border-r border-b md:border-b-0"
          )}>
            <p className="text-[10px] font-black text-white/20 uppercase tracking-[4px] mb-8">Metrics // 0{idx + 1}</p>
            <p className="text-[10px] font-bold text-accent uppercase tracking-[2px] mb-6">{kpi.label}</p>
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-6xl font-black text-white tracking-tighter">{kpi.value}</span>
              <span className={cn(
                "text-[10px] font-bold uppercase tracking-[2px]",
                kpi.deltaType === 'positive' ? "text-accent" : "text-rose-500"
              )}>
                {kpi.delta}
              </span>
            </div>
            <p className="text-[9px] text-white/30 font-bold uppercase tracking-[1px] leading-tight mt-4">{kpi.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/10">
        <div className="lg:col-span-2 p-10 lg:p-16">
           <h3 className="text-4xl font-serif italic text-white mb-16 underline decoration-accent/40 decoration-4 underline-offset-8">Asset Morphology</h3>
           <div className="h-80 w-full flex items-end justify-between px-10 opacity-70">
              {liquidityBreakdown.map((item) => (
                <div key={item.name} className="flex flex-col items-center gap-6 w-1/4 group cursor-pointer">
                  <div className="w-full bg-white/5 relative h-64 overflow-hidden">
                    <div 
                      className="absolute inset-x-0 bottom-0 transition-all duration-700 ease-out group-hover:opacity-100 opacity-80" 
                      style={{height: `${item.value}%`, backgroundColor: item.color}}
                    ></div>
                    <span className="absolute top-4 left-4 text-[10px] font-black text-white grayscale group-hover:grayscale-0">{item.value}%</span>
                  </div>
                  <span className="text-[9px] font-bold text-white/30 uppercase tracking-[4px]">{item.name}</span>
                </div>
              ))}
           </div>
           <div className="mt-16 flex justify-center gap-12 border-t border-white/5 pt-10">
              {liquidityBreakdown.map(item => (
                <div key={item.name} className="flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full" style={{backgroundColor: item.color}}></div>
                   <span className="text-[9px] font-bold text-white/30 uppercase tracking-[3px]">{item.name}</span>
                </div>
              ))}
           </div>
        </div>

        <div className="bg-surface-container p-12 border-l border-white/10 flex flex-col justify-between">
          <h3 className="text-xl font-serif italic text-white mb-16">Conversion Silhouettes.</h3>
          <div className="space-y-12">
            {[
              {l: 'DSO (COBRANZA)', v: '45 Days', d: '-2 days', type: 'acc'},
              {l: 'DIO (INVENTARIO)', v: '60 Days', d: 'Stable', type: 'neu'},
              {l: 'DPO (PAGOS)', v: '30 Days', d: '+5 days', type: 'neg'},
            ].map((item) => (
              <div key={item.l} className="group">
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <p className="text-[10px] font-black text-white/40 uppercase tracking-[2px] leading-none mb-2">{item.l}</p>
                    <div className="flex gap-1">
                      {Array.from({length: 8}).map((_, i) => (
                        <div key={i} className={cn("w-2 h-0.5", i < 4 ? "bg-accent/40" : "bg-white/5")}></div>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black text-white group-hover:text-accent transition-colors">{item.v}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-20 p-10 bg-accent text-black flex items-center justify-between group cursor-pointer overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 border border-black/10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="text-[11px] font-black uppercase tracking-[4px] relative z-10 leading-tight">Cash<br/>Cycle</div>
            <div className="text-right flex items-baseline gap-2 relative z-10">
              <span className="text-6xl font-black tracking-tighter">75</span>
              <span className="text-xl font-black">DAYS</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-white/10 bg-surface-container-lowest overflow-hidden">
        <div className="p-10 border-b border-white/5 flex justify-between items-center">
           <h3 className="text-2xl font-serif italic text-white">Registry Detail.</h3>
           <div className="text-[9px] font-black text-white/20 uppercase tracking-[4px]">Ledger v.2026.01</div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="text-[10px] font-bold text-white/30 uppercase tracking-[4px] border-b border-white/5">
              <tr>
                <th className="px-10 py-8 text-left">Entity</th>
                <th className="px-10 py-8 text-right">Actual</th>
                <th className="px-10 py-8 text-right">Previous</th>
                <th className="px-10 py-8 text-right">Delta</th>
                <th className="px-10 py-8 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {liquidityAccounts.map((acc, idx) => (
                <tr key={acc.name} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="px-10 py-8">
                    <div className="flex items-center gap-6">
                      <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/20 group-hover:border-accent/40 group-hover:text-accent transition-all">
                        {idx === 0 ? <Wallet className="w-4 h-4" /> : idx === 1 ? <CreditCard className="w-4 h-4" /> : <Droplets className="w-4 h-4" />}
                      </div>
                      <span className="text-sm font-black text-white tracking-widest uppercase">{acc.name}</span>
                    </div>
                  </td>
                  <td className="px-10 py-8 text-right text-lg font-black text-white group-hover:text-accent transition-colors tracking-tighter">{acc.current}</td>
                  <td className="px-10 py-8 text-right text-sm text-white/40">{acc.previous}</td>
                  <td className={cn("px-10 py-8 text-right text-sm font-black", acc.change.startsWith('+') ? "text-accent" : "text-rose-500")}>{acc.change}</td>
                  <td className="px-10 py-8 text-right">
                    <span className={cn(
                      "px-4 py-1 border text-[9px] font-black uppercase tracking-[2px]",
                      acc.status === 'Saludable' ? "border-accent/30 text-accent" : 
                      acc.status === 'Mejorando' ? "border-accent/10 text-white/60" : "border-rose-500/30 text-rose-500"
                    )}>
                      {acc.status}
                    </span>
                  </td>
                </tr>
              ))}
              <tr className="bg-white/[0.02]">
                  <td className="px-10 py-10 text-[11px] font-black text-white uppercase tracking-[4px]">Total Active Flow</td>
                  <td className="px-10 py-10 text-right text-2xl font-black text-white tracking-tighter">$4,200,000</td>
                  <td className="px-10 py-10 text-right text-sm text-white/30 font-bold uppercase">$3,750,000</td>
                  <td className="px-10 py-10 text-right text-sm font-black text-accent">+12.0%</td>
                  <td className="px-10 py-10 text-right"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

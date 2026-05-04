import {cn} from '@/src/lib/utils';
import {TrendingUp, TrendingDown, LayoutPanelLeft, ShieldCheck, Zap, History, CloudDownload} from 'lucide-react';

export default function SolvencyAnalysis() {
  return (
    <div className="space-y-24 animate-in fade-in duration-700">
      <section className="relative flex justify-between items-end">
        <div>
          <div className="h-1 w-16 bg-accent mb-8"></div>
          <h1 className="text-[120px] font-black tracking-tighter text-white leading-[0.75] mb-8">
            Debt<br/><span className="text-accent font-serif font-light italic">Resilience.</span>
          </h1>
          <p className="text-white/40 text-sm max-w-sm tracking-[2px] uppercase font-bold leading-relaxed">
            Structural resilience mapping across extended credit horizons and capital silhouettes.
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
          {label: 'LEVERAGE RATIO', value: '0.45', delta: '-0.02', status: 'Stable', statusType: 'success'},
          {label: 'INT. COVERAGE', value: '12.5x', delta: 'Stable', status: 'Strong', statusType: 'info'},
          {label: 'EQUITY MULTIPLIER', value: '1.8x', delta: '+0.1', status: 'Optimal', statusType: 'optimal'},
        ].map((kpi, idx) => (
          <div key={kpi.label} className={cn(
            "p-12 border-white/10 flex flex-col items-start gap-8",
            idx !== 2 && "md:border-r border-b md:border-b-0"
          )}>
            <div className="flex justify-between items-center w-full">
              <span className="text-[10px] font-black text-white/20 uppercase tracking-[4px]">0{idx + 1} / {kpi.label}</span>
              <span className={cn(
                "px-3 py-1 border text-[8px] font-bold uppercase tracking-[2px]",
                kpi.statusType === 'success' ? "border-accent/30 text-accent" :
                kpi.statusType === 'info' ? "border-accent/30 text-accent" : "border-white/10 text-white/40"
              )}>
                {kpi.status}
              </span>
            </div>
            <div className="text-7xl font-black text-white tracking-tighter">{kpi.value}</div>
            <div className={cn(
              "text-[10px] font-bold uppercase tracking-[2px] flex items-center gap-2",
              kpi.delta.includes('-') ? "text-accent" : kpi.delta.includes('+') ? "text-rose-500" : "text-white/30"
            )}>
              {kpi.delta.includes('-') ? <TrendingDown className="w-3 h-3" /> : kpi.delta.includes('+') ? <TrendingUp className="w-3 h-3" /> : <div className="w-1.5 h-1.5 rounded-full bg-current"></div>}
              {kpi.delta}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/10">
        {/* Capital Structure */}
        <div className="bg-surface-container p-12 border-white/10 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 border border-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <h3 className="text-xl font-serif italic text-white mb-16 self-start">Capital Architecture.</h3>
          <div className="relative flex flex-col items-center py-8">
            <div className="w-56 h-56 rounded-full border border-white/10 flex items-center justify-center relative group backdrop-blur-sm">
               <div className="text-center">
                 <p className="text-[10px] text-white/20 uppercase font-black tracking-[4px] mb-2">Total</p>
                 <p className="text-4xl font-black text-white group-hover:text-accent transition-colors tracking-tighter">100%</p>
               </div>
               
               <svg className="absolute inset-0 w-full h-full -rotate-90 opacity-60">
                 <circle cx="112" cy="112" r="108" fill="none" stroke="#D4FF00" strokeWidth="4" strokeDasharray="150 678" />
                 <circle cx="112" cy="112" r="108" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="528 678" strokeDashoffset="-150" />
               </svg>
            </div>
            <div className="mt-16 w-full space-y-6">
               <div className="flex justify-between items-center group">
                 <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-[2px]">Liabilities</p>
                 </div>
                 <p className="text-xl font-black text-white group-hover:text-accent transition-colors">(45%)</p>
               </div>
               <div className="h-px bg-white/5 w-full"></div>
                <div className="flex justify-between items-center group">
                 <div className="flex items-center gap-4">
                  <div className="w-2 h-2 border border-white/30 rounded-full"></div>
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-[2px]">Equity</p>
                 </div>
                 <p className="text-xl font-black text-white group-hover:text-accent transition-colors">(55%)</p>
               </div>
            </div>
          </div>
        </div>

        {/* Breakdown Table */}
        <div className="lg:col-span-2 p-10 lg:p-16 border-l border-white/10">
          <div className="flex justify-between items-center mb-16">
            <h3 className="text-4xl font-serif italic text-white underline decoration-accent/40 decoration-4 underline-offset-8">Capital Registry</h3>
            <div className="text-[9px] font-black text-white/20 uppercase tracking-[6px]">INDEXED // 2026.04</div>
          </div>
          <table className="w-full">
            <thead className="text-[10px] font-black text-white/30 uppercase tracking-[4px] border-b border-white/5">
              <tr>
                <th className="py-8 text-left">ENTITY</th>
                <th className="py-8 text-right">ACTUAL</th>
                <th className="py-8 text-right">PREVIOUS</th>
                <th className="py-8 text-right">DELTA</th>
                <th className="py-8 text-right">INDEX</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.03]">
              {[
                {label: 'Short Term Debt', c: '$1,250 M', p: '$1,400 M', d: '-10.7%', s: 'Mejora', st: 'success'},
                {label: 'Long Term Debt', c: '$3,500 M', p: '$3,200 M', d: '+9.3%', s: 'Atención', st: 'warning'},
                {label: 'Social Capital', c: '$4,000 M', p: '$4,000 M', d: '0.0%', s: 'Estable', st: 'default'},
                {label: 'Retained Earnings', c: '$1,850 M', p: '$1,500 M', d: '+23.3%', s: 'Fuerte', st: 'info'},
              ].map(row => (
                <tr key={row.label} className="group hover:bg-white/[0.01] transition-colors">
                  <td className="py-10">
                    <div className="flex flex-col">
                      <span className="text-sm font-black text-white tracking-widest uppercase">{row.label}</span>
                      <span className="text-[9px] text-white/20 font-bold tracking-[2px] mt-1">Registry Code: #S-{Math.floor(Math.random()*9000)}</span>
                    </div>
                  </td>
                  <td className="py-10 text-right text-xl font-black text-white tracking-tighter group-hover:text-accent transition-colors">{row.c}</td>
                  <td className="py-10 text-right text-sm text-white/30 font-bold uppercase">{row.p}</td>
                  <td className={cn("py-10 text-right text-sm font-black", row.d.startsWith('-') ? "text-accent" : row.d.startsWith('+') ? "text-rose-500" : "text-white/20")}>{row.d}</td>
                  <td className="py-10 text-right">
                    <span className={cn(
                      "px-3 py-1 border text-[9px] font-black uppercase tracking-[2px]",
                      row.st === 'success' ? "border-accent/30 text-accent" :
                      row.st === 'warning' ? "border-rose-500/30 text-rose-500" :
                      row.st === 'info' ? "border-accent/30 text-accent" : "border-white/10 text-white/40"
                    )}>
                      {row.s}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Sustainability Section */}
      <div className="bg-surface-container border border-white/10 p-16 overflow-hidden relative group">
        <div className="absolute bottom-0 right-0 w-[800px] h-0.5 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
        <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-start lg:items-center">
          <div className="w-24 h-24 border border-white/10 flex items-center justify-center bg-surface relative grayscale group-hover:grayscale-0 transition-all duration-700">
             <div className="absolute inset-2 border border-white/5"></div>
             <LayoutPanelLeft className="w-10 h-10 text-accent/40" />
          </div>
          <div className="space-y-8 flex-1">
            <h3 className="text-3xl font-serif italic text-white flex items-center gap-6">
              Sustainability Archive.
              <span className="h-0.5 w-12 bg-accent opacity-40"></span>
            </h3>
            <p className="text-white/40 text-sm leading-relaxed max-w-4xl tracking-wide">
              The current capital structure demonstrates a solid capacity for absorbing financial shocks. The leverage ratio of 0.45 indicates that the majority of financing is derived from equity, significantly reducing insolvency risk. Furthermore, the robust interest coverage (12.5x) confirms that operational flow is more than sufficient to serve current debt, projecting long-term structural stability.
            </p>
          </div>
          <div className="flex flex-col gap-6 w-full lg:w-auto">
             <button className="px-10 py-6 bg-accent text-black text-[11px] font-black uppercase tracking-[4px] hover:bg-white transition-all">
               Archive Report
             </button>
             <button className="px-10 py-6 border border-white/10 text-white text-[11px] font-black uppercase tracking-[4px] hover:bg-accent hover:text-black transition-all">
               Future Simulation
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}

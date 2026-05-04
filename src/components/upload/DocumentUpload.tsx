import {useState} from 'react';
import {UploadCloud, FileText, CheckCircle2, AlertCircle, X, Shield, Cpu, Trash2} from 'lucide-react';
import {cn} from '@/src/lib/utils';
import {motion, AnimatePresence} from 'motion/react';

export default function DocumentUpload() {
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = () => {
    if (isUploading) return;
    setIsUploading(true);
    let p = 0;
    const interval = setInterval(() => {
      p += 5;
      setProgress(p);
      if (p >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsUploading(false);
          setProgress(0);
        }, 1000);
      }
    }, 100);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-24 py-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <section className="relative">
        <div className="h-1 w-16 bg-accent mb-8"></div>
        <h1 className="text-[100px] font-black tracking-tighter text-white leading-[0.75] mb-8">
          Upload<br/><span className="text-accent font-serif font-light italic">Archive.</span>
        </h1>
        <p className="text-white/40 text-sm max-w-xl tracking-[2px] uppercase font-bold leading-relaxed">
          Secure ingestion of corporate financial silhouettes for automated extraction and morphological analysis.
        </p>
      </section>

      <div className="bg-surface-container border border-white/10 p-1 lg:p-2">
        <div 
          className={cn(
            "border border-dashed border-white/10 p-16 lg:p-32 flex flex-col items-center justify-center text-center transition-all group hover:border-accent/40 cursor-pointer relative overflow-hidden bg-surface",
            isUploading && "pointer-events-none"
          )}
          onClick={() => document.getElementById('fileInput')?.click()}
        >
          <div className="absolute top-0 right-0 w-64 h-64 border border-white/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <input type="file" id="fileInput" className="hidden" accept=".pdf" onChange={handleFileSelect} />
          
          <div className="w-24 h-24 border border-white/10 flex items-center justify-center mb-10 group-hover:border-accent/60 transition-all duration-700 bg-surface-container relative">
            <UploadCloud className="w-10 h-10 text-white/20 group-hover:text-accent transition-colors" />
          </div>
          
          <h3 className="text-4xl font-serif italic text-white mb-4 tracking-tight">
            {file ? file.name : "Drop Silhouette PDF"}
          </h3>
          <p className="text-white/30 text-[10px] font-bold uppercase tracking-[4px] mb-12">or select from local directory</p>
          
          <button className="px-12 py-6 bg-accent text-black text-[12px] font-black uppercase tracking-[4px] hover:bg-white transition-all">
            Select Archive
          </button>
        </div>

        <AnimatePresence>
          {file && (
            <motion.div 
              initial={{opacity: 0, height: 0}}
              animate={{opacity: 1, height: 'auto'}}
              exit={{opacity: 0, height: 0}}
              className="overflow-hidden"
            >
              <div className="p-12 border-t border-white/10 bg-surface-container-low">
                <div className="flex items-center gap-10">
                  <div className="w-16 h-16 border border-white/10 flex items-center justify-center text-white/20">
                    <FileText className="w-8 h-8" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="flex justify-between items-end">
                      <span className="text-lg font-black text-white tracking-widest uppercase truncate max-w-[400px]">{file.name}</span>
                      <span className="text-[10px] font-black text-accent tracking-[2px]">{progress > 0 ? `${progress}%` : 'READY'}</span>
                    </div>
                    <div className="h-0.5 bg-white/5 relative">
                      <div className="absolute top-0 left-0 h-full bg-accent transition-all duration-300" style={{width: `${progress}%`}} />
                    </div>
                  </div>
                  <button onClick={(e) => { e.stopPropagation(); setFile(null); }} className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/20 hover:text-rose-500 hover:border-rose-500/40 transition-all">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="flex justify-between items-center mt-12 pt-10 border-t border-white/5">
                  <span className="text-[10px] text-white/20 font-bold uppercase tracking-[2px]">
                    {isUploading ? `UPLOADING Silhouettes...` : 'Structure Verified // Archive Ready'}
                  </span>
                  {!isUploading ? (
                    <button onClick={(e) => { e.stopPropagation(); handleUpload(); }} className="flex items-center gap-4 bg-white text-black px-10 py-5 font-black text-[10px] uppercase tracking-[4px] hover:bg-accent transition-all">
                      Commence Analysis <CheckCircle2 className="w-4 h-4" />
                    </button>
                  ) : (
                    <button onClick={(e) => { e.stopPropagation(); setIsUploading(false); }} className="flex items-center gap-4 bg-rose-500 text-white px-10 py-5 font-black text-[10px] uppercase tracking-[4px]">
                      <AlertCircle className="w-4 h-4" /> Abort
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/10">
        {[
          {icon: Shield, title: 'Secure Flow', desc: 'End-to-end encrypted silhouette transmission.'},
          {icon: Cpu, title: 'AI Extraction', desc: 'Automated morphology of data structures.'},
          {icon: Trash2, title: 'Temporal Purge', desc: 'Archives self-destruct 24h post-analysis.'}
        ].map((item, idx) => (
          <div key={idx} className={cn("p-12 border-white/10", idx !== 2 && "md:border-r border-b md:border-b-0")}>
            <item.icon className="w-8 h-8 text-accent/40 mb-8" />
            <h4 className="text-xl font-serif italic text-white mb-4">{item.title}.</h4>
            <p className="text-[11px] text-white/30 font-bold uppercase tracking-[2px] leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

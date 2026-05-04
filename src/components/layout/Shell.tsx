import {ReactNode} from 'react';
import {
  LayoutDashboard,
  Droplets,
  Scale,
  TrendingUp,
  UploadCloud,
  Search,
  Bell,
  UserCircle,
  MoreVertical
} from 'lucide-react';
import {cn} from '@/src/lib/utils';

interface ShellProps {
  children: ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Shell({children, activeTab, setActiveTab}: ShellProps) {
  const navItems = [
    {id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard},
    {id: 'liquidity', label: 'Liquidity', icon: Droplets},
    {id: 'solvency', label: 'Solvency', icon: Scale},
    {id: 'profitability', label: 'Profitability', icon: TrendingUp},
  ];

  return (
    <div className="min-h-screen flex flex-col bg-surface overflow-x-hidden">
      {/* Top Navbar */}
      <header className="fixed top-0 w-full z-50 bg-surface border-b border-white/10 h-16 flex items-center px-6">
        <div className="flex justify-between items-center w-full max-w-[1440px] mx-auto">
          <div className="flex items-center">
            <span className="text-3xl font-black tracking-tighter text-white">AND.</span>
            <div className="ml-4 h-1 w-8 bg-accent"></div>
          </div>
          
          <div className="hidden lg:block text-[10px] uppercase tracking-[6px] text-white/30 font-bold">
            Financial Intelligence Archive // 2026
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <button className="text-white/40 hover:text-accent transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              <button className="text-white/40 hover:text-accent transition-colors">
                <UserCircle className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 pt-16">
        {/* Sidebar */}
        <nav className="fixed left-0 top-16 h-[calc(100vh-64px)] w-24 lg:w-32 bg-surface border-r border-white/10 flex flex-col py-10 z-40 items-center justify-between">
          <div className="flex flex-col gap-12 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={cn(
                  "relative group transition-all p-2",
                  activeTab === item.id 
                    ? "text-accent" 
                    : "text-white/20 hover:text-white"
                )}
                title={item.label}
              >
                <item.icon className="w-6 h-6" />
                {activeTab === item.id && (
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-4 bg-accent"></div>
                )}
              </button>
            ))}
          </div>

          <div className="flex flex-col items-center gap-8">
             <button
              onClick={() => setActiveTab('upload')}
              className={cn(
                "p-2 transition-all rounded-md",
                activeTab === 'upload' 
                  ? "text-accent" 
                  : "text-white/20 hover:text-white"
              )}
              title="Upload PDF"
            >
              <UploadCloud className="w-6 h-6" />
            </button>
            <div className="vertical-label text-[9px] uppercase tracking-[4px] text-white/20 font-bold py-4">
              SYSTEM v.1.0
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 ml-24 lg:ml-32 p-6 lg:p-16 max-w-[1440px] mx-auto w-full relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] border border-white/5 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          {children}
        </main>
      </div>
    </div>
  );
}

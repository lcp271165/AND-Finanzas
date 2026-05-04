import {useState, Suspense, lazy} from 'react';
import Shell from './components/layout/Shell';

const Overview = lazy(() => import('./components/dashboard/Overview'));
const LiquidityAnalysis = lazy(() => import('./components/liquidity/LiquidityAnalysis'));
const SolvencyAnalysis = lazy(() => import('./components/solvency/SolvencyAnalysis'));
const ProfitabilityAnalysis = lazy(() => import('./components/profitability/ProfitabilityAnalysis'));
const DocumentUpload = lazy(() => import('./components/upload/DocumentUpload'));

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Overview />;
      case 'liquidity':
        return <LiquidityAnalysis />;
      case 'solvency':
        return <SolvencyAnalysis />;
      case 'profitability':
        return <ProfitabilityAnalysis />;
      case 'upload':
        return <DocumentUpload />;
      default:
        return <Overview />;
    }
  };

  return (
    <Shell activeTab={activeTab} setActiveTab={setActiveTab}>
      <Suspense fallback={
        <div className="flex items-center justify-center h-[60vh]">
          <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-900 rounded-full animate-spin"></div>
        </div>
      }>
        {renderContent()}
      </Suspense>
    </Shell>
  );
}

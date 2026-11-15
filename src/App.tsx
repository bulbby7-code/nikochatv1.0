import { useState } from 'react';
import type { TabId } from './types/models';
import BottomNav from './components/BottomNav';
import StandbyPage from './pages/StandbyPage';
import ContactsPage from './pages/ContactsPage';
import DocumentsPage from './pages/DocumentsPage';
import SettingsPage from './pages/SettingsPage';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('standby');

  const renderPage = () => {
    switch (activeTab) {
      case 'standby':
        return <StandbyPage />;
      case 'contacts':
        return <ContactsPage />;
      case 'documents':
        return <DocumentsPage />;
      case 'settings':
        return <SettingsPage />;
      case 'game':
        // 游戏页面暂不实现
        return (
          <div className="page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p style={{ color: 'var(--color-text-tertiary)' }}>游戏功能开发中…</p>
          </div>
        );
      default:
        return <StandbyPage />;
    }
  };

  return (
    <>
      {renderPage()}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </>
  );
}
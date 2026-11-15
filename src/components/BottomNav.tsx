import './BottomNav.css';
import type { TabId } from '../types/models';

interface BottomNavProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

const tabs: { id: TabId; label: string; icon: string; iconActive: string }[] = [
  { id: 'standby', label: 'Standby', icon: '📱', iconActive: '📱' },
  { id: 'game', label: 'Game', icon: '🧩', iconActive: '🧩' },
  { id: 'contacts', label: 'Contacts', icon: '👥', iconActive: '👥' },
  { id: 'documents', label: 'Documents', icon: '📁', iconActive: '📁' },
  { id: 'settings', label: 'Settings', icon: '⚙️', iconActive: '⚙️' },
];

export default function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav className="bottom-nav" aria-label="主导航">
      <div className="bottom-nav__inner">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              className={`bottom-nav__item ${isActive ? 'bottom-nav__item--active' : ''}`}
              onClick={() => onTabChange(tab.id)}
              aria-current={isActive ? 'page' : undefined}
              type="button"
            >
              <span className="bottom-nav__icon">
                {isActive ? tab.iconActive : tab.icon}
              </span>
              <span className="bottom-nav__label">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
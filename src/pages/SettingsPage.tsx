import './SettingsPage.css';
import Avatar from '../components/Avatar';
import { mockCurrentUser, mockSettingsMenus } from '../data/mock';

export default function SettingsPage() {
  const user = mockCurrentUser;

  return (
    <div className="page settings-page">
      {/* 顶栏 */}
      <header className="settings-page__header">
        <div className="settings-page__header-left">
          <Avatar url={user.avatarUrl} name={user.name} size={36} />
          <div>
            <p className="settings-page__header-name">{user.name}</p>
            <p className="settings-page__header-handle">{user.handle}</p>
          </div>
        </div>
        <div className="settings-page__header-actions">
          <button type="button" className="settings-page__icon-btn" aria-label="深色模式">🌙</button>
          <button type="button" className="settings-page__icon-btn" aria-label="编辑">✏️</button>
        </div>
      </header>

      {/* 个人名片 */}
      <section className="settings-page__profile">
        <Avatar url={user.avatarUrl} name={user.name} size={120} className="settings-page__profile-avatar" />
        <h2 className="settings-page__profile-name">{user.name}</h2>
        <p className="settings-page__profile-bio">
          {user.bio} <span className="settings-page__profile-handle">{user.handle}</span>
        </p>
        <p className="settings-page__profile-location">📍 {user.location}</p>
      </section>

      {/* 菜单组 */}
      <section className="settings-page__menus">
        {/* 第一组：独立项 */}
        <div className="settings-page__menu-group">
          <SettingsRow icon={mockSettingsMenus[0].icon} label={mockSettingsMenus[0].label} />
        </div>

        {/* 第二组：多行 */}
        <div className="settings-page__menu-group">
          {mockSettingsMenus.slice(1, 4).map((item) => (
            <SettingsRow key={item.id} icon={item.icon} label={item.label} />
          ))}
        </div>

        {/* 第三组：设置 */}
        <div className="settings-page__menu-group">
          {mockSettingsMenus.slice(4).map((item) => (
            <SettingsRow key={item.id} icon={item.icon} label={item.label} />
          ))}
        </div>
      </section>
    </div>
  );
}

function SettingsRow({ icon, label }: { icon: string; label: string }) {
  return (
    <button type="button" className="settings-row" aria-label={label}>
      <span className="settings-row__icon">{icon}</span>
      <span className="settings-row__label">{label}</span>
      <span className="settings-row__arrow">›</span>
    </button>
  );
}
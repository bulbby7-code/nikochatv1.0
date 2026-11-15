import { useState } from 'react';
import './ContactsPage.css';
import Avatar from '../components/Avatar';
import StatusDot from '../components/StatusDot';
import { mockCharacters } from '../data/mock';

/** 通讯录页面 — 顶部大头像状态区 + 聊天列表 */
export default function ContactsPage() {
  const [searchText, setSearchText] = useState('');

  // 前几个角色作为"状态栏"展示
  const statusCharacters = mockCharacters.slice(0, 5);
  // 后面的角色作为聊天列表
  const chatListCharacters = mockCharacters.filter((c) => c.lastMessage);

  const filteredChats = chatListCharacters.filter((c) =>
    c.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <div className="page contacts-page">
      {/* 顶栏 */}
      <header className="contacts-page__header">
        <h1 className="contacts-page__title">
          Contacts <span className="contacts-page__title-arrow">▾</span>
        </h1>
        <div className="contacts-page__actions">
          <button type="button" className="contacts-page__action-btn" aria-label="随机">✦</button>
          <button type="button" className="contacts-page__action-btn" aria-label="添加角色">＋</button>
          <button type="button" className="contacts-page__action-btn" aria-label="菜单">☰</button>
        </div>
      </header>

      {/* 搜索栏 */}
      <div className="contacts-page__search-bar">
        <span className="contacts-page__search-icon">🔍</span>
        <input
          className="contacts-page__search-input"
          type="search"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          aria-label="搜索角色"
        />
      </div>

      {/* 角色状态大头像区 */}
      <section className="contacts-page__status-section" aria-label="角色状态">
        <div className="contacts-page__status-grid">
          {statusCharacters.map((char) => (
            <button key={char.id} className="status-card" type="button" aria-label={`查看 ${char.name}`}>
              <div className="status-card__avatar-wrap">
                <Avatar url={char.avatarUrl} name={char.name} size={80} />
                {char.status.text && char.status.text !== '在线' && char.status.text !== '离线' && (
                  <span className="status-card__bubble">{char.status.text}</span>
                )}
              </div>
              <div className="status-card__info">
                <StatusDot isOnline={char.isOnline} />
                <span className="status-card__name">{char.name}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* 聊天列表 */}
      <section className="contacts-page__chat-list" aria-label="最近聊天">
        {filteredChats.length === 0 ? (
          <div className="contacts-page__empty">没有匹配的角色</div>
        ) : (
          filteredChats.map((char) => (
            <button key={char.id} className="chat-row" type="button" aria-label={`与 ${char.name} 的聊天`}>
              <div className="chat-row__left">
                {char.unreadCount > 0 && (
                  <StatusDot isOnline size={10} />
                )}
                <Avatar url={char.avatarUrl} name={char.name} size={52} />
              </div>
              <div className="chat-row__content">
                <div className="chat-row__top">
                  <span className="chat-row__name">{char.name}</span>
                  <span className="chat-row__time">{char.lastMessageTime} ›</span>
                </div>
                <p className="chat-row__message">{char.lastMessage}</p>
              </div>
            </button>
          ))
        )}
      </section>
    </div>
  );
}
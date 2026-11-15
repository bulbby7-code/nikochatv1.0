import './StandbyPage.css';
import { mockWidgets, mockCharacters } from '../data/mock';
import Avatar from '../components/Avatar';
import type { TodoItem, WidgetContent } from '../types/models';

export default function StandbyPage() {
  // 当前角色（默认第一个）
  const currentChar = mockCharacters[0];

  return (
    <div className="page standby-page">
      {/* 名片区 */}
      <section className="standby-page__profile" aria-label="当前角色">
        <Avatar url={currentChar.avatarUrl} name={currentChar.name} size={72} />
        <h2 className="standby-page__name">{currentChar.name}</h2>
        <p className="standby-page__status">
          {currentChar.status.emoji && <span>{currentChar.status.emoji} </span>}
          {currentChar.bio || currentChar.status.text}
        </p>
      </section>

      {/* 小组件区域 */}
      <section className="standby-page__widgets" aria-label="小组件">
        <div className="standby-page__widget-grid">
          {mockWidgets.map((widget) => (
            <div
              key={widget.id}
              className={`widget-card widget-card--${widget.size}`}
            >
              <WidgetBody content={widget.content} title={widget.title} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

/** 根据内容类型渲染小组件内容 */
function WidgetBody({ content, title }: { content: WidgetContent; title?: string }) {
  switch (content.kind) {
    case 'image':
      return (
        <div className="widget-image">
          {content.url ? (
            <img src={content.url} alt={title || '图片'} loading="lazy" />
          ) : (
            <div className="widget-image__placeholder">
              <span>🖼️</span>
              {title && <p>{title}</p>}
            </div>
          )}
        </div>
      );

    case 'todo':
      return (
        <div className="widget-todo">
          <div className="widget-todo__icon">☰</div>
          <ul className="widget-todo__list">
            {content.items.map((item: TodoItem) => (
              <li key={item.id} className="widget-todo__item">
                <span className={`widget-todo__check ${item.done ? 'widget-todo__check--done' : ''}`}>
                  ○
                </span>
                <span className="widget-todo__text">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      );

    case 'calendar':
      return (
        <div className="widget-calendar">
          <span className="widget-calendar__date">{content.date}</span>
          <span className="widget-calendar__label">{content.label}</span>
        </div>
      );

    case 'music':
      return (
        <div className="widget-music">
          <span className="widget-music__icon">🎵</span>
          <p className="widget-music__song">{content.songName}</p>
          <p className="widget-music__artist">{content.artist}</p>
        </div>
      );

    case 'text':
      return (
        <div className="widget-text">
          <p>{content.text}</p>
        </div>
      );

    default:
      return null;
  }
}
import { useState } from 'react';
import './DocumentsPage.css';
import { mockEntryGroups } from '../data/mock';
import EmptyState from '../components/EmptyState';

type FilterKind = 'all' | 'entry' | 'sentenceFragment' | 'asset';
type ViewMode = 'grid' | 'list';

export default function DocumentsPage() {
  const [filter, setFilter] = useState<FilterKind>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  const filters: { key: FilterKind; label: string }[] = [
    { key: 'all', label: '全部' },
    { key: 'entry', label: '词条' },
    { key: 'sentenceFragment', label: '拼句' },
    { key: 'asset', label: '素材' },
  ];

  const filtered =
    filter === 'all'
      ? mockEntryGroups
      : mockEntryGroups.filter((g) => g.kind === filter);

  return (
    <div className="page documents-page">
      {/* 顶栏 */}
      <header className="documents-page__header">
        <h1 className="documents-page__title">
          资料库 <span className="documents-page__title-arrow">▾</span>
        </h1>
        <button type="button" className="documents-page__menu-btn" aria-label="管理">
          ☰
        </button>
      </header>

      {/* 筛选 */}
      <div className="documents-page__filters" role="tablist" aria-label="类型筛选">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            role="tab"
            aria-selected={filter === f.key}
            className={`documents-page__filter-chip ${filter === f.key ? 'documents-page__filter-chip--active' : ''}`}
            onClick={() => setFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* 内容 */}
      {filtered.length === 0 ? (
        <EmptyState icon="📂" title="暂无分组" description="创建一个新分组来管理词条或素材" />
      ) : viewMode === 'grid' ? (
        <div className="documents-page__grid" role="list">
          {filtered.map((group) => (
            <button key={group.id} className="folder-card" type="button" role="listitem" aria-label={`${group.name}，${group.itemCount} 项`}>
              <div className="folder-card__visual">
                <div className="folder-card__tab" />
                <div className="folder-card__body">
                  <span className="folder-card__icon">{group.icon}</span>
                </div>
              </div>
              <div className="folder-card__info">
                <span className="folder-card__name">{group.name}</span>
                <span className="folder-card__count">{group.itemCount}</span>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="documents-page__list" role="list">
          {filtered.map((group) => (
            <button key={group.id} className="list-row" type="button" role="listitem">
              <span className="list-row__icon">{group.icon}</span>
              <span className="list-row__name">{group.name}</span>
              <span className="list-row__count">{group.itemCount} 项</span>
              <span className="list-row__arrow">›</span>
            </button>
          ))}
        </div>
      )}

      {/* 底部视图切换 + 搜索 */}
      <div className="documents-page__toolbar">
        <div className="documents-page__view-switch" role="radiogroup" aria-label="视图模式">
          <button
            type="button"
            role="radio"
            aria-checked={viewMode === 'grid'}
            className={`documents-page__view-btn ${viewMode === 'grid' ? 'documents-page__view-btn--active' : ''}`}
            onClick={() => setViewMode('grid')}
          >
            ▦ Grid
          </button>
          <button
            type="button"
            role="radio"
            aria-checked={viewMode === 'list'}
            className={`documents-page__view-btn ${viewMode === 'list' ? 'documents-page__view-btn--active' : ''}`}
            onClick={() => setViewMode('list')}
          >
            ☰ List
          </button>
        </div>
        <button type="button" className="documents-page__search-fab" aria-label="搜索">
          🔍
        </button>
      </div>
    </div>
  );
}
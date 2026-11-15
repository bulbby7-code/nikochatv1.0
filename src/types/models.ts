/** 角色 */
export interface Character {
  id: string;
  name: string;
  avatarUrl: string;
  bio: string;
  status: CharacterStatus;
  unreadCount: number;
  lastMessage: string;
  lastMessageTime: string;
  isOnline: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CharacterStatus {
  text: string;
  emoji?: string;
}

/** 词条分组 */
export interface EntryGroup {
  id: string;
  characterId: string | null; // null = global
  name: string;
  icon: string;
  kind: 'entry' | 'sentenceFragment' | 'asset';
  itemCount: number;
  createdAt: string;
}

/** 词条 */
export interface Entry {
  id: string;
  characterId: string;
  groupId: string;
  content: string;
  enabled: boolean;
  createdAt: string;
  updatedAt: string;
}

/** 设置菜单项 */
export interface SettingsMenuItem {
  id: string;
  icon: string;
  label: string;
  /** 如果有子菜单项则聚合 */
  children?: SettingsMenuItem[];
}

/** 首页小组件 */
export interface HomeWidget {
  id: string;
  type: 'image' | 'todo' | 'calendar' | 'music' | 'shortcut';
  title?: string;
  size: 'small' | 'medium' | 'large';
  content: WidgetContent;
}

export type WidgetContent =
  | { kind: 'image'; url: string }
  | { kind: 'todo'; items: TodoItem[] }
  | { kind: 'calendar'; date: string; label: string }
  | { kind: 'music'; songName: string; artist: string }
  | { kind: 'text'; text: string };

export interface TodoItem {
  id: string;
  text: string;
  done: boolean;
}

/** 导航 Tab */
export type TabId = 'standby' | 'game' | 'contacts' | 'documents' | 'settings';
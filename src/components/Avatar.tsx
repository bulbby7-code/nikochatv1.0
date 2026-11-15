import './Avatar.css';

interface AvatarProps {
  url: string;
  name: string;
  size?: number;
  className?: string;
}

/** 头像组件，无图片时显示首字符占位 */
export default function Avatar({ url, name, size = 48, className = '' }: AvatarProps) {
  const initial = name.charAt(0).toUpperCase() || '?';
  const sizeStyle = { width: size, height: size, fontSize: size * 0.38 };

  if (url) {
    return (
      <img
        className={`avatar ${className}`}
        src={url}
        alt={name}
        style={sizeStyle}
        loading="lazy"
      />
    );
  }

  return (
    <div
      className={`avatar avatar--placeholder ${className}`}
      style={sizeStyle}
      role="img"
      aria-label={name}
    >
      {initial}
    </div>
  );
}
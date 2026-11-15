interface StatusDotProps {
  isOnline: boolean;
  size?: number;
}

/** 在线状态小圆点 */
export default function StatusDot({ isOnline, size = 10 }: StatusDotProps) {
  if (!isOnline) return null;
  return (
    <span
      className="status-dot"
      role="status"
      aria-label="在线"
      style={{
        display: 'inline-block',
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: 'var(--color-info)',
        border: '2px solid var(--color-bg-card)',
        flexShrink: 0,
      }}
    />
  );
}
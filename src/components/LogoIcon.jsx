export function LogoIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-label="MaelPlays">
      <rect width="100" height="100" rx="24" fill="#130F23" />
      <circle cx="78" cy="78" r="24" fill="#E86A3A" opacity=".18" />
      <path d="M19,79 L19,21 L50,55 L81,21 L81,79 L71,79 L71,32 L50,62 L29,32 L29,79 Z" fill="#F2F1ED" />
      <polygon points="40,47 40,63 54,55" fill="#E86A3A" />
    </svg>
  );
}

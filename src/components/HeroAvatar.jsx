export function HeroAvatar() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 230" className="h-full w-full" aria-label="Cartoon portrait of Esmael">
      <defs>
        <radialGradient id="cBg" cx="50%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#E86A3A" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#E86A3A" stopOpacity="0.05" />
        </radialGradient>
      </defs>
      <rect width="200" height="230" fill="url(#cBg)" />
      <ellipse cx="100" cy="232" rx="68" ry="46" fill="#E86A3A" />
      <ellipse cx="100" cy="218" rx="36" ry="22" fill="#CF5A2C" />
      <rect x="87" y="153" width="26" height="30" rx="5" fill="#F5C5A3" />
      <ellipse cx="62" cy="118" rx="9" ry="12" fill="#F5C5A3" />
      <ellipse cx="138" cy="118" rx="9" ry="12" fill="#F5C5A3" />
      <ellipse cx="62" cy="118" rx="5" ry="8" fill="#E8A87A" />
      <ellipse cx="138" cy="118" rx="5" ry="8" fill="#E8A87A" />
      <ellipse cx="100" cy="113" rx="42" ry="50" fill="#F5C5A3" />
      <ellipse cx="63" cy="100" rx="14" ry="26" fill="#1A1A2E" />
      <ellipse cx="137" cy="100" rx="14" ry="26" fill="#1A1A2E" />
      <ellipse cx="100" cy="76" rx="44" ry="32" fill="#1A1A2E" />
      <path d="M68 89 Q78 73 90 84 Q100 76 110 84 Q122 73 132 89 Q115 98 100 94 Q85 98 68 89Z" fill="#1A1A2E" />
      <path d="M80 103 Q88 98 96 103" stroke="#2C1810" strokeWidth="2.8" fill="none" strokeLinecap="round" />
      <path d="M104 103 Q112 98 120 103" stroke="#2C1810" strokeWidth="2.8" fill="none" strokeLinecap="round" />
      <ellipse cx="87" cy="114" rx="8" ry="9" fill="#fff" />
      <ellipse cx="113" cy="114" rx="8" ry="9" fill="#fff" />
      <ellipse cx="88" cy="115" rx="5.5" ry="6" fill="#2C1810" />
      <ellipse cx="114" cy="115" rx="5.5" ry="6" fill="#2C1810" />
      <circle cx="90" cy="112" r="2" fill="#fff" />
      <circle cx="116" cy="112" r="2" fill="#fff" />
      <path d="M98 125 Q95 132 100 134 Q105 132 102 125" stroke="#D4956A" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <path d="M87 141 Q100 154 113 141" stroke="#B5704A" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="84" cy="140" r="2.2" fill="#D4956A" opacity="0.55" />
      <circle cx="116" cy="140" r="2.2" fill="#D4956A" opacity="0.55" />
      <ellipse cx="76" cy="132" rx="10" ry="7" fill="#E86A3A" opacity="0.18" />
      <ellipse cx="124" cy="132" rx="10" ry="7" fill="#E86A3A" opacity="0.18" />
    </svg>
  );
}

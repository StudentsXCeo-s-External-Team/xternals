export function Asterisk({
  className,
  gradientId,
  from = "#2061E3",
  via = "#00ADF1",
  to = "#8ECAE6",
  opacity = 1,
}: {
  className?: string;
  gradientId?: string;
  from?: string;
  via?: string;
  to?: string;
  opacity?: number;
}) {
  const id = gradientId ?? `ast-${Math.random().toString(36).slice(2, 7)}`;
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
      className={className}
      style={{ opacity }}
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={from} />
          <stop offset="50%" stopColor={via} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
      </defs>
      {/* 6-arm asterisk — three overlapping rounded rectangles rotated at 60° */}
      <rect x="94" y="8"  width="12" height="184" rx="6" fill={`url(#${id})`} />
      <rect x="94" y="8"  width="12" height="184" rx="6" fill={`url(#${id})`} transform="rotate(60 100 100)" />
      <rect x="94" y="8"  width="12" height="184" rx="6" fill={`url(#${id})`} transform="rotate(120 100 100)" />
    </svg>
  );
}

export function AsteriskFour({
  className,
  gradientId,
  from = "#2061E3",
  via = "#00ADF1",
  to = "#8ECAE6",
  opacity = 1,
}: {
  className?: string;
  gradientId?: string;
  from?: string;
  via?: string;
  to?: string;
  opacity?: number;
}) {
  const id = gradientId ?? `ast4-${Math.random().toString(36).slice(2, 7)}`;
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
      className={className}
      style={{ opacity }}
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={from} />
          <stop offset="50%" stopColor={via} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
      </defs>
      {/* 4-arm asterisk */}
      <rect x="94" y="8"  width="12" height="184" rx="6" fill={`url(#${id})`} />
      <rect x="94" y="8"  width="12" height="184" rx="6" fill={`url(#${id})`} transform="rotate(90 100 100)" />
      <rect x="94" y="8"  width="12" height="184" rx="6" fill={`url(#${id})`} transform="rotate(45 100 100)" />
      <rect x="94" y="8"  width="12" height="184" rx="6" fill={`url(#${id})`} transform="rotate(135 100 100)" />
    </svg>
  );
}

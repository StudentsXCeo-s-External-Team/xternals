export function XMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" aria-hidden="true" className={className}>
      <line x1="5" y1="5" x2="95" y2="95" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <line x1="95" y1="5" x2="5" y2="95" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

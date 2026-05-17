type BlueprintMarkProps = {
  compact?: boolean;
  className?: string;
};

export function BlueprintMark({ compact = false, className = "" }: BlueprintMarkProps) {
  return (
    <svg
      className={className}
      width={compact ? 48 : 64}
      height={compact ? 34 : 42}
      viewBox="0 0 64 42"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 28H18C26 28 26 14 34 14H57"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="7" cy="28" r="4.5" fill="#FFFFFF" stroke="currentColor" strokeWidth="3" />
      <circle cx="34" cy="14" r="4.5" fill="#FFFFFF" stroke="currentColor" strokeWidth="3" />
      <circle cx="57" cy="14" r="4.5" fill="#FFFFFF" stroke="currentColor" strokeWidth="3" />
      <path d="M18 28H29" stroke="#0A6ED1" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

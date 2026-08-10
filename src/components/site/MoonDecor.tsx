/** Floating decorative shapes inspired by the Moonlight crescent logo. */
export function MoonDecor({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="animate-float-slow absolute -left-16 top-24 h-56 w-56 rounded-full blush-veil opacity-45 blur-2xl" />
      <div className="animate-drift absolute -right-10 top-8 h-72 w-72 rounded-full veil opacity-70 blur-3xl" />
      <svg
        className="animate-float-slow absolute right-6 top-1/3 h-24 w-24 text-taupe/40 sm:h-32 sm:w-32"
        viewBox="0 0 100 100"
        fill="none"
      >
        <path
          d="M68 10a42 42 0 1 0 0 80 34 34 0 0 1 0-80Z"
          stroke="currentColor"
          strokeWidth="0.8"
        />
      </svg>
      <svg
        className="animate-drift absolute bottom-10 left-8 h-20 w-20 text-blush/70"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="0.7" />
        <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" />
      </svg>
    </div>
  );
}

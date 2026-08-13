/** Slow-moving glowing fog backdrop that gives glass panels something to refract. */
export function AuroraFog({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div className="animate-aurora-a absolute -left-[10%] top-[8%] h-[32rem] w-[32rem] rounded-full bg-blush opacity-95 blur-[110px]" />
      <div className="animate-aurora-b absolute right-[-8%] top-[30%] h-[28rem] w-[28rem] rounded-full bg-taupe opacity-85 blur-[120px]" />
      <div className="animate-aurora-c absolute left-[38%] bottom-[-12%] h-[26rem] w-[26rem] rounded-full bg-primary opacity-45 blur-[130px]" />
      <div className="animate-aurora-b absolute left-[20%] top-[45%] h-[18rem] w-[18rem] rounded-full bg-ink opacity-30 blur-[100px]" />
      <div className="fog-sheet animate-fog-drift absolute -inset-x-1/2 inset-y-0" />
    </div>
  );
}

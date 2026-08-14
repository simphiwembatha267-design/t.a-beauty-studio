import { useMemo, useState } from "react";
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  format,
  isBefore,
  isSameDay,
  startOfDay,
  startOfMonth,
  subMonths,
} from "date-fns";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  Star,
} from "lucide-react";
import { services, specialists, timeSlots, type Service, type Specialist } from "@/lib/salon-data";

const steps = ["Service", "Specialist", "Date", "Time", "Details", "Confirm"] as const;

type Details = { name: string; phone: string; email: string; notes: string };

export function BookingFlow({ initialService }: { initialService?: string }) {
  const preset = services.find((s) => s.id === initialService);
  const [step, setStep] = useState(preset ? 1 : 0);
  const [service, setService] = useState<Service | null>(preset ?? null);
  const [specialist, setSpecialist] = useState<Specialist | null>(null);
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [details, setDetails] = useState<Details>({ name: "", phone: "", email: "", notes: "" });
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Partial<Details>>({});

  const canContinue = [
    !!service,
    true,
    !!date,
    !!time,
    details.name.trim().length > 1 && details.phone.trim().length >= 7,
    true,
  ][step];

  if (done && service && date && time) {
    return (
      <SuccessPanel
        service={service}
        specialist={specialist}
        date={date}
        time={time}
        name={details.name}
      />
    );
  }

  const validateDetails = () => {
    const next: Partial<Details> = {};
    if (details.name.trim().length < 2) next.name = "Please enter your full name";
    if (details.phone.replace(/\D/g, "").length < 9) next.phone = "Please enter a valid phone number";
    if (details.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(details.email))
      next.email = "Please enter a valid email";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const goNext = () => {
    if (step === 4 && !validateDetails()) return;
    if (step === steps.length - 1) {
      setDone(true);
      return;
    }
    setStep((s) => Math.min(s + 1, steps.length - 1));
  };

  return (
    <div className="glass-panel rounded-[2rem] p-4 sm:p-7">
      {/* Progress */}
      <ol
        className="sticky top-[4.5rem] z-20 -mx-4 flex items-center gap-2 overflow-x-auto rounded-2xl bg-background/50 px-4 py-2 backdrop-blur-md sm:-mx-7 sm:px-7"
        aria-label="Booking steps"
      >
        {steps.map((label, i) => (
          <li key={label} className="flex min-w-0 flex-1 items-center gap-2">
            <span
              className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border text-[0.65rem] transition-all duration-500 ${
                i < step
                  ? "border-transparent bg-primary text-primary-foreground"
                  : i === step
                    ? "border-taupe text-foreground"
                    : "border-border text-muted-foreground"
              }`}
            >
              {i < step ? <Check className="h-3 w-3" /> : i + 1}
            </span>
            <span
              className={`hidden truncate text-[0.62rem] tracking-[0.16em] uppercase sm:block ${
                i === step ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {label}
            </span>
            {i < steps.length - 1 && <span className="h-px flex-1 bg-border" />}
          </li>
        ))}
      </ol>

      <div key={step} className="animate-rise pt-5">
        {step === 0 && (
          <StepShell title="Which service are you here for?" hint="Choose one to begin.">
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => {
                    setService(s);
                    setStep(1);
                  }}
                  aria-pressed={service?.id === s.id}
                  className={`group relative rounded-2xl border px-4 py-3 text-left transition-all duration-500 active:scale-[0.98] ${
                    service?.id === s.id
                      ? "border-taupe bg-secondary/70"
                      : "glass-inset hover:border-blush hover:bg-secondary/40"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="truncate text-lg leading-tight">{s.name}</h3>
                    {service?.id === s.id && (
                      <Check className="h-4 w-4 shrink-0 text-taupe" />
                    )}
                  </div>
                  <p className="mt-1 text-[0.68rem] tracking-[0.12em] uppercase text-muted-foreground">
                    From R{s.from} · {s.duration}
                  </p>
                </button>
              ))}
            </div>
          </StepShell>
        )}


        {step === 1 && (
          <StepShell title="Choose your specialist" hint="Optional — we can also match you with the next available artist.">
            <div className="grid gap-2 sm:grid-cols-2">
              {specialists.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setSpecialist(specialist?.id === p.id ? null : p)}
                  aria-pressed={specialist?.id === p.id}
                  className={`flex items-center gap-3 rounded-2xl border px-3 py-2.5 text-left transition-all duration-500 active:scale-[0.98] ${
                    specialist?.id === p.id
                      ? "border-taupe bg-secondary/70"
                      : "glass-inset hover:border-blush"
                  }`}
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl blush-veil font-display text-sm text-ink">
                    {p.initials}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center justify-between gap-2">
                      <span className="truncate font-display text-base">{p.name}</span>
                      <span className="inline-flex shrink-0 items-center gap-1 text-xs text-foreground">
                        <Star className="h-3 w-3 fill-current text-taupe" /> {p.rating.toFixed(1)}
                      </span>
                    </span>
                    <span className="block truncate text-xs text-muted-foreground">
                      {p.role} · {p.experience} · {p.speciality}
                    </span>
                  </span>
                  {specialist?.id === p.id && <Check className="h-4 w-4 shrink-0 text-taupe" />}
                </button>
              ))}
            </div>

          </StepShell>
        )}

        {step === 2 && (
          <StepShell title="Pick a date" hint="We are open every day, 09:00 – 18:00.">
            <Calendar selected={date} onSelect={setDate} />
          </StepShell>
        )}

        {step === 3 && (
          <StepShell
            title="Choose a time"
            hint={date ? format(date, "EEEE d MMMM") : undefined}
          >
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
              {timeSlots.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTime(t)}
                  aria-pressed={time === t}
                  className={`rounded-2xl border py-4 text-sm tracking-wide transition-all duration-500 active:scale-95 ${
                    time === t
                      ? "-translate-y-1 border-transparent bg-primary text-primary-foreground shadow-soft"
                      : "glass-inset text-foreground hover:border-blush"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </StepShell>
        )}

        {step === 4 && (
          <StepShell title="Your details" hint="So we can confirm your appointment.">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Full name"
                value={details.name}
                error={errors.name}
                onChange={(v) => setDetails({ ...details, name: v })}
                autoComplete="name"
              />
              <Field
                label="Phone"
                value={details.phone}
                error={errors.phone}
                onChange={(v) => setDetails({ ...details, phone: v })}
                autoComplete="tel"
                type="tel"
              />
              <Field
                label="Email (optional)"
                value={details.email}
                error={errors.email}
                onChange={(v) => setDetails({ ...details, email: v })}
                autoComplete="email"
                type="email"
                className="sm:col-span-2"
              />
              <label className="sm:col-span-2">
                <span className="eyebrow">Notes</span>
                <textarea
                  rows={3}
                  maxLength={500}
                  value={details.notes}
                  onChange={(e) => setDetails({ ...details, notes: e.target.value })}
                  placeholder="Hair length, inspiration, allergies…"
                  className="mt-2 w-full rounded-2xl border border-border bg-background/50 px-4 py-3.5 text-sm backdrop-blur-md outline-none transition-colors duration-500 placeholder:text-muted-foreground/70 focus:border-taupe"
                />
              </label>
            </div>
          </StepShell>
        )}

        {step === 5 && service && (
          <StepShell title="Review your appointment" hint="One last look before we save it.">
            <dl className="glass-inset divide-y divide-border/50 rounded-3xl px-6">
              <Row label="Service" value={service.name} />
              <Row label="Specialist" value={specialist?.name ?? "Next available artist"} />
              <Row label="Date" value={date ? format(date, "EEEE d MMMM yyyy") : "—"} />
              <Row label="Time" value={time ?? "—"} />
              <Row label="Duration" value={service.duration} />
              <Row label="From" value={`R${service.from}`} />
              <Row label="Name" value={details.name} />
              <Row label="Phone" value={details.phone} />
            </dl>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              Final pricing is confirmed in the salon after your consultation, based on length and
              style.
            </p>
          </StepShell>
        )}
      </div>

      <div className="mt-9 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3.5 text-[0.7rem] tracking-[0.18em] uppercase text-muted-foreground transition-all duration-500 hover:text-foreground disabled:opacity-40"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </button>
        <button
          type="button"
          onClick={goNext}
          disabled={!canContinue}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-[0.7rem] tracking-[0.18em] uppercase text-primary-foreground transition-all duration-500 hover:bg-ink hover:shadow-soft disabled:opacity-40"
        >
          {step === steps.length - 1 ? "Book Appointment" : "Continue"}
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function StepShell({
  title,
  hint,
  children,
}: {
  title: string;
  hint?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-3xl sm:text-4xl">{title}</h2>
      {hint && <p className="mt-2 text-sm text-muted-foreground">{hint}</p>}
      <div className="mt-7">{children}</div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 py-4">
      <dt className="eyebrow">{label}</dt>
      <dd className="text-right font-display text-lg">{value}</dd>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
  className = "",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string | undefined;
  type?: string;
  autoComplete?: string | undefined;
  className?: string;
}) {
  return (
    <label className={className}>
      <span className="eyebrow">{label}</span>
      <input
        type={type}
        value={value}
        maxLength={120}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        className={`mt-2 h-14 w-full rounded-2xl border bg-background/50 px-4 backdrop-blur-md text-sm outline-none transition-colors duration-500 focus:border-taupe ${
          error ? "border-destructive" : "border-border"
        }`}
      />
      {error && <span className="mt-1.5 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

function Calendar({
  selected,
  onSelect,
}: {
  selected: Date | null;
  onSelect: (d: Date) => void;
}) {
  const [month, setMonth] = useState(startOfMonth(new Date()));
  const today = startOfDay(new Date());

  const days = useMemo(
    () => eachDayOfInterval({ start: startOfMonth(month), end: endOfMonth(month) }),
    [month],
  );
  const leading = (startOfMonth(month).getDay() + 6) % 7;

  return (
    <div className="glass-inset rounded-3xl p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <button
          type="button"
          aria-label="Previous month"
          onClick={() => setMonth((m) => subMonths(m, 1))}
          className="grid h-11 w-11 place-items-center rounded-full border border-border text-muted-foreground transition-colors duration-500 hover:text-foreground"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <p className="font-display text-2xl">{format(month, "MMMM yyyy")}</p>
        <button
          type="button"
          aria-label="Next month"
          onClick={() => setMonth((m) => addMonths(m, 1))}
          className="grid h-11 w-11 place-items-center rounded-full border border-border text-muted-foreground transition-colors duration-500 hover:text-foreground"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-6 grid grid-cols-7 gap-1 text-center text-[0.62rem] tracking-[0.14em] uppercase text-muted-foreground">
        {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
          <span key={d} className="py-2">
            {d}
          </span>
        ))}
      </div>
      <div className="mt-1 grid grid-cols-7 gap-1">
        {Array.from({ length: leading }).map((_, i) => (
          <span key={`lead-${i}`} />
        ))}
        {days.map((d) => {
          const disabled = isBefore(d, today);
          const isSelected = selected && isSameDay(d, selected);
          return (
            <button
              key={d.toISOString()}
              type="button"
              disabled={disabled}
              onClick={() => onSelect(d)}
              aria-pressed={!!isSelected}
              className={`grid aspect-square place-items-center rounded-2xl text-sm transition-all duration-400 active:scale-95 ${
                isSelected
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : disabled
                    ? "text-muted-foreground/35"
                    : "text-foreground hover:bg-secondary"
              }`}
            >
              {format(d, "d")}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function SuccessPanel({
  service,
  specialist,
  date,
  time,
  name,
}: {
  service: Service;
  specialist: Specialist | null;
  date: Date;
  time: string;
  name: string;
}) {
  return (
    <div className="animate-rise glass-panel rounded-[2rem] p-8 text-center sm:p-14">
      <svg viewBox="0 0 120 120" className="mx-auto h-28 w-28 text-taupe" fill="none">
        <circle
          cx="60"
          cy="60"
          r="47"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="300"
          style={{ animation: "ring-draw 1.4s var(--ease-silk) forwards" }}
        />
        <path
          d="M40 62 L54 76 L82 46"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="60"
          style={{ animation: "check-draw 0.9s var(--ease-silk) 0.5s forwards" }}
        />
      </svg>
      <h2 className="mt-6 text-4xl sm:text-5xl">Your seat is reserved</h2>
      <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
        Thank you {name.split(" ")[0]}. We will send a confirmation shortly — we cannot wait to
        welcome you to Moonlight.
      </p>
      <div className="mx-auto mt-8 grid max-w-md gap-3 text-left">
        {[
          ["Service", service.name],
          ["Specialist", specialist?.name ?? "Next available artist"],
          ["Date", format(date, "EEEE d MMMM yyyy")],
          ["Time", time],
        ].map(([k, v]) => (
          <div
            key={k}
            className="glass-inset flex items-center justify-between rounded-2xl px-5 py-4"
          >
            <span className="eyebrow">{k}</span>
            <span className="font-display text-lg">{v}</span>
          </div>
        ))}
      </div>
      <p className="mt-6 inline-flex items-center gap-2 text-xs tracking-[0.14em] uppercase text-muted-foreground">
        <Clock className="h-3.5 w-3.5" /> Please arrive 10 minutes early
      </p>
    </div>
  );
}

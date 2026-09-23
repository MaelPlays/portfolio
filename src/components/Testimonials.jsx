import { testimonials } from '@/data/testimonials';
import { Reveal } from '@/components/Reveal';

function Card({ t, mini, delay }) {
  return (
    <Reveal
      delay={delay}
      className={
        'flex flex-col gap-4 rounded-md border border-border bg-surface ' +
        (mini ? 'flex-1 p-[20px_24px]' : 'justify-center p-[40px_40px_36px]')
      }
    >
      <div className="flex gap-0.5 text-[15px] text-accent" aria-label="5 stars">
        ★★★★★
      </div>
      <p
        className={
          'flex-1 italic leading-[1.72] text-muted ' +
          (mini ? 'line-clamp-3 text-[13px]' : 'text-[19px]')
        }
      >
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3 border-t border-border pt-4">
        <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full border border-border bg-surface-2 font-display text-[13px] font-bold text-muted">
          {t.initials}
        </div>
        <div>
          <p className="mb-0.5 font-display text-sm font-bold text-text">{t.name}</p>
          <p className="text-xs text-muted">{t.role}</p>
        </div>
      </div>
    </Reveal>
  );
}

export function Testimonials() {
  const [featured, ...rest] = testimonials;

  return (
    <section id="testimonials" className="scroll-mt-[68px] border-t border-border py-32">
      <div className="mx-auto max-w-[1180px] px-10">
        <Reveal className="mb-10">
          <h2 className="font-display text-[clamp(28px,3.8vw,46px)] font-extrabold leading-[1.05] tracking-[-0.01em] text-text">
            What People Say
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 items-stretch gap-[22px] lg:grid-cols-[1.3fr_1fr]">
          <Card t={featured} />
          <div className="flex flex-col gap-[22px]">
            {rest.map((t, i) => (
              <Card key={t.name} t={t} mini delay={0.1 + i * 0.05} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Reveal } from '@/components/Reveal';

const FACTS = [
  { k: 'Status', v: '● Open to Work', green: true },
  { k: 'Location', v: 'Philippines' },
  { k: 'Type', v: 'Remote & Freelance' },
  { k: 'Availability', v: 'Full-time & Part-time' },
  { k: 'Services', v: 'Web · Mobile · AI · Design' },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-[68px] border-t border-border py-32">
      <div className="mx-auto max-w-[1180px] px-10">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-20">
          <Reveal>
            <h2 className="mb-6 text-balance font-display text-[clamp(26px,3.4vw,42px)] font-extrabold leading-[1.1] tracking-[-0.01em] text-text">
              A passionate developer &amp; designer who loves creating meaningful digital experiences.
            </h2>
            <p className="text-base leading-[1.75] text-muted">
              I work across the full stack, from interface design to backend systems, mobile apps to AI-powered
              tools. Every project gets my full attention and craft.
            </p>
            <p className="mt-4 text-base leading-[1.75] text-muted">
              I care about the details:{' '}
              <strong className="font-medium text-text">
                fast load times, accessible interfaces, and code that the next person can actually read.
              </strong>
            </p>
          </Reveal>

          <Reveal as="ul" className="list-none">
            {FACTS.map((fact) => (
              <li
                key={fact.k}
                className="flex items-center justify-between gap-3 border-b border-border py-[15px] text-sm"
              >
                <span className="text-muted">{fact.k}</span>
                <span className={'text-right font-medium ' + (fact.green ? 'text-[#2DC76D]' : 'text-text')}>
                  {fact.v}
                </span>
              </li>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

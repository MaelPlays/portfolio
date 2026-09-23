import { Button } from '@/components/ui/button';
import { HeroAvatar } from '@/components/HeroAvatar';
import { Reveal } from '@/components/Reveal';

export function Hero() {
  return (
    <section id="hero" className="flex min-h-[100svh] items-center pt-[68px]">
      <div className="mx-auto w-full max-w-[1180px] px-10">
        <div className="grid grid-cols-1 items-center gap-16 py-16 md:grid-cols-2 md:py-16">
          <div>
            <span className="mb-3.5 block text-base font-semibold text-muted">Hi, I&rsquo;m Esmael</span>
            <h1 className="mb-6 text-balance font-display text-[clamp(36px,4.8vw,60px)] font-extrabold leading-[1.1] tracking-[-0.01em] text-text">
              I design and build digital experiences that make an{' '}
              <em className="italic text-accent">impact.</em>
            </h1>
            <p className="mb-9 max-w-[400px] text-base leading-[1.72] text-muted">
              Freelance developer &amp; designer building web, mobile, and AI-powered products. Open to work.
            </p>
            <div className="mb-11 flex flex-wrap items-center gap-3.5">
              <Button asChild variant="filled">
                <a href="#work">View My Work &rarr;</a>
              </Button>
              <Button asChild variant="outline">
                <a href="#about">About Me</a>
              </Button>
            </div>
          </div>

          <div className="relative hidden items-center justify-center md:flex">
            <div className="relative w-full max-w-[440px] aspect-square">
              <div className="h-full w-full overflow-hidden rounded-full border border-border bg-[radial-gradient(ellipse_at_38%_32%,rgba(232,106,58,.22)_0%,rgba(232,106,58,.06)_55%,transparent_100%)]">
                <HeroAvatar />
              </div>
              <Reveal
                delay={0.2}
                className="absolute -right-[8%] bottom-[10%] min-w-[210px] rounded-md border border-border bg-surface p-[18px_22px] shadow-[0_12px_40px_var(--shadow-2)]"
              >
                <div className="mb-1.5 flex items-center gap-1.5">
                  <span className="h-[7px] w-[7px] shrink-0 animate-pulse rounded-full bg-[#2DC76D]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-muted">
                    Available for Freelance
                  </span>
                </div>
                <p className="mb-3 text-[13px] leading-[1.45] text-muted">
                  Let&rsquo;s work together on your next project.
                </p>
                <a href="#contact" className="text-xs font-bold tracking-[0.02em] text-accent hover:opacity-70">
                  Let&rsquo;s Talk &rarr;
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

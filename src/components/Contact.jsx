import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/ui/button';
import { GitHubIcon, LinkedInIcon } from '@/components/icons';

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-[68px] border-t border-border py-32 text-center">
      <div className="mx-auto max-w-[1180px] px-10">
        <Reveal>
          <h2 className="mb-3.5 text-balance font-display text-[clamp(36px,5.5vw,76px)] font-extrabold leading-none tracking-[-0.02em] text-text">
            Let&rsquo;s work
            <br />
            together.
          </h2>
          <p className="mb-9 text-base text-muted">Have a project in mind? I&rsquo;d love to hear about it.</p>
          <a
            href="mailto:esmaelvillejo4@gmail.com"
            className="mb-11 inline-block font-display text-[clamp(18px,2.4vw,30px)] font-bold tracking-[-0.02em] text-accent transition-opacity hover:opacity-70"
          >
            esmaelvillejo4@gmail.com
          </a>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild variant="outline" size="sm">
              <a href="https://github.com/MaelPlays" target="_blank" rel="noopener">
                <GitHubIcon /> GitHub
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href="https://www.linkedin.com/in/esmael-villejo-87319a283/" target="_blank" rel="noopener">
                <LinkedInIcon /> LinkedIn
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

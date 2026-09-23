import { projects } from '@/data/projects';
import { Reveal } from '@/components/Reveal';

function ProjectCard({ project, delay }) {
  return (
    <Reveal
      delay={delay}
      className={
        'group overflow-hidden rounded-md border border-border bg-surface transition-[transform,box-shadow] duration-200 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_var(--shadow-2)]' +
        (project.featured ? ' md:col-span-2' : '')
      }
    >
      <a href={project.url} target="_blank" rel="noopener" className="block">
        <img
          src={project.thumb}
          alt={project.name}
          className={'w-full object-cover ' + (project.featured ? 'h-[190px] md:h-[260px]' : 'h-[190px]')}
        />
        <div className="p-[18px_20px_20px]">
          <p className="mb-0.5 font-display text-base font-bold leading-tight tracking-[-0.01em] text-text">
            {project.name}
          </p>
          <p className="text-xs text-muted">{project.category}</p>
          <p className="mb-0.5 mt-2 text-[13px] leading-[1.6] text-muted">{project.desc}</p>
          <span className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-accent transition-[gap] group-hover:gap-2">
            View Live &rarr;
          </span>
        </div>
      </a>
    </Reveal>
  );
}

export function Work() {
  return (
    <section id="work" className="scroll-mt-[68px] border-t border-border py-32">
      <div className="mx-auto max-w-[1180px] px-10">
        <Reveal className="mb-7">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-muted">My Work</p>
          <h2 className="font-display text-[clamp(28px,3.8vw,46px)] font-extrabold leading-[1.05] tracking-[-0.01em] text-text">
            Selected Projects
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} delay={Math.min(i, 4) * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

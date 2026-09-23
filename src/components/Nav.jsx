import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { LogoIcon } from '@/components/LogoIcon';

const LINKS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
];

export function Nav({ theme, onToggleTheme }) {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-68px 0px -60% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-[100] h-[68px] border-b border-border bg-bg">
      <div className="mx-auto flex h-full max-w-[1180px] items-center justify-between gap-6 px-10">
        <a href="#" className="flex shrink-0 items-center">
          <LogoIcon className="h-[34px] w-[34px]" />
        </a>

        <ul className="hidden list-none gap-7 min-[960px]:flex">
          {LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={
                  active === link.id
                    ? 'text-[13px] font-semibold text-text transition-colors'
                    : 'text-[13px] font-medium text-muted transition-colors hover:text-text'
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <Button asChild variant="filled" size="sm">
            <a href="#contact">Let&rsquo;s Talk &rarr;</a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleTheme}
            aria-label="Toggle color theme"
          >
            {theme === 'dark' ? '☀' : '☾'}
          </Button>
        </div>
      </div>
    </nav>
  );
}

import { posts } from '@/data/posts';
import { Reveal } from '@/components/Reveal';
import { Badge } from '@/components/ui/badge';

export function Blog() {
  return (
    <section id="blog" className="scroll-mt-[68px] border-t border-border py-32">
      <div className="mx-auto max-w-[1180px] px-10">
        <Reveal className="mb-10">
          <h2 className="font-display text-[clamp(28px,3.8vw,46px)] font-extrabold leading-[1.05] tracking-[-0.01em] text-text">
            Thoughts &amp; Articles
          </h2>
        </Reveal>

        <div className="border-t border-border">
          {posts.map((post, i) => (
            <Reveal
              key={post.title}
              delay={i * 0.08}
              className="grid grid-cols-1 items-center gap-2 border-b border-border p-[24px_4px] md:grid-cols-[132px_1fr_auto] md:gap-6 md:p-[30px_4px]"
            >
              <div className="flex flex-row gap-1.5 md:flex-col">
                {post.chips.map((chip) => (
                  <Badge key={chip} variant="outline">
                    {chip}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-col gap-1.5">
                <p className="text-balance font-display text-base font-bold leading-[1.3] tracking-[-0.01em] text-text">
                  {post.title}
                </p>
                <p className="text-[13px] leading-[1.65] text-muted">{post.teaser}</p>
              </div>
              <Badge variant="soft" className="justify-self-start md:justify-self-end">
                Coming Soon
              </Badge>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

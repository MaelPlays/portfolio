import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Work } from '@/components/Work';
import { Testimonials } from '@/components/Testimonials';
import { Blog } from '@/components/Blog';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { useTheme } from '@/lib/useTheme';
import { useLenis } from '@/lib/useLenis';

export default function App() {
  const [theme, toggleTheme] = useTheme();
  useLenis();

  return (
    <>
      <Nav theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Work />
        <Testimonials />
        <Blog />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

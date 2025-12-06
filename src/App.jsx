import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueProp } from './components/ValueProp';
import { Comparison } from './components/Comparison';
import { Founder } from './components/Founder';
import { Contact } from './components/Contact';

function App() {
  useEffect(() => {
    // Scroll animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    // Observe all elements with animate-on-scroll class
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    // Keyboard navigation for section snap scrolling
    const handleKeyDown = (e) => {
      const sections = Array.from(document.querySelectorAll('section'));
      const currentScrollPos = window.scrollY || document.documentElement.scrollTop;
      
      // Find current section
      let currentIndex = 0;
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom > 100) {
          currentIndex = index;
        }
      });

      // Navigate based on key
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        if (currentIndex < sections.length - 1) {
          sections[currentIndex + 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        if (currentIndex > 0) {
          sections[currentIndex - 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else if (e.key === 'Home') {
        e.preventDefault();
        sections[0].scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (e.key === 'End') {
        e.preventDefault();
        sections[sections.length - 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ValueProp />
      <Comparison />
      <Founder />
      <Contact />
    </div>
  );
}

export default App;

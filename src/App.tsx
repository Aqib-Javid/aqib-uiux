import { useState, useEffect } from 'react';
import { Moon, Sun, ArrowRight } from 'lucide-react';

interface WorkItem {
  category: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface Experience {
  company: string;
  title: string;
  period: string;
  website?: string;
}

function App() {
  const [isDark, setIsDark] = useState(false);
  const [activeNav, setActiveNav] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'work', 'about'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveNav(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const works: WorkItem[] = [
    {
      category: 'Mobile App Design',
      title: 'E-Commerce Mobile App',
      description: 'Redesigned mobile shopping experience with intuitive checkout and personalization.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#'
    },
    {
      category: 'Design System',
      title: 'Component Library',
      description: 'Built comprehensive design system with 100+ reusable components and documentation.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#'
    },
    {
      category: 'Web Design',
      title: 'SaaS Dashboard',
      description: 'Created accessible and intuitive dashboard for data visualization and analytics.',
      image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#'
    },
    {
      category: 'App Design',
      title: 'Fitness Tracking App',
      description: 'Designed gamified fitness app that motivates users to achieve their health goals.',
      image: 'https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#'
    }
  ];

  const experiences: Experience[] = [
    {
      company: 'Algorithm',
      title: 'Sr Product Designer',
      period: '2025 - Present',
      website: '#'
    },
    {
      company: 'Freelance',
      title: 'Sr Product Designer',
      period: '2024 - Present',
      website: '#'
    },
    {
      company: 'Itecexpert',
      title: 'Sr Product Designer',
      period: '2022 - 2024',
      website: '#'
    }
  ];

  const navLinks = [
    { name: 'Work', id: 'work', href: '#work' },
    { name: 'About', id: 'about', href: '#about' }
  ];

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50 transition-colors duration-300 font-gilroy">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 dark:bg-gray-950/80 border-b border-gray-100 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex justify-between items-center">
            <a href="#home" className="font-semibold text-lg tracking-tight">
              Aqib Javid
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <a
                  key={link.id}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    activeNav === link.id
                      ? 'text-gray-900 dark:text-gray-50'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://drive.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
              >
                Resume
              </a>
            </div>

            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg transition-colors"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="pt-40 pb-32 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              I'm a product designer focused on <span className="text-blue-600 dark:text-blue-400">user experience</span> and <span className="text-blue-600 dark:text-blue-400">design systems</span>.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl font-light leading-relaxed">
              I specialize in creating beautiful, accessible digital products. Currently Sr Product Designer at Algorithm, with experience designing for mobile apps, web platforms, and design systems.
            </p>
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:gap-3 transition-all"
            >
              View my work
              <ArrowRight size={18} />
            </a>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="py-32 px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected work</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-20 font-light">
              Projects where I led design from concept to implementation
            </p>

            <div className="grid gap-12">
              {works.map((work, idx) => (
                <div key={idx} className="group">
                  <div className="relative overflow-hidden rounded-xl mb-6 bg-gray-100 dark:bg-gray-900 aspect-video">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>

                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wide">
                        {work.category}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {work.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 font-light max-w-2xl">
                    {work.description}
                  </p>

                  <a
                    href={work.link}
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:gap-3 transition-all"
                  >
                    View case
                    <ArrowRight size={18} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">About me</h2>

            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 font-light leading-relaxed">
                  I'm a product designer with 5+ years of experience creating user-centered digital solutions. My passion lies in solving complex design problems and building scalable design systems that empower teams.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 font-light leading-relaxed">
                  I believe great design starts with understanding user needs and solving real problems. Whether it's designing intuitive interfaces for mobile apps, building comprehensive design systems, or optimizing user flows, I focus on creating experiences that are both beautiful and functional.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-8">My experience</h3>
                <div className="space-y-8">
                  {experiences.map((exp, idx) => (
                    <div key={idx}>
                      <a
                        href={exp.website}
                        className="text-lg font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {exp.company}
                      </a>
                      <p className="text-gray-600 dark:text-gray-400 font-medium mt-1">
                        {exp.title}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500 font-light">
                        {exp.period}
                      </p>
                    </div>
                  ))}
                </div>

                <a
                  href="https://drive.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-12 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:gap-3 transition-all"
                >
                  Download resume
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-32 px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's work together.</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 font-light max-w-2xl mx-auto">
              I'm always interested in discussing new design challenges and collaboration opportunities.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a
                href="mailto:aqib.javid990@gmail.com"
                className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:shadow-lg transition-all"
              >
                Email me
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-50 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-all"
              >
                LinkedIn
              </a>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-50 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-all"
              >
                Behance
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 dark:border-gray-800 py-8 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 font-light">
              © 2025 Aqib Javid. All rights reserved.
            </p>
            <a
              href="#home"
              className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
            >
              Back to top
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;

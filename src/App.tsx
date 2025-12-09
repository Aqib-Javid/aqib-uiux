import { useState, useEffect } from 'react';
import { Moon, Sun, ArrowRight, Mail, Linkedin, Download } from 'lucide-react';

interface WorkItem {
  category: string;
  title: string;
  description: string;
  image: string;
  link: string;
  country: string;
}

interface Experience {
  company: string;
  title: string;
  period: string;
  description: string;
  website?: string;
}

function App() {
  const [isDark, setIsDark] = useState(false);
  const [activeNav, setActiveNav] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'work', 'about', 'experience'];
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
      category: 'SaaS & Startup',
      title: 'HairCut Recommendation',
      description: 'An AI-powered hair styling recommendation app that helps users find the perfect haircut based on their face shape and preferences.',
      image: 'https://framerusercontent.com/images/BMw5YPVWUO3k9pECf8lPzg9N52k.png?width=1280&height=960',
      country: 'Taiwan',
      link: 'https://www.figma.com/design/XaCfE8zMvk0ZhP21eeqeUu/HairstyleDiscovery-Web-App?m=auto&t=hLvRRi5Y9U0pEulv-6'
    },
    {
      category: 'School Management',
      title: 'Maktab',
      description: 'Comprehensive school management system designed to streamline administrative tasks and improve student-teacher communication.',
      image: 'https://framerusercontent.com/images/lS2JBP2RGiWlbMACBoqI59mvtI.png?width=1280&height=960',
      country: 'Pakistan',
      link: 'https://usemaktab.com'
    },
    {
      category: 'Education Startup',
      title: 'Sanialarm Landing Page',
      description: 'Modern landing page for an education startup focused on online learning with engaging visuals and conversion optimization.',
      image: 'https://framerusercontent.com/images/21jfi5u7uXEbUBB1f47nLWK6h0.png?width=1280&height=960',
      country: 'Croatia',
      link: 'https://sanialarm.de'
    },
    {
      category: 'Buy & Sell',
      title: 'Quick Swapper',
      description: 'Mobile app connecting buyers and sellers in a peer-to-peer marketplace with intuitive browsing and secure transaction features.',
      image: 'https://framerusercontent.com/images/E1vS8YOLzfCf7rCXY6fY1Pi6W5o.png?width=1280&height=960',
      country: 'Pakistan',
      link: 'https://play.google.com/store/apps/details?id=com.noman.quickSwapper&hl=en'
    },
    {
      category: 'Travel & Booking',
      title: 'Rapidos Booking App',
      description: 'Travel booking platform with seamless search, filtering, and booking experience for finding and reserving travel accommodations.',
      image: 'https://framerusercontent.com/images/WXsO0e0BXvxxhfhB9DIh9UiZAc.png?width=1280&height=960',
      country: 'USA',
      link: 'https://www.figma.com/design/9Z6Kx843G4aB1n26bd6e9h/Rapidos-Booking-App--Copy-?node-id=0-1&t=VGp1HCTF9N37wJbz-1'
    },
    {
      category: 'Social Media',
      title: 'MATE Social App',
      description: 'Social networking platform designed to connect like-minded individuals through shared interests and real-time interactions.',
      image: 'https://framerusercontent.com/images/17qHrfHBEMeGT3yf5rr2Dys07I.png?width=1280&height=960',
      country: 'USA',
      link: 'https://www.figma.com/design/X0BK7oC8jvwulXot7gAdSc/Social-App-UX-UI-design?node-id=112803-2014&t=5ncT8RwO5bvb6Uaj-1'
    },
    {
      category: 'Health & Fitness',
      title: 'Diet Achiever',
      description: 'Gamified fitness and diet tracking app that motivates users to achieve their health goals through engaging challenges and rewards.',
      image: 'https://framerusercontent.com/images/CmD8B011kEkOSFTzmAuDJkEGmfA.png?width=1280&height=960',
      country: 'USA',
      link: 'https://dietachiever.com'
    },
    {
      category: 'AI Technology',
      title: 'Donna 24/7 AI Receptionist',
      description: 'AI-powered virtual receptionist designed to handle customer inquiries, appointment scheduling, and support interactions 24/7.',
      image: 'https://framerusercontent.com/images/KX5sHXOoo12HjwkGFDsPXUoekIQ.png?width=1280&height=960',
      country: 'Canada',
      link: 'https://donnaio.ai'
    }
  ];

  const experiences: Experience[] = [
    {
      company: 'Algorithm',
      title: 'Sr Product Designer',
      period: '2025 - Present',
      description: 'Leading end-to-end product design (UX/UI) from research to high-fidelity prototypes. Collaborating with PMs, engineers, and stakeholders to align design with business goals.'
    },
    {
      company: 'Fiverr & Upwork',
      title: 'Sr Product Designer & Framer',
      period: 'Aug 2021 - Present',
      description: 'Leading the full design process from client discovery to delivery. Translating requirements into user journeys, wireframes, and interactive prototypes.'
    },
    {
      company: 'Itecexpert',
      title: 'UI/UX Designer',
      period: 'Oct 2022 - Sep 2024',
      description: 'Engaging clients to define objectives, translating requirements into user-centric solutions, and collaborating with cross-functional teams.'
    }
  ];

  const navLinks = [
    { name: 'Work', id: 'work', href: '#work' },
    { name: 'About', id: 'about', href: '#about' },
    { name: 'Experience', id: 'experience', href: '#experience' }
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

            <div className="grid md:grid-cols-2 gap-12">
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
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {work.title}
                      </h3>
                    </div>
                    <span className="text-xs font-light text-gray-500 dark:text-gray-500 whitespace-nowrap ml-2">
                      {work.country}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 font-light max-w-2xl">
                    {work.description}
                  </p>

                  <a
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
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
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 font-light leading-relaxed">
                  I believe great design starts with understanding user needs and solving real problems. Whether it's designing intuitive interfaces for mobile apps, building comprehensive design systems, or optimizing user flows, I focus on creating experiences that are both beautiful and functional.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 font-light leading-relaxed">
                  With expertise in end-to-end design—from research to execution—I bridge business goals with seamless interactions, ensuring every pixel serves a purpose.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-8">Skills & Tools</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Design Tools</p>
                    <div className="flex flex-wrap gap-2">
                      {['Figma', 'Adobe XD', 'Sketch', 'Framer', 'InVision'].map(tool => (
                        <span key={tool} className="px-3 py-1 text-xs bg-gray-200 dark:bg-gray-800 rounded text-gray-700 dark:text-gray-300">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Core Competencies</p>
                    <div className="flex flex-wrap gap-2">
                      {['UX/UI Design', 'Design Systems', 'User Research', 'Prototyping', 'Accessibility'].map(comp => (
                        <span key={comp} className="px-3 py-1 text-xs bg-gray-200 dark:bg-gray-800 rounded text-gray-700 dark:text-gray-300">
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-32 px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">My experience</h2>

            <div className="space-y-12">
              {experiences.map((exp, idx) => (
                <div key={idx} className="pb-12 border-b border-gray-200 dark:border-gray-800 last:border-0">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                      <p className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-sm font-light text-gray-500 dark:text-gray-500 whitespace-nowrap ml-4">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed max-w-3xl">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-32 px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's work together.</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 font-light max-w-2xl mx-auto">
              I'm always interested in discussing new design challenges and collaboration opportunities.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 flex-wrap">
              <a
                href="mailto:aqib.javid990@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-50 rounded-lg font-medium hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all"
              >
                <Mail size={18} />
                Email
              </a>
              <a
                href="https://linkedin.com/in/aqib-javid"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-50 rounded-lg font-medium hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-50 rounded-lg font-medium hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.628 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Dribbble
              </a>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-50 rounded-lg font-medium hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 10h3v2H7v-2zm7-2h3v4h-3v-4zm0 6h3v2h-3v-2z"/>
                  <path d="M23 8v12c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h18c1.1 0 2 .9 2 2zm-2 0H3v12h18V8z"/>
                </svg>
                Behance
              </a>
              <a
                href="https://drive.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:shadow-lg transition-all"
              >
                <Download size={18} />
                Resume
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 dark:border-gray-800 py-12 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8 mb-8 pb-8 border-b border-gray-200 dark:border-gray-800">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-light mb-4">
                  Let's connect
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://dribbble.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded transition-colors"
                    aria-label="Dribbble"
                  >
                    <svg className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M8.56 2.75c3.77 4.26 6.31 8.5 6.56 12.21"></path>
                      <path d="M2.75 15.44c4.26 3.77 8.5 6.31 12.21 6.56"></path>
                      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor"/>
                    </svg>
                  </a>
                  <a
                    href="https://behance.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded transition-colors"
                    aria-label="Behance"
                  >
                    <svg className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 6c0-.552.448-1 1-1h3c2.21 0 4 1.79 4 4 0 2-1.791 3.639-3.999 3.999H9v2h2c3.31 0 6-2.69 6-6 0-3.31-2.69-6-6-6H8c-.552 0-1 .448-1 1v6z"/>
                      <circle cx="14" cy="15" r="2"/>
                    </svg>
                  </a>
                </div>
              </div>
              <a
                href="https://drive.google.com/file/d/1lqmkKM-55OerkPbyQ6ZvzQcdW0FcKeZq/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:shadow-lg transition-all"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <p className="text-sm text-gray-600 dark:text-gray-400 font-light">
                © 2025 Aqib Javid. All rights reserved.
              </p>
              <a
                href="#home"
                className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 mt-4 md:mt-0"
              >
                Back to top
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;

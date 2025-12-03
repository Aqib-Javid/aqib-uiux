import { useState } from 'react';
import { Moon, Sun, ExternalLink } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  type?: string;
  achievements: string[];
}

interface Project {
  type: string;
  count: string;
  description: string;
}

function App() {
  const [isDark, setIsDark] = useState(false);

  const experiences: Experience[] = [
    {
      title: 'Sr Product Designer',
      company: 'Algorithm',
      period: 'June 2025 - Onward',
      location: 'Hybrid Peshawar, Pakistan',
      achievements: [
        'Leading end-to-end product design (UX/UI) from research to high-fidelity prototypes',
        'Collaborating with PMs, engineers, and stakeholders to align design with business goals',
        'Advocating for user-centric solutions through testing and data-driven iterations',
        'Mentoring designers and scaling design systems for consistency and efficiency',
        'Ensuring seamless handoff and implementation with development teams'
      ]
    },
    {
      title: 'Sr Product Designer',
      company: 'Freelance',
      period: 'August 2024 - Onward',
      location: 'Remote, Pakistan',
      type: 'freelance',
      achievements: [
        'Lead end-to-end design process, from project initiation to final delivery',
        'Conduct client meetings to gather business requirements and understand project goals',
        'Translate client needs into clear UX objectives, defining user journeys and flows',
        'Create sitemaps and wireframes to establish product structure and navigation logic',
        'Design high-fidelity visuals and interactive prototypes to communicate design intent'
      ]
    },
    {
      title: 'Sr Product Designer',
      company: 'Itecexpert',
      period: 'October 2022 - August 2024',
      location: 'Peshawar, Pakistan',
      achievements: [
        'Defined project requirements reducing timelines by 20%',
        'Facilitated client meetings improving satisfaction by 15%',
        'Crafted intuitive interfaces boosting user engagement by 30%',
        'Enhanced usability reducing user errors by 25%',
        'Optimized user flows improving task completion by 40%'
      ]
    },
    {
      title: 'UI/UX Designer',
      company: 'Appick Solutions',
      period: 'July 2021 - March 2022',
      location: 'Remote',
      achievements: [
        'Designed visually engaging interfaces for mobile and web platforms',
        'Applied user-centered design strategies for intuitive experiences',
        'Produced high-impact wireframes achieving 40% higher approval rate',
        'Implemented design systems enhancing brand consistency by 35%'
      ]
    },
    {
      title: 'UI/UX Designer',
      company: 'Tecmyer',
      period: 'April 2022 - September 2022',
      location: 'Remote',
      achievements: [
        'Designed mobile applications and dashboard systems',
        'Boosted user engagement by 30% through design thinking methodologies',
        'Enhanced overall user satisfaction by 20%'
      ]
    }
  ];

  const projects: Project[] = [
    {
      type: 'Mobile App Designs',
      count: '40+',
      description: 'iOS and Android applications'
    },
    {
      type: 'Web Applications',
      count: '35+',
      description: 'SAAS platforms and web apps'
    },
    {
      type: 'Landing Pages',
      count: '25+',
      description: 'High-converting landing pages'
    },
    {
      type: 'Design Systems',
      count: '8+',
      description: 'Comprehensive design systems'
    }
  ];

  const skills = {
    design: ['Adobe XD', 'Sketch', 'Figma', 'InVision', 'Balsamiq'],
    principles: ['User-centered design', 'Responsive design', 'Accessibility', 'Design thinking'],
    research: ['User personas', 'Usability testing', 'User research'],
    systems: ['Style guides', 'Design systems', 'Component libraries']
  };

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50 transition-colors duration-300 font-gilroy">
        <nav className="fixed top-0 w-full z-50 backdrop-blur-sm bg-white/50 dark:bg-gray-950/50 border-b border-gray-100 dark:border-gray-800">
          <div className="max-w-3xl mx-auto px-6 py-4 flex justify-between items-center">
            <a href="/" className="font-semibold text-lg">
              Aqib Javid
            </a>
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg transition-colors"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </nav>

        <main className="max-w-3xl mx-auto px-6 pt-32">
          <section className="min-h-screen flex flex-col justify-center py-20">
            <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Product Designer
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4 font-light leading-relaxed max-w-2xl">
              I design thoughtful digital experiences that solve real problems. Currently Sr Product Designer at Algorithm, previously freelancing and leading design at Itecexpert.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-8 font-light">
              Peshawar, Pakistan • aqib.javid990@gmail.com • +92 300 5683260
            </p>
            <div className="space-y-3 max-w-sm">
              <a
                href="https://linkedin.com/in/aqib-javid"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-light"
              >
                LinkedIn <ExternalLink size={16} />
              </a>
              <br />
              <a
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-light"
              >
                Behance <ExternalLink size={16} />
              </a>
              <br />
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-light"
              >
                Dribbble <ExternalLink size={16} />
              </a>
            </div>
          </section>

          <section className="py-20 border-t border-gray-200 dark:border-gray-800">
            <h2 className="text-4xl font-bold mb-16">Experience</h2>

            <div className="space-y-16">
              {experiences.map((exp, idx) => (
                <div key={idx} className="group">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-2xl font-semibold mb-1">{exp.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 font-light">
                        {exp.company} • {exp.location}
                      </p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-500 font-light whitespace-nowrap ml-4">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mt-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-400 font-light flex gap-3">
                        <span className="text-gray-400 dark:text-gray-600 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="py-20 border-t border-gray-200 dark:border-gray-800">
            <h2 className="text-4xl font-bold mb-12">Freelance Work</h2>
            <p className="text-gray-600 dark:text-gray-400 font-light mb-8">
              Top Rated seller on Fiverr & Upwork with 120+ completed projects
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, idx) => (
                <div key={idx} className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {project.count}
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{project.type}</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-light">{project.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="py-20 border-t border-gray-200 dark:border-gray-800">
            <h2 className="text-4xl font-bold mb-12">Skills & Tools</h2>

            <div className="space-y-12">
              <div>
                <h3 className="font-semibold text-sm text-gray-500 dark:text-gray-500 uppercase tracking-wide mb-3">Design Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.design.map((skill, i) => (
                    <span key={i} className="px-3 py-2 bg-gray-100 dark:bg-gray-900 rounded-lg text-sm font-light">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-sm text-gray-500 dark:text-gray-500 uppercase tracking-wide mb-3">Design Principles</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.principles.map((skill, i) => (
                    <span key={i} className="px-3 py-2 bg-gray-100 dark:bg-gray-900 rounded-lg text-sm font-light">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-sm text-gray-500 dark:text-gray-500 uppercase tracking-wide mb-3">User Research</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.research.map((skill, i) => (
                    <span key={i} className="px-3 py-2 bg-gray-100 dark:bg-gray-900 rounded-lg text-sm font-light">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-sm text-gray-500 dark:text-gray-500 uppercase tracking-wide mb-3">Design Systems</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.systems.map((skill, i) => (
                    <span key={i} className="px-3 py-2 bg-gray-100 dark:bg-gray-900 rounded-lg text-sm font-light">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 border-t border-gray-200 dark:border-gray-800">
            <h2 className="text-4xl font-bold mb-8">Education</h2>
            <div>
              <h3 className="text-xl font-semibold mb-1">Bachelor of Information Technology</h3>
              <p className="text-gray-600 dark:text-gray-400 font-light">AUP Peshawar • 2017 - 2021</p>
            </div>
          </section>

          <section className="py-20 border-t border-gray-200 dark:border-gray-800">
            <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
            <p className="text-gray-600 dark:text-gray-400 font-light mb-6 max-w-lg">
              I'm always interested in discussing new design challenges, collaboration opportunities, and creative projects.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:aqib.javid990@gmail.com"
                className="block text-blue-600 dark:text-blue-400 hover:underline font-light"
              >
                aqib.javid990@gmail.com
              </a>
              <a
                href="tel:+923005683260"
                className="block text-blue-600 dark:text-blue-400 hover:underline font-light"
              >
                +92 300 5683260
              </a>
            </div>
          </section>
        </main>

        <footer className="border-t border-gray-200 dark:border-gray-800 py-12">
          <div className="max-w-3xl mx-auto px-6 text-center text-sm text-gray-500 dark:text-gray-600 font-light">
            © 2025 Aqib Javid. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;

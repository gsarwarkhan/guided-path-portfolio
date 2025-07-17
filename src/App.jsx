// src/App.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';

const chakraGradient = 'bg-gradient-to-br from-purple-800 via-purple-600 to-yellow-300';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 * i, duration: 0.8, type: 'spring' },
  }),
};

const projects = [
  {
    icon: '🌐',
    title: 'Rajput Industrial Mart',
    desc: 'Industrial Supply Website',
    details: 'A B2B industrial supply platform with modern UI/UX and e-commerce features.'
  },
  {
    icon: '🧑‍💼',
    title: 'Employee Management System',
    desc: 'React + Node.js',
    details: 'A full-stack employee management solution with secure authentication and dashboards.'
  }
];

function App() {
  const [modal, setModal] = useState(null);
  return (
    <div className={`relative min-h-screen flex flex-col ${chakraGradient} text-white scroll-smooth overflow-hidden`}>
      {/* Chakra-inspired video background placeholder */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="w-full h-full bg-gradient-to-br from-purple-900/80 via-purple-700/60 to-yellow-200/30 blur-2xl" />
      </div>
      <Header />
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-16 md:py-32 space-y-24">
        {/* Landing Section */}
        <section className="flex flex-col items-center justify-center min-h-[60vh]">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', type: 'spring' }}
            className="mb-6"
            aria-label="Lotus Symbol"
          >
            <span className="inline-block w-20 h-20 rounded-full bg-gradient-to-tr from-purple-400 to-yellow-200 shadow-lg flex items-center justify-center">
              <span className="text-4xl">🪷</span>
            </span>
          </motion.div>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            className="text-4xl md:text-6xl font-extrabold text-center text-white drop-shadow-lg mb-4"
          >
            Guided Path Portfolio
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={sectionVariants}
            className="text-xl md:text-2xl text-center text-yellow-100 mb-8 max-w-2xl"
          >
            A meditative journey through my skills, creativity, and growth.
          </motion.p>
          <motion.a
            href="/resume.pdf"
            download
            initial="hidden"
            animate="visible"
            custom={3}
            variants={sectionVariants}
            className="px-8 py-3 rounded-full bg-yellow-300 text-purple-900 font-bold shadow-lg hover:bg-yellow-200 hover:scale-105 transition-all duration-300 text-lg"
            aria-label="Download Resume PDF"
          >
            Download Resume
          </motion.a>
          <div className="flex space-x-6 mt-12">
            {/* Candle/Diya Flicker */}
            <motion.span
              initial={{ rotate: -5, opacity: 0.8 }}
              animate={{ rotate: [0, 5, -5, 0], opacity: [0.8, 1, 0.8, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-3xl md:text-4xl"
              aria-label="Candle"
            >
              🪔
            </motion.span>
            {/* Briefcase */}
            <motion.span initial="hidden" animate="visible" custom={5} variants={sectionVariants} className="text-3xl md:text-4xl" aria-label="Briefcase">💼</motion.span>
            {/* Laptop */}
            <motion.span initial="hidden" animate="visible" custom={6} variants={sectionVariants} className="text-3xl md:text-4xl" aria-label="Laptop">💻</motion.span>
            {/* Plant Growth */}
            <motion.span
              initial={{ scale: 0.8 }}
              animate={{ scale: [0.8, 1.1, 1], rotate: [0, 2, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
              className="text-3xl md:text-4xl"
              aria-label="Plant"
            >
              🌱
            </motion.span>
          </div>
        </section>
        {/* Resume Section */}
        <motion.section id="resume" initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={sectionVariants} className="w-full max-w-2xl mx-auto bg-white/10 rounded-3xl shadow-xl p-8 flex flex-col items-center text-center border border-yellow-200/30">
          <div className="mb-4">
            <span className="inline-block w-14 h-14 rounded-full bg-gradient-to-tr from-yellow-200 to-purple-400 shadow flex items-center justify-center mb-2">
              <span className="text-3xl">💼</span>
            </span>
            <h2 className="text-2xl font-bold text-yellow-200 mb-2">Profile Summary</h2>
          </div>
          <p className="mb-6 text-yellow-100 text-base md:text-lg">
            A results-driven professional with a solid background in business administration, trade organizations, and corporate management—now strategically transitioning into Artificial Intelligence and Information Technology. Currently advancing skills in Generative AI and Next.js through the Governor House AI Program. Known for excellence in business operations, strategic planning, corporate communication, and research-driven content creation. Seeking a role where I can integrate business acumen with emerging AI technologies to drive innovation and growth.
          </p>
          <div className="w-full flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 mb-8">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-yellow-200 mb-2">Experience</h3>
              <ul className="text-left text-yellow-100 space-y-2 text-sm md:text-base">
                <li>
                  <strong>Deputy Secretary, KCCI</strong> (Jul 2022 – Jan 2025)<br/>
                  Managed high-level corporate meetings, documentation, compliance, and research on trade policies and business trends.
                </li>
                <li>
                  <strong>Freelance Consultant</strong> (Jan 2021 – Jun 2022)<br/>
                  Provided SWOT analysis, research, and strategic guidance for startups and trade bodies.
                </li>
                <li>
                  <strong>Senior Manager Research & CSR, Prima Marines</strong> (Nov 2019 – Mar 2020)<br/>
                  Managed CSR projects, trade relations, and industry research initiatives.
                </li>
                <li>
                  <strong>Assistant Manager, Admin, Research & Corporate Relations, Orient Rental Modaraba</strong> (Mar 2018 – Oct 2019)<br/>
                  Handled corporate relations, research, admin, and event organization.
                </li>
                <li>
                  <strong>Assistant Manager, International Relations, FPCCI</strong> (Jan 2011 – May 2016)<br/>
                  Facilitated business delegations, managed HR/admin/research, and served as Staff Officer to the President.
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-yellow-200 mb-2">Skills</h3>
              <ul className="text-left text-yellow-100 space-y-1 text-sm md:text-base">
                <li>Generative AI, Next.js (learning), React.js, Tailwind CSS</li>
                <li>Business Administration, Strategic Planning</li>
                <li>Content Writing, Research, SWOT Analysis</li>
                <li>Corporate Communication, Event Management</li>
                <li>International Relations, Delegations & Protocol</li>
                <li>Web Designing, Microsoft Office</li>
                <li>Teamwork, Planning & Development</li>
              </ul>
              <h3 className="text-lg font-bold text-yellow-200 mt-4 mb-2">Certifications</h3>
              <ul className="text-left text-yellow-100 space-y-1 text-sm md:text-base">
                <li>IELTS Band 5.5 (British Council, 2016)</li>
                <li>Market Profile Workshop (SAARC, Kathmandu, 2012)</li>
                <li>International Event Management (Karachi Expo, 2006)</li>
                <li>Red Crescent Workshop (Karachi, 2007)</li>
                <li>Internship, JS Bank (Finance, 2009)</li>
                <li>Computer Hardware & Networking (2002)</li>
                <li>Web Designing & Software (2002)</li>
              </ul>
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-yellow-200 mb-2">Education</h3>
              <ul className="text-left text-yellow-100 space-y-1 text-sm md:text-base">
                <li>BBA (Hons.) Finance, Dadabhoy Institute of Higher Education, Karachi (2006-2010) – Dean's Award</li>
                <li>Intermediate Commerce, Marsons College, Karachi (2003-2005)</li>
                <li>Matriculation, Hayat-Ul-Islam Public School, Karachi (2000)</li>
              </ul>
            </div>
          </div>
        </motion.section>
        {/* Projects Section with Modal */}
        <motion.section id="projects" initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={sectionVariants} className="w-full max-w-2xl mx-auto bg-white/10 rounded-3xl shadow-xl p-8 flex flex-col items-center text-center border border-yellow-200/30">
          <div className="mb-4">
            <span className="inline-block w-14 h-14 rounded-full bg-gradient-to-tr from-yellow-200 to-purple-400 shadow flex items-center justify-center mb-2">
              <span className="text-3xl">💻</span>
            </span>
            <h2 className="text-2xl font-bold text-yellow-200 mb-2">Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {projects.map((proj, idx) => (
              <motion.div
                key={proj.title}
                whileHover={{ scale: 1.05, boxShadow: '0 0 24px #fff7' }}
                className="bg-purple-900/40 rounded-xl p-4 shadow flex flex-col items-center cursor-pointer"
                tabIndex={0}
                aria-label={`View details for ${proj.title}`}
                onClick={() => setModal(proj)}
                onKeyDown={e => { if (e.key === 'Enter') setModal(proj); }}
              >
                <span className="text-2xl mb-2">{proj.icon}</span>
                <h3 className="font-bold mb-1">{proj.title}</h3>
                <p className="text-sm text-yellow-100">{proj.desc}</p>
                <span className="mt-2 text-xs text-yellow-200 underline">View Details</span>
              </motion.div>
            ))}
          </div>
          <AnimatePresence>
            {modal && (
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setModal(null)}
                aria-modal="true"
                role="dialog"
              >
                <motion.div
                  className="bg-white rounded-2xl p-8 max-w-md w-full text-purple-900 relative"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  onClick={e => e.stopPropagation()}
                >
                  <button className="absolute top-2 right-2 text-2xl" onClick={() => setModal(null)} aria-label="Close project details">×</button>
                  <div className="flex flex-col items-center">
                    <span className="text-4xl mb-2">{modal.icon}</span>
                    <h3 className="font-bold text-xl mb-2">{modal.title}</h3>
                    <p className="mb-2 text-base">{modal.details}</p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>
        {/* Creativity Section */}
        <motion.section id="creativity" initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3} variants={sectionVariants} className="w-full max-w-2xl mx-auto bg-white/10 rounded-3xl shadow-xl p-8 flex flex-col items-center text-center border border-yellow-200/30">
          <div className="mb-4">
            <span className="inline-block w-14 h-14 rounded-full bg-gradient-to-tr from-yellow-200 to-purple-400 shadow flex items-center justify-center mb-2">
              <span className="text-3xl">🪔</span>
            </span>
            <h2 className="text-2xl font-bold text-yellow-200 mb-2">Creativity</h2>
          </div>
          <p className="mb-4 text-yellow-100">Symbolized by a candle (diya) — my creative spark and meditative focus.</p>
          {/* Placeholder for animated candle SVG or video */}
          <div className="w-16 h-16 flex items-center justify-center">
            <span className="text-4xl animate-pulse">🪔</span>
          </div>
        </motion.section>
        {/* Growth Section */}
        <motion.section id="growth" initial="hidden" whileInView="visible" viewport={{ once: true }} custom={4} variants={sectionVariants} className="w-full max-w-2xl mx-auto bg-white/10 rounded-3xl shadow-xl p-8 flex flex-col items-center text-center border border-yellow-200/30">
          <div className="mb-4">
            <span className="inline-block w-14 h-14 rounded-full bg-gradient-to-tr from-yellow-200 to-purple-400 shadow flex items-center justify-center mb-2">
              <span className="text-3xl">🌱</span>
            </span>
            <h2 className="text-2xl font-bold text-yellow-200 mb-2">Growth</h2>
          </div>
          <p className="mb-4 text-yellow-100">A small plant, symbolizing my ongoing learning and growth.</p>
          {/* Placeholder for animated plant SVG or video */}
          <motion.span initial={{ scale: 0.8 }} animate={{ scale: [0.8, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }} className="text-4xl">🌱</motion.span>
        </motion.section>
        {/* About Me Section */}
        <motion.section id="about" initial="hidden" whileInView="visible" viewport={{ once: true }} custom={5} variants={sectionVariants} className="w-full max-w-2xl mx-auto bg-white/10 rounded-3xl shadow-xl p-8 flex flex-col items-center text-center border border-yellow-200/30">
          <div className="mb-4">
            <span className="inline-block w-14 h-14 rounded-full bg-gradient-to-tr from-yellow-200 to-purple-400 shadow flex items-center justify-center mb-2">
              <span className="text-3xl">🪷</span>
            </span>
            <h2 className="text-2xl font-bold text-yellow-200 mb-2">About Me</h2>
          </div>
          <p className="mb-4 text-yellow-100 text-base md:text-lg">
            I am a lifelong learner, blending business acumen with a passion for technology and spiritual growth. My journey has taken me from leading trade organizations and corporate teams to exploring the frontiers of Artificial Intelligence and web development. I believe in the power of innovation, collaboration, and mindful progress—striving to create value and harmony in every project I undertake.
          </p>
          <div className="w-16 h-16 flex items-center justify-center">
            <span className="text-4xl animate-pulse">🪷</span>
          </div>
          <ul className="mt-6 text-yellow-100 text-sm md:text-base space-y-1">
            <li><strong>Languages:</strong> English, Urdu</li>
            <li><strong>Location:</strong> Karachi, Pakistan</li>
            <li><strong>Interests:</strong> Philanthropy, Plantation, Agri-Horti, Traveling, Exploring</li>
          </ul>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}

export default App;

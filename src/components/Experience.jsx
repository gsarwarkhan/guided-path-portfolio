import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Deputy Secretary",
      company: "Karachi Chamber of Commerce & Industry (KCCI)",
      period: "2022 - 2025",
      icon: "🏢",
      responsibilities: [
        "Managed overall management of specialized committees including Maritime Affairs, Imports, Quarantine Certification, and Housing & Real Estate",
        "Arranged sequence of meetings for resolutions and made accurate meeting minutes for multiple subcommittees",
        "Translated and transcribed voice recordings from Urdu to English",
        "Conducted SWOT analyses and supported trade-related research",
        "Liaised with public and private sector organizations",
        "Worked in election process of trade bodies",
        "Planned and developed with Office bearers and secretariate"
      ]
    },
    {
      title: "Assistant Manager",
      company: "Federation of Pakistan Chambers of Commerce & Industry (FPCCI)",
      period: "2011 - 2016",
      icon: "🏛️",
      responsibilities: [
        "Organised meetings for international bilateral business councils to foster Pakistan's trade from the Apex Platform",
        "Coordinated international delegations and protocol arrangements",
        "Assisted Secretary General in organizing trade exhibitions and official events"
      ]
    },
    {
      title: "Freelance Consultant",
      company: "Self driven | Remote | Project-Based",
      period: "2021 - 2022",
      icon: "💼",
      responsibilities: [
        "Provided transcription, translation, and strategic advisory services",
        "Supported startups and chambers in research, business documentation and policy work",
        "Organising, planning and problem solving for Management",
        "Resolution of meeting",
        "Transcription & Translation",
        "Generative AI Applications",
        "SWOT Analysis & Strategic Planning with stakeholders",
        "Business Administration & Liaison"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-transparent"></div>
                )}
                
                <div className="flex items-start space-x-6">
                  {/* Icon */}
                  <motion.div
                    className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {exp.icon}
                  </motion.div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-blue-600 font-semibold text-lg mb-1">
                          {exp.company}
                        </p>
                      </div>
                      <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold text-sm mt-2 md:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    
                    <ul className="space-y-3">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <span className="text-blue-600 mr-3 mt-1.5 flex-shrink-0">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <span className="text-gray-700 leading-relaxed">{responsibility}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 
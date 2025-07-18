import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Technology Tools",
      icon: "🤖",
      skills: [
        "React.js / Next.js",
        "Python",
        "Agentic AI",
        "Generative AI Applications",
        "Microsoft Office",
        "AI-Powered Documentation",
        "Digital Consulting"
      ],
      color: "blue"
    },
    {
      title: "Business & Administrative",
      icon: "📊",
      skills: [
        "Trade Chamber Administration",
        "Strategic Planning",
        "Business Administration & Liaison",
        "Stakeholder Coordination",
        "Policy Support",
        "Meeting Management",
        "SWOT Analysis"
      ],
      color: "green"
    },
    {
      title: "Specialized Skills",
      icon: "🎯",
      skills: [
        "Urdu-English Transcription",
        "Translation Services",
        "Meeting Minutes Preparation",
        "International Delegation Coordination",
        "Protocol Arrangements",
        "Trade Exhibition Organization",
        "Committee Management"
      ],
      color: "purple"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "border-blue-200 bg-blue-50 text-blue-800 hover:bg-blue-100 hover:border-blue-300",
      green: "border-green-200 bg-green-50 text-green-800 hover:bg-green-100 hover:border-green-300",
      purple: "border-purple-200 bg-purple-50 text-purple-800 hover:bg-purple-100 hover:border-purple-300"
    };
    return colors[color] || colors.blue;
  };

  const getGradientClasses = (color) => {
    const gradients = {
      blue: "from-blue-500 to-indigo-600",
      green: "from-green-500 to-emerald-600",
      purple: "from-purple-500 to-violet-600"
    };
    return gradients[color] || gradients.blue;
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <motion.div
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${getGradientClasses(category.color)} rounded-full text-white text-2xl mb-4 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {category.title}
                    </h3>
                  </div>
                  
                  {/* Skills */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02, x: 5 }}
                        className="transition-all duration-200"
                      >
                        <div className={`px-4 py-3 rounded-xl text-sm font-medium border transition-all duration-300 ${getColorClasses(category.color)}`}>
                          {skill}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Continuous Learning & Growth
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                I'm constantly expanding my skill set through self-directed learning, 
                staying current with emerging technologies, and applying new knowledge 
                to enhance business processes and client solutions.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 
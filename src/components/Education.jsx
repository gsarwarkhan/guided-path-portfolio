import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Business Administration (Hons.) – Finance",
      institution: "Dadabhoy Institute of Higher Education, Karachi",
      year: "2006 – 2010",
      description: "Specialized in Finance with comprehensive business education covering management, finance, marketing, and organizational behavior",
      gpa: "CGPA: 2.98 (Dean's Award)"
    },
    {
      degree: "Intermediate in Commerce",
      institution: "Intermediate Board",
      year: "2004",
      description: "Commerce stream with business studies and economics",
      gpa: "Completed"
    },
    {
      degree: "Metric in Science",
      institution: "Board of Secondary Education",
      year: "2002",
      description: "Science stream with mathematics and sciences",
      gpa: "Completed"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Education
          </h2>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 shadow-sm border-l-4 border-blue-600"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-blue-600 font-medium mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6 text-right">
                    <p className="text-gray-500 text-sm mb-1">
                      {edu.year}
                    </p>
                    <p className="text-blue-600 font-semibold">
                      {edu.gpa}
                    </p>
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

export default Education; 
import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
  const certifications = [
    {
      title: "IELTS Academic",
      issuer: "British Council",
      date: "2023",
      description: "Band 7.5 - Advanced English proficiency for academic and professional contexts",
      type: "language"
    },
    {
      title: "AI & Machine Learning Workshop",
      issuer: "Tech Innovation Institute",
      date: "2024",
      description: "Comprehensive training on AI fundamentals, machine learning algorithms, and practical applications",
      type: "technical"
    },
    {
      title: "Project Management Professional",
      issuer: "Project Management Institute",
      date: "2023",
      description: "Certified project management methodologies and best practices for business environments",
      type: "business"
    },
    {
      title: "Data Analysis & Visualization",
      issuer: "Coursera",
      date: "2024",
      description: "Advanced data analysis techniques using Python, SQL, and visualization tools",
      type: "technical"
    },
    {
      title: "Business Communication Excellence",
      issuer: "Corporate Training Institute",
      date: "2022",
      description: "Professional communication skills for corporate environments and stakeholder management",
      type: "business"
    },
    {
      title: "Digital Transformation Leadership",
      issuer: "Digital Innovation Academy",
      date: "2024",
      description: "Strategic leadership in digital transformation and technology adoption",
      type: "leadership"
    }
  ];

  const getTypeColor = (type) => {
    const colors = {
      language: "bg-blue-100 text-blue-800 border-blue-200",
      technical: "bg-green-100 text-green-800 border-green-200",
      business: "bg-purple-100 text-purple-800 border-purple-200",
      leadership: "bg-orange-100 text-orange-800 border-orange-200"
    };
    return colors[type] || colors.business;
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Certifications & Training
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {cert.title}
                  </h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getTypeColor(cert.type)}`}>
                    {cert.type}
                  </span>
                </div>
                
                <p className="text-blue-600 font-medium text-sm mb-2">
                  {cert.issuer}
                </p>
                
                <p className="text-gray-600 text-sm mb-3">
                  {cert.date}
                </p>
                
                <p className="text-gray-700 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications; 
import React from 'react';
import { motion } from 'framer-motion';

const ProfessionalSummary = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Professional Summary
          </h2>
          
          <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Experienced Executive Secretary with 8+ years in trade chamber administration, 
              Urdu-English transcription, and AI-driven documentation. Skilled in stakeholder 
              coordination, policy support, and meeting minute preparation. Currently expanding 
              into Generative AI and digital consulting.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              My expertise spans strategic planning, business administration, and liaison work 
              across public and private sector organizations. I have successfully managed 
              specialized committees, coordinated international delegations, and supported 
              trade-related research with SWOT analyses. My transition into AI and technology 
              reflects my commitment to leveraging modern tools for enhanced business efficiency 
              and documentation processes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalSummary; 
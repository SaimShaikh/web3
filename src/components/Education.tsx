import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'BTech in Cloud Computing',
    institution: 'Ajeenkya DY Patil University',
    period: '2020 - 2024',
  },
  {
    degree: 'Diploma in Computer Engineering',
    institution: 'Technical Institute',
    period: '2017 - 2020',
  },
];

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Education
        </h2>
        
        <div ref={ref} className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-purple-400 to-pink-600" />
              <div className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-purple-400" />
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-center gap-3 mb-2">
                  <GraduationCap className="text-purple-400" size={20} />
                  <h4 className="text-xl font-semibold text-gray-200">{edu.degree}</h4>
                </div>
                <p className="text-gray-400 mb-1">{edu.institution}</p>
                <p className="text-sm text-gray-500">{edu.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
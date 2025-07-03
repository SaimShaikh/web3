import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github as Git, Cloud, Pocket as Docker, Database, BarChart, GitBranch } from 'lucide-react';

const skills = [
  { name: 'Git & GitHub', icon: GitBranch },
  { name: 'AWS Cloud', icon: Cloud },
  { name: 'Docker', icon: Docker },
  { name: 'Kubernetes', icon: Database },
  { name: 'Jenkins', icon: Git },
  { name: 'Grafana', icon: BarChart },
];

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Technical Skills
        </h2>
        
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center justify-center text-center hover:transform hover:scale-105 transition-transform"
            >
              <skill.icon size={32} className="text-purple-400 mb-4" />
              <h3 className="text-gray-200 font-medium">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
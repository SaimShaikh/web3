import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Cloud Infrastructure Automation',
    description: 'Automated AWS infrastructure deployment using Terraform and Jenkins pipeline.',
    technologies: ['AWS', 'Terraform', 'Jenkins', 'Python'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Kubernetes Monitoring Dashboard',
    description: 'Custom monitoring solution using Grafana and Prometheus for Kubernetes clusters.',
    technologies: ['Kubernetes', 'Grafana', 'Prometheus', 'Docker'],
    github: 'https://github.com',
  },
  {
    title: 'CI/CD Pipeline Optimization',
    description: 'Optimized deployment pipeline reducing build time by 60% using caching and parallel execution.',
    technologies: ['Jenkins', 'Docker', 'Shell', 'Git'],
    github: 'https://github.com',
  },
];

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Projects
        </h2>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 hover:transform hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-200">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map(tech => (
                  <span key={tech} className="px-3 py-1 text-sm bg-purple-400/20 text-purple-300 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Github size={20} />
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
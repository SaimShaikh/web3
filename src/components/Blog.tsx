import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, ArrowUpRight } from 'lucide-react';

const blogPosts = [
  {
    title: "Getting Started with AWS Cloud Infrastructure",
    excerpt: "Learn the fundamentals of setting up and managing AWS cloud infrastructure for scalable applications.",
    date: "March 15, 2024",
    platform: "Medium",
    link: "https://medium.com/your-post-1"
  },
  {
    title: "Kubernetes Best Practices for Production",
    excerpt: "Essential practices and patterns for running Kubernetes clusters in production environments.",
    date: "March 10, 2024",
    platform: "Hashnode",
    link: "https://hashnode.com/your-post-2"
  },
  {
    title: "Optimizing CI/CD Pipelines",
    excerpt: "Strategies and techniques to improve your CI/CD pipeline performance and reliability.",
    date: "March 5, 2024",
    platform: "Medium",
    link: "https://medium.com/your-post-3"
  }
];

const Blog: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Latest Blog Posts
        </h2>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 hover:transform hover:scale-105 transition-transform"
            >
              <div className="flex items-center gap-2 text-purple-400 mb-4">
                <BookOpen size={20} />
                <span className="text-sm">{post.platform}</span>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-200">{post.title}</h3>
              <p className="text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>
              
              <div className="flex justify-between items-center mt-auto">
                <span className="text-sm text-gray-500">{post.date}</span>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors inline-flex items-center gap-1"
                >
                  Read More
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
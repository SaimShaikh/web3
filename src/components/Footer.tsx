import React from 'react';
import { Github, Linkedin, Instagram, BookOpen, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: BookOpen, href: 'https://medium.com', label: 'Blog' },
  { icon: Mail, href: 'mailto:contact@example.com', label: 'Email' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900/80 backdrop-blur-sm py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-6 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110"
                aria-label={link.label}
              >
                <link.icon size={24} />
              </a>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-gray-400 mb-2">Saime Shaikh</p>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
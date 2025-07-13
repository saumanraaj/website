import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { ThemeToggle } from './ui/theme-toggle';

interface NavigationProps {
  sections: string[];
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  sections,
  activeSection,
  onSectionChange
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    onSectionChange(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold text-foreground"
          >
            
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {sections.map((section) => (
              <motion.button
                key={section}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(section.toLowerCase())}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-0 ${
                  activeSection === section.toLowerCase()
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {section}
              </motion.button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section.toLowerCase())}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 focus:outline-none focus:ring-0 ${
                    activeSection === section.toLowerCase()
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}; 
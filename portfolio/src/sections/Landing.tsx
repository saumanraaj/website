import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import ProfileCard from '../components/ProfileCard';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '../components/ui/button';

export const Landing: React.FC = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/saumanraaj',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/sauman-raaj/',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:sauman@bu.edu',
      label: 'Email',
    },
  ];

  return (
    <section id="landing" className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute w-48 h-48 bg-purple-500 opacity-20 rounded-full blur-3xl -z-10 left-1/2 top-1/3"></div>
      <div className="absolute w-64 h-64 bg-blue-500 opacity-10 rounded-full blur-3xl -z-10 right-1/4 bottom-1/4"></div>
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center justify-center gap-16">
          {/* Left: Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0"
          >
          <ProfileCard
            avatarUrl="/avatar.jpg"
            name="Sauman Raaj"
            title="Robotics Software Developer"
            handle="saumanraaj"
            status="Online"
            miniAvatarUrl="/avatar.jpg"
            socialLinks={socialLinks}
          />
          </motion.div>

          {/* Vertical Divider */}
          <div className="hidden md:block h-64 w-[1px] bg-muted opacity-30 mx-8"></div>

          {/* Right: Hero Text Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-lg text-balance"
          >
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="font-bold text-4xl md:text-5xl text-foreground leading-tight">
                  Hi, I'm Sauman Raaj
                </h1>
                <h2 className="text-lg md:text-xl font-medium text-muted-foreground leading-relaxed text-left">
                  Robotics Software Developer | Building Intelligent, Real-Time Systems 
                </h2>
                <p className="text-base md:text-lg text-muted-foreground/80 leading-relaxed text-left">
                From ROS2 to LLM-based control, I design, simulate, and deploy autonomous robot behaviors.  
                Driven by curiosity, grounded in engineering, open to solving real-world problems.
                </p>
              </div>

              {/* Resume Download Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button 
                  variant="default" 
                  size="sm"
                  className="w-fit px-6 py-2 flex items-center gap-2"
                  asChild
                >
                  <a href="/sauman_ copy.pdf" download>
                    <Download size={20} />
                    <span>Download Resume</span>
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 
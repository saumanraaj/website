import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const contactLinks = [
  {
    icon: Github,
    href: 'https://github.com/saumanraaj',
    label: 'GitHub',
    description: 'Check out my projects and contributions'
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/sauman-raaj/',
    label: 'LinkedIn',
    description: 'Connect with me professionally'
  },
  {
    icon: Mail,
    href: 'mailto:sauman@bu.edu',
    label: 'Email',
    description: 'Get in touch directly'
  }
];

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's connect! Feel free to reach out for collaborations, opportunities, or just to say hello.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactLinks.map((link, index) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-primary/10">
                      <link.icon className="text-primary" size={32} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {link.label}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6">
                    {link.description}
                  </p>
                  
                  <Button asChild className="w-full">
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2"
                    >
                      <link.icon size={20} />
                      <span>Visit {link.label}</span>
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 
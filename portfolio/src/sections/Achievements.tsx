import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, FileText, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

interface Achievement {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  type: 'award' | 'certification' | 'publication' | 'competition';
}

const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Daimler India Commercial Vehicle Hackathon',
    organization: 'Daimler India Commercial Vehicle',
    year: '2023',
    description: 'Reduced truck TCO by 25% and downtime by 30% using predictive maintenance and 4WD simulation.',
    type: 'competition'
  },
  {
    id: '2',
    title: 'Technical Director of Projects',
    organization: 'CEG TECH FORUM',
    year: '2024',
    description: 'Led 150+ students across 14 tech projects and co-organized KURUKSHETRA, fostering hands-on innovation in robotics, AI, and automation.',
    type: 'award'
  },
  {
    id: '3',
    title: 'Pending Patent',
    organization: 'Anna University',
    year: '2024',
    description: 'Patent pending for a smart package delivery box integrating OTP authentication, real-time monitoring, and secure automated locking.',
    type: 'publication'
  },
  
];

const getIcon = (type: string) => {
  switch (type) {
    case 'award':
      return Award;
    case 'certification':
      return FileText;
    case 'publication':
      return Star;
    case 'competition':
      return Trophy;
    default:
      return Award;
  }
};

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Awards, certifications, and milestones in my professional journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = getIcon(achievement.type);
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                  <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <IconComponent className="text-primary" size={24} />
                  </div>
                  <div>
                        <h3 className="text-lg font-bold text-foreground">
                      {achievement.title}
                    </h3>
                        <p className="text-sm text-primary">
                      {achievement.organization}
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                      <Badge variant="outline">
                    {achievement.year}
                      </Badge>
                </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                  {achievement.description}
                </p>

                    <div className="mt-4 pt-4 border-t border-border">
                      <span className="text-xs text-muted-foreground uppercase tracking-wide">
                    {achievement.type}
                  </span>
                </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>


      </div>
    </section>
  );
}; 
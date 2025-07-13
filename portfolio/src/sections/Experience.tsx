import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: '1',
    title: 'Robotics Software Intern',
    company: 'Agency Robotics ',
    location: 'Boston, MA',
    period: '2025 - Present',
    description: [
      'Developed a modular two-layer simulator to model multi-robot parcel sortation, with zone-based routing and task assignment logic optimized for throughput.',
      'Designed Python-based scheduling and control APIs for testing autonomous decision-making, fault recovery, and route optimization in ambiguous, high-load environments.',
      'Collaborated cross-functionally to align system behavior with real warehouse constraints, contributing to an ongoing physical deployment effort.',
    ],
    technologies: ['Path Planning', 'Industrial Automation', 'Python', 'React', 'FastAPI', 'Node.js', 'Simulation']
  },
  {
    id: '2',
    title: 'Graduate Research Assistant',
    company: 'Dependable Computing Lab',
    location: 'Boston, MA',
    period: '2024 - Present',
    description: [
      'Developed intelligent closed loop robotic manipulation systems by integrating LLMs and VLMs into robot control pipelines',
      'Built and simulated Sawyer and Panda arms using ROS/ROS2, MoveIt, and Gazebo for high-level language-driven task execution',
      'Enabled vision-guided object manipulation through pose estimation, inverse kinematics, and JSON-structured action planning',
      'Demonstrated multimodal grounding and closed-loop control in simulation with dynamic responses to real-time feedback'
    ],
    technologies: ['VLM', 'LLM', 'ROS2', 'Gazebo', 'Reinforcement Learning', 'MoveIt', 'Panda', 'Sawyer']
  },
  {
    id: '3',
    title: 'Intern Trainee',
    company: 'Caterpillar',
    location: 'Chennai, India',
    period: 'Jul 2022 - Sep 2022',
    description: [
      'Developed and implemented automation solutions using industrial robots (SCARA), resulting in a 2x increase in production efficiency and demonstrating practical application of automation principles.',
      'Implemented defect analysis to enhance quality control, reducing assembly errors by 50% & improving efficiency.',
      'Applied lean methodologies like Six Sigma, reducing assembly inefficiencies by 30% through process optimization.',
    ],
    technologies: ['SCARA', 'Industrial Automation', 'Quality Control', 'Six Sigma']
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey in robotics and software engineering
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                  >
                    <Card className="hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                      <CardContent className="p-6">
                    <div className="flex items-center space-x-2 mb-4">
                          <Building className="text-primary" size={20} />
                          <h3 className="text-xl font-bold text-foreground">
                        {experience.title}
                      </h3>
                    </div>

                        <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{experience.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{experience.location}</span>
                      </div>
                    </div>

                        <h4 className="text-lg font-semibold text-primary mb-3">
                      {experience.company}
                    </h4>

                    <ul className="space-y-2 mb-4">
                      {experience.description.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-muted-foreground text-sm leading-relaxed flex items-start">
                              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary">
                          {tech}
                            </Badge>
                      ))}
                    </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 
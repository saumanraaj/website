import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../components/ui/card';
import { SiPython, SiRos, SiTensorflow, SiOpencv, SiDassaultsystemes, SiAutodesk, SiRaspberrypi, SiCplusplus } from "react-icons/si";
import { IconType } from 'react-icons';

interface Technology {
  id: string;
  name: string;
  icon: IconType;
  description: string;
  color: string;
}

const technologies: Technology[] = [
  {
    id: '1',
    name: 'Python',
    icon: SiPython,
    description: 'Programming language',
    color: 'text-cyan-400 hover:text-cyan-300'
  },
  {
    id: '2',
    name: 'ROS & ROS2',
    icon: SiRos,
    description: 'Robot Operating System',
    color: 'text-white hover:text-gray-400'
  },
  {
    id: '3',
    name: 'TensorFlow',
    icon: SiTensorflow,
    description: 'Deep learning framework for AI applications',
    color: 'text-yellow-800 hover:text-yellow-600'
  },
  {
    id: '4',
    name: 'OpenCV',
    icon: SiOpencv,
    description: 'Computer vision library for image processing',
    color: 'text-[#5C3EE8] hover:text-[#8366E8]'
  },
  {
    id: '5',
    name: 'SolidWorks',
    icon: SiDassaultsystemes,
    description: 'CAD software for mechanical design',
    color: 'text-red-800 hover:text-red-600'
  },
  {
    id: '6',
    name: 'Rapid Prototyping',
    icon: SiAutodesk,
    description: '3D printing and additive manufacturing',
    color: 'text-orange-500 hover:text-orange-300'
  },
  {
    id: '7',
    name: 'Raspberry Pi',
    icon: SiRaspberrypi,
    description: 'Single-board computer for embedded systems',
    color: 'text-[#C51A4A] hover:text-[#E75480]'
  },
  {
    id: '8',
    name: 'C++',
    icon: SiCplusplus,
    description: 'High-performance programming for robotics',
    color: 'text-blue-600 hover:text-blue-400'
  }
];

export const Technologies: React.FC = () => {
  return (
    <section id="technologies" className="py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tools and technologies I use to build intelligent robotic systems
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                  <CardContent className="p-6 flex flex-col items-center justify-center gap-3 text-center">
                    <div className="h-12 w-12 flex items-center justify-center mb-2">
                      {Icon ? (
                        React.createElement(Icon as React.ComponentType<{ className?: string }>, { className: `h-12 w-12 transition duration-300 ${tech.color}` })
                      ) : null}
                    </div>
                    <h3 className="font-semibold text-foreground text-sm">
                      {tech.name}
                    </h3>
                    <span className="text-xs text-muted-foreground text-center">
                      {tech.description}
                    </span>
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
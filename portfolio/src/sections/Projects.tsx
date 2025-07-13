import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'LLM guided Robotic Manipulation',
    description: 'Built a closed loop LLM-controlled robot manipulator using GPT-4 and ROS to execute natural language commands. Integrated inverse kinematics and reinforcement learning for closed-loop object manipulation and feedback control.',
    technologies: ['LLM', 'ROS2', 'Gazebo', 'MoveIt', 'Panda', 'Sawyer'],
    github: 'https://github.com/saumanraaj/sawyer_LLM_control',
    image: '/sawyer.png',
  },
  {
    id: '2',
    title: 'LocusEdge',
    description: 'Developed an offline autonomous mobile robot using fine-tuned, quantized LLaMA 3 and Whisper for speech-to-action control. Integrated with ROS for real-time navigation and optimized planning, achieving 96% positional and 93% rotational accuracy with 400ms latency.',
    technologies: ['ROS2', 'Python', 'C++', 'AMR', 'LLM', 'Whisper', 'Llama3'],
    github: 'https://github.com/saumanraaj/Locus_Edge',
    image: '/locusedge.jpeg',
  },
  {
    id: '3',
    title: 'BEAR x GCS: LLMs for Self-Driving Labs',
    description: 'Integrated GCS experimental logic into an LLM to simulate expert decision-making in self-driving lab environments. Evaluated 30K+ experiments for parameter impact, failure prediction, and reasoning under RAG-based memory decay.',
    technologies: ['LLM', 'RAG', 'Self-Driving Labs', 'Materials Lab'],
    github: 'https://github.com/saumanraaj/bear_LLM',
    image: '/rag.png',
  },
  {
    id: '4',
    title: 'Smart Package Delivery Box',
    description: 'Designed and implemented a smart package delivery box with OTP authentication, real-time monitoring, and secure automated locking.',
    technologies: ['Embedded Systems', 'IoT', 'Python', 'ESP32', 'Solidworks'],
    image: '/spdb.jpeg',
  }
];

interface ImagePreviewProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ src, alt, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="relative max-w-4xl max-h-[90vh] p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 z-10 p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
        >
          <X size={20} className="text-white" />
        </button>
        <img
          src={src}
          alt={alt}
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
        />
      </motion.div>
    </motion.div>
  );
};

export const Projects: React.FC = () => {
  const [previewImage, setPreviewImage] = useState<{ src: string; alt: string } | null>(null);

  const handleImageClick = (src: string, alt: string) => {
    setPreviewImage({ src, alt });
  };

  const closePreview = () => {
    setPreviewImage(null);
  };
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of my work in robotics, computer vision, and software engineering
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                <div className="h-48 flex items-center justify-center overflow-hidden">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="h-full w-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => handleImageClick(project.image!, project.title)}
                      onError={(e) => {
                        console.log('Image failed to load:', project.image);
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                      <div className="text-primary-foreground text-6xl font-bold opacity-20">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                  )}
                </div>
              
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-bold text-foreground mb-3">
                  {project.title}
                  </CardTitle>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                      {tech}
                      </Badge>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {project.github && (
                      <Button variant="ghost" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                          className="flex items-center space-x-2"
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                      </Button>
                  )}
                  {project.live && (
                      <Button variant="ghost" asChild>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                          className="flex items-center space-x-2"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                      </Button>
                  )}
                </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      
      <ImagePreview
        src={previewImage?.src || ''}
        alt={previewImage?.alt || ''}
        isOpen={!!previewImage}
        onClose={closePreview}
      />
    </section>
  );
}; 
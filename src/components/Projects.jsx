import { motion } from 'framer-motion';
import { Github, ExternalLink, Activity } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Nova",
      description: "Next-gen shopping platform with real-time inventory and AI recommendations.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      github: "#",
      demo: "#"
    },
    {
      title: "Task Force Pro",
      description: "Collaborative workspace for remote teams with live sync.",
      tags: ["React", "Firebase", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
      github: "#",
      demo: "#"
    },
    {
      title: "DevPortfolio v1",
      description: "Personal brand showcase with high-end animations and SEO.",
      tags: ["React", "Framer Motion", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-purple/10 to-transparent blur-3xl -z-10"></div>

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-2 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-sm mb-4">
             <Activity className="w-5 h-5 text-accent mr-2" />
             <span className="text-accent text-sm font-bold uppercase tracking-widest">System Modules</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple">
                Featured Projects
             </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-secondary rounded-xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-500"
            >
              <div className="h-48 overflow-hidden relative">
                {/* Scanline effect */}
                <div className="absolute inset-0 bg-transparent z-10 pointer-events-none group-hover:bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] group-hover:bg-[length:100%_2px,3px_100%]"></div>
                
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm z-20">
                  <a href={project.github} className="p-3 bg-white/10 rounded-full text-white hover:bg-accent hover:text-primary transition-colors border border-white/10" title="View Code">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href={project.demo} className="p-3 bg-white/10 rounded-full text-white hover:bg-accent hover:text-primary transition-colors border border-white/10" title="Live Demo">
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>
              
              <div className="p-6 relative">
                 {/* Neon corner accent */}
                 <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none overflow-hidden">
                     <div className="absolute top-0 right-0 w-2 h-2 bg-accent shadow-[0_0_10px_#06b6d4]"></div>
                 </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-text-muted mb-4 line-clamp-2 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono font-medium px-2 py-1 rounded bg-white/5 text-purple border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

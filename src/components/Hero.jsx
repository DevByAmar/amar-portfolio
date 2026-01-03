import { motion } from 'framer-motion';
import { ArrowRight, Download, Code, Cpu } from 'lucide-react';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
        {/* Abstract Background Blobs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container-custom relative z-30">
        <div className="flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 relative"
          >
            <div className="absolute inset-0 bg-accent blur-xl opacity-20 rounded-full"></div>
            <div className="relative w-24 h-24 rounded-full border-2 border-accent/50 flex items-center justify-center bg-secondary/50 backdrop-blur-sm">
                <Code className="w-10 h-10 text-accent animate-pulse-slow" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent font-medium tracking-wider uppercase mb-6 backdrop-blur-sm">
              System Online • Ready to Code
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-8xl font-bold mb-6 tracking-tight"
          >
            AMAR<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple animate-glitch">.DEV</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl text-text-muted mb-10 h-16"
          >
            <Typewriter
              options={{
                strings: [
                  'Full-Stack Developer', 
                  'Building Scalable Apps', 
                  'React & Node.js Expert',
                  'Problem Solver'
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 80,
                cursor: '|',
                wrapperClassName: 'text-accent font-mono'
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-accent px-8 font-medium text-primary transition-all duration-300 hover:bg-accent-dark hover:scale-105"
            >
              <span className="mr-2">View Projects</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            
            <a
              href="#contact"
              className="group inline-flex h-12 items-center justify-center rounded-md border border-accent/20 bg-secondary/50 px-8 font-medium text-accent backdrop-blur-sm transition-all duration-300 hover:bg-accent/10 hover:border-accent"
            >
              Contact Me
            </a>

            <a
              href="/amar_sharma_resume.pdf"
              download="Amar_Sharma_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-12 items-center justify-center rounded-md border border-purple/50 bg-secondary/50 px-8 font-medium text-purple backdrop-blur-sm transition-all duration-300 hover:bg-purple/10 hover:border-purple hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Grid Floor Effect at bottom */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-primary to-transparent z-20"></div>
    </section>
  );
};

export default Hero;

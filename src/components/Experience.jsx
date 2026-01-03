import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative bg-secondary/20">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple">
                Professional Journey
             </span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative pl-8 md:pl-0"
          >
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-purple opacity-20 hidden md:block"></div>
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-purple opacity-20 md:hidden"></div>

            {/* Experience Item */}
            <div className="relative mb-12 md:w-1/2 md:ml-auto md:pl-12">
               {/* Timeline Dot */}
               <div className="absolute top-0 left-[-5px] md:-left-[41px] w-3 h-3 bg-accent rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)] z-20">
                   <div className="absolute inset-0 bg-accent animate-ping opacity-75 rounded-full"></div>
               </div>

               <div className="bg-secondary/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-accent/30 transition-all duration-300 group shadow-xl">
                 <div className="flex justify-between items-start mb-4">
                   <div>
                     <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">Full-Stack Developer</h3>
                     <p className="text-purple font-medium">ITboxss</p>
                   </div>
                   <div className="flex items-center text-text-muted text-xs bg-white/5 px-2 py-1 rounded">
                     <Calendar className="w-3 h-3 mr-1" />
                     <span>2024 - Present</span>
                   </div>
                 </div>
                 
                 <ul className="space-y-3 text-text-muted text-sm list-none">
                   <li className="flex items-start">
                        <span className="mr-2 mt-1.5 w-1 h-1 bg-accent rounded-full"></span>
                        Developed and maintained responsive web applications using React and Node.js.
                   </li>
                   <li className="flex items-start">
                        <span className="mr-2 mt-1.5 w-1 h-1 bg-accent rounded-full"></span>
                        Collaborated with the design team to implement modern UIs with pixel-perfect accuracy.
                   </li>
                   <li className="flex items-start">
                        <span className="mr-2 mt-1.5 w-1 h-1 bg-accent rounded-full"></span>
                        Optimized database queries in MySQL/MongoDB for better performance.
                   </li>
                   <li className="flex items-start">
                        <span className="mr-2 mt-1.5 w-1 h-1 bg-accent rounded-full"></span>
                        Integrated REST APIs and third-party services like payment gateways.
                   </li>
                 </ul>
               </div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

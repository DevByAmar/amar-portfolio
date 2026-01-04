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

               <div className="bg-secondary/60 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-accent/40 transition-all duration-300 group shadow-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] relative overflow-hidden">
                 {/* Glow Effect */}
                 <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 relative z-10">
                   <div className="mb-4 md:mb-0">
                     <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">Full-Stack Developer</h3>
                     <p className="text-purple font-mono font-medium text-lg mt-1">ITboxss</p>
                   </div>
                   <div className="flex items-center text-accent text-sm font-bold bg-accent/10 px-4 py-2 rounded-full border border-accent/20 shadow-[0_0_10px_rgba(6,182,212,0.1)]">
                     <Calendar className="w-4 h-4 mr-2" />
                     <span>2024 - Present</span>
                   </div>
                 </div>
                 
                 <ul className="space-y-3 text-text-muted text-sm list-none">
                   <li className="flex items-start">
                        <span className="mr-3 mt-1.5 min-w-[6px] h-1.5 bg-accent rounded-full shadow-[0_0_5px_rgba(6,182,212,0.8)]"></span>
                        <span className="text-gray-300">Developed and maintained responsive web applications using React and Node.js.</span>
                   </li>
                   <li className="flex items-start">
                        <span className="mr-3 mt-1.5 min-w-[6px] h-1.5 bg-accent rounded-full shadow-[0_0_5px_rgba(6,182,212,0.8)]"></span>
                        <span className="text-gray-300">Detailed work on <strong>Drupal CMS</strong>, managing complex content structures and custom module development.</span>
                   </li>
                   <li className="flex items-start">
                        <span className="mr-3 mt-1.5 min-w-[6px] h-1.5 bg-accent rounded-full shadow-[0_0_5px_rgba(6,182,212,0.8)]"></span>
                        <span className="text-gray-300">Collaborated with the design team to implement modern UIs with pixel-perfect accuracy.</span>
                   </li>
                   <li className="flex items-start">
                        <span className="mr-3 mt-1.5 min-w-[6px] h-1.5 bg-accent rounded-full shadow-[0_0_5px_rgba(6,182,212,0.8)]"></span>
                        <span className="text-gray-300">Optimized database queries in MySQL/MongoDB for better performance.</span>
                   </li>
                   <li className="flex items-start">
                        <span className="mr-3 mt-1.5 min-w-[6px] h-1.5 bg-accent rounded-full shadow-[0_0_5px_rgba(6,182,212,0.8)]"></span>
                        <span className="text-gray-300">Integrated REST APIs and third-party services like payment gateways.</span>
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

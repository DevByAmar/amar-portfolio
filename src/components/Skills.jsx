import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server, Wrench, Globe, Terminal, Cpu, Layers } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Architect",
      icon: <Layout className="w-6 h-6 text-accent" />,
      skills: ["React", "Tailwind CSS", "Framer Motion", "HTML5/CSS3", "JavaScript (ES6+)"],
      color: "from-accent to-blue-600"
    },
    {
      title: "Backend Engine",
      icon: <Server className="w-6 h-6 text-purple" />,
      skills: ["Node.js", "Express", "PHP", "RESTful APIs", "Authentication"],
      color: "from-purple to-pink-600"
    },
    {
      title: "Data Command",
      icon: <Database className="w-6 h-6 text-emerald-400" />,
      skills: ["MySQL", "MongoDB", "Data Modeling", "Optimization"],
      color: "from-emerald-400 to-green-600"
    },
    {
      title: "DevOps & Tools",
      icon: <Wrench className="w-6 h-6 text-orange-400" />,
      skills: ["Git / GitHub", "VS Code", "Postman", "Vite", "NPM"],
      color: "from-orange-400 to-red-600"
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10"></div>

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block p-2 rounded-full border border-white/10 bg-secondary/50 backdrop-blur-sm mb-4">
             <Cpu className="w-6 h-6 text-accent animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple">
                Technical Arsenal
             </span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            High-performance tools for building scalable digital solutions.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-secondary/40 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden"
            >
              <div className={`absolute top-0 right-0 p-32 bg-gradient-to-br ${category.color} rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2 pointer-events-none`}></div>
              
              <div className="relative z-10">
                <div className="mb-6 inline-flex p-3 rounded-lg bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-4 group-hover:text-text transition-colors">
                    {category.title}
                </h3>
                
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center text-text-muted group-hover:text-text transition-colors">
                      <Terminal className="w-3.5 h-3.5 mr-2 text-text/20 group-hover:text-accent transition-colors" />
                      <span className="text-sm font-medium">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/5 rounded-2xl transition-colors pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

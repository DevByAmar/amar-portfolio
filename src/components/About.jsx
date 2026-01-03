import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-secondary/50 -skew-y-3 transform origin-top-left -z-10 h-full w-full"></div>
      
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple">
                About Me
              </span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-accent to-purple mx-auto rounded"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-purple rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-primary border border-white/10 flex items-center justify-center">
                 <img 
                   src="/src/assets/amar.jpg" 
                   alt="Amar Sharma" 
                   className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                 />
                 {/* Cyber overlay lines */}
                 <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                 <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60"></div>
              </div>
            </div>

            <div className="space-y-6 text-lg text-text-muted">
              <h3 className="text-2xl font-bold text-white mb-2">
                Tech enthusiast with a <span className="text-accent">creative edge</span>.
              </h3>
              <p>
                Hi! I'm <span className="text-white font-semibold">Amar Kumar</span>, a Full-Stack Developer with a BCA degree and a passion for building future-ready web applications.
              </p>
              <div className="p-4 rounded-lg bg-secondary/50 border-l-4 border-accent border-y border-r border-white/5 backdrop-blur-sm">
                <p className="italic text-sm">
                  "Currently innovating at <span className="text-accent font-bold">ITboxss</span>, creating seamless digital experiences that merge function with aesthetics."
                </p>
              </div>
              <p>
                Whether it's optimizing backend logic or crafting pixel-perfect UIs, I bring a detail-oriented approach to every line of code.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

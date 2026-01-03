import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Replace these with your actual EmailJS credentials
    // Sign up at https://www.emailjs.com/
    const SERVICE_ID = 'email_service_c29reos';
    const TEMPLATE_ID = 'contact_5o7h4k4';
    const PUBLIC_KEY = '44mhTzrFvTwDmC1WZ';

    const formData = new FormData(formRef.current);
    const templateParams = {
      name: formData.get('name'),
      email: formData.get('email'),
      userEmail: formData.get('email'), // Mapped to match template's {{userEmail}}
      title: 'New Portfolio Message',   
      message: formData.get('message')
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((result) => {
          setSubmitStatus('success');
          setIsSubmitting(false);
          formRef.current.reset();
      }, (error) => {
          console.log(error.text);
          setSubmitStatus('error');
          setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-accent/5 to-transparent z-0"></div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple">
                Initialize Connection
             </span>
          </h2>
          <p className="text-text-muted max-w-xl mx-auto">
            Ready to collaborate on the next big thing? Send an encrypted signal.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-2xl border border-white/5 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-16 bg-accent/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/20 transition-colors"></div>
                 
                 <div className="relative z-10 space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-white/5 p-3 rounded-lg text-accent border border-white/10">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-text">Email Stream</h4>
                        <a href="mailto:amarsharma.developer@gmail.com" className="text-text-muted hover:text-accent transition-colors font-mono text-sm">
                          amarsharma.developer@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-white/5 p-3 rounded-lg text-purple border border-white/10">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-text">Voice Link</h4>
                        <p className="text-text-muted font-mono text-sm">+91 9546216498</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-white/5 p-3 rounded-lg text-pink-500 border border-white/10">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-text">Coordinates</h4>
                        <p className="text-text-muted font-mono text-sm">India, Earth</p>
                      </div>
                    </div>
                 </div>
            </div>

            <div className="pt-4">
              <h4 className="font-bold text-lg mb-4 text-text">Social Uplinks</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-secondary p-4 rounded-xl border border-white/10 text-text-muted hover:text-white hover:border-accent hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300 group">
                  <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="bg-secondary p-4 rounded-xl border border-white/10 text-text-muted hover:text-white hover:border-purple hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300 group">
                  <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div className="relative group">
                <label htmlFor="name" className="block text-xs font-mono text-accent mb-2 ml-1">{'<Name />'}</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full bg-secondary/50 border border-white/10 rounded-lg px-4 py-3 text-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all font-mono"
                  placeholder="Enter your name..."
                />
              </div>
              <div className="relative group">
                <label htmlFor="email" className="block text-xs font-mono text-purple mb-2 ml-1">{'<Email />'}</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full bg-secondary/50 border border-white/10 rounded-lg px-4 py-3 text-text focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple transition-all font-mono"
                  placeholder="name@domain.com"
                />
              </div>
              
              <div className="relative group">
                 <label htmlFor="message" className="block text-xs font-mono text-pink-500 mb-2 ml-1">{'<Message />'}</label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows="4"
                  className="w-full bg-secondary/50 border border-white/10 rounded-lg px-4 py-3 text-text focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all font-mono"
                  placeholder="System.out.print('Hello World')..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-accent to-purple text-white font-bold py-4 px-6 rounded-lg hover:opacity-90 transition-opacity duration-300 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                   <span className="mr-2">TRANSMITTING...</span>
                ) : (
                    <>
                        <span className="mr-2">TRANSMIT MESSAGE</span>
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                )}
              </button>

              {submitStatus === 'success' && (
                  <div className="flex items-center text-green-400 font-mono text-sm bg-green-400/10 p-3 rounded-lg border border-green-400/20">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span>Message transmitted successfully!</span>
                  </div>
              )}
              
              {submitStatus === 'error' && (
                  <div className="flex items-center text-red-400 font-mono text-sm bg-red-400/10 p-3 rounded-lg border border-red-400/20">
                      <AlertCircle className="w-4 h-4 mr-2" />
                      <span>Transmission failed. Please try again.</span>
                  </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

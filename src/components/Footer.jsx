import { Heart } from 'lucide-react';

const Footer = () => {
    return (
      <footer className="bg-primary pt-10 pb-6 border-t border-white/5 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"></div>
        
        <div className="container-custom text-center">
          <p className="text-text-muted text-sm flex items-center justify-center gap-1">
            Developed with <Heart className="w-4 h-4 text-purple animate-pulse fill-purple" /> by <span className="text-white font-bold">Amar Sharma</span>
          </p>
          <p className="text-xs text-text-muted mt-2 opacity-60">
            &copy; {new Date().getFullYear()} All systems operational.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;


import { Heart, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900/60 backdrop-blur-sm border-t border-cyan-500/20 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Sanket Ramesh Zore
            </h3>
            <p className="text-slate-400 mb-4">
              Software Developer passionate about creating innovative solutions and building scalable backend applications.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/SanketZore" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/sanketzore135" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:sanketzore348@gmail.com" className="text-slate-400 hover:text-emerald-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-cyan-300 mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-slate-400 hover:text-white transition-colors">Home</Link>
              <Link to="/about" className="block text-slate-400 hover:text-white transition-colors">About</Link>
              <Link to="/projects" className="block text-slate-400 hover:text-white transition-colors">Projects</Link>
              <Link to="/experience" className="block text-slate-400 hover:text-white transition-colors">Experience</Link>
              <Link to="/contact" className="block text-slate-400 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-cyan-300 mb-4">Get In Touch</h4>
            <div className="space-y-2 text-slate-400">
              <p>Mumbai - 400030, Maharashtra</p>
              <a href="mailto:sanketzore348@gmail.com" className="hover:text-cyan-400 transition-colors">sanketzore348@gmail.com</a>
              <a href="tel:+919769957469" className="hover:text-cyan-400 transition-colors">+91 9769957469</a>
            </div>
          </div>
        </div>

        <div className="border-t border-cyan-500/20 mt-8 pt-8 text-center">
          <p className="text-slate-400 flex items-center justify-center">
            Made with <Heart className="mx-2 text-red-400" size={16} /> by Sanket Ramesh Zore
          </p>
          <p className="text-slate-500 text-sm mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

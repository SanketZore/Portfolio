import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/70 py-12 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(249,115,22,0.12),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent)]" />
      <div className="container mx-auto px-6">
        <div className="relative flex flex-wrap items-start justify-between gap-8">
          <div className="min-w-[280px] flex-1">
            <Link to="/" className="mb-5 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-orange-500 font-black text-black shadow-[0_0_28px_rgba(249,115,22,0.28)]">
                SZ
              </span>
              <span>
                <span className="block text-sm font-bold uppercase tracking-[0.2em] text-white">Sanket Zore</span>
                <span className="block text-xs text-zinc-400">Software Developer</span>
              </span>
            </Link>
            <p className="max-w-md leading-7 text-zinc-400">
              Building Agentic AI workflows, full-stack products, backend systems, and cloud-ready software with a focus on practical automation and clean engineering.
            </p>
            <div className="mt-6 flex space-x-3">
              <a href="https://github.com/SanketZore" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-zinc-400 transition-colors hover:border-orange-400 hover:text-orange-400">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/sanketzore135" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-zinc-400 transition-colors hover:border-orange-400 hover:text-orange-400">
                <Linkedin size={20} />
              </a>
              <a href="mailto:sanketzore348@gmail.com" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-zinc-400 transition-colors hover:border-orange-400 hover:text-orange-400">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="min-w-[320px] flex-1">
            <h4 className="mb-5 text-sm font-bold uppercase tracking-[0.22em] text-orange-400">Explore</h4>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              <Link to="/" className="text-zinc-400 transition-colors hover:text-orange-400">Home</Link>
              <Link to="/about" className="text-zinc-400 transition-colors hover:text-orange-400">About</Link>
              <Link to="/projects" className="text-zinc-400 transition-colors hover:text-orange-400">Projects</Link>
              <Link to="/experience" className="text-zinc-400 transition-colors hover:text-orange-400">Experience</Link>
              <Link to="/contact" className="text-zinc-400 transition-colors hover:text-orange-400">Contact</Link>
            </div>
          </div>

          <div className="min-w-[360px] flex-[1.2]">
            <h4 className="mb-5 text-sm font-bold uppercase tracking-[0.22em] text-orange-400">Get In Touch</h4>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4 text-zinc-400">
              <p className="flex items-center gap-3">
                <MapPin className="text-orange-400" size={18} />
                Mumbai - 400030, Maharashtra
              </p>
              <a href="mailto:sanketzore348@gmail.com" className="flex items-center gap-3 transition-colors hover:text-orange-400">
                <Mail className="text-orange-400" size={18} />
                sanketzore348@gmail.com
              </a>
              <a href="tel:+919769957469" className="flex items-center gap-3 transition-colors hover:text-orange-400">
                <Phone className="text-orange-400" size={18} />
                +91 9769957469
              </a>
            </div>
          </div>
        </div>

        <div className="relative mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Sanket Ramesh Zore. All rights reserved.</p>
          <p className="uppercase tracking-[0.18em]">Agentic AI | Full Stack | Backend Systems</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

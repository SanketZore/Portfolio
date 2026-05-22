
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, User, Briefcase, Code, Mail, Menu, X, Github, Linkedin } from "lucide-react";
import LeetCodeIcon from "./icons/LeetCodeIcon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about", label: "About", icon: User },
    { path: "/projects", label: "Projects", icon: Code },
    { path: "/experience", label: "Experience", icon: Briefcase },
    { path: "/contact", label: "Contact", icon: Mail },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/55 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.2)]">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-orange-500 font-black text-black shadow-[0_0_28px_rgba(249,115,22,0.28)]">
              SZ
            </span>
            <span>
              <span className="block text-sm font-bold uppercase tracking-[0.18em] text-white">Sanket Zore</span>
              <span className="block text-xs text-zinc-400">Software Developer</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative flex items-center space-x-2 px-1 py-2 text-sm font-medium transition-all duration-300 after:absolute after:-bottom-4 after:left-1/2 after:h-0.5 after:-translate-x-1/2 after:bg-orange-500 after:transition-all ${
                    isActive(item.path) ? "text-white after:w-8" : "text-zinc-300 after:w-0 hover:text-white hover:after:w-5"
                  }`}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href="https://github.com/SanketZore" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-zinc-300 transition-colors hover:border-orange-400 hover:text-orange-400">
              <Github size={16} />
            </a>
            <a href="https://www.linkedin.com/in/sanketzore135" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-zinc-300 transition-colors hover:border-orange-400 hover:text-orange-400">
              <Linkedin size={16} />
            </a>
            <a href="https://leetcode.com/u/SanketZore/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode profile" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-zinc-300 transition-colors hover:border-orange-400 hover:text-orange-400">
              <LeetCodeIcon className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-orange-500/20 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10">
            <div className="flex flex-col space-y-2 mt-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActive(item.path) ? "bg-orange-500/20 text-orange-300" : "text-slate-300 hover:bg-orange-500/10 hover:text-white"
                    }`}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

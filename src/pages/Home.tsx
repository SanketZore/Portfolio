import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, Code, Database, Server } from "lucide-react";

const Home = () => {
  return (
    <div className="relative min-h-screen pt-20 overflow-hidden">

      {/* Hero Section */}
      <section className="relative py-20 z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text-animated animate-loading-text">
                Sanket Ramesh Zore
              </h1>
              <p className="text-xl md:text-2xl text-cyan-300 mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
                Java Developer & Backend Specialist
              </p>
              <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.4s'}}>
                Passionate about building scalable backend applications with Java, Spring Boot, and modern web technologies. 
                Currently pursuing Information Technology at Vasantdada Patil Pratisthans College Of Engineering (VPPCOE) Mumbai.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-in" style={{animationDelay: '0.6s'}}>
              <Button asChild className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 hover-glow transition-all duration-300">
                <a href="/contact">
                  <Mail className="mr-2" size={16} />
                  Get In Touch
                </a>
              </Button>
              <Button variant="outline" asChild className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 hover-glow transition-all duration-300">
                <a href="/projects">
                  <Code className="mr-2" size={16} />
                  View Projects
                </a>
              </Button>
              <Button variant="outline" asChild className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 hover-glow transition-all duration-300">
                <a href="https://drive.google.com/file/d/1Dm2WiZ0KJ5Z7VbZj0KufKmQIRgk_M7ax/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2" size={16} />
                  Resume
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-16 animate-fade-in" style={{animationDelay: '0.8s'}}>
              <a href="https://github.com/SanketZore" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-all duration-300 hover-bounce">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/sanketzore135" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-all duration-300 hover-bounce">
                <Linkedin size={24} />
              </a>
              <a href="mailto:sanketzore348@gmail.com" className="text-slate-400 hover:text-emerald-400 transition-all duration-300 hover-bounce">
                <Mail size={24} />
              </a>
            </div>

            {/* Stats with Enhanced Animations */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in" style={{animationDelay: '1s'}}>
              <div className="bg-slate-800/40 backdrop-blur-sm p-6 rounded-xl hover-scale-glow transition-all duration-300 border border-cyan-500/20">
                <Code className="mx-auto mb-4 text-cyan-400 animate-pulse-glow" size={32} />
                <h3 className="text-2xl font-bold text-white mb-2 counter-animation">3+</h3>
                <p className="text-slate-300">Major Projects</p>
              </div>
              <div className="bg-slate-800/40 backdrop-blur-sm p-6 rounded-xl hover-scale-glow transition-all duration-300 border border-emerald-500/20">
                <Database className="mx-auto mb-4 text-emerald-400 animate-pulse-glow" size={32} />
                <h3 className="text-2xl font-bold text-white mb-2 counter-animation">8.51</h3>
                <p className="text-slate-300">CGPA</p>
              </div>
              <div className="bg-slate-800/40 backdrop-blur-sm p-6 rounded-xl hover-scale-glow transition-all duration-300 border border-violet-500/20">
                <Server className="mx-auto mb-4 text-violet-400 animate-pulse-glow" size={32} />
                <h3 className="text-2xl font-bold text-white mb-2 counter-animation">1+</h3>
                <p className="text-slate-300">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-cyan-900/20 to-violet-900/30 pointer-events-none"></div>
    </div>
  );
};

export default Home;

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, Code, Database, Server, BrainCircuit, Workflow, Cloud } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative z-10 min-h-screen pt-20 overflow-hidden">

      {/* Hero Section */}
      <section className="relative py-16 md:py-20 z-10">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
            <div className="animate-fade-in text-center lg:text-left">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 depth-chip">
                <BrainCircuit size={16} />
                Agentic AI | RAG | Autonomous Workflows
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text-animated animate-loading-text">
                Sanket Ramesh Zore
              </h1>
              <p className="text-xl md:text-2xl text-cyan-300 mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
                Software Developer | Full Stack Developer | AI & Backend Engineer
              </p>
              <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto lg:mx-0 animate-fade-in leading-relaxed" style={{animationDelay: '0.4s'}}>
                I engineer Agentic AI systems that can reason, retrieve knowledge, automate decisions, and turn complex workflows into intelligent product experiences.
                My expertise spans RAG chatbots, LLM integrations, autonomous workflows, Python backends, React interfaces, cloud deployments, and scalable full-stack platforms.
              </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10 animate-fade-in" style={{animationDelay: '0.6s'}}>
              <Button asChild className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 hover-glow transition-all duration-300">
                <Link to="/contact">
                  <Mail className="mr-2" size={16} />
                  Get In Touch
                </Link>
              </Button>
              <Button variant="outline" asChild className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 hover-glow transition-all duration-300">
                <Link to="/projects">
                  <Code className="mr-2" size={16} />
                  View Projects
                </Link>
              </Button>
              <Button variant="outline" asChild className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 hover-glow transition-all duration-300">
                <a href="https://drive.google.com/file/d/1Dm2WiZ0KJ5Z7VbZj0KufKmQIRgk_M7ax/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2" size={16} />
                  Resume
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6 mb-12 animate-fade-in" style={{animationDelay: '0.8s'}}>
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
            </div>

            <div className="glass-3d terminal-panel rounded-2xl p-5 md:p-7 tilt-card animate-fade-in" style={{animationDelay: '0.5s'}}>
              <div className="mb-6 flex items-center justify-between border-b border-cyan-400/20 pb-4">
                <div>
                  <p className="text-sm text-cyan-300">Agentic workflow engine</p>
                  <h2 className="text-2xl font-semibold text-white">AI Product Stack</h2>
                </div>
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.9)]" />
                  <span className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
                  <span className="h-3 w-3 rounded-full bg-violet-400 shadow-[0_0_14px_rgba(167,139,250,0.9)]" />
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { icon: BrainCircuit, title: "Reasoning Agents", text: "LLM orchestration, planning loops, tool use, and structured outputs." },
                  { icon: Workflow, title: "RAG Workflows", text: "Knowledge retrieval, embeddings, chunking, context control, and evaluation." },
                  { icon: Server, title: "Backend Systems", text: "Python, Node.js, Flask, Django, REST APIs, PostgreSQL, Redis, and secure services." },
                  { icon: Cloud, title: "Cloud Delivery", text: "AWS, Docker, Git workflows, scalable deployments, and latency awareness." },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="group rounded-xl border border-slate-700/70 bg-slate-950/40 p-4 transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/10">
                      <div className="flex gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
                          <Icon size={22} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">{item.title}</h3>
                          <p className="mt-1 text-sm leading-relaxed text-slate-300">{item.text}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Stats with Enhanced Animations */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in" style={{animationDelay: '1s'}}>
              <div className="glass-3d p-6 rounded-xl hover-scale-glow transition-all duration-300 border border-cyan-500/20">
                <Code className="mx-auto mb-4 text-cyan-400 animate-pulse-glow" size={32} />
                <h3 className="text-2xl font-bold text-white mb-2 counter-animation">7+</h3>
                <p className="text-slate-300">Major Projects</p>
              </div>
              <div className="glass-3d p-6 rounded-xl hover-scale-glow transition-all duration-300 border border-emerald-500/20">
                <Database className="mx-auto mb-4 text-emerald-400 animate-pulse-glow" size={32} />
                <h3 className="text-2xl font-bold text-white mb-2 counter-animation">8.51</h3>
                <p className="text-slate-300">CGPA</p>
              </div>
              <div className="glass-3d p-6 rounded-xl hover-scale-glow transition-all duration-300 border border-violet-500/20">
                <Server className="mx-auto mb-4 text-violet-400 animate-pulse-glow" size={32} />
                <h3 className="text-2xl font-bold text-white mb-2 counter-animation">1.5+</h3>
                <p className="text-slate-300">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/25 via-cyan-900/10 to-violet-900/15 pointer-events-none"></div>
    </div>
  );
};

export default Home;

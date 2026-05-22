import { Button } from "@/components/ui/button";
import { BrainCircuit, Code, Database, Download, ExternalLink, Github, Linkedin, Mail, Play, Server, Workflow } from "lucide-react";
import { Link } from "react-router-dom";

const featuredProjects = [
  {
    title: "AI Financial Analyst Agent",
    type: "Agentic AI System",
    image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=700&h=460&fit=crop",
    meta: "LangGraph / LLMs",
  },
  {
    title: "Job Portal Web Application",
    type: "Full Stack Platform",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=700&h=460&fit=crop",
    meta: "Spring Boot / React",
  },
  {
    title: "Log Analyzer",
    type: "Developer Tool",
    image: "https://media.licdn.com/dms/image/v2/D4D12AQF0mXlG1TI2Rw/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1739181516071?e=1758153600&v=beta&t=ZqkWGaIIjPzB9MkbZ42YtJ577SZf43PJ5FAZTz7L3CQ",
    meta: "MERN / ELK",
  },
  {
    title: "Advocate Billing System",
    type: "Business Workflow",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&h=460&fit=crop",
    meta: "Node.js / MongoDB",
  },
];

const skills = [
  { icon: BrainCircuit, label: "Agentic AI" },
  { icon: Workflow, label: "RAG Workflows" },
  { icon: Server, label: "Python APIs" },
  { icon: Code, label: "React / Node" },
  { icon: Database, label: "PostgreSQL" },
];

const Home = () => {
  return (
    <div className="relative z-10 min-h-screen overflow-hidden pt-20">
      <section className="relative min-h-[calc(100vh-5rem)] border-b border-white/10">
        <div className="absolute inset-y-0 right-0 hidden w-[58%] lg:block">
          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=900&fit=crop"
            alt="AI powered software engineering workspace"
            className="h-full w-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#050607_0%,rgba(5,6,7,0.72)_24%,rgba(5,6,7,0.12)_64%),linear-gradient(0deg,#050607_0%,transparent_32%,rgba(5,6,7,0.25)_100%)]" />
        </div>

        <div className="container relative mx-auto px-6 py-16 md:py-24">
          <div className="max-w-3xl animate-fade-in">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-orange-400">
              Hello, I'm
            </p>
            <h1 className="mb-6 text-5xl font-black uppercase leading-[0.95] tracking-wide text-white md:text-7xl lg:text-8xl">
              Sanket Zore
            </h1>
            <p className="mb-7 text-lg uppercase tracking-[0.14em] text-zinc-300 md:text-xl md:tracking-[0.34em]">
              Software Developer | Full Stack Developer | AI & Backend Engineer
            </p>
            <p className="mb-9 max-w-2xl text-lg leading-8 text-zinc-300">
              I design Agentic AI systems that reason, retrieve knowledge, automate decisions, and convert complex workflows into intelligent product experiences. My work blends RAG chatbots, LLM integrations, Python and Node.js backends, React interfaces, AWS, Docker, and scalable full-stack architecture.
            </p>

            <div className="mb-12 flex flex-wrap gap-4">
              <Button asChild className="h-12 rounded bg-orange-500 px-7 font-bold uppercase tracking-wide text-black hover:bg-orange-400">
                <Link to="/projects">
                  View Projects
                  <Play className="ml-3" size={16} />
                </Link>
              </Button>
              <Button variant="outline" asChild className="h-12 rounded border-white/30 bg-black/20 px-7 font-bold uppercase tracking-wide text-white hover:border-orange-400 hover:bg-orange-500 hover:text-black">
                <Link to="/contact">
                  Contact Me
                  <Mail className="ml-3" size={16} />
                </Link>
              </Button>
              <Button variant="outline" asChild className="h-12 rounded border-white/30 bg-black/20 px-7 font-bold uppercase tracking-wide text-white hover:border-orange-400 hover:bg-orange-500 hover:text-black">
                <a href="/Sanket_Zore_Software_Developer_Resume.pdf" download="Sanket_Zore_Software_Developer_Resume.pdf">
                  Resume
                  <Download className="ml-3" size={16} />
                </a>
              </Button>
            </div>

            <div className="flex gap-4">
              <a href="https://github.com/SanketZore" target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-zinc-300 transition-colors hover:border-orange-400 hover:text-orange-400">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/sanketzore135" target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-zinc-300 transition-colors hover:border-orange-400 hover:text-orange-400">
                <Linkedin size={18} />
              </a>
              <a href="mailto:sanketzore348@gmail.com" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-zinc-300 transition-colors hover:border-orange-400 hover:text-orange-400">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="absolute bottom-16 right-8 hidden flex-col items-center gap-4 text-xs font-semibold uppercase tracking-widest text-white lg:flex">
            <span className="h-32 w-px bg-gradient-to-b from-transparent via-white/60 to-transparent" />
            <span>Scroll</span>
            <span className="text-2xl leading-none text-orange-400">↓</span>
          </div>
        </div>
      </section>

      <section className="relative border-b border-white/10 bg-black/25 py-8 md:py-10">
        <div className="container mx-auto px-6">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-sm font-bold uppercase tracking-[0.22em] text-orange-400">Featured Projects</h2>
            <Link to="/projects" className="hidden items-center text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:text-orange-400 md:flex">
              View All Projects
              <ExternalLink className="ml-2" size={15} />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featuredProjects.map((project) => (
              <Link key={project.title} to="/projects" className="group cinematic-card overflow-hidden rounded-md border border-white/10 bg-zinc-950/70">
                <div className="relative h-44 overflow-hidden">
                  <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-semibold text-white">{project.title}</h3>
                    <div className="mt-1 flex items-center justify-between text-sm text-zinc-300">
                      <span>{project.type}</span>
                      <span>{project.meta}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-12">
        <div className="container mx-auto grid gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="cinematic-card rounded-md border border-white/10 bg-black/35 p-7">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-orange-400">About Me</p>
            <p className="leading-7 text-zinc-300">
              I am a Full Stack Developer focused on AI-driven products, backend engineering, and real-world workflow automation. I enjoy turning messy business problems into clean systems with strong APIs, useful interfaces, and intelligent automation.
            </p>
            <Button variant="outline" asChild className="mt-6 rounded border-white/30 bg-transparent font-bold uppercase tracking-wide text-white hover:border-orange-400 hover:bg-orange-500 hover:text-black">
              <a href="/Sanket_Zore_Software_Developer_Resume.pdf" download="Sanket_Zore_Software_Developer_Resume.pdf">
                Download Resume
                <Download className="ml-3" size={16} />
              </a>
            </Button>
          </div>

          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.22em] text-orange-400">Skills</p>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div key={skill.label} className="cinematic-card flex min-h-28 flex-col items-center justify-center rounded-md border border-white/10 bg-black/35 p-4 text-center text-zinc-300">
                    <Icon className="mb-3 text-orange-400" size={30} />
                    <span className="text-sm">{skill.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Prediction and Analysis of Suicide Rates",
      description: "Python-based project using advanced statistical techniques and machine learning algorithms to predict and analyze suicide rates. Improved prediction accuracy by 8% through optimized algorithms.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn", "Machine Learning"],
      githubUrl: "https://github.com/SanketZore",
      liveUrl: "#",
      duration: "Jun 2023 - Aug 2023"
    },
    {
      id: 2,
      title: "Job Portal Web Application",
      description: "Built a comprehensive web app for Job Seekers and Employers with secure authentication, job posting, and application management features.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop",
      technologies: ["Spring Boot", "Spring Security", "React.js", "MySQL", "REST APIs", "JPA", "Hibernate"],
      githubUrl: "https://github.com/SanketZore/Job-Portal-CyberNX.git",
      liveUrl: "https://job-portal-cyber-nx.vercel.app/",
      duration: "July 2024 - Aug 2024"
    },
    {
      id: 3,
      title: "Advocate Billing System",
      description: "Solely developed a complete billing system for an advocate, enabling PDF bill generation and file storage with secure user authentication.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "RESTful API", "PDF Generation"],
      githubUrl: "https://github.com/SanketZore/SatishZoreBillingSystem.git",
      liveUrl: "https://satish-zore-billing-system.vercel.app",
      duration: "TNS India Foundation Internship"
    },
    {
      id: 4,
      title: "Guruji Pooja Seva Portal",
      description: "A comprehensive spiritual services platform connecting devotees with religious ceremonies and puja services. Features booking system, service management, and secure payment integration.",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&h=400&fit=crop",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Payment Gateway", "Authentication"],
      githubUrl: "https://github.com/SanketZore",
      liveUrl: "https://guruji-pooja-seva-portal.vercel.app/",
      duration: "Recent Project"
    },
    {
      id: 5,
      title: "Shopping Mall Management System",
      description: "Team project implementing features like inventory management, add-to-cart functionality, and secure transactions using Spring Boot.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      technologies: ["Spring Boot", "JPA", "Hibernate", "MySQL", "H2 Database", "Thymeleaf", "Postman"],
      githubUrl: "https://github.com/SanketZore",
      liveUrl: "#",
      duration: "Team Project"
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of projects showcasing my skills in Java, Spring Boot, MERN stack, and machine learning
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-slate-800/30 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-purple-500/80 text-white px-3 py-1 rounded-full text-xs">
                  {project.duration}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-300">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-md text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white flex-1"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.liveUrl !== "#" && (
                    <Button 
                      size="sm" 
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 flex-1"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

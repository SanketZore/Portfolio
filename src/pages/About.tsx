
import { Code, Palette, Zap, Heart } from "lucide-react";

const About = () => {
  const skills = [
    { category: "Languages & Frameworks", items: ["Python", "FastAPI", "Flask", "Django", "React.js", "Node.js", "Java", "Spring Boot", "TypeScript"] },
    { category: "AI & Machine Learning", items: ["LLMs", "RAG", "LangGraph", "Prompt Engineering", "Vector Databases", "Embeddings", "AI Agents", "Hugging Face APIs"] },
    { category: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "H2 Database"] },
    { category: "Tools & Technologies", items: ["AWS", "Docker", "Git & GitHub", "CI/CD", "Postman", "DBeaver", "Figma", "Pytest"] },
  ];

  return (
    <div className="relative z-10 pt-20 min-h-screen">
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Detail-oriented Full Stack Developer building scalable web platforms, AI-driven workflows, and backend systems for real-world products
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-purple-300">My Journey</h2>
            <p className="text-gray-300 mb-4">
              I completed my degree in Information Technology at Vasantdada Patil College of Engineering, Mumbai, 
              with a CGPA of 8.514. My journey began with a Diploma in Mechanical Engineering from VJTI, Mumbai, 
              where I achieved 87.33%.
            </p>
            <p className="text-gray-300 mb-4">
              I'm passionate about creating scalable, business-oriented solutions using Python, React, Node.js, Flask, Django, 
              Spring Boot, and modern AI tooling. My experience spans MERN applications, Spring Boot systems, RAG chatbots, 
              agentic workflows, and cloud-ready deployments.
            </p>
            <p className="text-gray-300">
              At EduvanceAI, I work on AI-based simulation and learning platforms, focusing on LLM integrations, autonomous workflows, 
              AWS, Docker, and latency-conscious implementation. I enjoy writing clean, maintainable code and turning practical ideas 
              into reliable products.
            </p>
          </div>
          <div className="relative">
            <div className="glass-3d tilt-card w-full h-96 rounded-2xl flex items-center justify-center">
              <Code className="w-24 h-24 text-purple-300" />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-purple-300">What Drives Me</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 glass-3d tilt-card rounded-xl">
              <Code className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
              <p className="text-gray-400">Writing maintainable, scalable, and efficient code following best practices and design patterns.</p>
            </div>
            <div className="text-center p-6 glass-3d tilt-card rounded-xl">
              <Palette className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Problem Solving</h3>
              <p className="text-gray-400">Analyzing complex problems and developing innovative solutions through systematic approaches.</p>
            </div>
            <div className="text-center p-6 glass-3d tilt-card rounded-xl">
              <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Adaptability</h3>
              <p className="text-gray-400">Quick learning and adapting to new technologies, frameworks, and methodologies.</p>
            </div>
            <div className="text-center p-6 glass-3d tilt-card rounded-xl">
              <Heart className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Team Spirit</h3>
              <p className="text-gray-400">Effective communication and collaboration in team environments using Agile methodologies.</p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h2 className="text-3xl font-bold mb-12 text-center text-purple-300">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="glass-3d tilt-card p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-purple-300">{skillGroup.category}</h3>
                <div className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <div key={skill} className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></div>
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

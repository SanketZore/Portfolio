
import { Code, Palette, Zap, Heart } from "lucide-react";

const About = () => {
  const skills = [
    { category: "Backend", items: ["Java", "Spring Boot", "Spring Framework", "Hibernate", "JPA", "JDBC"] },
    { category: "Frontend", items: ["React.js", "JavaScript", "HTML5", "CSS", "Thymeleaf"] },
    { category: "Databases", items: ["MySQL", "MongoDB", "Oracle SQL", "H2 Database"] },
    { category: "Tools & Technologies", items: ["Git & GitHub", "Docker", "AWS", "Postman", "VS Code", "JUnit"] },
  ];

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Detail-oriented Software Developer with hands-on experience in building backend applications and solving real-world problems
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-purple-300">My Journey</h2>
            <p className="text-gray-300 mb-4">
              Recently Completed my degree in Information Technology at Vasantdada Patil College of Engineering, Mumbai, 
              with a CGPA of 8.514. My journey began with a Diploma in Mechanical Engineering from VJTI, Mumbai, 
              where I achieved 87.33%.
            </p>
            <p className="text-gray-300 mb-4">
              I'm passionate about creating scalable, business-oriented solutions using Java, Spring Boot, and modern web technologies. 
              My experience spans from MERN stack applications to complex Spring Boot systems with secure transactions and 
              inventory management.
            </p>
            <p className="text-gray-300">
              Known for quick learning, effective communication, and delivering high-quality code. I've won hackathons, 
              completed tech training programs, and continuously strive to improve my skills through practical projects.
            </p>
          </div>
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center">
              <div className="text-6xl">👨‍💻</div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-purple-300">What Drives Me</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-slate-800/30 rounded-xl">
              <Code className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
              <p className="text-gray-400">Writing maintainable, scalable, and efficient code following best practices and design patterns.</p>
            </div>
            <div className="text-center p-6 bg-slate-800/30 rounded-xl">
              <Palette className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Problem Solving</h3>
              <p className="text-gray-400">Analyzing complex problems and developing innovative solutions through systematic approaches.</p>
            </div>
            <div className="text-center p-6 bg-slate-800/30 rounded-xl">
              <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Adaptability</h3>
              <p className="text-gray-400">Quick learning and adapting to new technologies, frameworks, and methodologies.</p>
            </div>
            <div className="text-center p-6 bg-slate-800/30 rounded-xl">
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
              <div key={skillGroup.category} className="bg-slate-800/30 p-6 rounded-xl">
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


import { MapPin, Calendar, Briefcase, GraduationCap, Award } from "lucide-react";

const Experience = () => {
  const workExperience = [
    {
      company: "TNS India Foundation",
      position: "Java Developer Intern",
      duration: "July 2023 - Jun 2024",
      location: "Mumbai, Maharashtra",
      description: "During my internship, I solely developed a MERN stack billing system for an advocate, enabling PDF bill generation and file storage. Also worked in a team on a Shopping Mall Management System using Spring Boot.",
      achievements: [
        "Developed complete MERN stack billing system with PDF generation",
        "Implemented inventory management and secure transactions",
        "Worked with Spring Boot, JPA, Hibernate, and MySQL",
        "Gained experience with RESTful APIs and database management"
      ]
    }
  ];

  const education = [
    {
      institution: "Vasantdada Patil College of Engineering",
      degree: "Bachelor of Information Technology",
      duration: "2022 - 2025",
      location: "Mumbai, Maharashtra",
      description: "Currently pursuing degree in Information Technology with focus on software development and modern web technologies.",
      achievements: [
        "CGPA: 8.514",
        "1st in Hackathon (OSCILLATION)",
        "Tech-Hunt Winner",
        "2nd Rank in Fitness Competition"
      ]
    },
    {
      institution: "Veermata Jijabai Technological Institute (VJTI)",
      degree: "Diploma in Mechanical Engineering",
      duration: "2019 - 2022",
      location: "Mumbai, Maharashtra",
      description: "Completed diploma with excellent academic performance, building strong analytical and problem-solving foundation.",
      achievements: [
        "Percentage: 87.33%",
        "Strong foundation in engineering principles",
        "Developed analytical thinking skills"
      ]
    },
    {
      institution: "Little Star English High School",
      degree: "SSC (Secondary School Certificate)",
      duration: "2018 - 2019",
      location: "Mumbai, Maharashtra",
      description: "Completed secondary education with good academic performance.",
      achievements: [
        "Percentage: 73.40%",
        "Consistent academic performance"
      ]
    }
  ];

  const certifications = [
    { name: "TNS India Foundation (Campus to Technical Careers Training Program)", issuer: "TNS India Foundation", year: "2024" },
    { name: "The Complete ReactJs Course", issuer: "Udemy", year: "2024" },
    { name: "Data Analytics", issuer: "IBM", year: "2023" },
    { name: "SolidWorks (3D Modeling)", issuer: "Udemy", year: "2023" },
    { name: "AutoCAD (Drafting)", issuer: "CADD CENTRE", year: "2022" },
    { name: "MS-CIT", issuer: "Shree Institute", year: "2022" },
  ];

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey and educational background in software development and engineering
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-purple-300 flex items-center">
            <Briefcase className="mr-3" />
            Work Experience
          </h2>
          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <div key={index} className="bg-slate-800/30 rounded-xl p-6 hover:bg-slate-800/40 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-purple-300 mb-1">{job.position}</h3>
                    <h4 className="text-lg text-gray-300 mb-2">{job.company}</h4>
                  </div>
                  <div className="text-sm text-gray-400">
                    <div className="flex items-center mb-1">
                      <Calendar className="mr-2" size={16} />
                      {job.duration}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-2" size={16} />
                      {job.location}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{job.description}</p>
                <div>
                  <h5 className="text-sm font-semibold text-purple-300 mb-2">Key Achievements:</h5>
                  <ul className="space-y-1">
                    {job.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-start">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-purple-300 flex items-center">
            <GraduationCap className="mr-3" />
            Education
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-slate-800/30 rounded-xl p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-purple-300 mb-1">{edu.degree}</h3>
                    <h4 className="text-lg text-gray-300 mb-2">{edu.institution}</h4>
                  </div>
                  <div className="text-sm text-gray-400">
                    <div className="flex items-center mb-1">
                      <Calendar className="mr-2" size={16} />
                      {edu.duration}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-2" size={16} />
                      {edu.location}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{edu.description}</p>
                <div>
                  <h5 className="text-sm font-semibold text-purple-300 mb-2">Highlights:</h5>
                  <ul className="space-y-1">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-start">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-purple-300 flex items-center">
            <Award className="mr-3" />
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-slate-800/30 rounded-xl p-6 text-center hover:bg-slate-800/40 transition-all duration-300">
                <h3 className="text-lg font-semibold text-purple-300 mb-2">{cert.name}</h3>
                <p className="text-gray-300 mb-1">{cert.issuer}</p>
                <p className="text-gray-400 text-sm">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

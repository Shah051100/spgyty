import images from "@assets/images.jpeg";
export default function ExperienceSection() {
  const experiences = [
    {
      company: "Finecure Pharmaceuticals Ltd.",
      position: "Brand Representative",
      period: "May 2024 – Present",
      icon: "fas fa-pills",
      gradient: "from-neon-green to-neon-cyan",
      color: "neon-green",
      responsibilities: [
        "Representing innovative food and nutrition products in pharmaceutical sector",
        "Active participation in trade shows and academic events",
        "Building strategic partnerships with healthcare professionals",
      ],
    },
    {
      company: "Verka Dairy",
      position: "Trainee",
      period: "Jan – Feb 2023",
      icon: "fas fa-cookie-bite",
      gradient: "from-neon-cyan to-neon-orange",
      color: "neon-cyan",
      responsibilities: [
        "Quality control analysis of dairy products and processing parameters",
        "Hands-on experience in large-scale dairy processing operations",
        "Implementation of HACCP protocols and food safety standards",
      ],
    },
    {
      company: "Alpine Agro Fresh Pvt. Ltd.",
      position: "Intern",
      period: "May – Oct 2022",
      icon: "fas fa-seedling",
      gradient: "from-neon-orange to-neon-green",
      color: "neon-orange",
      responsibilities: [
        "Fresh produce quality control and packaging optimization",
        "Development of improved packaging solutions for extended shelf life",
        "Supply chain analysis and cold storage optimization",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      {/* Food processing facility background */}
      <div className="absolute inset-0 z-0">
        <img
          src={images}
          alt="Food processing and packaging facility"
          className="w-full h-full object-cover opacity-8"
        />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="font-orbitron text-4xl lg:text-5xl font-bold text-center mb-16 text-neon-green animate-glow">
          PROFESSIONAL EXPERIENCE
        </h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="glass-panel p-8 rounded-2xl hover:scale-105 transition-all duration-300 group">
              <div className="flex flex-col lg:flex-row items-start gap-6">
                <div className="lg:w-1/4">
                  <div className={`w-20 h-20 bg-gradient-to-br ${exp.gradient} rounded-lg flex items-center justify-center mb-4`}>
                    <i className={`${exp.icon} text-2xl text-black`}></i>
                  </div>
                  <span className="text-neon-orange font-mono text-sm">{exp.period}</span>
                </div>
                <div className="lg:w-3/4">
                  <h3 className={`font-orbitron text-xl font-bold text-${exp.color} mb-2`}>
                    {exp.company}
                  </h3>
                  <h4 className={`text-${exp.color === 'neon-green' ? 'neon-cyan' : 'neon-green'} font-medium mb-4`}>
                    {exp.position}
                  </h4>
                  <ul className="text-gray-300 space-y-2">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start">
                        <i className={`fas fa-chevron-right text-${exp.color} mr-2 mt-1`}></i>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

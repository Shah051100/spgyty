export default function SkillsSection() {
  const skills = [
    {
      name: "Food Technology",
      percentage: 95,
      description: "Advanced knowledge in food processing, preservation, and safety",
      color: "neon-green",
    },
    {
      name: "Nutrition Science",
      percentage: 90,
      description: "Comprehensive understanding of nutritional biochemistry",
      color: "neon-cyan",
    },
    {
      name: "Laboratory Skills",
      percentage: 93,
      description: "Spectrophotometry, chromatography, spray drying, PEF, ohmic heating",
      color: "neon-orange",
    },
    {
      name: "Research Methods",
      percentage: 87,
      description: "Statistical analysis, experimental design, data interpretation",
      color: "neon-green",
    },
    {
      name: "Programming",
      percentage: 80,
      description: "Python, C, SQL for data analysis and automation",
      color: "neon-cyan",
    },
    {
      name: "Software Tools",
      percentage: 85,
      description: "Microsoft Office, SPSS, MySQL for data management",
      color: "neon-orange",
    },
  ];

  const getClipPath = (percentage: number) => {
    const angle = (percentage / 100) * 360;
    if (angle <= 90) {
      return `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.tan((angle * Math.PI) / 180)}% 0%, 50% 50%)`;
    } else if (angle <= 180) {
      return `polygon(50% 50%, 50% 0%, 100% 0%, 100% ${50 + 50 * Math.tan(((angle - 90) * Math.PI) / 180)}%, 50% 50%)`;
    } else if (angle <= 270) {
      return `polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, ${100 - 50 * Math.tan(((angle - 180) * Math.PI) / 180)}% 100%, 50% 50%)`;
    } else {
      return `polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% ${100 - 50 * Math.tan(((angle - 270) * Math.PI) / 180)}%, 50% 50%)`;
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      {/* Food technology equipment background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
          alt="Food technology laboratory equipment"
          className="w-full h-full object-cover opacity-5"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="font-orbitron text-4xl lg:text-5xl font-bold text-center mb-16 text-neon-green animate-glow">
          TECHNICAL EXPERTISE
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="glass-panel p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300 group">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full border-4 border-gray-700"></div>
                <div
                  className={`absolute inset-0 rounded-full border-4 border-${skill.color}`}
                  style={{ clipPath: getClipPath(skill.percentage) }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className={`font-orbitron text-2xl font-bold text-${skill.color}`}>
                    {skill.percentage}%
                  </span>
                </div>
              </div>
              <h3 className={`font-orbitron text-lg font-bold text-${skill.color} mb-2`}>
                {skill.name}
              </h3>
              <p className="text-gray-300 text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

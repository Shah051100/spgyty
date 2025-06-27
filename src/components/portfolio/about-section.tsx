export default function AboutSection() {
  const educationTimeline = [
    {
      institution: "Islamic University of Science & Technology",
      degree: "B.Tech Food Technology (2020-2024)",
      achievement: "Top 10%, Merit Scholarship Recipient",
      color: "neon-green",
    },
    {
      institution: "Govt Boys' Model Higher Secondary Brakpora",
      degree: "Higher Secondary Education",
      achievement: "Science Stream",
      color: "neon-cyan",
    },
    {
      institution: "Saint Lukes Convent",
      degree: "Middle School Education",
      achievement: "Foundation Studies",
      color: "neon-orange",
    },
  ];

  const certifications = [
    { name: "Millet Ideation Hackathon (ICMANES)", color: "neon-green" },
    { name: "Speech-Language Specialist", color: "neon-cyan" },
    { name: "KIMO.AI Tech Competition (1st Prize)", color: "neon-orange" },
  ];

  return (
    <section id="about" className="py-20 relative">
      {/* Food technology laboratory background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
          alt="Food technology laboratory with advanced equipment"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="font-orbitron text-4xl lg:text-5xl font-bold text-center mb-16 text-neon-green animate-glow">DIGITAL DOSSIER</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Profile Info */}
          <div className="glass-panel p-8 rounded-2xl">
            <h3 className="font-orbitron text-2xl font-bold mb-6 text-neon-cyan">RESEARCHER PROFILE</h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg leading-relaxed">
                <span className="text-neon-orange font-medium">B.Tech Food Technology</span> graduate from
                Islamic University of Science & Technology, Kashmir (2020–2024).
                Top 10% of class with Merit Scholarship recognition.
              </p>
              <p className="text-lg leading-relaxed">
                Active member of the <span className="text-neon-green font-medium">American Society for Nutrition</span>,
                pioneering research in natural preservation methods for indigenous Kashmiri dry fruits.
              </p>
              
              {/* Certifications */}
              <div className="mt-8">
                <h4 className="font-orbitron text-xl font-bold mb-4 text-neon-cyan">CERTIFICATIONS</h4>
                <div className="flex flex-wrap gap-3">
                  {certifications.map((cert, index) => (
                    <span
                      key={index}
                      className={`glass-panel px-4 py-2 rounded-full text-sm border border-${cert.color} hover:bg-${cert.color} hover:text-black transition-all duration-300`}
                    >
                      {cert.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right - Education Timeline */}
          <div className="glass-panel p-8 rounded-2xl">
            <h3 className="font-orbitron text-2xl font-bold mb-6 text-neon-cyan">EDUCATION TIMELINE</h3>
            <div className="space-y-6">
              {educationTimeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className={`w-4 h-4 bg-${item.color} rounded-full mt-2 group-hover:animate-pulse`}></div>
                  <div>
                    <h4 className={`font-bold text-${item.color}`}>{item.institution}</h4>
                    <p className="text-neon-orange">{item.degree}</p>
                    <p className="text-gray-300 text-sm">{item.achievement}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

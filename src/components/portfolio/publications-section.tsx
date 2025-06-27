export default function PublicationsSection() {
  const events = [
    {
      title: "Bakery Workshop",
      description: "Collaborative workshop with industry leaders including Shalimar Bakery, Creambell, and Joseph Lawrence focusing on advanced baking technologies.",
      icon: "fas fa-bread-slice",
      color: "neon-orange",
      type: "Industry Collaboration",
    },
    {
      title: "International Millet Conference",
      description: "Active participation in ICMANES at NIFTEM, presenting innovative solutions for millet-based nutrition and food security.",
      icon: "fas fa-seedling",
      color: "neon-cyan",
      type: "Conference Presentation",
    },
  ];

  return (
    <section id="publications" className="py-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="font-orbitron text-4xl lg:text-5xl font-bold text-center mb-16 text-neon-green animate-glow">
          PUBLICATIONS & EVENTS
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Main Publication */}
          <div className="md:col-span-2">
            <div className="glass-panel p-8 rounded-2xl hover:scale-105 transition-all duration-300 group border-2 border-neon-green">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-orbitron text-xl font-bold text-neon-green mb-2">
                    Primary Research Publication
                  </h3>
                  <p className="text-neon-cyan font-medium">Trends in Food Science & Technology</p>
                </div>
                <a
                  href="https://doi.org/10.1016/j.tifs.2024.104517"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel px-4 py-2 rounded-lg text-neon-green border border-neon-green hover-neon-green transition-all duration-300"
                >
                  <i className="fas fa-external-link-alt mr-2"></i>DOI Link
                </a>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Comprehensive research findings on natural preservation methods for Kashmiri dry fruits,
                contributing to sustainable food technology solutions and regional agricultural development.
              </p>
            </div>
          </div>
          
          {/* Event Cards */}
          {events.map((event, index) => (
            <div key={index} className="glass-panel p-6 rounded-2xl hover:scale-105 transition-all duration-300 group">
              <div className="mb-4">
                <i className={`${event.icon} text-3xl text-${event.color} mb-4`}></i>
                <h3 className={`font-orbitron text-lg font-bold text-${event.color} mb-2`}>
                  {event.title}
                </h3>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                {event.description}
              </p>
              <span className={`inline-block glass-panel px-3 py-1 rounded-full text-xs text-${event.color} border border-${event.color}`}>
                {event.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import labEquipmentImage from "@assets/Screenshot_20221211-185059_Instagram_1751008566222.jpg";
import milletInnovationImage from "@assets/1695564090308_1751009265698.jfif";

import Screenshot_20221211_185125_Instagram from "@assets/Screenshot_20221211-185125_Instagram.jpg";

export default function ResearchSection() {
  const additionalProjects = [
    {
      title: "Fish & Fishery Waste Integration",
      description: "Novel approaches to incorporating fish and fishery waste into sustainable food formulations for enhanced nutritional profiles.",
      image: labEquipmentImage,
      alt: "Food technology laboratory equipment and chromatography systems",
      color: "neon-cyan",
    },
    {
      title: "Advanced Processing Techniques",
      description: "Research in novel spray drying and ohmic heating technologies for improved food processing and preservation methods.",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      alt: "Biotechnology research laboratory",
      color: "neon-orange",
    },
    {
      title: "ICMANES Millet Innovation",
      description: "Conference project focused on millet-based food innovations and sustainable nutrition solutions for future food security.",
      image: milletInnovationImage,
      alt: "Millet innovation research and conference presentation",
      color: "neon-green",
    },
  ];

  return (
    <section id="research" className="py-20 relative">
      {/* Food preservation research background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
          alt="Food preservation research laboratory"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="font-orbitron text-4xl lg:text-5xl font-bold text-center mb-16 text-neon-green animate-glow">RESEARCH </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured Project */}
          <div className="md:col-span-2 lg:col-span-3">
            <div className="glass-panel p-8 rounded-2xl hover:scale-105 transition-all duration-300 group border-2 border-neon-green">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Kashmiri dry fruits image */}
                <div className="lg:w-1/2">
                  <img
                    src={Screenshot_20221211_185125_Instagram}
                    alt="Kashmiri dry fruits - walnuts and almonds"
                    className="rounded-xl shadow-lg w-full h-auto group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="lg:w-1/2">
                  <h3 className="font-orbitron text-2xl font-bold mb-4 text-neon-green">
                    FEATURED RESEARCH
                  </h3>
                  <h4 className="text-xl font-bold mb-4 text-neon-cyan">
                    Shelf Life Extension of Kashmiri Dry Fruits Using Natural Preservatives
                  </h4>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Comprehensive research on utilizing ascorbic acid, honey, and other natural preservation methods
                    to extend the shelf life of premium Kashmiri walnuts, almonds, and apricots while maintaining
                    nutritional integrity and organoleptic properties.
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Projects */}
          {additionalProjects.map((project, index) => (
            <div key={index} className="glass-panel p-6 rounded-2xl hover:scale-105 transition-all duration-300 group">
              <img
                src={project.image}
                alt={project.alt}
                className="rounded-lg w-full h-48 object-cover mb-4 group-hover:opacity-80 transition-opacity duration-300"
              />
              <h4 className={`font-orbitron text-lg font-bold mb-3 text-${project.color}`}>
                {project.title}
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

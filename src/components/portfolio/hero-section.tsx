import profileImage from "@assets/1720116424084_1751007378476.jfif";
import heroBackgroundImage from "@assets/IMG-20211012-WA0000_1751009676600.jpg";

export default function HeroSection() {
  const particles = Array.from({ length: 9 }, (_, i) => ({
    id: i,
    left: (i + 1) * 10 + '%',
    animationDelay: i * 0.5 + 's',
  }));

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Particle Background */}
      <div className="particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: particle.left,
              animationDelay: particle.animationDelay,
              top: Math.random() * 100 + '%',
            }}
          />
        ))}
      </div>
      
      {/* Personal hero background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackgroundImage}
          alt="Peerzada Saadat professional background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="font-orbitron text-5xl lg:text-7xl font-black mb-6 animate-glow">
              PEERZADA
              <span className="block text-neon-cyan">SAADAT</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-4 text-neon-orange font-medium">
              Food Technologist & Researcher
            </p>
            
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="glass-panel px-8 py-4 rounded-lg text-neon-green border-2 border-neon-green hover-neon-green transition-all duration-300 transform hover:scale-105"
              >
                <i className="fas fa-link mr-2"></i>Connect
              </button>
              <a
                href="/saadat-cv.pdf"
                download
                className="glass-panel px-8 py-4 rounded-lg text-neon-cyan border-2 border-neon-cyan hover-neon-cyan transition-all duration-300 transform hover:scale-105 text-center"
              >
                <i className="fas fa-download mr-2"></i>Download CV
              </a>
            </div>
            
            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start space-x-6 mt-8">
              <a href="#" className="text-2xl text-gray-400 hover:text-neon-green transition-colors duration-300 transform hover:scale-110">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-2xl text-gray-400 hover:text-neon-cyan transition-colors duration-300 transform hover:scale-110">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="mailto:shahsaadat101@gmail.com" className="text-2xl text-gray-400 hover:text-neon-orange transition-colors duration-300 transform hover:scale-110">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
          
          {/* Right Content - Profile Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Profile Image */}
              <div className="w-80 h-80 rounded-full profile-image animate-pulse-neon overflow-hidden">
                <img
                  src={profileImage}
                  alt="Peerzada Saadat - Food Technologist"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating molecules around profile */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-neon-green rounded-full animate-float opacity-60"></div>
              <div className="absolute top-20 -left-6 w-6 h-6 bg-neon-cyan rounded-full animate-float opacity-60" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-4 right-12 w-10 h-10 bg-neon-orange rounded-full animate-float opacity-60" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

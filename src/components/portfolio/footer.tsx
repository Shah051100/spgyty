export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 relative border-t border-gray-800">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
          <p className="font-orbitron text-xl text-neon-green animate-glow">
            "Preserving nature's bounty through science"
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              © {currentYear} Peerzada Saadat. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-neon-green transition-colors duration-300">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors duration-300">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="mailto:shahsaadat101@gmail.com" className="text-gray-400 hover:text-neon-orange transition-colors duration-300">
              <i className="fas fa-envelope text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

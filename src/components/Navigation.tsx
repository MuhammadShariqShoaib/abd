import { Rocket, Menu, X } from 'lucide-react';

interface NavigationProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Navigation({ mobileMenuOpen, setMobileMenuOpen }: NavigationProps) {
  return (
    <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="absolute  blur-lg opacity-50" />
{/* <div className="relative w-20 h-16 rounded-lg flex items-center justify-center  overflow-hidden">
  <img
    src="/FalconZ logo.png" // ✅ your custom image
    alt="SSAZ Logo"
    className="w-full h-full object-cover"
  />
</div> */}


            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
               Abdur Rehman 
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">About</a>
            {/* <a href="#team" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">Team</a> */}
            <a href="#services" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">Services</a>
            <a href="#contact" className="group relative px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium overflow-hidden hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-cyan-400"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-500/20">
          <div className="px-4 py-6 space-y-4">
            <a href="#about" className="block text-gray-300 hover:text-cyan-400 transition-colors font-medium">About</a>
            {/* <a href="#team" className="block text-gray-300 hover:text-cyan-400 transition-colors font-medium">Team</a> */}
            <a href="#services" className="block text-gray-300 hover:text-cyan-400 transition-colors font-medium">Services</a>
            <a href="#contact" className="block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2.5 rounded-lg text-center font-medium">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

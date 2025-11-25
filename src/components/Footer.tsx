import { Rocket } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-cyan-500/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500 blur-lg opacity-50" />
            <div className="relative w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/50">
              <Rocket className="w-5 h-5 text-white" />
            </div>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
      Abdur Rehman 
          </span>
        </div>
        <p className="text-gray-400 text-sm">© 2025 All Rights Reserved.</p>
      </div>
    </footer>
  );
}

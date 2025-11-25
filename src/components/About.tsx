import { Target, Rocket, ArrowRight } from 'lucide-react';

interface AboutProps {
  setModalContent: (content: 'vision' | 'mission' | null) => void;
}

export default function About({ setModalContent }: AboutProps) {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            About About Abdur Rehman
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
Abdur Rehman is a dedicated and forward-thinking software developer who loves turning ideas into clean, functional, and high-impact digital experiences. With a strong passion for modern technologies, he focuses on building fast, scalable, and visually polished applications that help businesses grow in today's digital landscape.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <button
            onClick={() => setModalContent('vision')}
            className="group relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm p-10 rounded-2xl border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 text-left overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <Target className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">My Vision</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                 To grow as a developer who continuously learns, innovates, and builds digital experiences
              that are meaningful, efficient, and accessible for everyone.
            </p>
              <div className="flex items-center text-cyan-400 font-medium">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </button>

          <button
            onClick={() => setModalContent('mission')}
            className="group relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm p-10 rounded-2xl border border-blue-500/30 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 text-left overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <Rocket className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">My Mission</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                To create clean, scalable, and user-focused applications using modern technologies,
              ensuring every project delivers value, performance, and long-term reliability.
             </p>
              <div className="flex items-center text-blue-400 font-medium">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

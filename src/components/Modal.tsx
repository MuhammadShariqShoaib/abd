import { Target, Rocket, X } from 'lucide-react';

interface ModalProps {
  content: 'vision' | 'mission' | null;
  onClose: () => void;
}

export default function Modal({ content, onClose }: ModalProps) {
  if (!content) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-gradient-to-br from-slate-900 to-slate-800 p-10 rounded-2xl border border-cyan-500/50 max-w-2xl w-full shadow-2xl shadow-cyan-500/20"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-cyan-400 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {content === 'vision' ? (
          <>
            <Target className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-3xl font-bold text-white mb-4">My Vision</h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              To grow as a developer who continuously learns, innovates, and builds digital experiences
              that are meaningful, efficient, and accessible for everyone.
            </p>
          </>
        ) : (
          <>
            <Rocket className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-3xl font-bold text-white mb-4">My Mission</h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              To create clean, scalable, and user-focused applications using modern technologies,
              ensuring every project delivers value, performance, and long-term reliability.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

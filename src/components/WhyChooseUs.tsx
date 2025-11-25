import { Zap, Shield, Users, CheckCircle2, Clock } from 'lucide-react';

export default function WhyChooseUs() {
  const values = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Future-Ready Solutions",
      description: "Scalable & adaptive technology"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Industry Expertise",
      description: "Proven track record"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Transparent Collaboration",
      description: "Clear communication always"
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Quality Standards",
      description: "Unmatched excellence"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Timely Delivery",
      description: "Innovation on schedule"
    }
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Why Choose Me
          </h2>
          <p className="text-xl text-gray-300">
            At the frontier of technology innovation
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center text-cyan-400 mb-4 border border-cyan-500/30">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

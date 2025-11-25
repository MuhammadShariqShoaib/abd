"use client";
import { FolderOpen, Link2 } from "lucide-react";

interface Project {
  name: string;
  description: string;
  technologies: string[];
  image?: string;
  driveLink: string;
}

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="group relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-400/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20">
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    <div className="relative flex flex-col items-center text-center">
      {project.image ? (
        <img
          src={project.image}
          alt={project.name}
          className="w-52 h-40 rounded-lg object-cover border-2 border-cyan-500/40 mb-4 shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-400/50 transition-shadow duration-300"
        />
      ) : (
        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white mb-4 shadow-lg shadow-cyan-500/50">
          <FolderOpen className="w-8 h-8" />
        </div>
      )}
      <h3 className="text-lg font-bold text-white mb-1">{project.name}</h3>
      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {project.technologies.map((tech, idx) => (
          <span
            key={idx}
            className="text-xs px-3 py-1 bg-cyan-500/10 text-cyan-300 rounded-full border border-cyan-500/30"
          >
            {tech}
          </span>
        ))}
      </div>

      <a
        href={project.driveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold shadow-md hover:shadow-cyan-500/40 transition-all duration-300"
      >
        <Link2 className="w-4 h-4" />
        View 
      </a>
    </div>
  </div>
);

export default function Projects() {
  const projects: Project[] = [
    {
      name: "AIoT-Based Vehicles Maintenance ",
      description:
        "An AIoT-based Vehicle Maintenance System that combines AI, IoT, and predictive analytics to automate vehicle care, prevent breakdowns, and enhance service efficiency through Flutter, React.js, Node.js, and Flask integration.",
      technologies: ["MERN", "Flask", "Keras", "Tailwind"],
      image: "3.jpg",
      driveLink: "https://drive.google.com/drive/folders/1HEo-6CJhf2GCM2UnkQy3rsaRZ8B5Nh2E?usp=drive_link",
    },
    {
      name: "Smart Agriculture System",
      description:
        "An AI-powered Smart Agriculture System that uses CNN and Firebase to help farmers make data-driven crop and pest management decisions with over 90% prediction accuracy.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      image: "2.jpg",
      driveLink: "https://drive.google.com/drive/folders/1ickVSGXqOlABprXNZ0FPa9vEkoVlJ-V_?usp=drive_link",
    },
  {
  name: "AutoModel Insight",
  description: "A car identification system that detects make, model, and variant using AI. It also provides detailed car insights and enables users to view and modify 3D models for enhanced visualization.",
  technologies: ["MERN", "Flask", "TensorFlow"],
  image: " 1.jpg",
  driveLink: "    https://drive.google.com/drive/folders/14qo7BCameZUVC3p41vRYIHSqIt8iDlFV?usp=drive_link",
},

  ];

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-cyan-400 mb-4">
            <FolderOpen className="w-6 h-6" />
            <span className="font-semibold">Our Work</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of our innovative web and AI-based solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from "react";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiAngular,
  SiTypescript,
  SiMongodb,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";

import enterpriseImage from "../assets/enterprise.png";
import studentImage from "../assets/studentform.png";
import nolaImage from "../assets/nolanote.png";

const projects = [
  {
    number: "01",
    name: "Enterprise Management System",
    description:
      "A company management system with role-based access for administrators, HR, managers, and employees. Built to organize company operations and manage user permissions.",
    image: enterpriseImage,
    technologies: [
      { name: "React", Icon: SiReact },
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Express", Icon: SiExpress },
      { name: "PostgreSQL", Icon: SiPostgresql },
    ],
    github:
      "https://github.com/nangkyawt/enterprise-company-management-frontend",
  },
  {
    number: "02",
    name: "Student Management System",
    description:
      "An internship project for entering and managing student information. Developed the interface using Angular and TypeScript.",
    image: studentImage,
    technologies: [
      { name: "Angular", Icon: SiAngular },
      { name: "TypeScript", Icon: SiTypescript },
    ],
    github: "https://github.com/nangkyawt/student_entry_form",
  },
  {
    number: "03",
    name: "Nola Note",
    description:
      "A note-taking application for creating and organizing personal notes, with a simple interface designed for everyday use.",
    image: nolaImage,
    technologies: [
      { name: "React", Icon: SiReact },
      { name: "MongoDB", Icon: SiMongodb },
    ],
    github: "https://github.com/nangkyawt/nola_note_frontend",
  },
];

function Projects({ darkMode }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.08 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const previousProject = () => {
    setActiveIndex((current) =>
      current === 0 ? projects.length - 1 : current - 1
    );
  };

  const nextProject = () => {
    setActiveIndex((current) =>
      current === projects.length - 1 ? 0 : current + 1
    );
  };

  const project = projects[activeIndex];

  return (
    <section
      ref={sectionRef}
      id="projects"
      className={`px-6 py-20 transition-colors duration-300 sm:px-10 sm:py-24 lg:px-16 ${
        darkMode
          ? "bg-[#171615] text-[#F5F1EE]"
          : "bg-[#F7F4EE] text-[#2C2A29]"
      }`}
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div
          className={`transition-all duration-500 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-3 opacity-0"
          }`}
        >
          <div className="flex items-center gap-3">
            <span
              className={`h-px w-8 ${
                darkMode ? "bg-[#D66887]" : "bg-[#D97757]"
              }`}
            />

            <span
              className={`text-xs font-medium uppercase tracking-[0.2em] ${
                darkMode ? "text-[#D66887]" : "text-[#D97757]"
              }`}
            >
              Selected Work
            </span>
          </div>

          <div className="mt-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="font-serif text-4xl font-normal tracking-tight sm:text-5xl">
              Projects I've{" "}
              <span
                className={`italic ${
                  darkMode ? "text-[#E58BA0]" : "text-[#D66887]"
                }`}
              >
                built.
              </span>
            </h2>

            <p
              className={`max-w-xs text-sm leading-6 ${
                darkMode ? "text-[#B8B0AD]" : "text-[#756D67]"
              }`}
            >
              A selection of projects I've worked on and learned from.
            </p>
          </div>
        </div>

        {/* Featured project */}
        <div
          className={`mt-10 transition-all duration-500 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >
          <div
            key={project.number}
            className={`grid items-center gap-6 border-b pb-8 sm:gap-8 sm:pb-10 md:grid-cols-2 md:gap-12 ${
              darkMode ? "border-white/10" : "border-[#E3DCD1]"
            }`}
          >
            {/* Project image */}
            <div
              className={`overflow-hidden rounded-sm ${
                darkMode ? "bg-[#211F1D]" : "bg-[#EDE8DF]"
              }`}
            >
              <img
                src={project.image}
                alt={`${project.name} preview`}
                className="aspect-[4/3] h-full w-full object-cover object-top transition-transform duration-500 hover:scale-[1.01]"
                loading="lazy"
              />
            </div>

            {/* Project information */}
            <div className="flex flex-col items-start">
              <span
                className={`text-xs font-medium tracking-wider ${
                  darkMode ? "text-[#D66887]" : "text-[#D97757]"
                }`}
              >
                {project.number} / 0{projects.length}
              </span>

              <h3 className="mt-4 font-serif text-2xl font-medium leading-snug sm:text-3xl">
                {project.name}
              </h3>

              <p
                className={`mt-4 max-w-md text-sm leading-7 ${
                  darkMode ? "text-[#B8B0AD]" : "text-[#756D67]"
                }`}
              >
                {project.description}
              </p>

              {/* Technologies */}
              <ul className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-3">
                {project.technologies.map(({ name, Icon }) => (
                  <li
                    key={name}
                    className={`inline-flex items-center gap-2 text-xs ${
                      darkMode ? "text-[#D8D0CC]" : "text-[#554D47]"
                    }`}
                  >
                    <Icon size={15} aria-hidden="true" />
                    <span>{name}</span>
                  </li>
                ))}
              </ul>

              {/* GitHub link */}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-7 inline-flex items-center gap-2 text-sm transition-colors ${
                    darkMode
                      ? "text-[#E58BA0] hover:text-white"
                      : "text-[#A9573E] hover:text-[#733B2B]"
                  }`}
                >
                  <FaGithub size={17} aria-hidden="true" />
                  <span>View on GitHub</span>
                </a>
              )}
            </div>
          </div>

          {/* Carousel navigation */}
          <div className="mt-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {projects.map((item, index) => (
                <button
                  key={item.number}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show ${item.name}`}
                  aria-current={activeIndex === index ? "true" : undefined}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? `w-8 ${
                          darkMode ? "bg-[#E58BA0]" : "bg-[#D97757]"
                        }`
                      : `w-4 ${
                          darkMode ? "bg-white/20" : "bg-[#D9D0C5]"
                        }`
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={previousProject}
                aria-label="Previous project"
                className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${
                  darkMode
                    ? "border-white/15 hover:bg-white/10"
                    : "border-[#DED6CB] hover:bg-[#EAE4DA]"
                }`}
              >
                <span aria-hidden="true">←</span>
              </button>

              <button
                type="button"
                onClick={nextProject}
                aria-label="Next project"
                className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${
                  darkMode
                    ? "border-white/15 hover:bg-white/10"
                    : "border-[#DED6CB] hover:bg-[#EAE4DA]"
                }`}
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
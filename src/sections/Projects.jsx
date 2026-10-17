
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

import enterpriseImage from "../assets/enterprise.png";
import studentImage from "../assets/studentform.png";
import nolaImage from "../assets/nolanote.png";

const projects = [
  {
    number: "01",
    name: "Enterprise Management System",
    description:
      "A role-based company management system built to organize company operations, employee information, and user access. It supports different roles, including system administrators, company administrators, HR, managers, and regular users.",
    image: enterpriseImage,
    technologies: [
      { name: "React", Icon: SiReact },
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Express", Icon: SiExpress },
      { name: "PostgreSQL", Icon: SiPostgresql },
    ],
    github: "https://github.com/nangkyawt/enterprise-company-management-frontend",
  },
  {
    number: "02",
    name: "Student Form",
    description:
      "An internship project focused on building a student management interface for collecting, entering, and organizing student information. The project helped me gain practical experience developing user interfaces and working with application data in a software development environment.",
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
      "A note-taking applicaA note-taking application designed to help users create and organize their notes in one place. The project focuses on a clean, straightforward interface and practicing the development of useful features for everyday productivity.",
    image: nolaImage,
    technologies: [
      { name: "React", Icon: SiReact },
      { name: "MongoDB", Icon: SiMongodb },
    ],
    github:  "https://github.com/nangkyawt/nola_note_frontend",
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
      className={`relative overflow-hidden px-6 py-20 transition-colors duration-500 sm:px-10 sm:py-24 lg:px-16 ${
        darkMode
          ? "bg-[#171615] text-[#F5F1EE]"
          : "bg-[#F7F4EE] text-[#2C2A29]"
      }`}
    >
      {/* Original background grid */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 bg-[size:24px_24px] ${
          darkMode
            ? "bg-[linear-gradient(to_right,rgba(214,104,135,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(214,104,135,0.04)_1px,transparent_1px)]"
            : "bg-[linear-gradient(to_right,rgba(214,104,135,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(214,104,135,0.06)_1px,transparent_1px)]"
        }`}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Heading */}
        <div
          className={`transition-all duration-700 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
        >
          <div className="flex items-center gap-3">
            <span
              className={`h-px w-10 ${
                darkMode ? "bg-[#D66887]" : "bg-[#D97757]"
              }`}
            />
            <span
              className={`text-xs font-semibold uppercase tracking-[0.25em] ${
                darkMode ? "text-[#D66887]" : "text-[#D97757]"
              }`}
            >
              Selected Work
            </span>
          </div>

          <div className="mt-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="max-w-xl font-serif text-4xl font-normal leading-tight tracking-tight sm:text-5xl">
              Projects I've{" "}
              <span
                className={`font-light italic ${
                  darkMode ? "text-[#E58BA0]" : "text-[#D66887]"
                }`}
              >
                built.
              </span>
            </h2>

            <p
              className={`max-w-sm text-sm leading-6 ${
                darkMode ? "text-[#B8B0AD]" : "text-[#756D67]"
              }`}
            >
              A few projects I've worked on while learning and developing
              software.
            </p>
          </div>
        </div>

        {/* Single-project carousel */}
        <div
          className={`mt-12 transition-all duration-700 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          <div
            key={project.number}
            className={`grid overflow-hidden rounded-2xl border md:grid-cols-2 ${
              darkMode
                ? "border-white/10 bg-[#1E1D1C]"
                : "border-[#EAE4DA] bg-[#FDFBF7]"
            }`}
          >
            {/* Screenshot */}
            <div className="p-4 sm:p-6">
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={`${project.name} preview`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center p-5 pt-2 sm:p-8 md:p-10">
              <span
                className={`text-xs font-medium tracking-[0.2em] ${
                  darkMode ? "text-[#D66887]" : "text-[#D97757]"
                }`}
              >
                PROJECT {project.number}
              </span>

              <h3 className="mt-4 font-serif text-2xl font-medium leading-snug sm:text-3xl">
                {project.name}
              </h3>

              <p
                className={`mt-4 text-sm leading-7 ${
                  darkMode ? "text-[#B8B0AD]" : "text-[#756D67]"
                }`}
              >
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
                {project.technologies.map(({ name, Icon }) => (
                  <div
                    key={name}
                    className={`flex items-center gap-2 text-sm ${
                      darkMode ? "text-[#F5F1EE]" : "text-[#49413D]"
                    }`}
                  >
                    <Icon size={17} aria-hidden="true" />
                    <span>{name}</span>
                  </div>
                ))}
              </div>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-7 w-fit border-b pb-1 text-sm transition-colors ${
                    darkMode
                      ? "border-[#E58BA0] text-[#E58BA0] hover:text-white"
                      : "border-[#D97757] text-[#D97757] hover:text-[#A94F35]"
                  }`}
                >
                  View on GitHub
                </a>
              )}
            </div>
          </div>

          {/* Carousel controls */}
          <div className="mt-6 flex items-center justify-between">
            <span
              className={`text-sm tabular-nums ${
                darkMode ? "text-[#B8B0AD]" : "text-[#756D67]"
              }`}
            >
              {project.number} / 0{projects.length}
            </span>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={previousProject}
                aria-label="Previous project"
                className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
                  darkMode
                    ? "border-white/15 hover:bg-white/10"
                    : "border-[#E1D9CF] hover:bg-[#EAE4DA]"
                }`}
              >
                <span aria-hidden="true">←</span>
              </button>

              <button
                type="button"
                onClick={nextProject}
                aria-label="Next project"
                className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
                  darkMode
                    ? "border-white/15 hover:bg-white/10"
                    : "border-[#E1D9CF] hover:bg-[#EAE4DA]"
                }`}
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>

          {/* Project indicators */}
          <div className="mt-4 flex gap-2">
            {projects.map((item, index) => (
              <button
                key={item.number}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${item.name}`}
                aria-current={activeIndex === index ? "true" : undefined}
                className={`h-1 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? `w-10 ${darkMode ? "bg-[#E58BA0]" : "bg-[#D97757]"}`
                    : `w-4 ${
                        darkMode ? "bg-white/20" : "bg-[#D9D0C5]"
                      }`
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

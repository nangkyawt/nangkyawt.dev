/* eslint-disable no-unused-vars */

import { useEffect, useRef, useState } from "react";
import {
  SiJavascript,
  SiTypescript,
  SiAngular,
  SiReact,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiSupabase,
  SiMongodb,
  SiMysql,
  SiGit,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend",
    description: "Building responsive user interfaces",
    skills: [
      { name: "JavaScript", Icon: SiJavascript, color: "#D4A72C", level: 80 },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6", level: 65 },
      { name: "Angular", Icon: SiAngular, color: "#DD0031", level: 70 },
      { name: "React", Icon: SiReact, color: "#61DAFB", level: 75 },
      { name: "HTML / CSS", Icon: SiHtml5, color: "#E34F26", level: 85 },
    ],
  },
  {
    title: "Backend",
    description: "Developing APIs and server-side applications",
    skills: [
      { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E", level: 70 },
      { name: "Express", Icon: SiExpress, color: "#858585", level: 70 },
      { name: "REST APIs", Icon: SiExpress, color: "#858585", level: 70 },
    ],
  },
  {
    title: "Data & Tools",
    description: "Working with databases and development tools",
    skills: [
      { name: "Supabase", Icon: SiSupabase, color: "#3ECF8E", level: 65 },
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248", level: 60 },
      { name: "MySQL", Icon: SiMysql, color: "#4479A1", level: 65 },
      { name: "Git / GitHub", Icon: SiGit, color: "#F05032", level: 75 },
    ],
  },
];

function Skills({ darkMode }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.08 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
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
        {/* Original heading */}
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
              Skills
            </span>
          </div>

          <div className="mt-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="max-w-xl font-serif text-4xl font-normal leading-tight tracking-tight sm:text-5xl">
              Tools of my{" "}
              <span
                className={`font-light italic ${
                  darkMode ? "text-[#E58BA0]" : "text-[#D66887]"
                }`}
              >
                trade.
              </span>
            </h2>

            <p
              className={`max-w-sm text-sm leading-6 ${
                darkMode ? "text-[#B8B0AD]" : "text-[#756D67]"
              }`}
            >
              Technologies I've used while learning, building projects,
              and developing web applications.
            </p>
          </div>
        </div>

        {/* Three columns */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {skillGroups.map((group, groupIndex) => (
            <div
              key={group.title}
              className={`rounded-2xl border p-5 transition-all duration-700 sm:p-6 ${
                darkMode
                  ? "border-white/10 bg-[#1E1D1C]"
                  : "border-[#EAE4DA] bg-[#FDFBF7]"
              } ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
              style={{
                transitionDelay: isVisible ? `${groupIndex * 100}ms` : "0ms",
              }}
            >
              <div
                className={`mb-6 border-b pb-4 ${
                  darkMode ? "border-white/10" : "border-[#EFECE6]"
                }`}
              >
                <h3 className="font-serif text-xl font-medium">
                  {group.title}
                </h3>

                <p
                  className={`mt-1 text-sm ${
                    darkMode ? "text-[#B8B0AD]" : "text-[#8A817A]"
                  }`}
                >
                  {group.description}
                </p>
              </div>

              <div className="space-y-5">
                {group.skills.map(({ name, Icon, color, level }) => (
                  <div key={name}>
                    <div className="mb-2 flex items-center gap-3">
                      <Icon
                        size={19}
                        color={color}
                        className="shrink-0"
                        aria-hidden="true"
                      />

                      <span
                        className={`text-sm font-medium ${
                          darkMode ? "text-[#F5F1EE]" : "text-[#49413D]"
                        }`}
                      >
                        {name}
                      </span>
                    </div>

                    <div
                      className={`h-1.5 overflow-hidden rounded-full ${
                        darkMode ? "bg-white/10" : "bg-[#EAE4DA]"
                      }`}
                    >
                      <div
                        className={`h-full rounded-full transition-[width] duration-1000 ease-out ${
                          darkMode ? "bg-[#E58BA0]" : "bg-[#D97757]"
                        }`}
                        style={{
                          width: isVisible ? `${level}%` : "0%",
                          transitionDelay: `${groupIndex * 100 + 200}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;


import Reveal from "./Reveal";

function About({ darkMode }) {
  const focus = [
    "JavaScript",
    "TypeScript",
    "Angular",
    "React",
    "HTML / CSS",
  ];

  return (
    <section
      id="about"
      className={`relative overflow-hidden px-6 py-20 transition-colors duration-500 sm:px-10 sm:py-24 lg:px-16 ${
        darkMode
          ? "bg-[#121212] text-[#F5F1EE]"
          : "bg-[#FDFBF7] text-[#2C2A29]"
      }`}
    >
      {/* Subtle background grid */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 bg-[size:24px_24px] ${
          darkMode
            ? "bg-[linear-gradient(to_right,rgba(214,104,135,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(214,104,135,0.06)_1px,transparent_1px)]"
            : "bg-[linear-gradient(to_right,rgba(214,104,135,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(214,104,135,0.08)_1px,transparent_1px)]"
        }`}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section label */}
        <Reveal distance={12}>
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
              About Me
            </span>
          </div>
        </Reveal>

        {/* Main content */}
        <div className="mt-14 grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left column */}
          <div className="space-y-9 lg:col-span-5">
            <Reveal delay={100} distance={20}>
              <div>
                <p
                  className={`text-xs font-medium uppercase tracking-[0.18em] ${
                    darkMode ? "text-[#B8B0AD]" : "text-[#8A817A]"
                  }`}
                >
                  A little introduction
                </p>

                <h2 className="mt-4 font-serif text-4xl font-normal leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
                  I build things{" "}
                  <span
                    className={`font-light italic ${
                      darkMode ? "text-[#E58BA0]" : "text-[#D66887]"
                    }`}
                  >
                    for the web.
                  </span>
                </h2>
              </div>
            </Reveal>

            {/* Education card */}
            <Reveal delay={200} distance={20}>
              <div
                className={`rounded-2xl border p-6 transition-colors duration-300 sm:p-7 ${
                  darkMode
                    ? "border-white/10 bg-[#1E1E1E]/60"
                    : "border-[#EFECE6] bg-white/70"
                }`}
              >
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.18em] ${
                    darkMode ? "text-[#D66887]" : "text-[#D97757]"
                  }`}
                >
                  Education
                </p>

                <h3 className="mt-4 font-serif text-xl font-medium leading-snug">
                  Bachelor of Science in Computer Science
                </h3>

                <p
                  className={`mt-2 text-sm ${
                    darkMode ? "text-[#B8B0AD]" : "text-[#6B6563]"
                  }`}
                >
                  University of the People
                </p>

                <div
                  className={`mt-5 border-t pt-4 ${
                    darkMode ? "border-white/10" : "border-[#EFECE6]"
                  }`}
                >
                  <p
                    className={`text-sm ${
                      darkMode ? "text-[#B8B0AD]" : "text-[#6B6563]"
                    }`}
                  >
                    Expected graduation: April 2027
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right column */}
          <div className="space-y-10 lg:col-span-7">
            <Reveal delay={150} distance={20}>
              <div
                className={`space-y-5 text-base leading-7 sm:text-lg sm:leading-8 ${
                  darkMode ? "text-[#B8B0AD]" : "text-[#6B6563]"
                }`}
              >
                <p>
                  I'm a Computer Science student interested in software
                  development, especially building practical and
                  user-friendly web applications. I enjoy turning ideas
                  into working solutions that are clear and easy to use.
                </p>

                <p>
                  I learn by building projects, exploring different
                  approaches, and solving problems along the way. Each
                  project gives me an opportunity to strengthen my
                  problem-solving skills and better understand how to
                  develop reliable applications.
                </p>
              </div>
            </Reveal>

            {/* Technology stack */}
            <Reveal delay={250} distance={20}>
              <div
                className={`border-t pt-7 ${
                  darkMode ? "border-white/10" : "border-[#EFECE6]"
                }`}
              >
                <div className="mb-5">
                  <p
                    className={`text-xs font-semibold uppercase tracking-[0.18em] ${
                      darkMode ? "text-[#D66887]" : "text-[#D97757]"
                    }`}
                  >
                    Technologies
                  </p>

                  <p
                    className={`mt-2 text-sm ${
                      darkMode ? "text-[#B8B0AD]" : "text-[#8A817A]"
                    }`}
                  >
                    Tools and languages I'm working with
                  </p>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {focus.map((item) => (
                    <span
                      key={item}
                      className={`rounded-lg border px-4 py-2.5 text-sm transition-colors duration-200 ${
                        darkMode
                          ? "border-white/10 bg-white/[0.03] text-[#F5F1EE] hover:border-[#E58BA0]/50"
                          : "border-[#EFECE6] bg-white/60 text-[#49413D] hover:border-[#D97757]/50"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

          
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

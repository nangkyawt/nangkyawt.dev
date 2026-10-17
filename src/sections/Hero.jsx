
import { useEffect, useRef, useState } from "react";
import profile from "../assets/myphoto.jpeg";

function Hero({ darkMode }) {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setAnimate(entry.isIntersecting);
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className={`
        relative min-h-screen overflow-hidden
        px-6 pt-24 pb-8
        transition-colors duration-300
        sm:px-10 sm:pt-28
        lg:px-16 lg:pt-32
        ${
          darkMode
            ? "bg-[#121212] text-[#F5F1EE]"
            : "bg-[#FDFBF7] text-[#2C2A29]"
        }
      `}
    >
      {/* Subtle square grid background */}
      <div
        className={`
          pointer-events-none absolute inset-0
          bg-[size:18px_18px]
          ${
            darkMode
              ? "opacity-30 bg-[linear-gradient(to_right,rgba(214,104,135,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(214,104,135,0.07)_1px,transparent_1px)]"
              : "opacity-40 bg-[linear-gradient(to_right,rgba(214,104,135,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(214,104,135,0.08)_1px,transparent_1px)]"
          }
        `}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl flex-col">
        {/* Hero content */}
        <div className="relative flex flex-1 items-center py-10 sm:py-14">
          {/* Large background number */}
          <span
            className={`
              pointer-events-none absolute -left-6 top-1/2
              -translate-y-1/2 select-none
              text-[15rem] font-bold leading-none
              sm:text-[19rem] lg:text-[21rem]
              transition-all duration-[1200ms] ease-out
              ${
                animate
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }
              ${
                darkMode
                  ? "text-[#D66887]/10"
                  : "text-[#D97757]/10"
              }
            `}
            aria-hidden="true"
          >
            01
          </span>

          {/* Main grid */}
          <div className="relative grid w-full items-center gap-14 lg:grid-cols-[1fr_420px] lg:gap-16">
            {/* Left content */}
            <div
              className={`
                transition-all duration-[900ms] ease-out
                ${
                  animate
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }
              `}
            >
              {/* Introduction */}
              <div className="mb-6 flex items-center gap-3">
                <span
                  className={`
                    h-px w-10 bg-[#D97757]
                    transition-all duration-700
                    ${
                      animate
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-5 opacity-0"
                    }
                  `}
                />

                <span
                  className={`
                    text-xs font-medium uppercase tracking-[0.18em]
                    transition-all duration-700 delay-100
                    ${
                      darkMode
                        ? "text-[#B8B0AD]"
                        : "text-[#756B70]"
                    }
                    ${
                      animate
                        ? "translate-x-0 opacity-100"
                        : "translate-x-5 opacity-0"
                    }
                  `}
                >
                  Hello, I'm Nang Kyawt Hsu Hlaing
                </span>
              </div>

              {/* Main heading */}
              <h1
                className={`
                  max-w-3xl text-4xl font-semibold
                  leading-[1.05] tracking-[-0.04em]
                  sm:text-5xl lg:text-[4.5rem]
                  transition-all duration-[900ms] delay-150 ease-out
                  ${
                    animate
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }
                  ${
                    darkMode
                      ? "text-[#F5F1EE]"
                      : "text-[#2C2A29]"
                  }
                `}
              >
                Computer Science Student
                <br />

                <span
                  className={
                    darkMode
                      ? "text-[#E58BA0]"
                      : "text-[#D66887]"
                  }
                >
                  &amp; Software Developer.
                </span>
              </h1>

              {/* Description */}
              <p
                className={`
                  mt-7 max-w-xl text-base leading-7
                  sm:text-lg sm:leading-8
                  transition-all duration-[900ms] delay-300 ease-out
                  ${
                    animate
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }
                  ${
                    darkMode
                      ? "text-[#B8B0AD]"
                      : "text-[#756B70]"
                  }
                `}
              >
                I'm currently studying Computer Science, with
                a focus on Angular and JavaScript. I enjoy
                building practical web applications and
                turning ideas into useful digital experiences.
              </p>

              {/* Action buttons */}
              <div
                className={`
                  mt-8 flex flex-row flex-nowrap items-center gap-2
                  transition-all duration-[900ms] delay-500 ease-out
                  sm:gap-4
                  ${
                    animate
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }
                `}
              >
                {/* Explore projects */}
                <a
                  href="#projects"
                  className="
                    group inline-flex shrink-0 items-center justify-center gap-1.5
                    whitespace-nowrap rounded-full bg-[#D97757]
                    px-3 py-3 text-xs font-semibold text-white
                    shadow-[0_6px_20px_rgba(217,119,87,0.22)]
                    transition-all duration-300
                    hover:-translate-y-1 hover:bg-[#C76648]
                    hover:shadow-[0_10px_28px_rgba(217,119,87,0.32)]
                    focus-visible:outline-2
                    focus-visible:outline-offset-4
                    focus-visible:outline-[#D97757]
                    sm:gap-3 sm:px-7 sm:py-3.5 sm:text-sm
                  "
                >
                  Explore My Work
                  <span
                    className="
                      text-base transition-transform duration-300
                      group-hover:translate-x-1 sm:text-lg
                    "
                    aria-hidden="true"
                  >
                    →
                  </span>
                </a>

                {/* Download CV */}
                <a
                  href="/Nang-Kyawt-CV.pdf"
                  download
                  className={`
                    group inline-flex shrink-0 items-center justify-center gap-1.5
                    whitespace-nowrap rounded-full border
                    px-3 py-3 text-xs font-semibold
                    transition-all duration-300
                    hover:-translate-y-1
                    focus-visible:outline-2
                    focus-visible:outline-offset-4
                    focus-visible:outline-[#D66887]
                    sm:gap-2.5 sm:px-7 sm:py-3.5 sm:text-sm
                    ${
                      darkMode
                        ? "border-[#E58BA0]/40 bg-white/[0.04] text-[#F5DCE4] hover:border-[#E58BA0] hover:bg-[#E58BA0]/10"
                        : "border-[#D97757]/35 bg-white/70 text-[#51413B] hover:border-[#D97757] hover:bg-[#F8E9E2] hover:text-[#A94F35]"
                    }
                  `}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="
                      shrink-0 transition-transform duration-300
                      group-hover:translate-y-0.5
                    "
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <path d="m7 10 5 5 5-5" />
                    <path d="M12 15V3" />
                  </svg>

                  Download CV
                </a>
              </div>
            </div>

            {/* Right: profile photo */}
            <div
              className={`
                relative mx-auto w-fit lg:mx-0
                transition-all duration-[1100ms] delay-200 ease-out
                ${
                  animate
                    ? "translate-x-0 opacity-100"
                    : "translate-x-16 opacity-0"
                }
              `}
            >
              {/* Decorative organic blob outline */}
              <div
                className={`
                  absolute -right-4 -top-4 h-full w-full
                  rounded-[60%_40%_30%_70%/60%_30%_70%_40%] border
                  transition-all duration-[1200ms] delay-300
                  ${
                    animate
                      ? "translate-x-0 translate-y-0 opacity-100"
                      : "translate-x-4 -translate-y-4 opacity-0"
                  }
                  ${
                    darkMode
                      ? "border-[#D66887]/40"
                      : "border-[#D97757]/40"
                  }
                `}
                aria-hidden="true"
              />

              {/* Main photo container */}
              <div
                className={`
                  relative overflow-hidden
                  rounded-[60%_40%_30%_70%/60%_30%_70%_40%]
                  border backdrop-blur-xl
                  ${
                    darkMode
                      ? "border-white/10 bg-[#1E1E1E]/70"
                      : "border-white/80 bg-white/80 shadow-md"
                  }
                `}
              >
                <img
                  src={profile}
                  alt="Nang Kyawt Hsu Hlaing"
                  fetchPriority="high"
                  width="380"
                  height="500"
                  className="
                    h-[390px] w-[300px] object-cover
                    sm:h-[470px] sm:w-[360px]
                    lg:h-[500px] lg:w-[380px]
                  "
                />
              </div>

              {/* Photo caption */}
              <div
                className={`
                  absolute -bottom-4 -left-4 z-20
                  rounded-xl border px-4 py-3
                  backdrop-blur-xl shadow-sm
                  transition-all duration-700 delay-700
                  ${
                    animate
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-0"
                  }
                  ${
                    darkMode
                      ? "border-white/10 bg-[#1E1E1E]/90"
                      : "border-[#EAE2D6] bg-[#FFFDF7]/90"
                  }
                `}
              >
                <p
                  className={`
                    text-[10px] uppercase tracking-[0.18em]
                    ${
                      darkMode
                        ? "text-[#B8B0AD]"
                        : "text-[#756B70]"
                    }
                  `}
                >
                  Computer Science
                </p>

                <p
                  className={`
                    mt-1 text-xs font-medium
                    ${
                      darkMode
                        ? "text-[#F5F1EE]"
                        : "text-[#2C2A29]"
                    }
                  `}
                >
                  Student · Developer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

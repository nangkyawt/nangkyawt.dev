
import { useEffect, useRef, useState } from "react";

function Certificates({ darkMode }) {
  const certificates = [
    // ================= 2026 =================
    {
      title: "Associate of Science in Computer Science",
      organization: "University of the People",
      description:
        "Completed an associate degree in Computer Science, covering programming, databases, algorithms, and core computer science fundamentals.",
      date: "2026",
      type: "Academic",
      link: "https://drive.google.com/file/d/1BEHB02tKY9jL5CdN7PRQdl3EBYazQiUk/view?usp=sharing",
    },
    {
      title: "Thai Language — Basic",
      organization: "Thai Language Learning",
      description:
        "Basic Thai language communication and foundational vocabulary.",
      date: "2026",
      type: "Language",
      link: "https://drive.google.com/file/d/1qUIaUBKrASXWHf7EMUj-AIonX-xcciDf/view?usp=sharing",
    },
    {
      title: "AWS AI Practitioner Challenge",
      organization: "AWS Scholar Program · Udacity & Accenture",
      description:
        "Foundations of artificial intelligence, machine learning, and AWS cloud technologies.",
      date: "2026",
      type: "Challenge",
      link: "https://drive.google.com/file/d/1dh5ChbbpbUcLv3SYVf6IztMmd0PF2z5F/view?usp=sharing",
    },

    // ================= 2025 =================
    {
      title: "Advanced Learning Algorithms",
      organization: "DeepLearning.AI · Stanford University",
      description:
        "Advanced algorithms, data structures, problem solving, and algorithmic thinking.",
      date: "2025",
      type: "Course",
      link: "https://drive.google.com/file/d/1haLEXiof_I_vKweWS-HnVEi97UKE24K1/view?usp=sharing",
    },
    {
      title: "Python for Everybody Specialization",
      organization: "University of Michigan",
      description:
        "Python programming, data structures, APIs, databases, and practical programming concepts.",
      date: "2025",
      type: "Specialization",
      link: "https://drive.google.com/file/d/1WPc-f7AYLgVmL68kelYSmM3Ts-X12Ywd/view?usp=sharing",
    },
    {
      title: "AWS EC2 & Solutions Architect Training",
      organization: "Udemy",
      description:
        "AWS EC2, cloud infrastructure, deployment concepts, and Solutions Architect fundamentals.",
      date: "2025",
      type: "Training",
      link: "YOUR_AWS_EC2_LINK",
    },

    // ================= 2024 =================
    {
      title: "Responsive Web Design",
      organization: "freeCodeCamp",
      description:
        "Responsive layouts, HTML, CSS, accessibility, and modern web design fundamentals.",
      date: "2024",
      type: "Certificate",
      link: "https://drive.google.com/file/d/1e75iH8r_TGwjlxQCUODFujy7_eh4Z-Do/view?usp=sharing",
    },

    // ================= 2023 =================
    {
      title: "Software Engineering Training",
      organization: "Mandalay Software Institute",
      description:
        "Angular, Node.js, PostgreSQL, MySQL, MongoDB, Flutter, REST APIs, and responsive UI design.",
      date: "2023",
      type: "Training",
      link: "https://drive.google.com/file/d/1brmrCZJ8iOnh1_b4vOMqzyhIF31cgZTf/view?usp=sharing",
    },
  ];

  const [visible, setVisible] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const sectionRef = useRef(null);

  // Scroll reveal animation
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Prevent background scrolling while modal is open
  useEffect(() => {
    if (!selectedCertificate) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedCertificate]);

  // Close modal with Escape key
  useEffect(() => {
    if (!selectedCertificate) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedCertificate(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCertificate]);

  // Google Drive embedded preview URL
  const getDrivePreviewUrl = (url) => {
    if (!url) return "";

    const match = url.match(/\/file\/d\/([^/]+)/);

    if (match) {
      return `https://drive.google.com/file/d/${match[1]}/preview`;
    }

    return url;
  };

  // Check valid certificate links
  const hasValidLink = (certificate) => {
    return (
      certificate.link &&
      !certificate.link.startsWith("YOUR_")
    );
  };

  return (
    <>
      <section
        ref={sectionRef}
        id="certificates"
        className={`
          relative
          overflow-hidden
          px-6 py-24
          sm:px-10 sm:py-28
          lg:px-16 lg:py-32
          transition-colors duration-500
          ${
            darkMode
              ? "bg-[#121212] text-[#F5F1EE]"
              : "bg-[#FDFBF7] text-[#2C2A29]"
          }
        `}
      >
        <div className="mx-auto max-w-6xl">

          {/* ================= HEADER ================= */}
          <div
            className={`
              border-t
              pt-6
              transition-all
              duration-700
              ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-6 opacity-0"
              }
              ${
                darkMode
                  ? "border-white/10"
                  : "border-[#EAE2D6]"
              }
            `}
          >
            <div className="flex items-center justify-between">
              <span
                className={`
                  font-mono
                  text-xs
                  ${
                    darkMode
                      ? "text-[#B8B0AD]"
                      : "text-[#756B70]"
                  }
                `}
              >
                05
              </span>

              <span
                className={`
                  text-xs
                  uppercase
                  tracking-[0.18em]
                  ${
                    darkMode
                      ? "text-[#B8B0AD]"
                      : "text-[#756B70]"
                  }
                `}
              >
                Experience & Learning
              </span>
            </div>
          </div>

          {/* ================= TITLE ================= */}
          <div
            className={`
              mt-16
              max-w-2xl
              transition-all
              duration-700
              delay-100
              ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }
            `}
          >
            <h2
              className="
                text-4xl
                font-semibold
                leading-[1.05]
                tracking-[-0.045em]
                sm:text-5xl
                lg:text-6xl
              "
            >
              Certificates
              <span
                className={
                  darkMode
                    ? "text-[#E58BA0]"
                    : "text-[#D97757]"
                }
              >
                .
              </span>
            </h2>

            <p
              className={`
                mt-5
                max-w-xl
                text-sm
                leading-7
                ${
                  darkMode
                    ? "text-[#B8B0AD]"
                    : "text-[#756B70]"
                }
              `}
            >
              A timeline of academic achievements, professional
              training, and continued learning.
            </p>
          </div>

          {/* ================= TIMELINE ================= */}
          <div className="relative mt-20">

            {/* Background timeline line */}
            <div
              className={`
                absolute
                bottom-0
                left-[88px]
                top-0
                hidden
                w-px
                md:block
                ${
                  darkMode
                    ? "bg-white/10"
                    : "bg-[#D97757]/15"
                }
              `}
            />

            {/* Animated timeline line */}
            <div
              className={`
                absolute
                left-[88px]
                top-0
                hidden
                w-px
                md:block
                ${
                  darkMode
                    ? "bg-[#E58BA0]"
                    : "bg-[#D97757]"
                }
              `}
              style={{
                height: visible ? "100%" : "0%",
                transition: visible
                  ? "height 2.8s cubic-bezier(0.65, 0, 0.35, 1)"
                  : "height 0.4s ease-out",
              }}
            />

            <div className="space-y-6 md:space-y-3">
              {certificates.map((certificate, index) => (
                <article
                  key={certificate.title}
                  className={`
                    group
                    relative
                    transition-all
                    duration-700
                    ease-out
                    ${
                      visible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }
                  `}
                  style={{
                    transitionDelay: visible
                      ? `${250 + index * 120}ms`
                      : "0ms",
                  }}
                >
                  <div className="grid md:grid-cols-[64px_48px_1fr]">

                    {/* DATE */}
                    <div className="hidden pt-7 text-right md:block">
                      <span
                        className={`
                          font-mono
                          text-[11px]
                          tracking-wide
                          ${
                            darkMode
                              ? "text-[#B8B0AD]"
                              : "text-[#756B70]"
                          }
                        `}
                      >
                        {certificate.date}
                      </span>
                    </div>

                    {/* TIMELINE MARKER */}
                    <div className="relative hidden md:block">
                      <div
                        className={`
                          absolute
                          left-1/2
                          top-8
                          h-3
                          w-3
                          -translate-x-1/2
                          rounded-full
                          border-2
                          transition-all
                          duration-500
                          ${
                            visible
                              ? "scale-100 opacity-100"
                              : "scale-0 opacity-0"
                          }
                          ${
                            darkMode
                              ? "border-[#E58BA0] bg-[#121212] group-hover:bg-[#E58BA0]"
                              : "border-[#D97757] bg-[#FDFBF7] group-hover:bg-[#D97757]"
                          }
                        `}
                        style={{
                          transitionDelay: visible
                            ? `${500 + index * 120}ms`
                            : "0ms",
                        }}
                      />
                    </div>

                    {/* CERTIFICATE CARD */}
                    <div
                      className={`
                        relative
                        rounded-2xl
                        border
                        p-6
                        backdrop-blur-xl
                        transition-all
                        duration-300
                        md:ml-6
                        md:p-7
                        ${
                          darkMode
                            ? "border-white/10 bg-[#1E1E1E]/80 hover:border-[#E58BA0]/35 hover:bg-[#252020]"
                            : "border-[#EAE2D6] bg-[#FFFDF7]/80 hover:border-[#D97757]/40 hover:bg-white"
                        }
                      `}
                    >

                      {/* MOBILE DATE AND TYPE */}
                      <div className="mb-4 flex items-center justify-between md:hidden">
                        <span
                          className={`
                            font-mono
                            text-[11px]
                            ${
                              darkMode
                                ? "text-[#B8B0AD]"
                                : "text-[#756B70]"
                            }
                          `}
                        >
                          {certificate.date}
                        </span>

                        <span
                          className={`
                            rounded-full
                            px-3
                            py-1
                            text-[10px]
                            uppercase
                            tracking-[0.12em]
                            ${
                              darkMode
                                ? "bg-[#E58BA0]/10 text-[#E58BA0]"
                                : "bg-[#D97757]/10 text-[#C76648]"
                            }
                          `}
                        >
                          {certificate.type}
                        </span>
                      </div>

                      {/* DESKTOP TYPE */}
                      <div className="hidden md:block">
                        <span
                          className={`
                            text-[10px]
                            uppercase
                            tracking-[0.16em]
                            ${
                              darkMode
                                ? "text-[#E58BA0]"
                                : "text-[#D97757]"
                            }
                          `}
                        >
                          {certificate.type}
                        </span>
                      </div>

                      {/* TITLE */}
                      <h3 className="mt-2 max-w-3xl text-xl font-medium leading-snug tracking-[-0.025em] sm:text-2xl">
                        {certificate.title}
                      </h3>

                      {/* ORGANIZATION */}
                      <p
                        className={`
                          mt-2
                          text-sm
                          font-medium
                          ${
                            darkMode
                              ? "text-[#E58BA0]"
                              : "text-[#D66887]"
                          }
                        `}
                      >
                        {certificate.organization}
                      </p>

                      {/* DESCRIPTION */}
                      <p
                        className={`
                          mt-4
                          max-w-2xl
                          text-sm
                          leading-7
                          ${
                            darkMode
                              ? "text-[#B8B0AD]"
                              : "text-[#756B70]"
                          }
                        `}
                      >
                        {certificate.description}
                      </p>

                      {/* PREVIEW BUTTON */}
                      {hasValidLink(certificate) && (
                        <button
                          type="button"
                          onClick={() =>
                            setSelectedCertificate(certificate)
                          }
                          className={`
                            mt-6
                            inline-flex
                            items-center
                            gap-2
                            text-xs
                            font-semibold
                            transition-all
                            duration-200
                            hover:gap-3
                            ${
                              darkMode
                                ? "text-[#E58BA0] hover:text-[#F5B3C2]"
                                : "text-[#D97757] hover:text-[#C76648]"
                            }
                          `}
                        >
                          <span>Preview certificate</span>

                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M7 17L17 7" />
                            <path d="M7 7h10v10" />
                          </svg>
                        </button>
                      )}

                      {/* DECORATIVE ACCENT */}
                      <div
                        className={`
                          pointer-events-none
                          absolute
                          bottom-0
                          right-0
                          h-20
                          w-20
                          rounded-tl-full
                          opacity-30
                          ${
                            darkMode
                              ? "bg-[#D66887]/10"
                              : "bg-[#D97757]/10"
                          }
                        `}
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CERTIFICATE MODAL ================= */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedCertificate.title} certificate`}
        >
          {/* BACKDROP */}
          <button
            type="button"
            aria-label="Close certificate preview"
            onClick={() => setSelectedCertificate(null)}
            className="absolute inset-0 cursor-default bg-black/65 backdrop-blur-sm"
          />

          {/* MODAL */}
          <div
            className={`
              relative
              z-10
              flex
              h-[90vh]
              w-full
              max-w-5xl
              flex-col
              overflow-hidden
              rounded-2xl
              border
              shadow-2xl
              ${
                darkMode
                  ? "border-white/10 bg-[#1E1E1E]"
                  : "border-[#EAE2D6] bg-[#FFFDF7]"
              }
            `}
          >

            {/* MODAL HEADER */}
            <div
              className={`
                flex
                shrink-0
                items-center
                justify-between
                gap-4
                border-b
                px-5
                py-4
                sm:px-6
                ${
                  darkMode
                    ? "border-white/10"
                    : "border-[#EAE2D6]"
                }
              `}
            >
              <div className="min-w-0">
                <p
                  className={`
                    text-[10px]
                    uppercase
                    tracking-[0.16em]
                    ${
                      darkMode
                        ? "text-[#E58BA0]"
                        : "text-[#D97757]"
                    }
                  `}
                >
                  {selectedCertificate.type}
                </p>

                <h3
                  className={`
                    mt-1
                    truncate
                    text-sm
                    font-medium
                    sm:text-base
                    ${
                      darkMode
                        ? "text-[#F5F1EE]"
                        : "text-[#2C2A29]"
                    }
                  `}
                >
                  {selectedCertificate.title}
                </h3>
              </div>

              <div className="flex shrink-0 items-center gap-2">

                {/* OPEN ORIGINAL */}
                <a
                  href={selectedCertificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    hidden
                    rounded-full
                    border
                    px-4
                    py-2
                    text-xs
                    font-medium
                    transition-colors
                    sm:inline-flex
                    ${
                      darkMode
                        ? "border-[#E58BA0]/30 text-[#E58BA0] hover:bg-[#E58BA0]/10"
                        : "border-[#D97757]/30 text-[#D97757] hover:bg-[#D97757]/10"
                    }
                  `}
                >
                  Open Original ↗
                </a>

                {/* CLOSE BUTTON */}
                <button
                  type="button"
                  onClick={() => setSelectedCertificate(null)}
                  aria-label="Close preview"
                  className={`
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    transition-colors
                    ${
                      darkMode
                        ? "text-[#B8B0AD] hover:bg-white/10 hover:text-white"
                        : "text-[#756B70] hover:bg-black/5 hover:text-[#2C2A29]"
                    }
                  `}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  >
                    <path d="M6 6l12 12" />
                    <path d="M18 6L6 18" />
                  </svg>
                </button>
              </div>
            </div>

            {/* OFFICIAL CERTIFICATE PREVIEW */}
            <div
              className={`
                min-h-0
                flex-1
                ${
                  darkMode
                    ? "bg-[#121212]"
                    : "bg-[#F5F0E9]"
                }
              `}
            >
              <iframe
                src={getDrivePreviewUrl(selectedCertificate.link)}
                title={selectedCertificate.title}
                className="h-full w-full border-0"
                allow="autoplay"
              />
            </div>

            {/* MOBILE ORIGINAL LINK */}
            <div
              className={`
                shrink-0
                border-t
                px-5
                py-3
                sm:hidden
                ${
                  darkMode
                    ? "border-white/10"
                    : "border-[#EAE2D6]"
                }
              `}
            >
              <a
                href={selectedCertificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  text-xs
                  font-semibold
                  ${
                    darkMode
                      ? "text-[#E58BA0]"
                      : "text-[#D97757]"
                  }
                `}
              >
                Open Original Certificate ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Certificates;

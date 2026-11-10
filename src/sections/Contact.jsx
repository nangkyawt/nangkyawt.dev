/* eslint-disable no-unused-vars */

import { useEffect, useRef, useState } from "react";

const EMAIL = "nangkyawthsuhlaing@gmail.com";

function Contact({ darkMode }) {
  const sectionRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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

  useEffect(() => {
    if (!showSuccess) return;

    const timeout = setTimeout(() => {
      setShowSuccess(false);
    }, 4000);

    return () => clearTimeout(timeout);
  }, [showSuccess]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setStatus("");
    setShowSuccess(false);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      const result = await response.json();

      if (response.ok && result.success === "true") {
        setFormData({
          name: "",
          email: "",
          message: "",
        });

        setShowSuccess(true);
        setStatus("Your message has been sent successfully!");
      } else {
        throw new Error("Message could not be sent.");
      }
    } catch (error) {
      setStatus(
        "Something went wrong. Please try again or contact me directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const colors = {
    background: darkMode ? "bg-[#171615]" : "bg-[#F7F4EE]",
    text: darkMode ? "text-[#F5F1EE]" : "text-[#2C2A29]",
    heading: darkMode ? "text-[#F5F1EE]" : "text-[#2C2A29]",
    muted: darkMode ? "text-[#B8B0AD]" : "text-[#756D67]",
    accent: darkMode ? "text-[#E58BA0]" : "text-[#D97757]",
    border: darkMode ? "border-white/10" : "border-[#EAE4DA]",
    card: darkMode ? "bg-[#1E1D1C]" : "bg-[#FDFBF7]",
    input: darkMode
      ? "bg-[#171615] border-white/10 text-[#F5F1EE] placeholder:text-[#77716C] focus:border-[#E58BA0]"
      : "bg-[#F7F4EE] border-[#EAE4DA] text-[#2C2A29] placeholder:text-[#A39B96] focus:border-[#D97757]",

    // Orange button in both light and dark modes
    button: "bg-[#D97757] text-white hover:bg-[#C76749]",
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`relative overflow-hidden px-6 py-20 transition-colors duration-500 sm:px-10 sm:py-24 lg:px-16 ${colors.background} ${colors.text}`}
    >
      {/* Square grid background */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 bg-[size:24px_24px] ${
          darkMode
            ? "bg-[linear-gradient(to_right,rgba(214,104,135,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(214,104,135,0.04)_1px,transparent_1px)]"
            : "bg-[linear-gradient(to_right,rgba(214,104,135,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(214,104,135,0.06)_1px,transparent_1px)]"
        }`}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section heading */}
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
              className={`text-xs font-semibold uppercase tracking-[0.25em] ${colors.accent}`}
            >
              Contact
            </span>
          </div>

          <div className="mt-8">
            <h2 className="max-w-2xl font-serif text-4xl font-normal leading-tight tracking-tight sm:text-5xl">
              Let's create something{" "}
              <span
                className={`font-light italic ${
                  darkMode ? "text-[#E58BA0]" : "text-[#D66887]"
                }`}
              >
                meaningful.
              </span>
            </h2>
          </div>
        </div>

        {/* Contact content */}
        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left side */}
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <h3 className="font-serif text-2xl font-medium">
              Get in touch
            </h3>

            {/* Email */}
            <div className="mt-9">
              <p
                className={`text-xs font-semibold uppercase tracking-[0.2em] ${colors.accent}`}
              >
                Email me at
              </p>

              <a
                href={`mailto:${EMAIL}`}
                className={`mt-3 inline-block break-all text-base font-medium transition-colors duration-300 hover:text-[#D97757] sm:text-lg ${colors.heading}`}
              >
                {EMAIL}
              </a>
            </div>

            {/* Social links */}
            <div className="mt-9">
              <p
                className={`text-xs font-semibold uppercase tracking-[0.2em] ${colors.accent}`}
              >
                Find me online
              </p>

              <div className="mt-5 flex items-center gap-7">
                {/* GitHub */}
                <a
                  href="https://github.com/nangkyawt"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className={`inline-flex items-center gap-2.5 text-sm font-medium transition-colors duration-300 hover:text-[#D97757] ${colors.muted}`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.23-1.65-1.23-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.62 1.21 3.26.92.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.51 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.12 2.96.71.78 1.14 1.78 1.14 3 0 4.28-2.62 5.23-5.11 5.51.4.35.75 1.02.75 2.06v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
                  </svg>

                  <span>GitHub</span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/nangkyawthsuhlaing"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className={`inline-flex items-center gap-2.5 text-sm font-medium transition-colors duration-300 hover:text-[#D97757] ${colors.muted}`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM8.01 18.45H5.02V9.04h2.99v9.41ZM6.52 7.75a1.73 1.73 0 1 1 .02-3.46 1.73 1.73 0 0 1-.02 3.46Zm12 10.7h-2.99v-4.58c0-1.09-.02-2.49-1.52-2.49-1.52 0-1.75 1.18-1.75 2.41v4.66H9.27V9.04h2.87v1.29h.04c.4-.75 1.38-1.53 2.84-1.53 3.03 0 3.59 1.99 3.59 4.57v5.08h-.15Z" />
                  </svg>

                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div
              className={`rounded-2xl border p-6 shadow-sm transition-colors duration-500 sm:p-8 ${colors.card} ${colors.border}`}
            >
              <h3 className="font-serif text-2xl font-medium">
                Send a message
              </h3>

              <p className={`mt-2 text-sm ${colors.muted}`}>
                I'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className={`mb-2 block text-sm font-medium ${colors.heading}`}
                  >
                    Your name
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    maxLength={100}
                    className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all duration-300 ${colors.input}`}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className={`mb-2 block text-sm font-medium ${colors.heading}`}
                  >
                    Email address
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    maxLength={150}
                    className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all duration-300 ${colors.input}`}
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className={`mb-2 block text-sm font-medium ${colors.heading}`}
                  >
                    Your message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your message..."
                    rows={5}
                    required
                    maxLength={3000}
                    className={`w-full resize-none rounded-xl border px-4 py-3 text-sm outline-none transition-all duration-300 ${colors.input}`}
                  />
                </div>

                {/* Orange submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60 ${colors.button}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="h-4 w-4 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4Z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>

                {/* Form status */}
                {status && (
                  <p
                    role="status"
                    aria-live="polite"
                    className={`text-sm leading-6 ${
                      showSuccess
                        ? darkMode
                          ? "text-[#9BD5B0]"
                          : "text-[#39845A]"
                        : "text-red-500"
                    }`}
                  >
                    {status}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`mt-20 border-t pt-7 transition-all duration-700 ${
            darkMode ? "border-white/10" : "border-[#EAE4DA]"
          } ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
            <p className={`text-xs ${colors.muted}`}>
              © {new Date().getFullYear()} Nang Kyawt Hsu Hlaing. All rights
              reserved.
            </p>

            <p className={`text-xs ${colors.muted}`}>
              Built with React & Vite.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

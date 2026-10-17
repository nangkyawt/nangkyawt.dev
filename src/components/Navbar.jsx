
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div
        className={`
          mx-auto flex h-16 max-w-6xl items-center justify-between
          rounded-xl border px-5 shadow-sm backdrop-blur-xl
          transition-colors duration-300
          ${
            darkMode
              ? "border-white/10 bg-[#1E1E1E]/85"
              : "border-[#D97757]/15 bg-[#FDFBF7]/85"
          }
        `}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className={`
            font-['Manrope']
            text-[1.5rem] font-bold leading-none
            tracking-tight transition-colors duration-200
            ${
              darkMode
                ? "text-[#F5F1EE] hover:text-[#E58BA0]"
                : "text-[#2C2A29] hover:text-[#D66887]"
            }
          `}
        >
          MyPortfolio
          <span className="text-[#D97757]">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`
                text-sm font-medium
                transition-colors duration-200
                ${
                  darkMode
                    ? "text-[#B8B0AD] hover:text-[#E58BA0]"
                    : "text-[#756B70] hover:text-[#D66887]"
                }
              `}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Dark Mode Toggle */}
          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            className={`
              grid h-10 w-10 place-items-center rounded-xl border
              transition-all duration-200
              focus-visible:outline-2 focus-visible:outline-offset-2
              focus-visible:outline-[#D97757]
              ${
                darkMode
                  ? "border-white/10 text-[#F5F1EE] hover:bg-[#D66887]/15"
                  : "border-[#D97757]/20 text-[#2C2A29] hover:bg-[#F8E8ED]"
              }
            `}
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
            title={darkMode ? "Light mode" : "Dark mode"}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Contact Button */}
          <a
            href="#contact"
            className="
              hidden rounded-xl bg-[#D97757]
              px-4 py-2.5 text-sm font-semibold text-white
              transition-all duration-200
              hover:-translate-y-0.5 hover:bg-[#C76648]
              focus-visible:outline-2 focus-visible:outline-offset-2
              focus-visible:outline-[#D97757]
              sm:block
            "
          >
            Let's Talk
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className={`
              grid h-10 w-10 place-items-center rounded-xl border
              transition-colors duration-200 md:hidden
              ${
                darkMode
                  ? "border-white/10 text-[#F5F1EE] hover:bg-[#D66887]/15"
                  : "border-[#D97757]/20 text-[#2C2A29] hover:bg-[#F8E8ED]"
              }
            `}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div
          className={`
            mx-auto mt-2 max-w-6xl rounded-xl border
            p-4 shadow-lg backdrop-blur-xl md:hidden
            ${
              darkMode
                ? "border-white/10 bg-[#1E1E1E]/95"
                : "border-[#D97757]/15 bg-[#FDFBF7]/95"
            }
          `}
        >
          <nav className="flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`
                  rounded-xl px-3 py-3 text-sm font-medium
                  transition-colors duration-200
                  ${
                    darkMode
                      ? "text-[#B8B0AD] hover:bg-[#D66887]/10 hover:text-[#E58BA0]"
                      : "text-[#756B70] hover:bg-[#F8E8ED] hover:text-[#D66887]"
                  }
                `}
              >
                {link.name}
              </a>
            ))}

            {/* Mobile Contact Link */}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="
                mt-1 rounded-xl bg-[#D97757]
                px-3 py-3 text-center text-sm font-semibold text-white
                transition-colors duration-200 hover:bg-[#C76648]
                sm:hidden
              "
            >
              Let's Talk
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;

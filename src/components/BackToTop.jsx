import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12
        items-center justify-center rounded-full
        border border-[#D97757]/30
        bg-[#FDFBF7] text-[#D97757]
        shadow-lg transition-all duration-300
        hover:-translate-y-1 hover:bg-[#D97757]
        hover:text-white
        dark:bg-[#1E1E1E] dark:text-[#D97757]"
    >
      <ChevronUp size={22} />
    </button>
  );
}

export default BackToTop;

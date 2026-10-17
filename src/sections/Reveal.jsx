
import { useEffect, useRef, useState } from "react";

function Reveal({
  children,
  className = "",
  delay = 0,
  distance = 20,
  duration = 700,
  as: Tag = "div",
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`transition-[opacity,transform] ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${className}`}
      style={{
        transform: isVisible
          ? "translateY(0)"
          : `translateY(${distance}px)`,
        transitionDuration: `${duration}ms`,
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </Tag>
  );
}

export default Reveal;

import { useEffect, useRef, useState } from "react";

// Fades a block up into place once, the first time it crosses the viewport —
// the reference implementation's "data-appear" behavior as a component.
function Appear({ as: Tag = "div", delay = 0, className = "", style = {}, children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`appear${visible ? " is-visible" : ""} ${className}`}
      style={{ ...style, transitionDelay: `${delay}s` }}
    >
      {children}
    </Tag>
  );
}

export default Appear;

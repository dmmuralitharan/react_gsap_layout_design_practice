import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Features() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const container = containerRef.current;

    const totalScroll = container.scrollWidth - section.offsetWidth;

    if (totalScroll <= 0) {
      console.warn("No horizontal scroll detected. Check container width.");
      return;
    }

    gsap.to(container, {
      x: `-${totalScroll}px`,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${totalScroll}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        // markers: true,
      },
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex items-center overflow-hidden text-black bg-slate-100"
    >
      {/* <h2 className="text-4xl font-bold mb-12">Features</h2> */}

      <div
        ref={containerRef}
        className="flex space-x-8 px-20"
        style={{ whiteSpace: "nowrap" }}
      >
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="min-w-[300px] h-[400px] bg-white rounded-xl shadow-md flex items-center justify-center text-xl font-bold"
          >
            Feature {i + 1}
          </div>
        ))}
      </div>
    </section>
  );
}

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript", 
  "Tailwind", "Bootstrap", "SCSS", "GSAP", 
  "React", "Angular", "Python", "PHP",  
  "MySQL", "MongoDB", "Linux", "Git"
];

export default function Skills() {
  const sectionRef = useRef(null);
  const skillRefs = useRef([]);

  useGSAP(
    () => {
      skillRefs.current.forEach((el) => {
        if (!el) return;

        const x = gsap.utils.random(-300, 300);
        const y = gsap.utils.random(-300, 300);
        const rotate = gsap.utils.random(-90, 180);
        const scale = gsap.utils.random(0.5, 1.2);

        gsap.fromTo(
          el,
          { x, y, rotate, scale, opacity: 0 },
          {
            x: 0,
            y: 0,
            rotate: 0,
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play reverse play reverse", // ✅ Repeat on scroll in/out
              markers: false,
            },
          }
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="min-h-[150vh] bg-white px-8 py-20 flex flex-col items-center justify-center"
    >
      <h2 className="text-4xl font-bold mb-12">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl">
        {skills.map((skill, i) => (
          <div
            key={skill}
            ref={(el) => (skillRefs.current[i] = el)}
            className="w-32 h-32 bg-blue-100 text-blue-900 font-semibold text-center flex items-center justify-center rounded-xl shadow-lg"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

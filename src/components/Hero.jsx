import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 10%",
        toggleActions: "play reverse play reverse", // Re-triggerable
        // markers: true, // uncomment for debugging
      },
    });

    tl.fromTo(
      titleRef.current,
      { y: -50, scale: 0.8, opacity: 0 },
      { y: 0, scale: 1, opacity: 1, duration: 0.5, ease: "power3.out" }
    )
      .fromTo(
        descRef.current,
        { y: -20, scale: 0.8, opacity: 0 },
        { y: 0, scale: 1, opacity: 1, duration: 0.5, ease: "power3.out" },
        ">0.3"
      )
      .fromTo(
        ctaRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5 },
        ">0.3"
      );
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center items-center text-center bg-white dark:bg-black"
    >
      <h1 ref={titleRef} className="text-5xl font-bold text-gray-900 dark:text-white">
        Build Beautiful Web Experiences
      </h1>
      <p ref={descRef} className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Powered by React & GSAP
      </p>
      <button
        ref={ctaRef}
        className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
      >
        Get Started
      </button>
    </section>
  );
}

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="/images/spiral-circles.jpg"
            alt="Abstract background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </div>

      <h3 className="absolute top-12 right-6 text-white uppercase z-10 text-sm md:text-base lg:text-lg">
        Мои достижения
      </h3>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 gap-6 sm:gap-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-3xl w-full text-center">
          <div className="border border-white/30 px-6 py-8 backdrop-blur-sm">
            <p className="text-4xl sm:text-5xl font-bold text-white mb-2">100+</p>
            <p className="text-white/70 text-sm uppercase tracking-wide">задач решено</p>
          </div>
          <div className="border border-white/30 px-6 py-8 backdrop-blur-sm">
            <p className="text-4xl sm:text-5xl font-bold text-white mb-2">10</p>
            <p className="text-white/70 text-sm uppercase tracking-wide">месяцев обучения</p>
          </div>
          <div className="border border-white/30 px-6 py-8 backdrop-blur-sm">
            <p className="text-4xl sm:text-5xl font-bold text-white mb-2">5+</p>
            <p className="text-white/70 text-sm uppercase tracking-wide">проектов создано</p>
          </div>
        </div>
      </div>

      <p className="absolute bottom-12 left-6 text-white text-xl sm:text-2xl md:text-3xl max-w-xs sm:max-w-md z-10 leading-snug">
        Algorithmika научила меня не просто писать код — а думать алгоритмически.
      </p>
    </div>
  );
}

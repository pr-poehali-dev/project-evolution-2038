import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const images = [
  "https://cdn.poehali.dev/projects/ac6c0594-ed34-4b20-98ea-547776407110/files/8b0291a5-b8b8-4952-8584-afe235cec811.jpg",
  "https://cdn.poehali.dev/projects/ac6c0594-ed34-4b20-98ea-547776407110/files/c9b93558-4b38-4798-8115-5ec3ab0c9392.jpg",
  "https://cdn.poehali.dev/projects/ac6c0594-ed34-4b20-98ea-547776407110/files/68275550-d226-4713-ae43-23e30eae765c.jpg",
]

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, -15])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, 0])
  const rotate3 = useTransform(scrollYProgress, [0, 1], [0, 15])
  const x1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const x3 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background px-6 py-24"
    >
      {/* Stacked images */}
      <div className="relative flex items-center justify-center">
        <motion.div
          className="absolute w-[280px] md:w-[320px] aspect-[3/4] rounded-xl overflow-hidden shadow-2xl"
          style={{ rotate: rotate1, x: x1, y, zIndex: 1 }}
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          animate={{ clipPath: "inset(0 0 0 0)" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={images[0] || "/placeholder.svg"}
            alt="Принты на одежду"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          className="relative w-[280px] md:w-[320px] aspect-[3/4] rounded-xl overflow-hidden shadow-2xl"
          style={{ rotate: rotate2, y, zIndex: 2 }}
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          animate={{ clipPath: "inset(0 0 0 0)" }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={images[1] || "/placeholder.svg"}
            alt="Принты на сумки"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          className="absolute w-[280px] md:w-[320px] aspect-[3/4] rounded-xl overflow-hidden shadow-2xl"
          style={{ rotate: rotate3, x: x3, y, zIndex: 1 }}
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          animate={{ clipPath: "inset(0 0 0 0)" }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={images[2] || "/placeholder.svg"}
            alt="Принты на кружки"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 gap-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-center text-foreground mix-blend-difference">
          Принты, которые <em className="italic">говорят.</em>
        </h1>
        <motion.a
          href="https://t.me/Max"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto bg-foreground text-background px-8 py-4 rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Написать в Telegram
        </motion.a>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-1 h-2 rounded-full bg-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const showcaseItems = [
  { src: "https://cdn.poehali.dev/projects/ac6c0594-ed34-4b20-98ea-547776407110/files/8b0291a5-b8b8-4952-8584-afe235cec811.jpg", label: "Футболки" },
  { src: "https://cdn.poehali.dev/projects/ac6c0594-ed34-4b20-98ea-547776407110/files/0d76929d-f014-4fbe-be16-d516dd515f80.jpg", label: "Блокноты" },
  { src: "https://cdn.poehali.dev/projects/ac6c0594-ed34-4b20-98ea-547776407110/files/87fc4b29-abba-4937-bd6c-ec33157f132a.jpg", label: "Мерч-наборы" },
  { src: "https://cdn.poehali.dev/projects/ac6c0594-ed34-4b20-98ea-547776407110/files/f60b2ba6-2d24-420d-9be1-1b7cc0bb21fa.jpg", label: "Аниме" },
  { src: "https://cdn.poehali.dev/projects/ac6c0594-ed34-4b20-98ea-547776407110/files/1fd744ad-da24-4b12-8276-a7ba24c30414.jpg", label: "Кружки" },
  { src: "https://cdn.poehali.dev/projects/ac6c0594-ed34-4b20-98ea-547776407110/files/78da6467-ebbb-4cd1-b910-7d512a396ffe.jpg", label: "Мультфильм" },
  { src: "https://cdn.poehali.dev/projects/ac6c0594-ed34-4b20-98ea-547776407110/files/9f529115-fbc0-4c8e-8fca-5bcf60c721e1.jpg", label: "Сумки" },
]

const yOffsets: [number, number][] = [
  [100, -100],
  [150, -150],
  [80, -80],
  [120, -120],
  [90, -90],
  [140, -140],
  [70, -70],
]

export function ShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y0 = useTransform(scrollYProgress, [0, 1], yOffsets[0])
  const y1 = useTransform(scrollYProgress, [0, 1], yOffsets[1])
  const y2 = useTransform(scrollYProgress, [0, 1], yOffsets[2])
  const y3 = useTransform(scrollYProgress, [0, 1], yOffsets[3])
  const y4 = useTransform(scrollYProgress, [0, 1], yOffsets[4])
  const y5 = useTransform(scrollYProgress, [0, 1], yOffsets[5])
  const y6 = useTransform(scrollYProgress, [0, 1], yOffsets[6])

  const yValues = [y0, y1, y2, y3, y4, y5, y6]

  return (
    <section ref={containerRef} className="bg-background px-6 py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Галерея работ
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {showcaseItems.map((item, i) => (
            <motion.div
              key={i}
              className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden group"
              style={{ y: yValues[i] }}
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ clipPath: "inset(0 0 0 0)" }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              data-clickable
            >
              <motion.img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute bottom-4 left-4 text-white text-sm font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
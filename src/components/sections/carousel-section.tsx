import { motion } from "framer-motion"

const portfolioItems = [
  "https://cdn.poehali.dev/projects/ac6c0594-ed34-4b20-98ea-547776407110/files/8b0291a5-b8b8-4952-8584-afe235cec811.jpg",
  "https://cdn.poehali.dev/projects/ac6c0594-ed34-4b20-98ea-547776407110/files/68275550-d226-4713-ae43-23e30eae765c.jpg",
  "https://cdn.poehali.dev/projects/ac6c0594-ed34-4b20-98ea-547776407110/files/0d76929d-f014-4fbe-be16-d516dd515f80.jpg",
  "https://cdn.poehali.dev/projects/ac6c0594-ed34-4b20-98ea-547776407110/files/87fc4b29-abba-4937-bd6c-ec33157f132a.jpg",
  "https://cdn.poehali.dev/projects/ac6c0594-ed34-4b20-98ea-547776407110/files/c9b93558-4b38-4798-8115-5ec3ab0c9392.jpg",
  "https://cdn.poehali.dev/projects/ac6c0594-ed34-4b20-98ea-547776407110/files/161f2421-6747-41b2-a594-625e0df70fe0.jpg",
  "https://cdn.poehali.dev/projects/ac6c0594-ed34-4b20-98ea-547776407110/files/f60b2ba6-2d24-420d-9be1-1b7cc0bb21fa.jpg",
  "https://cdn.poehali.dev/projects/ac6c0594-ed34-4b20-98ea-547776407110/files/1fd744ad-da24-4b12-8276-a7ba24c30414.jpg",
  "https://cdn.poehali.dev/projects/ac6c0594-ed34-4b20-98ea-547776407110/files/78da6467-ebbb-4cd1-b910-7d512a396ffe.jpg",
  "https://cdn.poehali.dev/projects/ac6c0594-ed34-4b20-98ea-547776407110/files/6c349c98-307b-4f48-88d3-190aea5ea866.jpg",
]

export function CarouselSection() {
  const items = [...portfolioItems, ...portfolioItems]

  return (
    <section className="bg-primary py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-primary-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Каждый принт — отдельная история.
        </motion.h2>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {items.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[300px] md:w-[400px] rounded-xl overflow-hidden shadow-2xl"
              data-clickable
            >
              <img
                src={src || "/placeholder.svg"}
                alt={`Принт ${(i % portfolioItems.length) + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
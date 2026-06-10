import { useState, useEffect } from "react"
import { motion } from "framer-motion"

function ProductTypes() {
  const products = ["Футболки", "Кружки", "Блокноты", "Худи", "Сумки"]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % products.length)
    }, 1800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center h-full overflow-hidden">
      <motion.span
        key={index}
        className="font-serif text-4xl md:text-5xl text-foreground text-center"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -40, opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {products[index]}
      </motion.span>
    </div>
  )
}

function PrintPreview() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % 4)
    }, 800)
    return () => clearInterval(interval)
  }, [])

  const colors = ["bg-purple-400", "bg-lime-400", "bg-orange-400", "bg-sky-400"]

  return (
    <div className="h-full flex items-center justify-center gap-3">
      {colors.map((color, i) => (
        <motion.div
          key={i}
          className={`rounded-full ${color}`}
          animate={{ scale: active === i ? 1.8 : 1, opacity: active === i ? 1 : 0.4 }}
          transition={{ duration: 0.4 }}
          style={{ width: 24, height: 24 }}
        />
      ))}
    </div>
  )
}

function OrderCount() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const target = 248
    const step = Math.ceil(target / 40)
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= target) { clearInterval(interval); return target }
        return prev + step
      })
    }, 40)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-full gap-2">
      <span className="text-5xl md:text-6xl font-serif text-foreground">{count}+</span>
      <span className="text-sm text-muted-foreground">Макетов создано</span>
    </div>
  )
}

export function FeaturesSection() {
  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Что я делаю
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Products Card */}
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            data-clickable
          >
            <div className="flex-1">
              <ProductTypes />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Любой товар</h3>
              <p className="text-muted-foreground text-sm mt-1">Принты на одежду, посуду, аксессуары и канцелярию.</p>
            </div>
          </motion.div>

          {/* Colors Card */}
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1">
              <PrintPreview />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Яркие цвета</h3>
              <p className="text-muted-foreground text-sm mt-1">Каждый принт — точная цветопередача на макете.</p>
            </div>
          </motion.div>

          {/* Count Card */}
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1">
              <OrderCount />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Опыт</h3>
              <p className="text-muted-foreground text-sm mt-1">Более 248 реализованных принтов для клиентов.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

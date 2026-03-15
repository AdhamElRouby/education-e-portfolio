import { motion } from 'framer-motion';

interface TextSectionProps {
  title: string;
  texts: string[];
}

export default function TextSection({ title, texts }: TextSectionProps) {
  return (
    <section className="py-24 px-6 relative bg-slate-900 border-y border-slate-800">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: 'easeOut',
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-10 text-center"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            {title}
          </motion.h2>

          <div className="space-y-6 text-lg md:text-xl text-slate-300 leading-relaxed font-light">
            {texts.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

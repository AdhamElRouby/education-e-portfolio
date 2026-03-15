import { motion } from 'framer-motion';
import { Quote as QuoteIcon } from 'lucide-react';

interface QuoteSectionProps {
  quote: string;
  author: string;
  imageSrc: string;
}

export default function QuoteSection({
  quote,
  author,
  imageSrc,
}: QuoteSectionProps) {
  return (
    <section className="py-32 px-6 bg-purple-950 relative overflow-hidden flex items-center justify-center">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-indigo-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-purple-600/30 blur-[120px] pointer-events-none" />

      {/* Huge Watermark Quote Mark */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[30rem] leading-none text-white/[0.02] font-serif font-black select-none pointer-events-none">
        “
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-0 items-center">
            {/* Image Side (Creative Frame) */}
            <motion.div
              className="lg:col-span-5 relative z-10 order-2 lg:order-1"
              variants={{
                hidden: { opacity: 0, x: -40, rotate: -5 },
                show: {
                  opacity: 1,
                  x: 0,
                  rotate: 0,
                  transition: { duration: 1, type: 'spring', bounce: 0.4 },
                },
              }}
            >
              <div className="relative group p-2 md:p-6">
                {/* Decorative border frame behind image */}
                <div className="absolute inset-0 border-2 border-purple-400/20 rounded-[3rem] rounded-bl-xl transform -rotate-6 transition-transform duration-700 group-hover:-rotate-3" />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 to-indigo-500/30 rounded-[3rem] rounded-bl-xl blur-2xl transform rotate-3 scale-95 opacity-50 group-hover:opacity-80 transition-opacity duration-700" />

                {/* Actual Image container */}
                <div className="aspect-[4/5] rounded-[3rem] rounded-bl-xl overflow-hidden border border-white/10 relative shadow-2xl bg-black/50">
                  <img
                    src={imageSrc}
                    alt={author}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                    onError={(e) => {
                      if (e.currentTarget.src.endsWith('.jpg')) {
                        e.currentTarget.src = imageSrc.replace('.jpg', '.png');
                      } else if (imageSrc.includes('home/')) {
                        e.currentTarget.src =
                          'https://images.unsplash.com/photo-1533227260430-c6b3e75e112d?q=80&w=1459&auto=format&fit=crop';
                      }
                    }}
                  />
                  {/* Subtle inner overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-transparent to-transparent opacity-60" />
                </div>
              </div>
            </motion.div>

            {/* Overlapping Glass Quote Box */}
            <motion.div
              className="lg:col-span-7 lg:-ml-12 relative z-20 order-1 lg:order-2"
              variants={{
                hidden: { opacity: 0, x: 40 },
                show: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 },
                },
              }}
            >
              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 md:p-14 lg:p-16 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden">
                {/* Inner Glow in card */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />

                <QuoteIcon
                  size={56}
                  className="text-purple-400 mb-8 opacity-60 relative z-10"
                />

                <blockquote
                  className="text-2xl md:text-4xl lg:text-5xl font-medium leading-tight md:leading-snug mb-10 font-serif text-white tracking-wide text-balance relative z-10"
                  style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
                >
                  “{quote}”
                </blockquote>

                <div className="flex items-center gap-6 relative z-10 mt-12">
                  <div className="h-0.5 w-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                  <div className="flex flex-col">
                    <span className="text-xs md:text-sm text-purple-300/70 uppercase tracking-[0.2em] font-bold mb-1">
                      Speaker
                    </span>
                    <cite className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-white not-italic font-semibold tracking-wide">
                      {author}
                    </cite>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

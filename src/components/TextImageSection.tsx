import { motion } from 'framer-motion';

interface TextImageSectionProps {
  text: string;
  imageSrc: string;
  align?: 'left' | 'right';
  altText?: string;
  bgDark?: boolean;
}

export default function TextImageSection({
  text,
  imageSrc,
  align = 'left',
  altText = 'Section Image',
  bgDark = false,
}: TextImageSectionProps) {
  const isLeft = align === 'left';

  return (
    <section
      className={`py-24 px-6 relative ${bgDark ? 'bg-slate-950' : 'bg-slate-900'} border-y border-slate-800`}
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 lg:gap-20`}
        >
          <motion.div
            className="w-full md:w-1/2 relative group"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            variants={{
              hidden: { opacity: 0, x: isLeft ? -40 : 40 },
              show: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, ease: 'easeOut' },
              },
            }}
          >
            <div className="absolute inset-0 bg-indigo-500/20 rounded-[2rem] transform rotate-3 scale-100 group-hover:rotate-6 transition-transform duration-700 blur-xl z-0" />
            <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl relative z-10 border border-white/10 bg-slate-800">
              <img
                src={imageSrc}
                alt={altText}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  if (e.currentTarget.src.endsWith('.jpg')) {
                    e.currentTarget.src = imageSrc.replace('.jpg', '.png');
                  } else if (e.currentTarget.src.endsWith('.png')) {
                    e.currentTarget.src = imageSrc.replace('.png', '.jpg');
                  }
                }}
              />
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            variants={{
              hidden: { opacity: 0, x: isLeft ? 40 : -40 },
              show: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 },
              },
            }}
          >
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light">
              {text}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

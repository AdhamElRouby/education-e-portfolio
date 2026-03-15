import { motion } from 'framer-motion';

export type GalleryItem =
  | { type: 'image'; src: string; alt?: string }
  | { type: 'iframe'; src: string; title?: string };

interface GalleryOfWorkProps {
  title?: string;
  items: GalleryItem[];
}

export default function GalleryOfWork({
  title = 'Gallery of Work',
  items,
}: GalleryOfWorkProps) {
  return (
    <section className="py-24 px-6 relative bg-slate-950 border-y border-slate-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-16 text-center"
            variants={{
              hidden: { opacity: 0, y: -20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            {title}
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center">
            {items.map((item, index) => (
              <motion.div
                key={index}
                className="w-full relative group rounded-[2rem] overflow-hidden border border-white/10 bg-black/40 shadow-xl"
                variants={{
                  hidden: { opacity: 0, scale: 0.95, y: 20 },
                  show: {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: { duration: 0.8, ease: 'easeOut' },
                  },
                }}
              >
                {item.type === 'image' ? (
                  <div className="aspect-video relative">
                    <img
                      src={item.src}
                      alt={item.alt || `Gallery Image ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        if (e.currentTarget.src.endsWith('.png'))
                          e.currentTarget.src = item.src.replace(
                            '.png',
                            '.jpg',
                          );
                        else if (e.currentTarget.src.endsWith('.jpg'))
                          e.currentTarget.src = item.src.replace(
                            '.jpg',
                            '.png',
                          );
                      }}
                    />
                  </div>
                ) : (
                  <div className="relative w-full pb-[56.25%] h-0">
                    <iframe
                      src={item.src}
                      title={item.title || 'Embedded Content'}
                      className="absolute top-0 left-0 w-full h-full"
                      frameBorder="0"
                      allowFullScreen
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { User } from 'lucide-react';

interface BioCardProps {
  name: string;
  text: string;
  imageSrc: string;
  imagePosition?: string;
}

export default function BioCard({
  name,
  text,
  imageSrc,
  imagePosition = 'center',
}: BioCardProps) {
  return (
    <section className="relative w-full overflow-hidden bg-transparent pt-32 pb-24 px-6 md:px-12 z-10 border-b border-white/5">
      {/* Abstract Backgrounds */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f15_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f15_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Creative Image Group */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-sm lg:max-w-md lg:w-1/2 flex justify-center"
          >
            {/* Highly stylized overlapping background cards */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-[3rem] transform rotate-6 scale-105 opacity-30 blur-2xl transition-transform duration-700 hover:rotate-12 hover:scale-110" />
            <div className="absolute inset-0 border border-white/10 bg-white/5 rounded-[2.5rem] backdrop-blur-xl transform -rotate-3 scale-[1.02] shadow-2xl" />

            {/* Main Image Container */}
            <div className="relative aspect-[4/5] w-[85%] md:w-full rounded-[2rem] overflow-hidden border border-white/20 shadow-2xl bg-slate-900 group z-10">
              <div className="absolute inset-0 bg-indigo-500/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700 z-10" />
              <img
                src={imageSrc}
                alt={name}
                className="w-full h-full object-cover rounded-[2rem] transform transition-transform duration-1000 group-hover:scale-[1.08] filter group-hover:brightness-110"
                style={{ objectPosition: imagePosition }}
                onError={(e) => {
                  if (e.currentTarget.src.endsWith('.jpg')) {
                    e.currentTarget.src = imageSrc.replace('.jpg', '.png');
                  } else {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=1e1b4b&color=818cf8&size=512`;
                  }
                }}
              />

              {/* Glowing Corner Accents */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-500/40 blur-2xl rounded-full z-20 group-hover:bg-indigo-500/50 transition-colors duration-700" />
            </div>
          </motion.div>

          {/* Text Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-semibold w-max mb-8 mx-auto lg:mx-0 backdrop-blur-md uppercase tracking-wider"
            >
              <User size={16} />
              <span>Student Profile</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-indigo-100 to-purple-300 filter drop-shadow-lg leading-none">
              {name}
            </h1>

            <div className="relative">
              {/* Decorative accent line for desktop */}
              <div className="hidden lg:block absolute -left-8 top-2 bottom-2 w-[3px] bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent rounded-full opacity-70" />

              <p className="whitespace-pre-line text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
                {text}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

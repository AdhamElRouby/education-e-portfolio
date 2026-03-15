import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

export default function TypewriterText({ text }: { text: string }) {
  const textIndex = useMotionValue(0);
  const displayText = useTransform(textIndex, (latest) =>
    text.slice(0, Math.round(latest)),
  );

  useEffect(() => {
    const controls = animate(textIndex, text.length, {
      type: 'tween',
      duration: 2,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'reverse',
      repeatDelay: 1.5,
    });

    return controls.stop;
  }, [text, textIndex]);

  return (
    <span className="relative inline-flex items-center">
      <motion.span>{displayText}</motion.span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
        className="inline-block w-[6px] md:w-[8px] h-[0.9em] bg-indigo-500 ml-2"
      />
    </span>
  );
}

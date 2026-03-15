import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, GraduationCap } from 'lucide-react';
import QuoteSection from '../components/QuoteSection';
import TypewriterText from '../components/TypewriterText';
import Footer from '../components/Footer';

const students = [
  { name: 'Adham El-Rouby', path: '/adham', img: '/img/adham/1.jpg' },
  { name: 'Ahmed Abdeen', path: '/abdeen', img: '/img/abdeen/1.jpg' },
  { name: 'Ibrahim Al-Ahmady', path: '/ahmady', img: '/img/ahmady/1.jpg' },
  { name: 'Ibrahim Darwish', path: '/darwish', img: '/img/darwish/1.jpg' },
  { name: 'Kareem Tamer', path: '/kareem', img: '/img/kareem/1.jpg' },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-slate-300 font-sans selection:bg-indigo-500/30">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
        {/* Dark theme creative background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen" />
        </div>

        <motion.div
          className="max-w-5xl mx-auto text-center z-10"
          initial="hidden"
          animate="show"
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeInUp}
            className="mb-8 inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-indigo-300 font-medium text-sm backdrop-blur-sm"
          >
            <GraduationCap size={18} />
            <span>The American University in Cairo</span>
          </motion.div>

          {/* Typewriter Animation for E-Portfolio */}
          <motion.h1
            variants={fadeInUp}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-6 flex justify-center h-[1.2em] items-center"
          >
            <TypewriterText text="E-Portfolio" />
          </motion.h1>

          <motion.h2
            variants={fadeInUp}
            className="text-2xl md:text-4xl font-semibold text-slate-300 mb-8 max-w-3xl mx-auto leading-snug"
          >
            Our Learning Journey at{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              AUC
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            This portfolio presents the work, reflections, and learning
            experiences of five students in an education course at The American
            University in Cairo.
          </motion.p>
        </motion.div>
      </section>

      {/* About the Portfolio Section */}
      <section className="py-32 px-6 relative z-10 bg-[#0a0a0a] border-y border-white/5">
        <motion.div
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24 items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="space-y-8">
            <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-indigo-400 mb-6 backdrop-blur-sm">
              <BookOpen size={28} />
            </div>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              About the Portfolio
            </h3>
            <p className="text-lg text-slate-400 leading-relaxed">
              This portfolio was created as part of an education course at AUC.
              It showcases our learning experiences, assignments, and
              reflections throughout the semester.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              Each student page highlights personal insights about education,
              selected coursework, and individual contributions to the class.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp} className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-[2.5rem] transform rotate-3 scale-[1.02] -z-10 blur-xl" />
            <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl bg-white/5 border border-white/10 relative">
              <img
                src="/img/home/portfolio-concept.jpg"
                alt="Portfolio Concept"
                className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:opacity-100 hover:mix-blend-normal transition-all duration-500"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop';
                  e.currentTarget.style.mixBlendMode = 'normal';
                  e.currentTarget.style.opacity = '1';
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Quote Section (using the new component) */}
      <QuoteSection
        quote="Education is the most powerful weapon which you can use to change the world."
        author="Nelson Mandela"
        imageSrc="/img/home/quote.jpg"
      />

      {/* About the Course Section */}
      <section className="py-32 px-6 relative bg-[#0a0a0a] border-y border-white/5">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.h3
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-8"
          >
            About the Course
          </motion.h3>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-slate-400 leading-relaxed"
          >
            The course introduces students to key concepts in the field of
            education, including learning theories, classroom environments, and
            the role of teachers in shaping learning experiences.
          </motion.p>
        </motion.div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-32 px-6">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-20">
            <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center text-indigo-400 mx-auto mb-6 shadow-sm backdrop-blur-sm">
              <Users size={32} />
            </div>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Meet the Team
            </h3>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Explore the individual learning journeys, reflections, and
              insights from each of our team members.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {students.map((student) => (
              <motion.div
                key={student.name}
                variants={fadeInUp}
                className="h-full"
              >
                <Link to={student.path} className="group block h-full">
                  <div className="h-full rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-2 flex flex-col">
                    {/* Student Image */}
                    <div className="aspect-square w-full overflow-hidden relative">
                      <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                      <img
                        src={student.img}
                        alt={student.name}
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          if (e.currentTarget.src.endsWith('.jpg')) {
                            e.currentTarget.src = student.img.replace(
                              '.jpg',
                              '.png',
                            );
                          } else {
                            e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(student.name)}&background=1e1b4b&color=818cf8&size=512`;
                          }
                        }}
                      />
                    </div>
                    {/* Card Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h4 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
                        {student.name}
                      </h4>
                      <span className="mt-auto inline-flex items-center text-sm font-semibold text-indigo-400 group-hover:text-indigo-300">
                        View Portfolio
                        <ArrowRight
                          size={16}
                          className="ml-2 transition-transform group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

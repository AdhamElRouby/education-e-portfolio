import BioCard from '../components/BioCard';
import QuoteSection from '../components/QuoteSection';
import TextSection from '../components/TextSection';
import GalleryOfWork from '../components/GalleryOfWork';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Abdeen() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-950 flex flex-col pt-20">
        <BioCard
          name="Ahmed Abdeen"
          text={`Hello, my name is Ahmed Abdeen. I am a university student at the American University in Cairo, studying Media and Communication. Alongside my studies, I am a professional football player for Al Ahly SC and also represent the Egypt national football team.\n\nDuring my career with Al Ahly, I have played in major tournaments including the Egyptian Premier League, Egypt Cup, CAF Champions League, and CAF Super Cup, winning multiple competitions and medals. With the national team, I participated in the qualifiers for the African Nations Championship, successfully qualifying and finishing third in the tournament.\n\nOne of the most important milestones in my career was playing in the FIFA Club World Cup with Al Ahly and the FIFA World Cup with Egypt in Chile, where I served as captain and scored a historic goal against Chile. I started playing football for fun, which grew into my passion and profession. Being promoted to Al Ahly’s first team at age 17 was another special moment, making me the youngest player on the team.`}
          imageSrc="/img/abdeen/1.png"
        />

        <QuoteSection
          quote="Whatever the cost of our libraries, the price is cheap compared to that of an ignorant nation."
          author="Walter Cronkite"
          imageSrc="/img/abdeen/2.jpg"
        />

        <TextSection
          title="Learning from the Course"
          texts={[
            'This education course has helped me understand the importance of learning in our lives. The first assignment helped me explore what education truly means and how it influences people’s lives.',
            'I also learned how to work effectively with peers through group projects, improving my teamwork and communication skills. Presentations in this course enhanced my public speaking and confidence.',
            'Furthermore, the course encouraged critical thinking about issues like racism, discrimination, and sexism in classrooms, showing how these factors affect students and the learning environment.',
            'Finally, the course inspired me to be more creative in my work and approach to education. It continues to help me develop important academic and personal skills.',
          ]}
        />

        <GalleryOfWork
          items={[
            {
              type: 'image',
              src: '/img/abdeen/g1.png',
              alt: 'Gallery Image 1',
            },
            {
              type: 'iframe',
              src: 'https://docs.google.com/presentation/d/e/2PACX-1vRZ_6UtDsGePAPkFwRF-0e6v-B4naDOEusyFMPSlqxAMnHtrqdCBiknX6SJCg6Z1CaJ_Y496MLMtHUq/pubembed?start=false&loop=false&delayms=3000',
              title: 'Presentation 1',
            },
          ]}
        />
        <Footer />
      </main>
    </>
  );
}

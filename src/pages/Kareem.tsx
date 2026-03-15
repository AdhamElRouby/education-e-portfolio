import BioCard from '../components/BioCard';
import QuoteSection from '../components/QuoteSection';
import TextSection from '../components/TextSection';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Kareem() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-950 flex flex-col pt-20">
        <BioCard
          name="Kareem Tamer Kolib"
          text={`Hello. My name is Kareem Tamer Kolib, and I am a sophomore studying Electronics and Communication Engineering at the American University in Cairo. I chose this field because I enjoyed math and physics in school and believe engineering is a strong foundation for the future.\n\nOutside of my studies, I stay active by going to the gym and playing padel and football in my free time. These activities help me stay healthy and enjoy time with friends.`}
          imageSrc="/img/kareem/1.png"
        />
        <TextSection
          title="Learning from the Course"
          texts={[
            'I chose this course because I was interested in learning more about education topics. We covered issues such as how trauma affects students and gender-based violence. When I saw the syllabus, I was excited by activities I hadn’t done before, like presentations, creating a website, and making a podcast.',
            'Most of our tasks are group activities, which gave me the chance to meet and get to know new people while improving teamwork and collaboration skills. Overall, the course motivated me to explore education from multiple perspectives.',
          ]}
        />
        <QuoteSection
          quote="The world is a book and those who do not travel read only one page."
          author="St. Augustine"
          imageSrc="/img/kareem/2.jpg"
        />
        <Footer />
      </main>
    </>
  );
}

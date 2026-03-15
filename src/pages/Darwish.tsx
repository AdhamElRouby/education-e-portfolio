import BioCard from '../components/BioCard';
import QuoteSection from '../components/QuoteSection';
import TextSection from '../components/TextSection';
import GalleryOfWork from '../components/GalleryOfWork';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Darwish() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-950 flex flex-col pt-20">
        <BioCard
          name="Ibrahim Darwish"
          text={`Hello!! My name is Ibrahim Darwish, and I am a Junior studying Electronics and Communication Engineering.\n\nI chose this field because I’ve had a strong interest in working with circuits and electronic components since middle school. While my family background may have influenced my choice—my parents and elder siblings studied the same major—my passion for electronics has always been my main motivation.\n\nI began my academic journey at the University of Aberdeen before transferring to AUC after my freshman year. I have participated in several extracurricular activities, including MUNs, Student Unions, and the Electronics Association.\n\nCurrently, I serve as Chief of Operations in the Entrepreneurship Society, a role that allows me to connect with others while enjoying a collaborative work environment. I also work as an International Peer Leader in the International Programs and Services Office.`}
          imageSrc="/img/darwish/1.png"
          imagePosition="right center"
        />
        <QuoteSection
          quote="Live as if you were to die tomorrow. Learn as if you were to live forever."
          author="Mahatma Gandhi"
          imageSrc="/img/darwish/2.jpg"
        />
        <TextSection
          title="Learning from the Course"
          texts={[
            'I chose this course because I enjoy teaching and tutoring others. I wanted to better understand educational principles and learn strategies to overcome challenges that both educators and students might face. This course has given me the opportunity to reflect on teaching methods, learning environments, and how to improve my own skills as an educator.',
          ]}
        />
        <GalleryOfWork
          items={[
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

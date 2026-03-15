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
          text={`Hello!!  

My name is Ibrahim Darwish, I am a Junior studying Electronics and Communication Engineering. 

I chose this field because ever since I was in middle school I found that I had great interest in working with circuits and electronic components. I cannot say with great certainty whether my decision was influenced by my family, given that my parents and elder siblings all studied the same major. 

I started my academic journey in the University of Aberdeen before transferring to AUC after my freshman year. I have joined many extracurricular activities including; MUNs, Student Unions and the Electronics Association.

Currently I am in the Entrepreneurship Society working as Chief of Operations. I enjoy this position as it has allowed me to learn and connect with others while also enjoying a pleasant work environment. Moreover I joined a work study program in the International Programs and Services Office as an International Peer Leader. 
`}
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

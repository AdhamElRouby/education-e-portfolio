import TextImageSection from '../components/TextImageSection';
import QuoteSection from '../components/QuoteSection';
import TextSection from '../components/TextSection';
import GalleryOfWork from '../components/GalleryOfWork';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BioCard from '../components/BioCard';

export default function Adham() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-950 flex flex-col pt-20">
        <BioCard
          name="Adham El-Rouby"
          text="Hello everyone, my name is Adham El-Rouby, and a Computer Engineering junior. I am a 21-year-old boy from Port-Said living with my family and older brother."
          imageSrc="/img/adham/1.jpg"
        />

        <TextImageSection
          imageSrc="/img/adham/3.png"
          align="left"
          text="I was previously at STEM schools, which have completely molded me into what I am now. Those schools have added a lot to my character and academic knowledge."
        />

        <TextImageSection
          imageSrc="/img/adham/4.png"
          align="right"
          text="As an illustration, I was capable of ranking first in math locally for two successive years. Currently, my plan is to major in computer science or computer engineering, as I believe math and programming are the two main pillars of our world and daily lives."
        />

        <QuoteSection
          quote="I have never let my schooling interfere with my education."
          author="Mark Twain"
          imageSrc="/img/adham/2.jpg"
        />

        <TextSection
          title="Learning from the Course"
          texts={[
            'Through this course I realized the difference between teaching and learning and observed how significant is the impact of learning and it applies a much stronger impact than simply teaching.',
            'Moreover, I knew precisely the difference between schooling and education, as schooling focuses mainly on simply transferring knowledge unlike education which considers a holistic development.',
            'Eventually, I also figured that the best strategy to enhance myself across all aspects is having a growth mindset which indicates intelligence can be developed.',
            'While a growth mindset believes intelligence and abilities can be developed, a fixed mindset believes they are statically given. The major difference is that a growth mindset encourages learning and resilience, whereas a fixed mindset avoids challenges and limits potential.',
          ]}
        />

        <GalleryOfWork
          items={[
            {
              type: 'iframe',
              src: 'https://docs.google.com/presentation/d/e/2PACX-1vRZ_6UtDsGePAPkFwRF-0e6v-B4naDOEusyFMPSlqxAMnHtrqdCBiknX6SJCg6Z1CaJ_Y496MLMtHUq/pubembed?start=false&loop=false&delayms=3000',
              title: 'Presentation 1',
            },
            { type: 'image', src: '/img/adham/g1.png', alt: 'Gallery Image 1' },
          ]}
        />
        <Footer />
      </main>
    </>
  );
}

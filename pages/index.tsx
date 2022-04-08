import type { NextPage } from 'next';
import Image from 'next/image';

const CTAButton = () => {
  return (
    <button className="rounded bg-yellow-400 px-5 py-3 text-lg text-white shadow hover:bg-yellow-500 active:bg-yellow-600">
      Sazinies ar mani
    </button>
  );
};

const Hero = () => {
  return (
    <div className="grid grid-cols-3 space-x-6 h-96">
      <div className="col-span-1">
        <h1 className="mb-12 text-6xl font-extralight leading-tight">KRISTINES DIZAINA IDEJAS</h1>
        <div>
          <CTAButton />
        </div>
      </div>
      <div className="relative col-span-2 w-full">
        <Image
          className="relative col-span-2"
          src="/images/hero.jpg"
          alt=""
          layout="fill"
          objectFit="contain"
        />
        {/* <h2 className="absolute bottom-1/3 left-1/2 -translate-x-1/2 translate-y-1/3 text-6xl font-extralight ">
          Sveicina Jūs!
        </h2> */}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="grid grid-cols-3 h-96">
      <div className="col-span-2 flex flex-col items-center justify-center pr-32 text-xl font-light">
        <p className="mb-4">
          Mani sauc Kristine Kolthofa un es ar lielāko prieku piedalīšos Tava ideālā interjera
          īstenošanā.
        </p>
        <p>
          Mana Nīderlandē iegūtā izglītība arhitektūrā un dizainā un ilggadējā pieredze Nīderlandē
          un Francijā kā interjera dizainerei un Tavi sapņi par Tavu māju - tā ir iespēja mums kopā
          tos pārvērst realitātē!
        </p>
      </div>
      <div className="relative col-span-1">
        <Image src="/images/about.jpg" alt="about me" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};
const Marketing = () => {
  return (
    <div className="grid grid-cols-3 h-96">
      <div className="relative col-span-1">
        <Image src="/images/marketing.webp" alt="about me" layout="fill" objectFit="contain" />
      </div>
      <div className="col-span-2 flex  items-center justify-center pl-32 text-xl font-light">
        <p className="">
          Ja Tu plāno būvēt vai pārbūvēt māju, iekārtot māju vai dzīvokli, atjaunot vai uzlabot
          esošo dzīvesvietu, ja Tu meklē, kā kādu defektu pārvērst interesantā efektā, mēs varam
          īstenot Tavu sapņu interjeru.{' '}
        </p>
      </div>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <div className="space-y-32">
      <Hero />
      <About />
      <Marketing />
      <div className="flex justify-center">
        <CTAButton />
      </div>
    </div>
  );
};

export default Home;

import Button from '../components/shared/Button';

const Section = ({ title, text }: { title: string; text?: string }) => {
  return (
    <section className="py-8">
      <h2 className="text-xl font-semibold">{title}</h2>
      {text && <p>{text}</p>}
    </section>
  );
};

export default function Services() {
  return (
    <div>
      <h1 className="text-3xl mb-4">Pakalpoojumi un Izmaksas</h1>
      <div className="divide-y">
        <Section
          title="Dizainera konsultācija - € 50"
          text="Interjera kolāža vai interjera projekts - no €10-20 / m2"
        />
        <Section title="Veikala vai salona apmeklējums - €30.00*" />
        <Section title="Projekta autoruzraudzība, objekta apmeklējums būvniecības laikā - 40.00 eiro par apmeklējumu*" />
        <Section title="Projekta vadība un realizācija - pēc vienošanās." />
        <Section title="Interjera fotografēšana, stilista ieteikumi veiksmīgai nekustamā īpašuma pārdošanai, iznomāšanai vai izīrēšanai - pēc vienošanās" />
        <Section title="Telpu noformēšana, dekorēšana svētkiem un pasākumiem - pēc vienošanās" />
        <Section
          title="Dāvanu karte - pēc vienošanās.                                                          
*- transporta izmaksas ārpus Ogres robežām papildus."
        />
      </div>
      <div className="pt-12 flex justify-center">
        <Button href="/contact">Sazinies ar mani</Button>
      </div>
    </div>
  );
}

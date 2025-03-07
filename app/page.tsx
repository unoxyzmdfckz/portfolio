import Card from './components/Card';

export default function Page() {
  return (
    <div className="container mx-auto p-4 flex justify-center items-center">
      <Card>
        <section>
          <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
            Our live website
          </h1>
          <p className="mb-4">
            {`Welcome to our live server. This is a live website that is built with Blitz.js; A fullstack React framework that is built on top of Next.js.`}
            <br />
            <br />
            {`Members:`}
            <br />
            {`Gales, Chersan L. - POGI (Builder)`}
            <br />
            {`Padla, Jacqueline Zoe - POGI`}
            <br />
            {`Saligumba, Dandy N. - POGI`}
          </p>
        </section>
      </Card>
    </div>
  );
}

export default function Banner() {
  return (
    <section>
      <div className="container mx-auto lg:max-w-6xl">
        <div className="hero rounded-3xl bg-base-200">
          <div className="hero-content w-full flex-col gap-32 lg:flex-row-reverse">
            <img
              src="/images/hero.svg"
              className="max-w-xs rounded-lg shadow-2xl"
            />
            <div className="space-y-8">
              <h1 className="font-playfair text-5xl font-bold">
                Books to freshen up <br /> your bookshelf
              </h1>
              <button className="bg-brand-green hover:bg-brand-green/80 btn text-white">
                View The List
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

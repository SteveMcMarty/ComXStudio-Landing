function HeroSection(): JSX.Element {
  return (
    <section className="bg-darkest py-20 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-5xl font-bold text-white mb-6 text-balance">
          Créez votre BD avec l'aide de L'IA
        </h1>
        <p className="text-xl text-white/90 mb-8 text-balance">
          Transformez vos idées en bandes dessinées uniques grâce à notre éditeur
          intelligent qui combine créativité humaine et intelligence artificielle.
        </p>
        <div className="inline-block bg-warning/20 border border-warning/50 text-warning px-6 py-3 rounded-lg font-semibold">
          🚧 Application en cours de développement
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

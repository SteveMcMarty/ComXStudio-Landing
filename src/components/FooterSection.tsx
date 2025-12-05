function FooterSection(): JSX.Element {
  return (
    <section className="bg-darkest py-20 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-4xl font-bold text-white mb-4">Prêt à Créer Votre BD ?</h2>
        <p className="text-xl text-white/90 mb-8">
          Rejoignez notre communauté de créateurs et donnez vie à vos histoires dès
          aujourd'hui.
        </p>
        <div className="inline-block bg-warning/20 border border-warning/50 text-warning px-6 py-3 rounded-lg font-semibold">
          🚧 Bientôt disponible
        </div>
      </div>
    </section>
  );
}

export default FooterSection;

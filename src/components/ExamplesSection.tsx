function ExamplesSection(): JSX.Element {
  const examples = [
    { id: 1, label: 'Exemple 1' },
    { id: 2, label: 'Exemple 2' },
    { id: 3, label: 'Exemple 3' },
  ];

  return (
    <section className="bg-dark py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Exemples de Créations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {examples.map((example) => (
            <div
              key={example.id}
              className="bg-dark border border-medium rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors"
            >
              <div className="text-white text-xl">{example.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExamplesSection;

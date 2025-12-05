import { BsPencil, BsRobot, BsFileText, BsStar } from 'react-icons/bs';

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <BsPencil className="w-12 h-12" />,
    title: 'Éditeur Intuitif',
    description: 'Interface simple et puissante pour créer vos planches de BD',
  },
  {
    icon: <BsRobot className="w-12 h-12" />,
    title: 'Génération IA',
    description: 'Générez des images uniques pour vos cases en quelques clics',
  },
  {
    icon: <BsFileText className="w-12 h-12" />,
    title: 'Gestion de Script',
    description: 'Écrivez et organisez vos scènes avec notre éditeur de script intégré',
  },
  {
    icon: <BsStar className="w-12 h-12" />,
    title: 'Export Professionnel',
    description: 'Exportez vos créations en haute qualité, prêtes pour l'impression',
  },
];

function FeaturesSection(): JSX.Element {
  return (
    <section className="bg-dark py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Fonctionnalités Principales
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-dark border border-medium rounded-lg p-6 hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;

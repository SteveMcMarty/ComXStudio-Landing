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
    description: "Exportez vos créations en haute qualité, prêtes pour l'impression",
  },
];

function FeaturesSection(): JSX.Element {
  return (
    <section className="bg-dark py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-comic text-white text-center mb-16 tracking-wide drop-shadow-[3px_3px_0_#000]">
          FONCTIONNALITÉS EXTREMES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-dark border-4 border-black rounded-none p-6 shadow-comic hover:-translate-y-2 transition-transform duration-200 cursor-pointer relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                <div className="w-16 h-16 rounded-full bg-primary/30"></div>
              </div>
              <div className="text-primary mb-6 transform group-hover:scale-110 transition-transform duration-200">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-comic text-white mb-3 uppercase tracking-wide">
                {feature.title}
              </h3>
              <p className="text-light text-lg font-medium leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;

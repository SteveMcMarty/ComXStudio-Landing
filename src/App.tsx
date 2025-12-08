import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import VideoSection from './components/VideoSection';
import ExamplesSection from './components/ExamplesSection';
import FooterSection from './components/FooterSection';

function App(): JSX.Element {
  return (
    <div className="min-h-screen bg-darkest">
      <Header />
      <HeroSection />
      <VideoSection />
      <FeaturesSection />
      <ExamplesSection />
      <FooterSection />
    </div>
  );
}

export default App;

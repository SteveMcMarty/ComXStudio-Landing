import Flipbook from './Flipbook';

// Manga Assets
import mangaCover from '../assets/manga/manga_cover_1765184412914.png';
import mangaStory1 from '../assets/manga/manga_story_1_1765184428267.png';
import mangaStory2 from '../assets/manga/manga_story_2_1765184446832.png';

// Comics Assets
import comicsCover from '../assets/comics/comics_cover_1765184461393.png';
import comicsStory1 from '../assets/comics/comics_story_1_1765184477251.png';
import comicsStory2 from '../assets/comics/comics_story_2_1765184493836.png';

// BD Assets
import bdCover from '../assets/bd/bd_cover_1765184511614.png';
import bdStory1 from '../assets/bd/bd_story_1_1765184526900.png';
import bdStory2 from '../assets/bd/bd_story_2_1765184541771.png';

function ExamplesSection(): JSX.Element {
  const mangaPages = [mangaCover, mangaStory1, mangaStory2];
  const comicsPages = [comicsCover, comicsStory1, comicsStory2];
  const bdPages = [bdCover, bdStory1, bdStory2];

  return (
    <section className="bg-white py-20 px-4 pattern-dots overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-comic text-darkest text-center mb-16 tracking-wide uppercase drop-shadow-[3px_3px_0_#9ca3af]">
          Tout est possible !
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

          <div className="transform md:rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
            <Flipbook
              images={mangaPages}
              title="Manga Shonen"
              styleName="Manga"
            />
          </div>

          <div className="transform md:mt-12 hover:scale-105 transition-transform duration-300 z-10">
            <Flipbook
              images={comicsPages}
              title="Comics US"
              styleName="Comics"
            />
          </div>

          <div className="transform md:rotate-[2deg] hover:rotate-0 transition-transform duration-300">
            <Flipbook
              images={bdPages}
              title="Franco-Belge"
              styleName="Bande Dessinée"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default ExamplesSection;

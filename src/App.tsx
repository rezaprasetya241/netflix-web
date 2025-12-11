import "./App.css";
import SectionMovie from "./features/movie/components/section-movie";
import HiglightMovie from "./features/movie/components/highlight-movie";
import PopularMovies from "./features/movie/components/popular-movie";

function App() {
  const listSectionMovie = [
    { title: "Action Movies", idGenre: 28 },
    { title: "Romance Movies", idGenre: 10749 },
    { title: "Documentaries", idGenre: 99 },
  ];
  return (
    <div className="App">
      <HiglightMovie />
      <PopularMovies />
      <div className="p-5">
        {listSectionMovie.map((section) => (
          <SectionMovie
            key={section.idGenre}
            title={section.title}
            idGenre={section.idGenre}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

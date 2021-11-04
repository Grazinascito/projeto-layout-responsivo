import "./App.css";
import Header from "../../Header";
import Footer from "../../Footer";
import { useEffect, useState } from "react";
import Card from "../../Card";

function Home() {
  const [movies, setMovies] = useState([]);

  const loadMoviesData = async () => {
    const response = await fetch(
      `https://tmdb-proxy.cubos-academy.workers.dev/3/discover/movie?language=pt-BR&include_adult=false`,
      {
        method: "GET",
      }
    );

    const { results } = await response.json();
    setMovies(results);
  };
  useEffect(() => {
    console.log(movies);
    loadMoviesData();
  }, []);

  return (
    <div className="container-home">
      <Header />
      <section className="section-movies">
        {movies.map((movie) => (
          
        <Card key={movie.id} cover={movie.backdrop_path} title={movie.title} />
        ))}
      </section>
      <Footer />
    </div>
  );
}

export default Home;

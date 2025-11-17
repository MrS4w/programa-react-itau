import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { getMovies } from "../../api";
import type { Movie } from "../../types";
import Button from "../Button";
import FieldSet from "../FieldSet";
import InputText from "../InputText";
import MovieList from "../MovieList";
import styles from "./MovieSection.module.css";

const MovieSection = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const fetchMovies = async () => {
    try {
      const movies = await getMovies();
      setMovies(movies);
    } catch (error) {
      console.error("Failed to fetch movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <main>
      <section className={styles.container}>
        <FieldSet variant="secondary">
          <InputText placeholder="Buscar filmes..." />
          <Button variant="icon">
            <FaSearch />
          </Button>
        </FieldSet>

        <h1 className={styles.titulo}>Em cartaz</h1>
        <MovieList movies={movies} />
      </section>
    </main>
  );
};

export default MovieSection;

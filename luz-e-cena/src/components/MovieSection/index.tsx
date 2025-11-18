import { FaSearch } from "react-icons/fa";
import useFetchMovies from "../../hooks/userFetchMovies";
import Button from "../Button";
import FieldSet from "../FieldSet";
import InputText from "../InputText";
import MovieList from "../MovieList";
import styles from "./MovieSection.module.css";

const MovieSection = () => {
  const { movies, isLoading, error } = useFetchMovies();

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

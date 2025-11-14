import CardMovie from "../CardMovie";
import styles from "./MovieList.module.css";

type Categoria = "2D" | "3D";

type Censura = "Livre" | "10 anos" | "12 anos" | "14 anos" | "16 anos";

interface Movie {
  id: number;
  src: string;
  alt: string;
  titulo: string;
  genero: string;
  duracao: number;
  categoria: Categoria;
  censura: Censura;
}

interface MovieListProps {
  movies: Movie[];
}

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <ul className={styles.lista}>
      {movies.map((movie: Movie) => (
        <CardMovie key={movie.id} {...movie} />
      ))}
    </ul>
  );
};

export default MovieList;

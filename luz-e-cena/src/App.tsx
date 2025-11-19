import Banner from "./components/Banner";
import Header from "./components/Header";
import MovieSection from "./components/MovieSection";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <>
      <Header />
      <Banner src="./banner.png" alt="Banner" />
      <MovieSection />
      <Banner src="./Imagens/Banner Combo Desktop.png" alt="Footer Banner" />
      <Newsletter />
    </>
  );
}

export default App;

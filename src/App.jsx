import { useEffect, useState } from "react";
import SearchInput from "./components/SearchInput";
import "./App.css";
import { AnimesCantainer } from "./components/AnimesContainer";
import { useGetAnimes } from "./hooks/useGetAnimes";

export default function App() {
  const [text, setText] = useState("");
  const { fetchAnime, animes, error } = useGetAnimes();

  useEffect(() => {
    if (text) {
      fetchAnime({ text });
    }
  }, [text, fetchAnime]);

  return (
    <div className="App">
      <h1>Busque aqui seu Anime favorito</h1>
      <SearchInput value={text} onChange={(search) => setText(search)} />

      <br />
      {text && !animes && <span>Carregando os dados...</span>}
      {animes && <AnimesCantainer animes={animes} />}
    </div>
  );
}

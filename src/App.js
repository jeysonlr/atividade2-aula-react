import { useEffect, useState } from 'react'
import SearchInput from './SearchInput'
import './App.css';

const urlApi = 'https://kitsu.io/api/edge/anime?';

export default function App() {
    const [information, setInformation] = useState({});
    const [text, setText] = useState('')

    useEffect(() => {
        if (text) {
            setInformation({});
            fetch(
                `${urlApi}filter[text]=${text}&page[limit]=12`
            ).then((res) => res.json())
                .then((res) => {
                    setInformation(res)
                });
        }
    }, [text]);

    return (
        <div className="App">
            <h1>Busque aqui seu Anime favorito</h1>
            <SearchInput value={text} onChange={(search) => setText(search)} />
            <br />
            {text && !information.data && (<span>Carregando os dados...</span>)}
            {information.data && (
                <ul className="list_anime">
                    {information.data.map((anime) => (
                        <li key={anime.id}>
                            <img src={anime.attributes.posterImage.small}
                                alt={anime.attributes.canonicalTitle}
                            /> 
                            <br />
                            {anime.attributes.canonicalTitle}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
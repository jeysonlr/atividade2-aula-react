export function AnimesCantainer({ animes }) {
  return (
    <ul className="list_anime">
      {animes?.map((anime) => (
        <li key={anime.id}>
          <img
            src={anime.attributes.posterImage.small}
            alt={anime.attributes.canonicalTitle}
          />
          <br />
          {anime.attributes.canonicalTitle}
        </li>
      ))}
    </ul>
  );
}

import '../stylesheets/TopAnime.css'

function TopAnime({anime}) {
  console.log(anime);

  const animeImages = anime.map((item) => (
    <li key={item.id}>
      <div className='anime-container'>
        <div>
          <img src={item.attributes.posterImage.small} alt={item.attributes.canonicalTitle}></img>
        </div>
        <div className='anime-title'>{item.attributes.canonicalTitle}</div>
      </div>
    </li>
  ))

  return (
    <div id="top-anime">
      <ul>
        {animeImages}
      </ul>
    </div>
  );
}

export default TopAnime;
import "../stylesheets/FavoritedPage.css"
import { NavLink } from 'react-router-dom';


function FavoritedPage({ anime, manga, setSelectedItem, currentUser }) {

  console.log(manga);

  const haveimg = false

  const mappedManga = manga.map(item => (
    <li key={item.id}>
      <div className='favorite-manga-container'>
        <div>
          <NavLink to="/details" onClick={() => setSelectedItem(item)}>
            <img src={item.attributes.posterImage.tiny} alt={item.attributes.canonicalTitle}></img>
          </NavLink>
        </div>
        <div className='favorite-manga-title'>
          <NavLink to="/details" onClick={() => setSelectedItem(item)}>
            {item.attributes.canonicalTitle}
          </NavLink>
        </div>
      </div>
    </li>
  ))

  const mappedAnime = anime.map(item => (
    <li key={item.id}>
      <div className='favorite-anime-container'>
        <div>
          <NavLink to="/details" onClick={() => setSelectedItem(item)}>
            <img src={item.attributes.posterImage.tiny} alt={item.attributes.canonicalTitle}></img>
          </NavLink>
        </div>
        <div className='favorite-anime-title'>
          <NavLink to="/details" onClick={() => setSelectedItem(item)}>
            {item.attributes.canonicalTitle}
          </NavLink>
        </div>
      </div>
    </li>
  ))

  return (
    <div id="favorite-page">
      {
        !currentUser.username ? (
          <div className="prompt-login">
            <p>Please log in</p>
          </div>
        ) : (
          <div className="favorited-container">
            <h1>Favorited Manga</h1>
            <div className="favorited-manga">
              {
                !haveimg ? (
                  <div style={{ height: "300px", backgroundColor: "white" }}></div>
                ) : (
                  <ul>
                    {mappedManga}
                  </ul>
                )
              }
            </div>
            <h1>Favorited Anime</h1>
            <div className="favorited-anime">
              {
                !haveimg ? (
                  <div style={{ height: "300px", backgroundColor: "white" }}></div>
                ) : (
                  <ul>
                    {mappedAnime}
                  </ul>
                )
              }
            </div>
          </div>
        )
      }
    </div>
  );
}

export default FavoritedPage;
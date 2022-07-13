import "../stylesheets/FavoritedPage.css"
import { NavLink, useLocation } from 'react-router-dom';


function FavoritedPage({ setSelectedItem, currentUser, setLastUrl }) {
  const location = useLocation()
  setLastUrl(location.pathname)
  console.log(location)

  let manga = []
  let anime = []
  let mappedManga = []
  let mappedAnime = []

  if (currentUser.username) {
    if (currentUser.favorited.length > 0) {
      manga = currentUser.favorited.filter(item => item.type === "manga")
      anime = currentUser.favorited.filter(item => item.type === "anime")
      // console.log("manga", manga)
      // console.log("anime", anime)
    }
  }

  if (manga.length > 0) {
    mappedManga = manga.map(item => (
      <li key={item.id}>
        <div className='favorite-manga-container'>
          <div>
            <NavLink to={`/details/${item.id}`} onClick={() => setSelectedItem(item)}>
              <img src={item.attributes.posterImage.tiny} alt={item.attributes.canonicalTitle}></img>
            </NavLink>
          </div>
          <div className='favorite-manga-title'>
            <NavLink to={`/details/${item.id}`} onClick={() => setSelectedItem(item)}>
              <div>
                {item.attributes.canonicalTitle}
              </div>
            </NavLink>
          </div>
        </div>
      </li>
    ))
  }

  if (anime.length > 0) {
    mappedAnime = anime.map(item => (
      <li key={item.id}>
        <div className='favorite-anime-container'>
          <div>
            <NavLink to={`/details/${item.id}`} onClick={() => setSelectedItem(item)}>
              <img src={item.attributes.posterImage.tiny} alt={item.attributes.canonicalTitle}></img>
            </NavLink>
          </div>
          <div className='favorite-anime-title'>
            <NavLink to={`/details/${item.id}`} onClick={() => setSelectedItem(item)}>
              <div>
                {item.attributes.canonicalTitle}
              </div>
            </NavLink>
          </div>
        </div>
      </li>
    ))
  }

  return (
    <div id="favorite-page">
      {
        !currentUser.username ? (
          <div className="prompt-login">
            <p>Please log in</p>
          </div>
        ) : (
          <div className="favorited-container">
            <h1 className="favorite-h1">🌸 Favorited Manga 🌸</h1>
            <div className="favorited-manga">
              {
                mappedManga.length === 0 ? (
                  <div >
                  <NavLink to="/">
                    <p>List is empty, click here to add more</p>
                  </NavLink>
                  </div>
                ) : (
                  <ul>
                    {mappedManga}
                  </ul>
                )
              }
            </div>
            <h1 className="favorite-h1">🌸 Favorited Anime 🌸</h1>
            <div className="favorited-anime">
              {
                mappedAnime.length === 0 ? (
                  <div>
                  <NavLink to="/topanime">
                    <p>List is empty, click here to add more</p>
                  </NavLink>
                  </div>
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
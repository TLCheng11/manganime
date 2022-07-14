import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../stylesheets/TopAnime.css'

function TopAnime({ anime, setSelectedItem, setLastUrl }) {
  // const [active, setActive] = useState('')
  const location = useLocation()
  setLastUrl(location.pathname)

  const animeImages = anime.map((item) => (
    <li key={item.id}>
      <div className='anime-container'>
        <div>
          <NavLink to={`/details/${item.id}`} onClick={() => setSelectedItem(item)}>
            <img src={item.attributes.posterImage.small} alt={item.attributes.canonicalTitle}></img>
          </NavLink>
        </div>
        <div className='anime-title'>
          <NavLink to={`/details/${item.id}`} onClick={() => setSelectedItem(item)}>
            {item.attributes.canonicalTitle}
          </NavLink>
        </div>
      </div>
    </li>
  ))

  return (
    <div id="top-anime">
      <h1>50 Most Popular Anime</h1>
        <div className='split-container'>
          <div className='left-panel'>
            <div className='left-wrapper'>
              <div className='left-content'>
                <h3>Demon Slayer</h3>
                <NavLink to="/details/44081">
                <button className='check-button'>Check out</button>
                </NavLink>
              </div>
            </div>
          </div>
          <div className='right-panel'>
            <div className='right-wrapper'>
              <div className='right-content'>
                <h3>Attack on Titan</h3>
              <NavLink to="/details/7442">
                <button className='check-button'>Check out</button>
              </NavLink>  
              </div>
            </div>
          </div>
        </div>

      <ul>
        {animeImages}
      </ul>
    </div>
  );
}

export default TopAnime;
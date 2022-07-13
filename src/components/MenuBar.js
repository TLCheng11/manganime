import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../stylesheets/MenuBar.css'
import searchImg from '../icons/icons8-search.gif'
import favorImg from '../icons/Button-Favorite-icon.png'

function MenuBar() {
  const [style, setStyle] = useState({left: "-120px"})

  function resetMenu() {
    setStyle({left: "-120px"})
  }

  function onRightArrowClick() {
    style.left === "-120px" ? setStyle({left: "0"}) : setStyle({left: "-120px"})
  }

  return (
    <div id="menu-bar" style={style}>
      <div>
        <nav id="nav-bar">
          <div>
            <NavLink to="/" onClick={resetMenu} >
            <h3>Top 50 Manga</h3>
              <img src="https://img.icons8.com/plasticine/100/000000/comics-magazine.png" alt="book-icon" />
            </NavLink>
          </div>
          <div>
            <NavLink to="/topanime" onClick={resetMenu} >
              <h3>Top 50 Anime</h3>
              <img src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/000000/external-tv-ads-icongeek26-linear-colour-icongeek26.png" alt="tv-icon" />
            </NavLink>
          </div>
          <div>
            <NavLink to="/search" onClick={resetMenu} >
              <h3>Search</h3>
              <img src="https://img.icons8.com/bubbles/100/000000/google-web-search.png" alt="search-icon" />
            </NavLink>
          </div>
          <div>
            <NavLink to="/favorited" onClick={resetMenu} >
              <h3>Favorited</h3>
              <img src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-favorite-ui-and-ux-xnimrodx-lineal-color-xnimrodx.png" alt="favor-icon" />
            </NavLink>
          </div>
        </nav>
      </div>
      <div id="arrow-div" onClick={onRightArrowClick}>
        {style.left === "-120px" ?
          <img 
            id="right-arrow" src="http://www.clker.com/cliparts/1/f/a/2/1349807104707654381Next%20Button.svg.med.png" 
            alt="Next Button clip art" 
          /> :
          <img 
            id="left-arrow" src="http://www.clker.com/cliparts/a/2/b/4/11949856162121572095pulsante_04_architetto_f_01.svg.thumb.png" 
            alt="Left Blue Arrow clip art" 
          />
        }
      </div>
    </div>
  );
}

export default MenuBar;
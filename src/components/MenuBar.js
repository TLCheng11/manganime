import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../stylesheets/MenuBar.css'

function MenuBar() {
  const [style, setStyle] = useState({left: "-150px"})

  function resetMenu() {
    setStyle({left: "-150px"})
  }

  function onRightArrowClick() {
    style.left === "-150px" ? setStyle({left: "0"}) : setStyle({left: "-150px"})
  }

  return (
    <div id="menu-bar" style={style}>
      <div>
        <nav id="nav-bar">
          <div>
            <NavLink to="/" onClick={resetMenu} >Top 50 Manga</NavLink>
          </div>
          <div>
            <NavLink to="/topanime" onClick={resetMenu} >Top 50 Anime</NavLink>
          </div>
          <div>
            <NavLink to="/search" onClick={resetMenu} >Search</NavLink>
          </div>
          <div>
            <NavLink to="/favorited" onClick={resetMenu} >Favorited</NavLink>
          </div>
        </nav>
      </div>
      <div id="arrow-div" onClick={onRightArrowClick}>
        {style.left === "-150px" ?
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
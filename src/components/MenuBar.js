import { useState } from 'react';
import '../stylesheets/MenuBar.css'

function MenuBar() {
  const [style, setStyle] = useState({left: "-150px"})

  function onRightArrowClick() {
    style.left === "-150px" ? setStyle({left: "0"}) : setStyle({left: "-150px"})
  }

  return (
    <div id="menuBar" style={style}>
      <div>
        <ul>
          <li>Top 50 Manga</li>
          <li>Top 50 Anime</li>
          <li>favored</li>
        </ul>
      </div>
      <div id="rightArrowDiv" onClick={onRightArrowClick}>
        {style.left === "-150px" ?
          <img 
            id="rightArrow" src="http://www.clker.com/cliparts/1/f/a/2/1349807104707654381Next%20Button.svg.med.png" 
            alt="Next Button clip art" 
          /> :
          <img 
            id="leftArrow" src="http://www.clker.com/cliparts/a/2/b/4/11949856162121572095pulsante_04_architetto_f_01.svg.thumb.png" 
            alt="Left Blue Arrow clip art" 
          />
        }
      </div>
    </div>
  );
}

export default MenuBar;
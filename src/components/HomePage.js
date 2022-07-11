import { useState } from 'react';
import '../stylesheets/HomePage.css'

function HomePage({manga}) {
  console.log(manga)
  const imageTags = manga.map(item => (
    <li key={item.id}>
      <div className='li-container'>
        <div className="li-front">
          <img src={item.attributes.posterImage.small} />
        </div>
        <div className="li-back">
          <h3>{item.attributes.canonicalTitle}</h3>
        </div>
      </div>
    </li>)
  ) 

  return (
    <div id="homepage">
      <ul>
        {imageTags}
      </ul>
    </div>
  );
}

export default HomePage;
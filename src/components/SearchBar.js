import { useState } from 'react';
import searchImg from '../icons/icons8-search.gif'

function SearchBar({searchManganime, searchType, setSearchType, setReset}) {
  const [search, setSearch] = useState("")

  function handleFormSubmit(e) {
    e.preventDefault()
    setReset(true)
    searchManganime(search)
  }

  return (
    <div id="search-bar-container">
      <div id="search-form">
        <form onSubmit={handleFormSubmit}>
          <div className="tb">
            <div className="td">
              <input 
                id="search-bar" 
                type="text" 
                placeholder="Which manga/anime you looking for?..." 
                required
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="td" id="s-cover">
              <button type="submit">
                <div id="s-circle"></div>
                <span></span>
              </button>
            </div>
          </div>
          {/* <input id="search-btn" type="submit" value="" style={{backgroundImage: `url(${searchImg})`}}/> */}
        </form>
      </div>
      <div className="toggle-radio">
        <form className="toggle">
          <input id="choice-manga" name="type" type="radio" value="manga" onChange={(e) => setSearchType(e.target.value)} checked={searchType === "manga"}></input>
          <label htmlFor="choice-manga">Manga</label>
          <input id="choice-anime" name="type" type="radio" value="anime" onChange={(e) => setSearchType(e.target.value)} checked={searchType === "anime"}></input>
          <label htmlFor="choice-anime">Anime</label>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
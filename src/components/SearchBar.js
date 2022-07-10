import { useState } from 'react';
import '../stylesheets/SearchBar.css'

function SearchBar({searchManganime, searchType, setSearchType}) {
  const [search, setSearch] = useState("")

  function handleFormSubmit(e) {
    e.preventDefault()
    searchManganime(search)
  }

  return (
    <div id="search-bar-container">
      <div>
        <form onSubmit={handleFormSubmit}>
          <input 
            id="search-bar" 
            type="text" 
            placeholder="Which manga/anime you looking for?..." 
            required
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <input type="submit"/>
        </form>
      </div>
      <div>
        <form className="tabber">
          <label htmlFor="t1">Manga</label>
          <input id="t1" name="type" type="radio" value="manga" onChange={(e) => setSearchType(e.target.value)} checked={searchType === "manga"}></input>
          <label htmlFor="t2">Anime</label>
          <input id="t2" name="type" type="radio" value="anime" onChange={(e) => setSearchType(e.target.value)} checked={searchType === "anime"}></input>
          <div className="blob"></div>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
import { useState } from 'react';

function SearchBar({searchManganime, searchType, setSearchType, setReset}) {
  const [search, setSearch] = useState("")

  function handleFormSubmit(e) {
    e.preventDefault()
    // setReset(true)
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
      <div className="toggle-cointainer">
        <form className="toggle">
          <input id="choice1" name="type" type="radio" value="manga" onChange={(e) => setSearchType(e.target.value)} checked={searchType === "manga"}></input>
          <label htmlFor="choice1">Manga</label>
          <input id="choice2" name="type" type="radio" value="anime" onChange={(e) => setSearchType(e.target.value)} checked={searchType === "anime"}></input>
          <label htmlFor="choice2">Anime</label>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
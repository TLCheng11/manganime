import { useState } from 'react';
import '../stylesheets/SearchBar.css'

function SearchBar({searchManganime}) {
  const [search, setSearch] = useState("")

  function handleFormSubmit(e) {
    e.preventDefault()
    searchManganime(search)
  }

  return (
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
  );
}

export default SearchBar;
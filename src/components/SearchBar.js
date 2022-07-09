import '../stylesheets/SearchBar.css'

function SearchBar() {
  return (
    <div>
      <input id="searchBar" type="text" placeholder="Which manga/anime you looking for?..." />
      <input type="submit" />
    </div>
  );
}

export default SearchBar;
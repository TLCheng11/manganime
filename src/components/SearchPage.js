import '../stylesheets/SearchPage.css'
import SearchBar from './SearchBar';
import Container from './Container';

function SearchPage({manganime, setSelectedItem, searchManganime, searchType, setSearchType}) {
  return (
    <div>
      <SearchBar searchManganime={searchManganime} searchType={searchType} setSearchType={setSearchType} />
      <Container manganime={manganime} setSelectedItem={setSelectedItem} />
    </div>
  );
}

export default SearchPage;
import '../stylesheets/SearchPage.css'
import SearchBar from './SearchBar';
import Container from './Container';
import { useState } from 'react';

function SearchPage({manganime, setSelectedItem, searchManganime, searchType, setSearchType}) {
  const [reset, setReset] = useState(false)

  return (
    <div>
      <SearchBar searchManganime={searchManganime} searchType={searchType} setSearchType={setSearchType} setReset={setReset} />
      <Container manganime={manganime} setSelectedItem={setSelectedItem} reset={reset} setReset={setReset}/>
    </div>
  );
}

export default SearchPage;
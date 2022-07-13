import '../stylesheets/SearchPage.css'
import SearchBar from './SearchBar';
import Container from './Container';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function SearchPage({manganime, setSelectedItem, searchManganime, searchType, setSearchType, setLastUrl}) {
  const [reset, setReset] = useState(false)
  const location = useLocation()
  setLastUrl(location.pathname)

  return (
    <div>
      <SearchBar searchManganime={searchManganime} searchType={searchType} setSearchType={setSearchType} setReset={setReset} />
      <Container manganime={manganime} setSelectedItem={setSelectedItem} reset={reset} setReset={setReset}/>
    </div>
  );
}

export default SearchPage;
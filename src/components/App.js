import { useEffect, useState } from 'react';
import '../stylesheets/App.css';
import Header from './Header';
import SearchBar from './SearchBar';
import MenuBar from './MenuBar';
import Container from './Container';

function App() {
  const [manganime, setManganime] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

  // useEffect(() => {
  //   const modifiedQuery = searchQuery.toLowerCase().split(" ").join("%20")
  //   fetch(`https://kitsu.io/api/edge/anime?filter[text]=${searchQuery}`)
  //   .then(res => res.json())
  //   .then(setManganime)
  // }, [])

  function searchManganime(search) {
    const modifiedQuery = search.toLowerCase().split(" ").join("%20")
    console.log(modifiedQuery)
    fetch(`https://kitsu.io/api/edge/anime?filter[text]=${modifiedQuery}`)
    .then(res => res.json())
    .then(data => setManganime(data.data))
  }

  console.log(manganime)

  return (
    <div className="App">
      <Header />
      <SearchBar searchManganime={searchManganime} />
      <MenuBar />
      <Container manganime={manganime} />
    </div>
  );
}

export default App;

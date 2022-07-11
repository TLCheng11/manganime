import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import '../stylesheets/App.css';
import Header from './Header';
import HomePage from './HomePage';
import SearchPage from './SearchPage';
import MenuBar from './MenuBar';
import Details from './Details';
import TopAnime from './TopAnime';

function App() {
  const [manganime, setManganime] = useState([])
  const [searchType, setSearchType] = useState("manga")
  const [selectedItem, setSelectedItem] = useState({
    attributes: {
      conoicalTitle: "",
      posterImage: {
        large: ""
      }
    }
  })
  const [manga, setManga] = useState([])
  const [anime, setAnime] = useState([])

  console.log("mange", manga)
  console.log("anime", anime)

  useEffect(() => {
    fetch(`http://localhost:3000/manga`)
    .then(res => res.json())
    .then(setManga)
  }, [])

  useEffect(() => {
    fetch(`http://localhost:3000/anime`)
    .then(res => res.json())
    .then(setAnime)   
  }, [])

  function searchManganime(search) {
    const modifiedQuery = search.toLowerCase().split(" ").join("%20")
    console.log(modifiedQuery)
    fetch(`https://kitsu.io/api/edge/${searchType}?filter[text]=${modifiedQuery}&page[limit]=20&page[offset]=0`, {
      method: "GET",
      headers: {
        "Accept": "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json"
      }
    })
    .then(res => res.json())
    .then(data => setManganime(data.data))
  }

  return (
    <div className="App">
        <Header />
        <MenuBar />
        <Routes>
          <Route index element={<HomePage manga={manga} setSelectedItem={setSelectedItem} />} />
          <Route path="/search" element={<SearchPage manganime={manganime} setSelectedItem={setSelectedItem} searchManganime={searchManganime} searchType={searchType} setSearchType={setSearchType} />} />
          <Route path="/details" element={<Details selectedItem={selectedItem} />} />
          <Route path="/topanime" element={<TopAnime anime={anime}/>} />
        </Routes>
    </div>
  );
}

export default App;

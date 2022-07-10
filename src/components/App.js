import { useEffect, useState } from 'react';
import '../stylesheets/App.css';
import Header from './Header';
import SearchPage from './SearchPage';
import MenuBar from './MenuBar';
import Container from './Container';
import Details from './Details';

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

  // useEffect(() => {
  //   const modifiedQuery = searchQuery.toLowerCase().split(" ").join("%20")
  //   fetch(`https://kitsu.io/api/edge/anime?filter[text]=${searchQuery}`)
  //   .then(res => res.json())
  //   .then(setManganime)
  // }, [])

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

  console.log(manganime)
  console.log(searchType)

  return (
    <div className="App">
      <Header />
      <SearchPage manganime={manganime} setSelectedItem={setSelectedItem} searchManganime={searchManganime} searchType={searchType} setSearchType={setSearchType} />
      <MenuBar />
      <Details selectedItem={selectedItem} />
    </div>
  );
}

export default App;

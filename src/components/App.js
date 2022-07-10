import '../stylesheets/App.css';
import Header from './Header';
import SearchBar from './SearchBar';
import MenuBar from './MenuBar';
import Container from './Container';
import { useEffect, useState } from 'react';

function App() {
  // const [manganime, setManganime] = useState([])
  // const []

  // useEffect(() => {
  //   fetch("https://kitsu.io/api/edge/anime?filter[text]=cowboy%20bebop")
  // })

  return (
    <div className="App">
      <Header />
      <SearchBar />
      <MenuBar />
      <Container />
    </div>
  );
}

export default App;

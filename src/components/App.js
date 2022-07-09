import '../stylesheets/App.css';
import Header from './Header';
import SearchBar from './SearchBar';
import MenuBar from './MenuBar';
import Container from './Container';

function App() {
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

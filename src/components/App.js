import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "../stylesheets/App.css";
import Intro from "./Intro";
import Header from "./Header";
import HomePage from "./HomePage";
import SearchPage from "./SearchPage";
import MenuBar from "./MenuBar";
import Details from "./Details";
import TopAnime from "./TopAnime";
import FavoritedPage from "./FavoritedPage";
import { DATABASE } from "../FetchUrl";

function App() {
  const [manganime, setManganime] = useState([]);
  const [searchType, setSearchType] = useState("manga");
  const [selectedItem, setSelectedItem] = useState({
    attributes: {
      conoicalTitle: "",
      posterImage: {
        large: "",
      },
    },
  });
  const [manga, setManga] = useState([]);
  const [anime, setAnime] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [music, setMusic] = useState("");
  const [lastUrl, setLastUrl] = useState("/");
  const navigate = useNavigate();

  //create an object to holde username and password for conditional checking
  const usersList = {};
  if (users.length > 0) {
    users.forEach((user) => {
      usersList[user.username] = user.password;
    });
  }

  //create a set for the favored item for conditional checking
  const favoritedList = new Set();
  if (currentUser.favorited) {
    currentUser.favorited.forEach((item) => favoritedList.add(item.id));
  }

  console.log("mange", manga);
  console.log("anime", anime);
  // console.log(usersList)
  // console.log(music)

  //to fetch all data once
  useEffect(() => {
    fetch(`${DATABASE}/manga`, {
      headers: {
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then(setManga);

    fetch(`${DATABASE}/anime`, {
      headers: {
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then(setAnime);

    navigate("/");
  }, []);

  useEffect(() => {
    fetch(`${DATABASE}/users`, {
      headers: {
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then(setUsers);
  }, [currentUser]);

  function searchManganime(search) {
    const modifiedQuery = search.toLowerCase().split(" ").join("%20");
    console.log(modifiedQuery);
    fetch(
      `https://kitsu.io/api/edge/${searchType}?filter[text]=${modifiedQuery}&page[limit]=20&page[offset]=0`,
      {
        method: "GET",
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.data.length > 0) {
          setManganime(data.data);
        } else {
          setManganime(data.data);
          alert("no search result");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("no search result");
      });
  }

  //if data not return yet, show loading...
  if (manga.length === 0 || anime.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      {/* {firstStart ? <Intro manga={manga} anime={anime} firstStart={firstStart} setfirstStart={setfirstStart} /> : null} */}
      <Intro manga={manga} anime={anime} setMusic={setMusic} />
      <Header
        users={users}
        usersList={usersList}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        music={music}
      />
      <MenuBar />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              manga={manga}
              setSelectedItem={setSelectedItem}
              setLastUrl={setLastUrl}
            />
          }
        />
        <Route
          path="/search"
          element={
            <SearchPage
              manganime={manganime}
              setSelectedItem={setSelectedItem}
              searchManganime={searchManganime}
              searchType={searchType}
              setSearchType={setSearchType}
              setLastUrl={setLastUrl}
            />
          }
        />
        <Route
          path="/details/:id"
          element={
            <Details
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              favoritedList={favoritedList}
              lastUrl={lastUrl}
            />
          }
        />
        <Route
          path="/topanime"
          element={
            <TopAnime
              anime={anime}
              setSelectedItem={setSelectedItem}
              setLastUrl={setLastUrl}
            />
          }
        />
        <Route
          path="/favorited"
          element={
            <FavoritedPage
              setSelectedItem={setSelectedItem}
              currentUser={currentUser}
              setLastUrl={setLastUrl}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;

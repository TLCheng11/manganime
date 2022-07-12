import { useState } from 'react';
import '../stylesheets/Details.css'

function Details({selectedItem, currentUser, setCurrentUser, favoritedList}) {
  const {id, attributes, type} = selectedItem
  const [favorited, setFavorited] = useState(favoritedList.has(id))

  function addCollection() {
    const updatedFavorite = {
      favorited: [
        ...currentUser.favorited,
        selectedItem
      ]
    }
    fetch(`http://localhost:3000/users/${currentUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(updatedFavorite)
    })
    .then(res => res.json())
    .then(data => {
      setCurrentUser(data)
      setFavorited(true)
    })
    .catch(console.error)
  }

  function removeCollection() {
    const updatedFavorite = {
      favorited: currentUser.favorited.filter(item => item.id !== id)
    }
    fetch(`http://localhost:3000/users/${currentUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(updatedFavorite)
    })
    .then(res => res.json())
    .then(data => {
      setCurrentUser(data)
      setFavorited(false)
    })
    .catch(console.error)
  }

  //temporay function to edit our own json
  // const [rank, setRank] = useState("")

  // function addDataToJson(e) {
  //   e.preventDefault()
  //   fetch(`http://localhost:3000/${type}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json",
  //       "Accept": "application/json"
  //     },
  //     body: JSON.stringify({...selectedItem, rank})
  //   })
  // }


  return (
    <div id="detail-outer">
      {
        !currentUser.username ? (
          null
        ) : (
          <div>
            {
              !favorited ? (
                <button onClick={addCollection}>Add to my collection</button>
              ) : (
                <button onClick={removeCollection}>Delete from my collection</button>
              )
            }
          </div>
        )
      }
      <div id="details-container">
        <div id="poster">
          <img src={attributes.posterImage.large} alt={attributes.canonicalTitle} />
        </div>
        <div id="details">
          <h1>{attributes.canonicalTitle}</h1>
          {/* temporay form for adding data base */}
          {/* <form onSubmit={addDataToJson}>
            <label htmlFor="rank">Rank:</label>
            <input type="number" name="rank" value={rank} onChange={(e) => setRank(e.target.value)} required/>
            <input type="submit" value="add to data base"/>
          </form> */}
        </div>
      </div>
    </div>
  );
}

export default Details;
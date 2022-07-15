import { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import '../stylesheets/Details.css'

function Details({ selectedItem, setSelectedItem, currentUser, setCurrentUser, favoritedList, lastUrl }) {
  const param = useParams()
  const { id, attributes, links } = selectedItem
  const [favorited, setFavorited] = useState(favoritedList.has(id))


  if (selectedItem.id !== param.id) {
    fetch(`http://localhost:3000/anime?id=${param.id}`)
    .then(res => res.json())
    .then(data => setSelectedItem(data[0]))
    return <p>Loading....</p>
  }


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
          <NavLink to={lastUrl}>
            <button className='back-button'>Back</button>
          </NavLink>
        ) : (
          <div>
          <NavLink to={lastUrl}>
            <button className='back-button'>Back</button>
          </NavLink>
            {
              !favorited ? (
                <button className='add-button' onClick={addCollection}>Add to my collection</button>
              ) : (
                <button className='delete-button' onClick={removeCollection}>Delete from my collection</button>
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
          {/* if youtubeVideoId is available then show it, if not return null */}
          {
            attributes.youtubeVideoId ? (
              <iframe src={`//youtube.com/embed/${attributes.youtubeVideoId}`} width="65%" height="45%" allowFullScreen></iframe>
            ) : (
              null
            )
          }
          {/* if ageRating is available then show it, if not return null  */}
          {
            attributes.ageRating ? (
              <p><span>Rated: </span>{attributes.ageRating}</p>
            ) : (
              null
            )
          }
          {/* if averageRating is available then show it, if not return null*/}
          {
            attributes.averageRating ? (
              <p><span>Rating: </span> {attributes.averageRating}</p>
            ) : (
              null
            )
          }

          {/* if startDate is available then show it, if not return null */}
          {
            attributes.startDate ? (
              <p><span>Start date: </span>{attributes.startDate}</p>
            ) : (
              null
            )
          }
          {/* if endDate is available then show it, if not return "on-going" */}
          {
            attributes.endDate ? (
              <p><span>End date: </span>{attributes.endDate}</p>
            ) : (
              <p><span>End date: </span> On-going</p>
            )
          }
          {/* if description is available then show it, if not return null */}
          {
            attributes.description ? (
              <p className='description-info'><span>Description:</span> {attributes.description}</p>
            ) : (
              null
            )
          }
          {/* if links is available then show it, if not return null */}
          {
            links.self ? (
              <p>
                <a href={links.self.replace("/api/edge", "")} target="_blank">Read more!</a>
              </p>
            ) : (
              null
            )
          }
          {/* if serialization */}
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
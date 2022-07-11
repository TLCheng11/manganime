import { useEffect, useRef, useState } from 'react';
import '../stylesheets/Intro.css'

function Intro({manga, anime, firstStart, setfirstStart}) {
  const [image, setImage] = useState({backgroundImage : `url(${manga[Math.floor(Math.random() * 50)].attributes.coverImage.original})`})
  let intervalId = 0

  console.log("manga", manga)
  console.log("anime", anime)

  const body = document.body
  body.style.overflow = firstStart ? "hidden" : "auto"

  const elementRef = useRef()
  const intro = elementRef.current

  useEffect(() => {
    intervalId = setInterval(() => {
      const randomNum = Math.floor(Math.random() * 100)
      console.log(randomNum)
      let imageUrl = ""
      if (randomNum < 50) {
        console.log(manga[randomNum])
        imageUrl = manga[randomNum].attributes.coverImage.original
      } else {
        imageUrl = anime[randomNum - 50].attributes.coverImage.original
      }
      setImage({backgroundImage : `url(${imageUrl})`})
      console.log(imageUrl)
    }, 6000);

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  function enterWebpage() {
    body.style.overflow = "auto"
    intro.style.opacity = "0"
    setTimeout(() => {
      intro.style.pointerEvents = "none"
      clearInterval(intervalId)
      setfirstStart(false)
    }, 2000)
  }

  return (
    <div id="intro" style={image} ref={elementRef}>
      <div id="intro-title" onClick={enterWebpage} >
        MANGANIME
      </div>
    </div>
  );
}

export default Intro;
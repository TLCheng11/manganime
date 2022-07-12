import { useEffect, useRef, useState } from 'react';
import '../stylesheets/Intro.css'

function Intro({manga, anime, firstStart, setfirstStart}) {
  const imageBackGround = []
  manga.forEach(item => {
    if (item.attributes.coverImage) {
      imageBackGround.push(item.attributes.coverImage.original)
    }
  })
  anime.forEach(item => {
    if (item.attributes.coverImage) {
      imageBackGround.push(item.attributes.coverImage.original)
    }
  })

  const [image, setImage] = useState({backgroundImage : `url(${imageBackGround[Math.floor(Math.random() * imageBackGround.length)]})`})
  let intervalId = 0
  
  
  // console.log("manga", manga)
  // console.log("anime", anime)
  // console.log(imageBackGround)


  const introRef = useRef()
  const intro = introRef.current
  const introTitleRef = useRef()
  const introTitle = introTitleRef.current

  useEffect(() => {
    intervalId = setInterval(() => {
      const randomNum = Math.floor(Math.random() * imageBackGround.length)
      // console.log(randomNum)
      let imageUrl = imageBackGround[randomNum]
      setImage({backgroundImage : `url(${imageUrl})`})
      // console.log(imageUrl)
    }, 4000);

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  function enterWebpage() {
    // body = document.body
    // body.style.overflow = "auto"
    intro.style.opacity = "0"
    setTimeout(() => {
      intro.style.pointerEvents = "none"
      introTitle.style.display = "none"
      intro.style.zIndex = "-200"
      intro.style.opacity = "0.5"
      // clearInterval(intervalId)
      setfirstStart(false)
    }, 2000)
  }

  return (
    <div id="intro" style={image} ref={introRef}>
      <div id="intro-title" onClick={enterWebpage} ref={introTitleRef} >
        MANGANIME
      </div>
    </div>
  );
}

export default Intro;
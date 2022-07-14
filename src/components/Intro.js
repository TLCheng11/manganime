import { useEffect, useRef, useState } from 'react';
import '../stylesheets/Intro.css'
import musicLink from '../audio/Rhythm-Emotion-128-kbps-s.shabakngy.com.mp3'
import gif1 from '../gif/attack-on-titan.gif'
import gif2 from '../gif/sakura.gif'
import gif3 from '../gif/evangelion-logo.gif'
import gif4 from '../gif/code-geass-fight.gif'
import gif5 from '../gif/code-geass-zero.gif'
import gif6 from '../gif/gundam-wing-start.gif'
import gif7 from '../gif/slam-dunk.gif'

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

  // const [image, setImage] = useState({backgroundImage : `url(${imageBackGround[Math.floor(Math.random() * imageBackGround.length)]})`})
  const [image, setImage] = useState(imageBackGround[Math.floor(Math.random() * imageBackGround.length)])
  let intervalId = 0
  
  
  // console.log("manga", manga)
  // console.log("anime", anime)
  // console.log(imageBackGround)
  
  const musicElementRef = useRef()
  const videobgRef =useRef()
  const gif1Ref = useRef()
  const gif2Ref = useRef()
  const gif3Ref = useRef()
  const gif4Ref = useRef()
  const gif5Ref = useRef()
  const gif6Ref = useRef()
  const gif7Ref = useRef()

  const introRef = useRef()
  const intro = introRef.current
  const introTitleRef = useRef()
  const introTitle = introTitleRef.current

  //loop random image
  useEffect(() => {
    intervalId = setInterval(() => {
      const randomNum = Math.floor(Math.random() * imageBackGround.length)
      // console.log(randomNum)
      // let imageUrl = imageBackGround[randomNum]
      // setImage({backgroundImage : `url(${imageUrl})`})
      setImage(imageBackGround[randomNum])
      // console.log(imageUrl)
    }, 4000);

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  function enterWebpage() {
    // body = document.body
    // body.style.overflow = "auto"
    musicElementRef.current.play()
    startIntroVideo()
    introTitle.style.display = "none"
    window.scrollTo(0, 0)
    setTimeout(() => {
      intro.style.opacity = "0"
      intro.style.zIndex = "-200"
    }, 28000)
    setTimeout(() => {
      intro.style.pointerEvents = "none"
      intro.style.transition = "opacity 1s"
      // clearInterval(intervalId)
      intro.style.opacity = "0.5"
      setfirstStart(false)
    }, 30000)
  }

  // useEffect(() => {
  //   setTimeout(() => {
  //     startIntroVideo()
  //   })
  // }, [])

  //use effect for intro video
  function startIntroVideo() {
    videobgRef.current.style.zIndex = "500"
    setTimeout(() => {
      gif1Ref.current.style.opacity = "1"
      // console.log("1s")
    }, 1000)
    setTimeout(() => {
      gif1Ref.current.style.opacity = "0"
      // console.log("3.5s")
    }, 5500)
    setTimeout(() => {
      gif2Ref.current.style.opacity = "1"
    }, 5000)
    setTimeout(() => {
      gif2Ref.current.style.opacity = "0"
    }, 10500)
    setTimeout(() => {
      gif3Ref.current.style.opacity = "1"
    }, 10000)
    setTimeout(() => {
      gif3Ref.current.style.opacity = "0"
    }, 17500)
    setTimeout(() => {
      gif4Ref.current.style.opacity = "1"
    }, 17000)
    setTimeout(() => {
      gif4Ref.current.style.opacity = "0"
    }, 20500)
    setTimeout(() => {
      gif5Ref.current.style.opacity = "1"
    }, 20000)
    setTimeout(() => {
      gif5Ref.current.style.opacity = "0"
    }, 23500)
    setTimeout(() => {
      gif6Ref.current.style.opacity = "1"
    }, 23000)
    setTimeout(() => {
      gif6Ref.current.style.opacity = "0"
    }, 24000)
    setTimeout(() => {
      gif7Ref.current.style.opacity = "1"
    }, 24000)
    setTimeout(() => {
      gif7Ref.current.style.opacity = "0"
    }, 26000)
    setTimeout(() => {
      videobgRef.current.style.opacity = "0"
    }, 28400)
    setTimeout(() => {
      videobgRef.current.style.zIndex = "-500"
    }, 32000)
  }

  return (
    <div id="intro" ref={introRef}>
      <div id="video-background" ref={videobgRef} >
        <img id="gif-1" src={gif1} ref={gif1Ref} />
        <img id="gif-2" src={gif2} ref={gif2Ref} />
        <img id="gif-3" src={gif3} ref={gif3Ref} />
        <img id="gif-4" src={gif4} ref={gif4Ref} />
        <img id="gif-5" src={gif5} ref={gif5Ref} />
        <img id="gif-6" src={gif6} ref={gif6Ref} />
        <img id="gif-7" src={gif7} ref={gif7Ref} />
      </div>
      <audio autoPlay controls loop id="background-music" type="audio/mpeg" src={musicLink} ref={musicElementRef} ></audio>
      <img src={image} />
      <div id="intro-title" onClick={enterWebpage} ref={introTitleRef} >
        MANGANIME
      </div>
    </div>
  );
}

export default Intro;
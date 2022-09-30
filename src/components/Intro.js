import { useEffect, useRef, useState } from "react";
import "../stylesheets/Intro.css";
import musicLink from "../audio/Rhythm-Emotion-128-kbps-s.shabakngy.com.mp3";
import gif1 from "../gif/attack-on-titan.gif";
import gif2 from "../gif/golbin-slayer.gif";
import gif3 from "../gif/eva-1.gif";
import gif3a from "../gif/eva-2.gif";
import gif3b from "../gif/naruto.gif";
import gif3c from "../gif/anime-demon-slayer.gif";
import gif3d from "../gif/one-punch-man.gif";
import gif4 from "../gif/code-geass-fight.gif";
import gif5 from "../gif/code-geass-zero.gif";
import gif6 from "../gif/gundam-wing-start.gif";
import gif7 from "../gif/slam-dunk.gif";

function Intro({ manga, anime, setMusic }) {
  const [firstStart, setfirstStart] = useState(true);

  //to find all available image and put into and array
  const imageBackGround = [];
  manga.forEach((item) => {
    if (item.attributes.coverImage) {
      imageBackGround.push(item.attributes.coverImage.original);
    }
  });
  anime.forEach((item) => {
    if (item.attributes.coverImage) {
      imageBackGround.push(item.attributes.coverImage.original);
    }
  });

  // const [image, setImage] = useState({backgroundImage : `url(${imageBackGround[Math.floor(Math.random() * imageBackGround.length)]})`})
  const [image, setImage] = useState(
    imageBackGround[Math.floor(Math.random() * imageBackGround.length)]
  );

  // console.log("manga", manga)
  // console.log("anime", anime)
  // console.log(imageBackGround)

  const musicElementRef = useRef();
  const videobgRef = useRef();
  const gif1Ref = useRef();
  const gif2Ref = useRef();
  const gif3Ref = useRef();
  const gif3aRef = useRef();
  const gif3bRef = useRef();
  const gif3cRef = useRef();
  const gif3dRef = useRef();
  const gif4Ref = useRef();
  const gif5Ref = useRef();
  const gif6Ref = useRef();
  const gif7Ref = useRef();

  const introRef = useRef();
  const intro = introRef.current;
  const introTitleRef = useRef();
  const introTitle = introTitleRef.current;

  const timerIds = useRef([]);

  //loop random image
  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomNum = Math.floor(Math.random() * imageBackGround.length);
      // console.log(randomNum)
      // let imageUrl = imageBackGround[randomNum]
      // setImage({backgroundImage : `url(${imageUrl})`})
      setImage(imageBackGround[randomNum]);
      // console.log(imageUrl)
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function enterWebpage() {
    if (introTitle) {
      musicElementRef.current.play();
      setMusic(musicElementRef.current);
      startIntroVideo();
      introTitle.style.display = "none";
      timerIds.current.push(
        setTimeout(() => {
          skipIntro();
        }, 27600)
      );
    }
  }

  function skipIntro() {
    console.log(timerIds);
    videobgRef.current.style.pointerEvents = "none";
    timerIds.current.forEach((id) => {
      clearInterval(id);
    });
    window.scrollTo(0, 0);
    setTimeout(() => {
      intro.style.opacity = "0";
      intro.style.zIndex = "-200";
    }, 500);
    setTimeout(() => {
      intro.style.pointerEvents = "none";
      intro.style.transition = "opacity 1s";
      intro.style.opacity = "0.5";
      setfirstStart(false);
    }, 1500);
  }

  //function to start intro video
  function startIntroVideo() {
    videobgRef.current.style.zIndex = "500";
    videobgRef.current.style.opacity = "1";
    timerIds.current.push(
      setTimeout(() => {
        gif1Ref.current.style.opacity = "1";
      }, 1000)
    );
    timerIds.current.push(
      setTimeout(() => {
        gif1Ref.current.style.opacity = "0";
      }, 2500)
    );
    timerIds.current.push(
      setTimeout(() => {
        gif2Ref.current.style.opacity = "1";
      }, 3000)
    );
    timerIds.current.push(
      setTimeout(() => {
        gif2Ref.current.style.opacity = "0";
      }, 5500)
    );
    timerIds.current.push(
      setTimeout(() => {
        gif3Ref.current.style.opacity = "1";
      }, 5000)
    );
    timerIds.current.push(
      setTimeout(() => {
        gif3Ref.current.style.opacity = "0";
      }, 9000)
    );
    timerIds.current.push(
      setTimeout(() => {
        gif3aRef.current.style.opacity = "1";
      }, 8500)
    );
    timerIds.current.push(
      setTimeout(() => {
        gif3aRef.current.style.opacity = "0";
      }, 10500)
    );
    timerIds.current.push(
      setTimeout(() => {
        gif3bRef.current.style.opacity = "1";
      }, 10000)
    );
    timerIds.current.push(
      setTimeout(() => {
        gif3bRef.current.style.opacity = "0";
      }, 12500)
    );
    timerIds.current.push(
      setTimeout(() => {
        gif3cRef.current.style.opacity = "1";
      }, 12000)
    );
    timerIds.current.push(
      setTimeout(() => {
        gif3cRef.current.style.opacity = "0";
      }, 15500)
    );
    timerIds.current.push(
      setTimeout(() => {
        gif3dRef.current.style.opacity = "1";
      }, 15000)
    );
    timerIds.current.push(
      setTimeout(() => {
        gif3dRef.current.style.opacity = "0";
      }, 17500)
    );
    timerIds.current.push(
      setTimeout(() => {
        gif4Ref.current.style.opacity = "1";
      }, 17000)
    );
    timerIds.current.push(
      setTimeout(() => {
        gif4Ref.current.style.opacity = "0";
      }, 20500)
    );
    timerIds.current.push(
      setTimeout(() => {
        gif5Ref.current.style.opacity = "1";
      }, 20000)
    );
    timerIds.current.push(
      setTimeout(() => {
        gif5Ref.current.style.opacity = "0";
      }, 23500)
    );
    timerIds.current.push(
      setTimeout(() => {
        gif6Ref.current.style.opacity = "1";
      }, 23000)
    );
    timerIds.current.push(
      setTimeout(() => {
        gif6Ref.current.style.opacity = "0";
      }, 24000)
    );
    timerIds.current.push(
      setTimeout(() => {
        gif7Ref.current.style.opacity = "1";
      }, 24000)
    );
    timerIds.current.push(
      setTimeout(() => {
        gif7Ref.current.style.opacity = "0";
      }, 26000)
    );
    timerIds.current.push(
      setTimeout(() => {
        videobgRef.current.style.opacity = "0";
      }, 28000)
    );
    timerIds.current.push(
      setTimeout(() => {
        videobgRef.current.style.zIndex = "-500";
      }, 30000)
    );
  }

  return (
    <div id="intro" ref={introRef}>
      {firstStart ? (
        <div id="video-background" ref={videobgRef} onClick={skipIntro}>
          <img id="gif-1" src={gif1} ref={gif1Ref} alt={gif1} />
          <img id="gif-2" src={gif2} ref={gif2Ref} alt={gif2} />
          <img id="gif-3" src={gif3} ref={gif3Ref} alt={gif3} />
          <img id="gif-3a" src={gif3a} ref={gif3aRef} alt={gif3a} />
          <img id="gif-3b" src={gif3b} ref={gif3bRef} alt={gif3b} />
          <img id="gif-3c" src={gif3c} ref={gif3cRef} alt={gif3c} />
          <img id="gif-3d" src={gif3d} ref={gif3dRef} alt={gif3d} />
          <img id="gif-4" src={gif4} ref={gif4Ref} alt={gif4} />
          <img id="gif-5" src={gif5} ref={gif5Ref} alt={gif5} />
          <img id="gif-6" src={gif6} ref={gif6Ref} alt={gif6} />
          <img id="gif-7" src={gif7} ref={gif7Ref} alt={gif7} />
        </div>
      ) : null}
      <audio
        controls
        loop
        id="background-music"
        type="audio/mpeg"
        src={musicLink}
        ref={musicElementRef}
      ></audio>
      <img src={image} />
      <div id="intro-title" onClick={enterWebpage} ref={introTitleRef}>
        MANGANIME
      </div>
    </div>
  );
}

export default Intro;

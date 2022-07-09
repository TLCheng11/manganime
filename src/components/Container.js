import '../stylesheets/Container.css'

function Container() {
  function pageFlip(e) {
    if (e.target.classList.contains("book__page-front")) {
      e.target.parentNode.style.transition = "z-index 1.5s linear 0.5s, transform 1.5s"
      e.target.parentNode.style.transform = "rotateY(-180deg)"
      const index = parseInt(e.target.parentNode.style.zIndex) * -1
      e.target.parentNode.style.zIndex = `${index}`
    } else {
      e.target.parentNode.style.transition = "z-index 1s, transform 1.5s"
      e.target.parentNode.style.transform = ""
      const index = parseInt(e.target.parentNode.style.zIndex) * -1
      e.target.parentNode.style.zIndex = `${index}`
    }
  }

  return (
    <div id='container'>
      <div className="cover">
        <div className="book">
          <div className="book__page book__page--1" >
            <h1>THIS IS PAGE 1</h1>
            <div className="page__number">1</div>
          </div>

          <div className="book__page book__page--last">
            <h1>THIS IS PAGE last</h1>
            <div className="page__number">last</div>
          </div>

          <div className="book__page book__page--innerpages" style={{zIndex: "1"}}>
            <div className="book__page-front" onClick={pageFlip}>
              <h1>THIS IS PAGE 6</h1>
              <div className="page__number">6</div>
            </div>
            <div className="book__page-back" onClick={pageFlip}>
              <h1>THIS IS PAGE 7</h1>
              <div className="page__number">7</div>
            </div>
          </div>
        
          <div className="book__page book__page--innerpages" style={{zIndex: "2"}}>
            <div className="book__page-front" onClick={pageFlip}>
              <h1>THIS IS PAGE 4</h1>
              <div className="page__number">4</div>
            </div>
            <div className="book__page-back" onClick={pageFlip}>
              <h1>THIS IS PAGE 5</h1>
              <div className="page__number">5</div>
            </div>
          </div>

          <div className="book__page book__page--innerpages" style={{zIndex: "3"}}>
            <div className="book__page-front" onClick={pageFlip}>
              <h1>THIS IS PAGE 2</h1>
              <div className="page__number">2</div>
            </div>
            <div className="book__page-back" onClick={pageFlip}>
              <h1>THIS IS PAGE 3</h1>
              <div className="page__number">3</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Container;
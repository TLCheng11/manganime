import Thumbnail from "./Thumbnail"

function Pages({items, zIndex, page}) {
  
  function pageFlip(e) {
      if (e.target.classList.contains("book__page-front")) {
        e.target.parentNode.style.transition = "z-index 1.5s linear 0.5s, transform 1.5s"
        e.target.parentNode.style.transform = "rotateY(-180deg)"
        const index = parseInt(e.target.parentNode.style.zIndex) * -1
        e.target.parentNode.style.zIndex = `${index}`
      } else {
        e.target.parentNode.style.transition = "z-index 0.5s, transform 1.5s"
        // e.target.parentNode.parentNode.style.transition = "z-index 1s, transform 1.5s"
        e.target.parentNode.style.transform = ""
        const index = parseInt(e.target.parentNode.style.zIndex) * -1
        e.target.parentNode.style.zIndex = `${index}`
      }
    }  

  return (
    <div className="book__page book__page--innerpages" style={{zIndex: `${zIndex}`}}>
      <div className="book__page-front" onClick={pageFlip}>
        {/* <h1>THIS HAS ITEM:</h1> */}
        {items.slice(0, 4).map(item => <Thumbnail key={item.id} item={item} />)}
        {/* <p>{items.slice(0, 4).join(", ")}</p> */}
        <div className="page__number">{page - 1}</div>
      </div>
      <div className="book__page-back" onClick={pageFlip}>
        {/* <h1>THIS HAS ITEM:</h1> */}
        {items.slice(4).map(item => <Thumbnail key={item.id} item={item} />)}
        {/* <p>{items.slice(4).join(", ")}</p> */}
        <div className="page__number">{page}</div>
      </div>
    </div>
  );
}

export default Pages;
import { useEffect, useRef } from "react";
import Thumbnail from "./Thumbnail";

function Pages({ items, zIndex, page, setSelectedItem, reset, setReset }) {
  const elementRef = useRef();

  const div = elementRef.current;
  // console.log("inner", elementRef, "div", div)
  // console.log(reset)

  // reset pages order when there is a new item
  useEffect(() => {
    if (reset && div) {
      div.style.transition = "z-index 0.5s, transform 1.5s";
      div.style.zIndex = `${zIndex}`;
      div.style.transform = "";
      setReset(false);
    }
  }, [items]);

  function pageFlip(e) {
    if (e.target.classList.contains("book__page-front")) {
      e.target.parentNode.style.transition =
        "z-index 1.5s linear 0.5s, transform 1.5s";
      e.target.parentNode.style.transform = "rotateY(-180deg)";
      const index = parseInt(e.target.parentNode.style.zIndex) * -1;
      e.target.parentNode.style.zIndex = `${index}`;
    } else {
      e.target.parentNode.style.transition = "z-index 0.5s, transform 1.5s";
      e.target.parentNode.style.transform = "";
      const index = parseInt(e.target.parentNode.style.zIndex) * -1;
      e.target.parentNode.style.zIndex = `${index}`;
    }
  }

  return (
    <div
      className="book__page book__page--innerpages"
      style={{ zIndex: `${zIndex}` }}
      ref={elementRef}
    >
      <div className="book__page-front" onClick={pageFlip}>
        <div className="itemsContainer">
          {items.slice(0, 4).map((item) => (
            <Thumbnail
              key={item.id}
              item={item}
              setSelectedItem={setSelectedItem}
            />
          ))}
        </div>
        <div className="page__number">{page - 1}</div>
      </div>
      <div className="book__page-back" onClick={pageFlip}>
        <div className="itemsContainer">
          {items.slice(4).map((item) => (
            <Thumbnail
              key={item.id}
              item={item}
              setSelectedItem={setSelectedItem}
            />
          ))}
        </div>
        <div className="page__number">{page}</div>
      </div>
    </div>
  );
}

export default Pages;

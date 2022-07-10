import '../stylesheets/Container.css'
import Pages from './Pages'

function Container() {
  const list = Array.from(Array(50).keys())
  // console.log(list)
  
  const pages = list.slice(4, -(list.length % 4))
  // console.log(showPages)

  const pageTags = []

  for (let i = 0; i < pages.length; i += 8) {
    if (i + 8 > pages.length && Math.ceil(list.length / 4) % 2 !== 0) {
      const cur_pages = list.slice(i + 4)
      pageTags.push(<Pages key={i} items={cur_pages} zIndex={list.length - i} page={(i + 4) / 4 + 2} />)
    } else {
      const cur_pages = pages.slice(i, i + 8)
      pageTags.push(<Pages key={i} items={cur_pages} zIndex={list.length - i} page={(i + 4) / 4 + 2} />)
    }
  }

  // console.log(pageTags)

  return (
    <div id='container'>
      <div className="cover">
        <div className="book">
          <div className="book__page book__page--1" >
            <h1>THIS HAS ITEM:</h1>
            <p>{list.slice(0, 4).join(", ")}</p>
            <div className="page__number">1</div>
          </div>

          <div className="book__page book__page--last">
            <h1>THIS HAS ITEM:</h1>
            <p>{Math.ceil(list.length / 4) % 2 !== 0 ? <span>Last Page</span> : list.slice(-(list.length % 4)).join(", ")}</p>
            <div className="page__number">
              {Math.ceil(list.length / 4) % 2 !== 0 ? Math.ceil(list.length / 4) + 1 : Math.ceil(list.length / 4)}
            </div>
          </div>

          {pageTags}
        </div>
      </div>
    </div>
  );
}

export default Container;
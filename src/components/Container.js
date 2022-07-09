import '../stylesheets/Container.css'
import Pages from './Pages'

function Container() {
  const arr = Array.from(Array(50).keys())
  // console.log(arr)
  
  const pages = arr.slice(4, -(arr.length % 4))
  // console.log(showPages)

  const pageTags = []

  for (let i = 0; i < pages.length; i += 8) {
    const cur_pages = pages.slice(i, i + 8)
    pageTags.push(<Pages key={i} items={cur_pages} zIndex={arr.length - i} page={(i + 8) / 8 + 1} />)
  }

  console.log(pageTags)

  return (
    <div id='container'>
      <div className="cover">
        <div className="book">
          <div className="book__page book__page--1" >
            <h1>THIS HAS ITEM</h1>
            <p>{arr.slice(0, 4)}</p>
            <div className="page__number">1</div>
          </div>

          <div className="book__page book__page--last">
            <h1>THIS HAS ITEM</h1>
            <p>{arr.slice(-(arr.length % 4))}</p>
            <div className="page__number">{Math.ceil(arr.length / 4)}</div>
          </div>

          {pageTags}
        </div>
      </div>
    </div>
  );
}

export default Container;
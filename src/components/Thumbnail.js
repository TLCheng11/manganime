import '../stylesheets/Thumbnail.css'
import { NavLink } from 'react-router-dom';

function Thumbnail({item, setSelectedItem}) {
  const {id, attributes} = item

  // const itemTitle = attributes.titles.en_us ? attributes.titles.en_us : (attributes.titles.en ? attributes.titles.en : attributes.titles.en_jp)

  const itemTitle = attributes.canonicalTitle

  return (
    <div className="item">
      <h5 className="item-title">{itemTitle}</h5>
      <NavLink to={`/details/${item.id}`}>
        <img src={attributes.posterImage.tiny} alt={attributes.posterImage.tiny} onClick={() => setSelectedItem(item)} />
      </NavLink>
    </div>
  );
}

export default Thumbnail;
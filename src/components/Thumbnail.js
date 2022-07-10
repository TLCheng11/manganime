import '../stylesheets/Thumbnail.css'

function Thumbnail({item, setSelectedItem}) {
  const {id, attributes} = item

  const itemTitle = attributes.titles.en_us ? attributes.titles.en_us : (attributes.titles.en ? attributes.titles.en : attributes.titles.en_jp)

  return (
    <div className="item">
      <h5 className="item-title">{itemTitle}</h5>
      <img src={attributes.posterImage.tiny} alt={attributes.posterImage.tiny} onClick={() => setSelectedItem(item)} />
    </div>
  );
}

export default Thumbnail;
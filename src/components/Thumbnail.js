import '../stylesheets/Thumbnail.css'

function Thumbnail({item}) {
  const {id, attributes} = item

  const itemTitle = attributes.titles.en_us ? attributes.titles.en_us : (attributes.titles.en ? attributes.titles.en : attributes.titles.en_jp)

  return (
    <div className="item">
      <h5 className="itemTitle">{itemTitle}</h5>
      <img src={attributes.posterImage.tiny} alt={attributes.posterImage.tiny} />
    </div>
  );
}

export default Thumbnail;
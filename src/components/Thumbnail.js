import '../stylesheets/Thumbnail.css'

function Thumbnail({item}) {
  const {id, attributes} = item

  return (
    <div>
      <h5 id="title">{attributes.titles.en_us ? attributes.titles.en_us : attributes.titles.en}</h5>
      <img src={attributes.posterImage.tiny} alt={attributes.posterImage.tiny} />
    </div>
  );
}

export default Thumbnail;
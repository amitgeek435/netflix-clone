function Card(props) {
  //   console.log(props);
  return (
    <>
      <div className="card">
        <img className="card-img-top" src={props.imgsrc} alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.desc}</p>
          <a href={props.link} target="_blank">
            <button className="btn btn-sm btn-primary">Watch Now </button>
          </a>
        </div>
      </div>
    </>
  );
}
export default Card;

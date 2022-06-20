import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  const img1 = 'https://picsum.photos/seed/picsum/200/300';
  const img2 = 'https://picsum.photos/id/247/200/300';
  const img3 = 'https://picsum.photos/id/257/200/300';
  const img4 = 'https://picsum.photos/id/277/200/300';
  const img5 = 'https://picsum.photos/id/297/200/300';
  
  var cStyle = {
    width : '18rem'
  }
  return(
    <>
      <div className="container">
      <h1 className="text-info text-center">Hello Netflix-clone</h1>
        <div className="card" style={cStyle}>
          <img className="card-img-top" src={img1} alt="Card cap" />
          <div className="card-body">
            <h5 className="card-title">Extracurricular</h5>
            <p className="card-text">A model high school student who's steeped in a world of serious crime finds his double life upended when a classmate takes an interest in his secret.</p>
            <a href="http://www.netflix.com/in/title/80990668?source=35" target="_blank"><button className="btn btn-lg btn-primary">Watch Now  </button></a>
          </div>
        </div>
        <div className="card" style={cStyle}>
          <img className="card-img-top" src={img2} alt="Card cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#"><button className="btn btn-lg btn-primary">Watch Now  </button></a>
          </div>
        </div>
        <div className="card" style={cStyle}>
          <img className="card-img-top" src={img3} alt="Card cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#"><button className="btn btn-lg btn-primary">Watch Now  </button></a>
          </div>
        </div>
        <div className="card" style={cStyle}>
          <img className="card-img-top" src={img4} alt="Card cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#"><button className="btn btn-lg btn-primary">Watch Now  </button></a>
          </div>
        </div>
        <div className="card" style={cStyle}>
          <img className="card-img-top" src={img5} alt="Card cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#"><button className="btn btn-lg btn-primary">Watch Now  </button></a>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
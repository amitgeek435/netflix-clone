import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Card from "./components/Cards";
import Sdata from "./components/Sdata";

// function ncard(val) {
//   return (
//     <Col lg={4}>
//       <Card
//         imgsrc={val.imgsrcs}
//         title={val.titles}
//         link={val.links}
//         desc={val.desc}
//       />
//     </Col>
//   );
// }

function App() {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h1 className="text-info text-center h1-title">
              Hello Netflix-clone
            </h1>
          </Col>
        </Row>
      </Container>

      <section className="main-card">
        <Container>
          <Row className="justify-content-center">
            {Sdata.map((val, index) => {
              return (
                <Col lg={4}>
                  <Card
                    key={val.id}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    link={val.link}
                    desc={val.desc}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
}
export default App;

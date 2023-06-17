import { Container, Row, Col } from "react-bootstrap";
import NavBar from "renderer/components/NavBar";
import logo_image from "../../public/images/Logo.png";
import mascote_image from "../../public/images/Mascote_Indicando.png";

function Home() {
  return (
    <div className="header">
      <Row>
        <NavBar title="Home" />
        <Col md="auto">
          <div className="background-image">
            <h1>This is a Home Page</h1>
            <img className="logo-image" src={logo_image} alt="logo-image" />
            <img
              className="mascot-image"
              src={mascote_image}
              alt="mascot-image"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Home;

import { Container, Row, Col } from "react-bootstrap";
import NavBar from "renderer/components/NavBar";
import logo_image from "../../public/images/Logo.png";
import mascote_image from "../../public/images/Mascote_Indicando.png";

function Home() {
  return (
    <div>
      <NavBar title="Home" />
      <div className="main">
        <Row className="mt-5">
          <Col className="coiso">
            <img className="imagem" src={mascote_image} alt="mascot-image" />
          </Col>
          <Col>
            <img className="imagem" src={logo_image} alt="logo-image" />
          </Col>
        </Row>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default Home;

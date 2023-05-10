import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

function Supplier() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container className="painel-cadastro">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <h1>Cadastro de Fornecedor:</h1>
        <Row className="mb-3">
          <Form.Group
            className="campo-cadastro"
            as={Col}
            md="4"
            controlId="validationCustom01"
          >
            <Form.Label>Fornecedor: </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Nome do fornecedor:"
            />
            <Form.Control.Feedback type="invalid">
              Preencha o campo com o nome do fornecedor.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group
            className="campo-cadastro"
            as={Col}
            md="6"
            controlId="validationCustom03"
          >
            <Form.Label>Cidade:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Cidade de origem:"
              required
            />
            <Form.Control.Feedback type="invalid">
              Preencha o campo com o nome da cidade.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            className="campo-cadastro"
            as={Col}
            md="3"
            controlId="validationCustom04"
          >
            <Form.Label>Estado:</Form.Label>
            <Form.Control type="text" placeholder="Insira o Estado:" required />
            <Form.Control.Feedback type="invalid">
              Preencha o campo com o nome do estado.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            className="campo-cadastro"
            as={Col}
            md="3"
            controlId="validationCustom05"
          >
            <Form.Label>CEP:</Form.Label>
            <Form.Control type="text" placeholder="Insira o CEP:" required />
            <Form.Control.Feedback type="invalid">
              Preencha o campo com o CEP.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check label="O Fornecedor é atacadista?" />
        </Form.Group>
        <Container className="area-btn">
          <Button className="bt-confirmar" type="submit">
            Cadastrar
          </Button>
        </Container>
        <Link to="/">
          <Button variant="outline-secondary">Voltar</Button>
        </Link>
      </Form>
    </Container>
  );
}

export default Supplier;

import React, { ChangeEvent, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Manufacturer() {
  const [fabricante, setFabricante] = useState("");
  const [cnpj, setCNPJ] = useState("");
  const [endereco, setEndereco] = useState("");
  const [estado, setEstado] = useState("");
  const [cep, setCEP] = useState("");
  const [validated, setValidated] = useState(false);

  // validador se está preenchido
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handleFabricanteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFabricante(event.target.value);
  };

  const handleCNPJChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCNPJ(event.target.value);
  };

  const handleEnderecoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndereco(event.target.value);
  };

  const handleEstadoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEstado(event.target.value);
  };

  const handleCEPChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCEP(event.target.value);
  };

  return (
    <Container className="painel-cadastro">
      <h1>Cadastro de Fabricante:</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <Form.Group
            className="campo-cadastro"
            controlId="formBasicFabricante"
          >
            <Form.Label>Fabricante:</Form.Label>
            <Form.Control
              className="campo-fabricante"
              required
              type="text"
              id="fabricante"
              value={fabricante}
              onChange={handleFabricanteChange}
              placeholder="Informe o Fabricante:"
            />
            <Form.Control.Feedback type="invalid">
              Preencha o campo com o Fabricante.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="campo-cadastro" controlId="formBasicCNPJ">
            <Form.Label>CNPJ:</Form.Label>
            <Form.Control
              className="campo-cnpj"
              required
              type="number"
              id="cnpj"
              value={cnpj}
              onChange={handleCNPJChange}
              placeholder="Informe o CNPJ:"
            />
            <Form.Control.Feedback type="invalid">
              Preencha o campo com o CNPJ do Fabricante.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="campo-cadastro" controlId="formBasicEndereco">
            <Form.Label>Endereço:</Form.Label>
            <Form.Control
              className="campo-endereco"
              required
              as="textarea"
              id="endereco"
              value={endereco}
              onChange={handleEnderecoChange}
              placeholder="Informe a Endereço:"
            />
            <Form.Control.Feedback type="invalid">
              Preencha o campo com a Endereço.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="campo-cadastro" controlId="formBasicEstado">
            <Form.Label>Estado:</Form.Label>
            <Form.Control
              className="campo-estado"
              required
              type="text"
              id="estado"
              value={estado}
              onChange={handleEstadoChange}
              placeholder="Informe o Estado:"
            />
            <Form.Control.Feedback type="invalid">
              Preencha o campo com o Estado.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="campo-cadastro" controlId="formBasicCEP">
            <Form.Label>CEP:</Form.Label>
            <Form.Control
              className="campo-cep"
              required
              type="number"
              id="cep"
              value={cep}
              onChange={handleCEPChange}
              placeholder="Informe o CEP:"
            />
            <Form.Control.Feedback type="invalid">
              Preencha o campo com o CEP.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
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

export default Manufacturer;

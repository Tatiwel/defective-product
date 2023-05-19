import React, { ChangeEvent, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Product() {
  const [fornecedor, setFornecedor] = useState("");
  const [cidade, setCidade] = useState("");
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

  const handleFornecedorChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFornecedor(event.target.value);
  };

  const handleCidadeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCidade(event.target.value);
  };

  const handleEstadoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEstado(event.target.value);
  };

  const handleCEPChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCEP(event.target.value);
  };

  const [atacadista, setAtacadista] = useState<boolean>(false);

  const handleAtacadistaChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAtacadista(e.target.checked);
  };

  return (
    <Container className="painel-cadastro">
      <h1>Cadastro de Fornecedor:</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <Form.Group
            className="campo-cadastro"
            controlId="formBasicFornecedor"
          >
            <Form.Label>Fornecedor:</Form.Label>
            <Form.Control
              className="campo-fornecedor"
              required
              type="text"
              id="fornecedor"
              value={fornecedor}
              onChange={handleFornecedorChange}
              placeholder=" Informe o Fornecedor:"
            />
            <Form.Control.Feedback type="invalid">
              Preencha o campo com o Fornecedor.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="campo-cadastro" controlId="formBasicCidade">
            <Form.Label>Cidade:</Form.Label>
            <Form.Control
              className="campo-cidade"
              required
              type="text"
              id="cidade"
              value={cidade}
              onChange={handleCidadeChange}
              placeholder="Informe a Cidade:"
            />
            <Form.Control.Feedback type="invalid">
              Preencha o campo com a Cidade.
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

          <Form.Group>
            <Form.Check
              type="checkbox"
              id="atacadistaCheck"
              label="O Fornecedor é atacadista?"
              checked={atacadista}
              onChange={handleAtacadistaChange}
            />
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

export default Product;

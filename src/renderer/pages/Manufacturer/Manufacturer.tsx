import React, { ChangeEvent, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Manufacturer() {
  const [fabricante, setFabricante] = useState("");
  const [cnpj, setCNPJ] = useState("");
  const [cnpjRaw, setCNPJRaw] = useState("");
  const [endereco, setEndereco] = useState("");
  const [contato, setContato] = useState("");
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

  // formatador de CNPJ
  const formatCNPJ = (cnpj: string) => {
    let cnpjDigits = cnpj.replace(/\D/g, ""); // removendo caracteres não numéricos
    if (cnpjDigits.length > 14) {
      cnpjDigits = cnpjDigits.substring(0, 14);
    }
    setCNPJRaw(cnpjDigits); // armazenando o valor "bruto"

    // retornando o valor formatado
    return cnpjDigits
      .replace(/^(\d{2})(\d)/, "$1.$2")
      .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/^(\d{2})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3/$4")
      .replace(/^(\d{2})\.(\d{3})\.(\d{3})\/(\d{4})(\d)/, "$1.$2.$3/$4-$5");
  };

  const handleCNPJChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCNPJ(formatCNPJ(event.target.value));
  };

  const handleFabricanteChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFabricante(event.target.value);
  };

  const handleEnderecoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndereco(event.target.value);
  };

  const handleContatoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContato(event.target.value);
  };

  return (
    <Container className="painel-cadastro">
      <h1>Cadastro de Fabricante:</h1>
      <br />
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
              type="text"
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
          <Form.Group className="campo-cadastro" controlId="formBasicContato">
            <Form.Label>Contato:</Form.Label>
            <Form.Control
              className="campo-contato"
              required
              as="textarea"
              type="text"
              id="contato"
              value={contato}
              onChange={handleContatoChange}
              placeholder="Informe um número ou e-mail:"
            />
            <Form.Control.Feedback type="invalid">
              Preencha o campo com a forma de contato com o Fornecedor.
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

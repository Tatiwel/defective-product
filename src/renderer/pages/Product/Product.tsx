import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Product() {
  const [item, setItem] = useState("");
  const [fornecedor, setFornecedor] = useState("");
  const [marca, setMarca] = useState("");
  const [descricao, setDescricao] = useState("");
  const [quantidade, setQuantidade] = useState("");
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

  const handleItemChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItem(event.target.value);
  };

  const handleMarcaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMarca(event.target.value);
  };

  const handleFornecedorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFornecedor(event.target.value);
  };

  const handleDescricaoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescricao(event.target.value);
  };

  const handleQuantidadeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantidade(event.target.value);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(
  //     `Item: ${item}, Fornecedor: ${fornecedor}, Descrição: ${descricao}, Quantidade: ${quantidade}`
  //   );
  // };

  return (
    <Container className="painel-cadastro">
      <h1>Cadastro de Produto</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <Form.Group className="campo-cadastro" controlId="formBasicItem">
            <Form.Label>Item:</Form.Label>
            <Form.Control
              required
              type="text"
              id="item"
              value={item}
              onChange={handleItemChange}
              placeholder="Digite o item a ser cadastrado:"
            />
            <Form.Control.Feedback type="invalid">
              Preencha o campo com o nome do item.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            className="campo-cadastro"
            controlId="formBasicFornecedor"
          >
            <Form.Label>Marca:</Form.Label>
            <Form.Control
              required
              type="text"
              id="marca"
              value={marca}
              onChange={handleMarcaChange}
              placeholder="Selecione a marca associado ao produto:"
            />
            <Form.Control.Feedback type="invalid">
              Preencha o campo com a Marca.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            className="campo-cadastro"
            controlId="formBasicFornecedor"
          >
            <Form.Label>Fornecedor:</Form.Label>
            <Form.Control
              required
              type="text"
              id="fornecedor"
              value={fornecedor}
              onChange={handleFornecedorChange}
              placeholder="Selecione o fornecedor associado ao produto:"
            />
            <Form.Control.Feedback type="invalid">
              Preencha o campo com o Fornecedor.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="campo-cadastro" controlId="formBasicDescricao">
            <Form.Label>Descrição:</Form.Label>
            <Form.Control
              required
              as="textarea"
              id="descricao"
              value={descricao}
              onChange={handleDescricaoChange}
              placeholder="Descreva qual foi a avaria ou defeito aprensetada(o) no produto:"
            />
            <Form.Control.Feedback type="invalid">
              Preencha o campo com a descrição da avaria.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            className="campo-cadastro"
            controlId="formBasicQuantidade"
          >
            <Form.Label>Quantidade:</Form.Label>
            <Form.Control
              required
              type="number"
              id="quantidade"
              value={quantidade}
              onChange={handleQuantidadeChange}
              placeholder="Informe quantos itens apresentaram essa característica."
            />
            <Form.Control.Feedback type="invalid">
              A quantidade a ser informada precisa ser ao menos 1 item.
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

export default Product;

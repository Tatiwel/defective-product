import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Product() {
  const [item, setItem] = useState("");
  const [fornecedor, setFornecedor] = useState("");
  const [descricao, setDescricao] = useState("");
  const [quantidade, setQuantidade] = useState("");

  const handleItemChange = (event) => {
    setItem(event.target.value);
  };

  const handleFornecedorChange = (event) => {
    setFornecedor(event.target.value);
  };

  const handleDescricaoChange = (event) => {
    setDescricao(event.target.value);
  };

  const handleQuantidadeChange = (event) => {
    setQuantidade(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Item: ${item}, Fornecedor: ${fornecedor}, Descrição: ${descricao}, Quantidade: ${quantidade}`
    );
  };

  return (
    <Container className="painel-cadastro">
      <h1>Cadastro de Produto</h1>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Form.Group className="campo-cadastro" controlId="formBasicItem">
            <Form.Label>Item:</Form.Label>
            <Form.Control
              required
              type="text"
              id="item"
              value={item}
              onChange={handleItemChange}
              placeholder="Digite o item a ser cadastrado."
            />
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
              placeholder="Digite o fornecedor associado ao produto."
            />
          </Form.Group>

          <Form.Group className="campo-cadastro" controlId="formBasicDescricao">
            <Form.Label>Descrição:</Form.Label>
            <Form.Control
              required
              className="campodescricao"
              as="textarea"
              id="descricao"
              value={descricao}
              onChange={handleDescricaoChange}
              placeholder="Descreva qual foi a avaria ou defeito aprensetada(o) no produto."
            />
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
          </Form.Group>
          <Container className="area-btn">
            <Button className="botao-product" type="submit">
              Cadastrar
            </Button>
          </Container>
        </Row>
      </Form>
      <Link to="/">Voltar</Link>
    </Container>
  );
}

export default Product;

import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const FormularioRestaurante = () => {
  const [nomeRestaurante, setNomeRestaurante] = useState("");

  const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    axios
      .post("http://localhost:8000/api/v2/restaurantes/", {
        nome: nomeRestaurante,
      })
      .then(() => {
        alert("Restaurante cadastrado com sucesso! " + nomeRestaurante);
      })
      .catch(() => {
        alert("Erro ao cadastrar restaurante.");
      });
  };

  return (
    <form onSubmit={aoSubmeterForm}>
      <TextField
        value={nomeRestaurante}
        onChange={(evento) => setNomeRestaurante(evento.target.value)}
        label="Nome do restaurante"
        variant="standard"
      />
      <Button variant="outlined" type="submit">
        Salvar
      </Button>
    </form>
  );
};

export default FormularioRestaurante;

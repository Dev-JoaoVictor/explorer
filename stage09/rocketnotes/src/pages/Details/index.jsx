import { Container } from "./styles";

import { Button } from "../../components/Button";

export function Details() {
  return (
    <Container>
      <h1>Hello world!</h1>
      <span>João Victor</span>
      <Button title="voltar" loading/>
    </Container>
  );
}

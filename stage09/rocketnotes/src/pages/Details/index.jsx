import { Container, Links } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";

export function Details() {
  return (
    <Container>
      <Header/>
      <Section title="Links úteis">
        <Links>
          <li><a href="#">Linkteste@gmail.com</a></li>
          <li><a href="#">Linkteste2@gmail.com</a></li>
        </Links>
      </Section>
      <Button title="Voltar"/>
    </Container>
  );
}

import { Container, Links } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";

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

      <Section title="Marcadores">
        <Tag title="node"/>
        <Tag title="express"/>
      </Section>

      <Button title="Voltar"/>
    </Container>
  );
}

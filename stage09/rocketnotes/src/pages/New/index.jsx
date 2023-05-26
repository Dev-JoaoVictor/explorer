import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";

import { Container, Form } from "./styles";

export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">voltar</Link>
          </header>

          <Input placeholder="Titulo" />
          <Textarea placeholder="Observações" />

          <Section title="Links úteis">
            <NoteItem value="https://rockeseat.com.br" />
            <NoteItem isNew placeholder="Novo link" />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="React" />
              <NoteItem isNew placeholder="Nova tag" />
            </div>
          </Section>
          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  );
}

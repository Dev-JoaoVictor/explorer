import { Container, Links, Content } from "./styles";

import { Tag } from "../../components/Tag";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Excluir nota" />
          <h1>Introdução ao React</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
            inventore, quisquam cum eligendi explicabo nobis culpa porro debitis
            aut eos molestias cupiditate quae dignissimos reiciendis. Sint,
            molestiae aliquid quia odio veniam ab delectus eos facilis
            cupiditate, culpa ipsam. Vero sapiente laborum omnis officiis
            temporibus eos hic aliquid. Rem, natus. Magni.
          </p>
          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">Linkteste@gmail.com</a>
              </li>
              <li>
                <a href="#">Linkteste2@gmail.com</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="node" />
            <Tag title="express" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}

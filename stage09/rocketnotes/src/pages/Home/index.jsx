import { FiPlus, FiSearch } from 'react-icons/fi'

import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";



import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>
      <Header />
      <Menu>
        <li><ButtonText title="Todos" isActive/></li>
        <li><ButtonText title="React"/></li>
        <li><ButtonText title="Nodejs"/></li>
      </Menu>
      <Search>
        <Input icon={FiSearch} placeholder="Pesquisar pelo titulo"/>
      </Search>
      <Content></Content>
      <NewNote>
        <FiPlus/>
        Criar Nota
      </NewNote>
    </Container>
  );
}

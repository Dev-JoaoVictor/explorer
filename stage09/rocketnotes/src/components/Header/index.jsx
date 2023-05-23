import { Container, Profile } from './styles'

export function Header() {
  return (
    <Container>
      <Profile>
        <img 
          src="https://github.com/Dev-JoaoVictor.png" 
          alt="Foto do usuário"
        />
        <div>
          <span>Bem vindo,</span>
          <strong>João Victor</strong>
        </div>
      </Profile>
    </Container>
  )
}
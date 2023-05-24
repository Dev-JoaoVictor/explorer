import { Container } from "./styles";

export function ButtonText({ title, ...rest }) {
  return (
    <Container {...rest} type="button">
      {title}
    </Container>
  );
}

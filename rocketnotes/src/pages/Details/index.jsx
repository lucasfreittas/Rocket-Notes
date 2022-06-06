import { Container } from "./styles"; // Pegando estilo CSS
import { Button } from "../../components/Button"; // Pegando o botão


export function Details(){ //Renderizando na pagina
  
  return(
    <Container> 
      <h1>Hello World!</h1>
      <span>Lucas de Freitas Simões</span>

      <Button title="Entrar" />
      <Button title="Cadastrar" />
      <Button title="Login" loading />

    </Container>
  )
}
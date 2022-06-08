import { Container } from "./styles"; // Pegando estilo CSS
import { Header } from "../../components/Header"; 
import { Button } from "../../components/Button"; // Pegando o botão


export function Details(){ //Renderizando na pagina
  
  return(
    <Container> 
      <Header></Header>
        <Button title="Voltar"/>


    </Container>
  )
}
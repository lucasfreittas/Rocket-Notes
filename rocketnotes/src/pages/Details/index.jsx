import { Container, Links, Content } from "./styles"; // Pegando estilo CSS
import { Header } from "../../components/Header"; 
import { Button } from "../../components/Button"; // Pegando o botão
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";


export function Details(){ //Renderizando na pagina
  
  return(
    <Container> 
      <Header/>
      <main>
        <Content>
          <ButtonText title="Excluir Nota"/>

            <h1>
              Introdução ao React
            </h1>
            <p>
              lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet,
              consectetur lorem ipsum dolor sit amet, consectetur
              lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet,
              consectetur lorem ipsum dolor sit amet, consectetur
              lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet,
              consectetur lorem ipsum dolor sit amet, consectetur
              lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet,
              consectetur lorem ipsum dolor sit amet, consectetur
              lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet,
              consectetur lorem ipsum dolor sit amet, consectetur
            </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">https://www.rocketseat.com.br</a>
              </li>
              <li>
                <a href="#">https://www.rocketseat.com.br</a>
              </li>   
            </Links>
          </Section>

          <Section title = "Marcadores">
            <Tag title="Express" />
            <Tag title="NodeJS" />
          </Section>

          <Button title="Voltar"/>

        </Content>
      </main>
    </Container>
  )
}
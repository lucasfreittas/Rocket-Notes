import { Container } from './styles'; // Puxando o "Container" que consta o estilo do botão, o arquivo CSS dele chamado de "styles.js" nessa mesma pasta

export function Button({title, loading = false, ...rest}){ // Criando um elemento chamado "Button", passando os parâmetros "title, loading=false, ...rest" o title é o que vai capturar o título informado lá na pagina em que está renderizando, loading = false é um parâmetro booliano para quando o botão estiver desabilitado...rest é para passar todos os outros parâmetros automaticamente

    return( //Todo função tem que retornar o elemento em si
        <Container // Estamos pegando os estilos do arquivo styles.js e jogando para esse botão
            type="button" //Informando que esse elemento é do tipo "button" igual HTML
            disabled = {loading} // Informando que quando o botão estiver desabilitado, passar a função "loading"
            {...rest} // Informando para passar o restante das atribuições aqui
        >
       
           {loading ? "Carregando..." : title} 
        </Container>
    )
}
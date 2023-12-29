// extends a classe herda tudo de HTMLElement
class CardNews extends HTMLElement{
    constructor(){
        super(); //Chamada ao construtor de quem a classe herda

        // mode closed: privado não é alterado externamente
        // mode open: pode ser alterado externamente
        const shadow = this.attachShadow({mode:"open"}); // Cria uma sombra
        shadow.innerHTML = "<h1>Hello World</h1>"; // Dentro da sombra coloca uma tag de texto
    }
}

customElements.define('card-news', CardNews);
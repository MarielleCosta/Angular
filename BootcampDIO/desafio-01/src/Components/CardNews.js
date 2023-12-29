// extends a classe herda tudo de HTMLElement
class Cardnews extends HTMLElement{
    constructor(){
        super(); // Chamada ao construtor de quem a classe herda

        // mode closed: privado não é alterado externamente
        // mode open: pode ser alterado externamente
        const shadow = this.attachShadow({mode:"open"}); // Cria uma Shadow DOM
        
        // Pendura filhos
        shadow.appendChild(this.build()); 
        shadow.appendChild(this.styles());
    }

    // Método de construção
    build(){
        const componentRoot = document.createElement("div"); //cria a div
        componentRoot.setAttribute("class", "card"); //cria a classe

        const card__left = document.createElement("div");
        card__left.setAttribute("class", "card__left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent =  this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url") || "www.google.com";

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        card__left.appendChild(autor);
        card__left.appendChild(linkTitle);
        card__left.appendChild(newsContent);

        const card__right = document.createElement("div");
        card__right.setAttribute("class", "card__right");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "assets/default-photo.png" ;
        newsImage.alt = "Foto da notícia";
        card__right.appendChild(newsImage);
        


        componentRoot.appendChild(card__left); //atribui filhos/pai
        componentRoot.appendChild(card__right);

        return componentRoot;
    
    }

    //Método de estilo
    styles(){
        const style = document.createElement("style");
        style.textContent = `
        .card{
            width: 80%;
            box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
            -webkit-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
            -moz-box-shadow:9px 9px 27px 0px rgba(0,0,0,0.75);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        
        .card__left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        .card__left > a{
            margin-top: 15px;
            font-size: 25px;
            color: black;
            text-decoration: none;
            font-weight:bold;
        }
        
        .card__left > p{
            color: rgb(70,70,70);
        }
        
        .card__left > span{
            font-weight: 400;
        }
        `;

        return style;

    }
}

customElements.define('card-news', Cardnews);
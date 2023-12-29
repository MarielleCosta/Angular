class TituloDinamico extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"});

        //base do component <h1>Marielle</h1>
        const componentRoot = document.createElement('h1'); //Cria um element
        componentRoot.textContent = this.getAttribute("titulo");

        //estilizar o component
        const style = document.createElement("style"); //Cria uma tag de estilo
        style.textContent = `
        h1{
            color: red;
        }
        `
        //enviar para a shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}

//customElements SEMPRE precisam ter um hífen (-) no nome
customElements.define('titulo-dinamico', TituloDinamico)
# Angular
- [Site Angular](https://angular.io/)
- [Help](https://github.com/felipeAguiarCode/angular-playground/tree/main/C1%20-%20Web%20Components)
- [Editor online](https://stackblitz.com/)

## 🌐 DOM - Document Objetc Model
Árvore de tags geradas para o navegador  compreender as tags HTML

Cada elemento abaixo de um elemento é o filho e o acima é o pai, sendo que a raiz da árvore é o "document"

**Shadow DOM :** sub árvore, isolada, que pode ser inclusa dentro da árvore

**Componente:** conjunto de elementos encapsulados (uma árvore, que pode ser adicionada por uma tag), em que um elemento é cada tag (ex: div, p, a, span)

**Props:** parte dinâmica, que permite a passagem de parâmetros

_defer:_ anexa o componente somente depois que o DOM foi carregado

**SPAs:** Single Page Applications (SPA) são aplicações cuja funcionalidade está concentrada em uma única página. Assim, pra se ter mais de uma páginas são substituídos os componentes em uma mesma página.

- [Verificar a compatibilidade de navegadores com a Shadow DOM](https://caniuse.com/)

## 🎫 Typescript
JavaScript com recursos adicionais, como por exemplo a indicação de erros em tempo de desenvolvimento e o uso de tipagem. Ele passa pelo processo de transpilação ele traduz para JavaScript e compila.

- [Material de apoio](https://github.com/felipeAguiarCode/angular-playground/tree/main/C2%20-%20Typescript%20para%20Angular)

- Extensão: **.ts**

- Instalar o typescript somente para o desenvolvimento (-D)

```npm install typescript -D ```

- Traduzir o código de typescript para javascript, para executar no node. Esse comando irá gerar um arquivo .js

```npx tsc caminho/nome_arquivo.ts ```

- Criar um arquivo de configuração (tsconfig.json), [explicação sobre](https://www.typescriptlang.org/tsconfig). Após essa configuração pode usa o comando somente _npc tsc_ que ele já converte todos os arquivos .ts.

```npx tsc --init ```

No arquivo de configuração tsconfig.json é bom configurar rootDir e outDir, para definir, respectivamente, a raiz e a pasta que o arquivo .js será salvo.

- Criar um arquivo package.json na raiz, como a escrita a seguir, permite a execução com somente um comando _npm run start_:


```
{
"scripts":{
    "start": "npx tsc && node build/index.js"
}
}
```

- Criar um servidor local que entende typescript

```npm install ts-node-dev -D```

Adicionar o comando no arquivo de configuração, para simplificar a transpilação e não gerar build: 

```
"start:dev":"ts-node-dev --respawn --transpile-only src/index.ts"
```
Em seguida, usar o comando ```npm run start:dev```


## 📚 Camadas de uma Web APP

- Componentes: Elemento visual, custimzável e reutilizável. _Exemplo:_ um card ou botão na tela.

- Gerenciamento de estados (States): Respons´vael por garantir que as info. dos componentes não estão dessincronizadas e facilitar a comunicação de um componente com outro. _Exemplo:_ Atualizar carrinho de compras ao clicar no botão de compra de um produto. 

- Roteamento (Route/Navigation): Responsável pela forma de navegar fazendo a troca de URL sem recarregar a página, mudando somente os componente que são mostrados

- Renderização (Render):  Responsável por decidir a melhor maneira de acessar e entregar para o browser o componente pronto (routes, components e states) para que ele seja desenhado na janela sem complicações.
Tipos: 
    - 100% Server: o servidor entrega exatamente o precisa
    - Parte server e parte client: o servidor entrega uma parte e o cliente faz o resto
    - 100% Client: o cliente recebe os dados e monta tudo

- [Stackblitz: editor online de Angular](https://stackblitz.com/edit/stackblitz-starters-ehjkhh?description=An%20angular-cli%20project%20based%20on%20@angular/animations,%20@angular/common,%20@angular/compiler,%20@angular/core,%20@angular/forms,%20@angular/platform-browser,%20@angular/platform-browser-dynamic,%20@angular/router,%20core-js,%20rxjs,%20tslib%20and%20zone.js&file=src%2Fmain.ts&title=Angular%20Starter)

Códigos são salvos na pasta **src** e os demais arquivos (de configuração) são salvos fora.
- index-html: aponta para o componente raiz, arquivo final que aponta para o componente
- main.ts: inicializar o projeto e os componentes
- polyfills.ts: configurações para melhorar a compatibilidade com navgeadores antigos
- styles.css: estilização

- Pasta app:
    - app.component.css: estilização do componente, arquivo a nível de escopo
    - app.component.ts: definição do componente em typescript. O selector identifica o nome do componente, o templateUrl informa de onde está a base HTML do componente

``` 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

```


    - nome_componente.component.ts: funcionalidade do componente configurada

- Injeção de dependência: padrão/estratégia de desenvolvimento



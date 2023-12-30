# Angular
- [Help](https://github.com/felipeAguiarCode/angular-playground/tree/main/C1%20-%20Web%20Components)

## 🌐 DOM - Document Objetc Model
Árvore de tags geradas para o navegador  compreender as tags HTML

Cada elemento abaixo de um elemento é o filho e o acima é o pai, sendo que a raiz da árvore é o "document"

**Shadow DOM :** sub árvore, isolada, que pode ser inclusa dentro da árvore

**Componente:** conjunto de elementos encapsulados (uma árvore, que pode ser adicionada por uma tag), em que um elemento é cada tag (ex: div, p, a, span)

**Props:** parte dinâmica, que permite a passagem de parâmetros

_defer:_ anexa o componente somente depois que o DOM foi carregado

- [Verificar a compatibilidade de navegadores com a Shadow DOM](https://caniuse.com/)

## 🎫 Typescript
JavaScript com recursos adicionais, como por exemplo a indicação de erros em tempo de desenvolvimento e o uso de tipagem. Ele passa pelo processo de transpilação ele traduz para JavaScript e compila.

- Extensão: **.ts**

- Instalar o typescript somente para o desenvolvimento (-D)

```npm install typescript -D ```

- Traduzir o código de typescript para javascript, para executar no node. Esse comando irá gerar um arquivo .js

```npx tsc caminho/nome_aqruiv.ts ```

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

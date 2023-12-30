"use strict";
function printObjeto(pessoa) {
    console.log(pessoa);
}
printObjeto({
    name: "bruce wayne",
    vulgo: "batman",
});
//tipos primitivos: boolean, number, string
let ligado = false;
let nome = "Marielle";
let idade = 30;
let altura = 1.9;
//tipos especiais: null, undefined
//null
let nulo = null;
//undefined
let indefinido = undefined;
//tipos abrangentes: any, void
let retorno; //Uso exemplo: funções que não retornam nada
let retornoView = false; //Aceita qualquer coisa
//objeto - sem previsibilidade
let produto = {
    name: "Marielle",
    cidade: "mg",
    idade: 22,
};
let meuProduto = { nome: "Tênis", preco: 89.9, unidades: 10 };
//arrays
let dados = ["felipe", "ana", "adriana"];
let dados2 = ["felipe", "ana", "adriana"];
//array de dois tipos (permite um tipo ou outro)
let infos = ["felipe", 30, "felipe", "ana", "joão"];
//tuplas - vetor com posições determinadas, a ordem deve ser respeitada
let boleto = ["agua conta", 199.9, 32548];
//arrays métodos (são os mesmos que funcionam no javascript - pop, map, filter, reduce...)
//datas
let aniversario = new Date("2022-12-01 05:00");
console.log(aniversario.toString());
//funções - pode ficar os tupos dos parâmetros e das saídas
function addNumber(x, y) {
    return x + y;
}
let soma = addNumber(4, 7);
console.log("Soma: " + soma);
function addToHello(name) {
    return `Hello ${name}`;
}
console.log(addToHello("Marielle"));

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
//O parâmetro da função pode ser um número ou string
function CallToPhone(phone) {
    return phone;
}
console.log(CallToPhone("3199178617"));
console.log(CallToPhone(31991));
//Funções assíncronas - elas podem esperar alguma coisa
//Promise é o return da função async
function getDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "Marielle";
    });
}
const bot1 = {
    id: 31,
    name: "biz"
};
const bot2 = {
    id: 1,
    name: "megamen",
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
console.log(bot1);
console.log(bot2);
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return "hello";
    }
}
const p = new Pessoa(1, "Maria");
console.log(p.sayHello());

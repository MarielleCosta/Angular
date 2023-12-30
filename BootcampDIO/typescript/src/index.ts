type heroi = {
    name: string;
    vulgo: string;
};

function printObjeto(pessoa : heroi){
    console.log(pessoa);
}

printObjeto({
    name : "bruce wayne",
    vulgo: "batman",
})

//tipos primitivos: boolean, number, string
let ligado: boolean = false;
let nome: string = "Marielle";
let idade: number = 30;
let altura: number = 1.9;

//tipos especiais: null, undefined
//null
let nulo : null = null;

//undefined
let indefinido : undefined = undefined;

//tipos abrangentes: any, void
let retorno: void; //Uso exemplo: funções que não retornam nada
let retornoView:any = false; //Aceita qualquer coisa


//objeto - sem previsibilidade
let produto:object = {
    name:"Marielle",
    cidade: "mg",
    idade: 22,
}

//obejto tipado - com previsibilidade
type ProdutoLoja = {
    nome:string;
    preco:number;
    unidades:number;
};

let meuProduto: ProdutoLoja = {nome: "Tênis", preco: 89.9, unidades: 10};

//arrays
let dados: string[] = ["felipe", "ana", "adriana"];
let dados2: Array<string> = ["felipe", "ana", "adriana"];

//array de dois tipos (permite um tipo ou outro)
let infos: (string | number)[] =["felipe", 30, "felipe", "ana", "joão"];

//tuplas - vetor com posições determinadas, a ordem deve ser respeitada
let boleto:[string,number,number] = ["agua conta", 199.9, 32548]

//arrays métodos (são os mesmos que funcionam no javascript - pop, map, filter, reduce...)

//datas
let aniversario:Date = new Date("2022-12-01 05:00");
console.log(aniversario.toString());


//funções - pode ficar os tupos dos parâmetros e das saídas
function addNumber(x:number,y:number):number{
    return x +y;
}

let soma: number = addNumber(4,7);
console.log("Soma: " + soma);

function addToHello(name:string):string{
    return `Hello ${name}`;
}

console.log(addToHello("Marielle"))
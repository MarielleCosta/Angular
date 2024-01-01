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

console.log(addToHello("Marielle"));

//O parâmetro da função pode ser um número ou string
function CallToPhone(phone:number | string): number|string{
    return phone;
}

console.log(CallToPhone("3199178617"));
console.log(CallToPhone(31991));

//Funções assíncronas - elas podem esperar alguma coisa
//Promise é o return da função async
async function getDatabase(id:number):Promise<string>{
    return "Marielle";
}

//interfaces (trabalhar com classes e estabelecer parâmetros) x type(tipar ou constantes)
//Readonly permite a definição do atributo somente uma vez na criação, depois não tem como alterar
type robot = {
    readonly id: number | string; 
    name:string;
};

const bot1: robot={
    id:31,
    name: "biz"
};

interface robot2{
    readonly id: number | string,
    name:string;
    sayHello():string;
}

const bot2:robot2 ={
    id: 1,
    name: "megamen",
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
};

console.log(bot1);
console.log(bot2);

class Pessoa implements robot2{
    id: string | number;
    name: string;

    constructor(id:string|number, name:string){
        this.id = id
        this.name = name
    }
    sayHello(): string {
        return "hello";
    }
}

const p = new Pessoa(1, "Maria")
console.log(p.sayHello());

//classes
/* data modifiers - válido para atributos e propriedade
    public --> propriedade pode ser acessada fora da classe (default)
    private --> propriedade só pode ser acessada dentro da classe
    protected --> propriedade pode ser acessada pela classe e suas subclasses

    readonly = permite a alteração somente na criação
*/

class Personagem{
    private name?:string;
    stregth:number;
    skill: number;

    constructor(name:string, stregth:number,skill:number){
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }

    attack():void{
        console.log(`Attack with ${this.stregth} points`);
    } 
}

const p1 = new Personagem("Ryu",10, 8);
console.log(p1);
console.log(p1.attack());

//subclasses
//Magician é uma subclass que herda a classe/superclass Personagem
class Magician extends Personagem{
    magicPoints:number;
    constructor(
        name:string, 
        stregth:number, 
        skill:number, 
        magicPoints:number){
        super(name, stregth, skill) //Chama o construtor da superclass
        this.magicPoints = magicPoints;
    }
}

const p2 = new Magician("Mago", 9,30,100);
console.log(p2);

//generics: permite escolher o tipo <T>
//... indica que pode ser 1 ou mais itens
function concatArray<T>(...itens:T[]):T[]{
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1,5],[3]);
const stgArray = concatArray<string[]>(["Marielle", "Mariana"], ["Julia"]);
console.log(numArray);
console.log(stgArray);

let dado: string = "marielle cristina";
console.log(dado);
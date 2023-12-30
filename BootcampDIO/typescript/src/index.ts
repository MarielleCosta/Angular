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

console.log("Ola mundo");
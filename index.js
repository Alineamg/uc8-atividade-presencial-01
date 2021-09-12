let listaPecas=[]
let nomePeca='Peça Teste'
let pesoPeca=300
let podeCadastrar=true

if (pesoPeca<100){
    console.log('Não há possibilidade de cadastrar!')
    podeCadastrar=false
}

if (listaPecas.length>10){
    console.log('Limite de peças atingido!')
    podeCadastrar=false

}

if (nomePeca.length<3){
    console.log('Tamanho de letras inferior ao permitido')
    podeCadastrar=false
}

if(podeCadastrar){
    listaPecas.push(nomePeca)
    console.log('Peça cadastrada com sucesso')
} else{
    console.log('Ocorreu um problema para cadastrar a peça!')
}

console.log('Listando as peças!')

for(let i=0;i<listaPecas.length;i++){
    console.log(listaPecas[i])
}
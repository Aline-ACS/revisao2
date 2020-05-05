document.getElementById('btnInserir').onclick = criarLista;

const lista = [];

function criarLista() {

    const pessoa = {
        nome: document.getElementById('nome').value,
        altura: document.getElementById('altura').value,
        masculino: document.getElementById('masculino').checked,
        feminino: document.getElementById('feminino').checked,
    }
}




/*
Crie um programa que entre com os dados de altura e sexo de 10 pessoas. 
percorra a lista e informe quantas pessoas são do sexo masculino e quantas pessoas são do sexo feminino. 
Mostre também qual é a maior altura entre homens e maior altura entre mulheres.
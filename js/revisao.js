document.getElementById('btnInserir').onclick = criarLista;

const lista = [];

function criarLista() {

    const pessoa = {
        nome: document.getElementById('nome').value,
        altura: document.getElementById('altura').value,
        sexo: document.getElementById('sexo').value,
    }

    let masculino = 0;
    let feminino = 0;
    let alturaMaior = parseFloat(pessoa.altura[0]);
    let sexoAlturaMaior = pessoa.sexo[0];

    lista.push(pessoa);

    for(i=0;i<sexo.length; i++){
        if(pessoa.sexo[i] == "M"){
            masculino ++;
        }else if (pessoa.sexo[i] == "F"){
            feminino ++;
        }    
    } 

    if(parseFloat(pessoa.altura[i]) > alturaMaior) {
        alturaMaior = parseFloat(pessoa.altura[i]);
        sexoAlturaMaior = pessoa.sexo[i];
    }

    document.write("Masculino: " +masculino+ "Feminino: " +feminino+"<br>");
    document.write("A maior altura é" +alturaMaior+ "e pertence ao sexo" +sexoAlturaMaior);
}



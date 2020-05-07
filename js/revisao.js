document.getElementById('btnInserir').onclick = criarLista;
document.getElementById('btnQdtSexo').onclick = quantidadeSexo;
document.getElementById('btnHomemAlto').onclick = compararAltura;


const lista = [];
const homens = [];
const mulheres = [];

function criarLista() {

    const pessoa = {
        nome: document.getElementById('nome').value,
        altura: parseFloat(document.getElementById('altura').value),
        sexo: document.getElementById('sexo').value,
    }

    lista.push(pessoa);
}


function quantidadeSexo() {

    for(let pessoa of lista) {
        if(pessoa.sexo === "M"){
            homens.push(pessoa);
        }else {
            mulheres.push(pessoa);
        }
    }

    document.getElementById('lblMasculino').innerHTML = `Existem ${homens.length} homens nesta lista`;
    document.getElementById('lblFeminino').innerHTML = `Existem ${mulheres.length} mulheres nesta lista`;
}


function compararAltura() {

    let homemAlto;//usado como variavel de suporte
    let mulherAlta;
 
    for(let i=1; i<homens.length; i++){
        if(homens[i].altura > homens[i-1].altura){
            homemAlto = homens[i];
        }
    }

    for(let i=1; i<mulheres.length; i++){
        if(mulheres[i].altura > mulheres[i-1].altura){
            mulherAlta = mulheres[i];
        }
    }

    document.getElementById('homemAlto').innerHTML = `${homemAlto.nome} é o mais alto`;
    document.getElementById('mulherAlta').innerHTML = `${mulherAlta.nome} é a mais alta`;
}



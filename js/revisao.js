document.getElementById('btnInserir').onclick = criarLista;

const lista = [];

function criarLista() {

    const pessoa = {
        nome: document.getElementById('nome').value,
        altura: document.getElementById('altura').value,
        masculino: document.getElementById('masculino').checked,
        feminino: document.getElementById('feminino').checked,
    }

    lista.push(pessoa);

    for(let novaPessoa of lista){
        document.getElementById('novaPessoa').innerHTML += 
        `<table>
             <thead></thead>
            <tbody">
                <tr>
                <td> ${novaPessoa.nome} </td>
                <td> ${novaPessoa.altura} </td>
                <td> ${novaPessoa.masculino} ${novaPessoa.feminino} </td>
                </tr>
            </tbodyid=>
        </table><br>`; 
    } 
}



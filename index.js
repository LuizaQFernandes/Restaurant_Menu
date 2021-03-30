function resumo() {

    var nome, telefone, local, pratoP;
    nome = document.getElementById("nome").value;
    telefone = document.getElementById("telefone").value;
    local = document.getElementById("endereco").value;
    
    if(nome == "" || telefone == "" || local == "")
    {
        alert('Preencha todos os campos!');
    }
    else{

        var resumo =
        `\n- - - - RESUMO DO PEDIDO - - - -\n\nDADOS PESSOAIS\nCliente: ${nome} \nTelefone: ${telefone}\nEndereço: ${local}\n\nPRATO PRINCIPAL\n${pratoPrincipal('option_pp')}\n\nACOMPANHAMENTOS${Acompanhamentos('option_a')}\n\nTOTAL = ${totalPedido()} Reais`;

        alert(resumo);
    }
}

function pratoPrincipal(name) {
    var rads = document.getElementsByName(name);
    var escolhido;

    for (var i = 0; i < rads.length; i++) {
        if (rads[i].checked) {
            escolhido = `${rads[i].id} \nPreço: ${rads[i].value} Reais`;
        }
    }
    return escolhido;
}

function Acompanhamentos(name) {
    var checked = document.getElementsByName(name);
    var escolhido = [];

    for (var i = 0; i < checked.length; i++) {
        if (checked[i].checked) {

            escolhido.push(`\n${checked[i].id} - Preço: ${checked[i].value} Reais`);
        }
    }
    if(escolhido.length > 0) {
        return escolhido;
    }
    else{
        return '\nNenhum';
    }
}

function totalPedido(){
    var total = 0;

    var rads = document.getElementsByName('option_pp');
    for (var i = 0; i < rads.length; i++) {
        if (rads[i].checked) {
            total += parseFloat(rads[i].value);
        }
    }

    var checked = document.getElementsByName('option_a');
    for (var i = 0; i < checked.length; i++) {
        if (checked[i].checked) {
            total += parseFloat(checked[i].value);
        }
    }
    return total;
}


function limpar(){
    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("endereco").value = "";

    var rads = document.getElementsByName('option_a');
    var escolhido = [];
    for (var i = 0; i < rads.length; i++) {
        if (rads[i].checked) {
            rads[i].checked = 0;
        }
    } 
}


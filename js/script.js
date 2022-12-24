function montarDica() {
    const inpFruta = document.querySelector('#inpFruta');
    const outDica = document.querySelector('#outDica');

    const fruta = inpFruta.value.toUpperCase();

    if (fruta === '') {
        alert('Informe o nome da fruta...');
        inpFruta.focus();
        return;
    }

    let resposta = fruta.charAt(0);
    let estrelas = '*';
    let tam = fruta.length;
    
    for (let i = 1; i < tam; i++) {
        if (fruta.charAt(i) === fruta.charAt(0)) {
            resposta += fruta.charAt(0);
        } else {
            resposta += '_ ';
        }
        estrelas += '*';
    }

    outDica.textContent = resposta;
    inpFruta.value = estrelas;
}
const btnMontar = document.querySelector('#btnMontar');
btnMontar.addEventListener('click', montarDica);
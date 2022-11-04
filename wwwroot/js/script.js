var aberto = 0;
var pesquisa = document.getElementById("pesquisa");
const button = document.querySelector('button');

function mostrarCaixa() {
    // aberto = document.documentElement.style.getPropertyValue('--close');
    button.disabled = true;
    if (aberto == 0) {
        aberto = 1;
        document.documentElement.style.setProperty('--caixa-disp', 'block');
        document.documentElement.style.setProperty('--tamanho-caixa', '300px');
        document.documentElement.style.setProperty('--color-search', 'rgb(143, 25, 25)');
        pesquisa.value = "Ainda não implementado...";
        pesquisa.focus();
    }
    else {
        aberto = 0;
        document.documentElement.style.setProperty('--tamanho-caixa', '0');
        document.documentElement.style.setProperty('--color-search', 'white');
        setTimeout(function () {
            document.documentElement.style.setProperty('--caixa-disp', 'none');
        }, 300)
        pesquisa.value = "";
    }
    button.disabled = false;
}

function randomSite() {
    var tds = document.getElementsByClassName('link');
    var rand = Math.floor(Math.random() * tds.length);
    location.href = tds[rand];
}
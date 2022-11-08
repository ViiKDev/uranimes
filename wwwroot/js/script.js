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

function slideItemClick(i) {
    location.href = i;
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(nome, valor, dias) {
    diasms = (new Date()).getTime() + 1000 * 3600 * 24 * dias;
    dias = new Date(diasms);
    expires = dias.toGMTString();
    document.cookie = escape(nome) + "=" + escape(valor) + "; expires=" + expires;
} 
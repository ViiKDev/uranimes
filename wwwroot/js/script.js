var aberto = 0;
var pesquisa = document.getElementById("pesquisa");
var pixKey = 'ffc1ec44-10d8-4742-a770-2abb42142827';
var username = getCookie('username');
var nameInputed = getCookie('nameInputed');
var showAlert = getCookie('showAlert');
var watchList = [];
if ($.cookie('watchList') != undefined) {
    watchList = JSON.parse($.cookie('watchList'));
}
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

function copyToClip(value) {

    // Copy the text inside the text field
    navigator.clipboard.writeText(value);

    // Alert the copied text
    alert("Subarashii, o texto foi copiado!");
}

function showNews() {
    var message = "Okaeri";
    if (username != '') {
        message = message + ", " + username;
    }
    alert(message + "!\n" + news);
}

// function prepend(value, array) {
//     var newArray = array.slice();
//     newArray.unshift(value);
//     return newArray;
// }

window.onload = function () {
    // alert("Bem-vindo!\nAproveite os recém-chegados animes: Haikyuu, Chainsaw Man e One Piece!!")
    // alert("Bem-vindo!\n" + news);
    if (username == '' || showAlert == false) {
        if (nameInputed == '') {
            if (confirm("Você poderia informar seu nome?\nSomente para deixar o site mais amigável!") == true) {
                username = prompt("Ótimo!\nPor favor insira seu nome:", "Harry Potter");
                if (username != null) {
                    nameInputed = true;
                    setCookie('username', username, 365);
                    setCookie('nameInputed', nameInputed, 365);
                    alert("Seja bem-vindo(a) ao UrAnimes, " + username + "!");
                } else {
                    nameInputed = false;
                    setCookie('nameInputed', nameInputed, 365);
                }
            } else {
                nameInputed = false;
                setCookie('nameInputed', nameInputed, 365);
            }
        }
    }
    if (watchList != '') {
        if (username) {
            $("#keepWatching").prepend("<h1 style='color: lightyellow;'>Continuar Assistindo Como " + username + "</h1>");
        } else {
            $("#keepWatching").prepend("<h1 style='color: lightyellow;'>Continuar Assistindo</h1>");
        }
        for (let i = 0; i < watchList.length; i++) {
            $("#keepWatching").append("<div><a href='" + watchList[i][0] + "' class='link'>" + watchList[i][1] + "</a></div>");
        }
    }
};
// window.onbeforeunload = function () {
//     alert("Obrigado pela preferência!");
// };

$(".link").click(function () {
    if (watchList != '') {
        for (let i = 0; i < watchList.length; i++) {
            if (watchList[i].includes($(this).text()) == true) {
                watchList.splice(i, 1);
                watchList.unshift([$(this).attr('href'), $(this).text()]);
                break;
            } else {
                if (i == watchList.length - 1) {
                    watchList.unshift([$(this).attr('href'), $(this).text()]);
                    break;
                }
            }
        }
    } else {
        watchList.unshift([$(this).attr('href'), $(this).text()]);
    }
    $.cookie('watchList', JSON.stringify(watchList));
});
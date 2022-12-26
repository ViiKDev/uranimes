var aberto = 0;
var pesquisa = document.getElementById("pesquisa");
var pixKey = 'ffc1ec44-10d8-4742-a770-2abb42142827';
var username = getCookie('username');
var nameInputed = getCookie('nameInputed');
var showAlert = getCookie('showAlert');
var watchList = [];

var response;
var data;
const url = "wwwroot/json/list.json";
const fetchJson = async () => {
    try {
        data = await fetch(url);
        response = await data.json();
    } catch (error) {
        console.log(error);
    }
};
fetchJson();

if (localStorage.watchList != undefined) {
    watchList = JSON.parse(localStorage.watchList);
}

// if ($.cookie('watchList') != undefined) {
//     watchList = JSON.parse($.cookie('watchList'));
// }

if (watchList != '') {
    $("#keepWatching").attr('style', null);
    if (username) {
        $("#kWAs").prepend('<h2>Continuar assistindo como "' + username + '"</h2>');
    } else {
        $("#kWAs").prepend("<h2>Continuar assistindo</h2>");
    }
    for (let i = 0; i < watchList.length; i++) {
        $("#kWSlides").append("<div><div class='slide2'><div class='slide-img'><a href='' class='link'></a></div></div></div>");
    }
    $(".slide2 .slide-img").each(function (i, obj) {
        // $(this).attr('onclick', 'slideItemClick("' + data[numArray[i]].path + '")')
        $(this).attr('style', 'background-image: url("' + watchList[i][2] + '");');
        $(this).find('a').attr('href', watchList[i][0]);
        $(this).find('a').text(watchList[i][1]);
    });
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
    var tds = document.querySelectorAll("#main .link");
    var rand = Math.floor(Math.random() * tds.length);
    KeepWatchingCheck($(tds[rand]));
    location.href = tds[rand].href;
}

// function slideItemClick(i) {
//     location.href = i;
// }

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
};

window.addEventListener("pageshow", function (event) {
    var historyTraversal = event.persisted || (typeof window.performance != "undefined" && window.performance.navigation.type === 2);
    if (historyTraversal) {
        // Handle page restore.
        window.location.reload();
    }
});

// window.onbeforeunload = function () {
//     alert("Obrigado pela preferência!");
// };

$("#main").on('click', '.link', function () {
    KeepWatchingCheck($(this));
});

$("#mainSlides").on('click', '.slide-img', function () {
    KeepWatchingCheck($(this).find('a'));
    location.href = $(this).find('a').attr('href');
});

$("#keepWatching").on('click', '.slide-img', function () {
    KeepWatchingCheck($(this).find('a'));
    location.href = $(this).find('a').attr('href');
});

$("#main div img").click(function () {
    w2popup.open({
        title: 'Image',
        body: '<div class="w2ui-centered"><img src="' + $(this).attr('src') + '"></img></div>'
    });
});

function KeepWatchingCheck(obj) {

    for (let j = 0; j < response.length; j++) {
        if (response[j].name.includes(obj.text())) {
            if (watchList != '') {
                for (let i = 0; i < watchList.length; i++) {
                    if (watchList[i].includes(obj.text())) {
                        watchList.splice(i, 1);
                        watchList.unshift([response[j].path, response[j].name, response[j].img]);
                        break;
                    } else {
                        if (i == watchList.length - 1) {
                            watchList.unshift([response[j].path, response[j].name, response[j].img]);
                            break;
                        }
                    }
                }
            } else {
                watchList.unshift([response[j].path, response[j].name, response[j].img]);
            }
            break;
        }
    }
    localStorage.watchList = JSON.stringify(watchList);
    // $.cookie('watchList', JSON.stringify(watchList));
}
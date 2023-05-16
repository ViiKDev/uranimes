var username = getCookie('username');
var nameInputed = getCookie('nameInputed');
var showAlert = getCookie('showAlert');

if (watchList != '') {
    if (username) {
        $("#kWAs").prepend('<h2>Continuar assistindo como "' + username + '" <a id="editUN"><i class="fa fa-edit"></i></a></h2>');
    } else {
        $("#kWAs").prepend("<h2>Continuar assistindo <a id='editUN'><i class='fa fa-edit'></i></a></h2>");
    }
}

// const url = "wwwroot/json/list.json";
// const fetchJson = async function () {
//     try {
//         data = await fetch(url);
//         response = await data.json();
//         console.log("done")
//     } catch (error) {
//         console.log(error);
//     }
// }();

// fetchJson();

// if ($.cookie('watchList') != undefined) {
//     watchList = JSON.parse($.cookie('watchList'));
// }

function mostrarCaixa() {
    // aberto = document.documentElement.style.getPropertyValue('--close');
    button.disabled = true;
    if (aberto == 0) {
        aberto = 1;
        document.documentElement.style.setProperty('--caixa-disp', 'block');
        document.documentElement.style.setProperty('--tamanho-caixa', '300px');
        document.documentElement.style.setProperty('--color-search', 'rgb(143, 25, 25)');
        pesquisa.value = '';
        pesquisa.focus();
        $(resultado).find('.listResults').empty();
        resultado.style.setProperty('visibility', 'visible');
        resultado.style.setProperty('opacity', '1');
        // resultado.style.setProperty('width', '300px');
        pesquisa.setAttribute('placeholder', 'Buscar Anime... Ex. ' + RandomContent('name'));
    }
    else {
        aberto = 0;
        document.documentElement.style.setProperty('--tamanho-caixa', '0');
        document.documentElement.style.setProperty('--color-search', 'white');
        setTimeout(function () {
            document.documentElement.style.setProperty('--caixa-disp', 'none');
        }, 300)
        resultado.style.setProperty('visibility', 'hidden');
        resultado.style.setProperty('opacity', '0');
        // resultado.style.setProperty('width', '0');
    }
    button.disabled = false;
}

$(pesquisa).on('input', function () {
    $(resultado).find('.listResults').empty();
    searchResultList = [];
    if (pesquisa.value != '') {
        if (searchAnimes(pesquisa.value)) {
            for (let i = 0; i < searchResultList.length; i++) {
                // $("#searchResults .listResults").append('<div class="found"><h5>' + searchResultList[i].name + '</h5></div>');
                $("#searchResults .listResults").append('<div class="found"><img src="' + searchResultList[i].img + '"><div><a href="' + searchResultList[i].path + '">' + searchResultList[i].name + '</a><p>Anime Description...</p></div></div>');
            }
        } else {
            $("#searchResults .listResults").append('<div class="notFound"><h5>Sem resultados encontrados!</h5><h6>Tente outro título...</h6></div>');
        }
    }
});

function searchAnimes(val) {
    for (let i = 0; i < response.length; i++) {
        if (response[i].name.search(new RegExp(val, "i")) == 0) {
            searchResultList.push(response[i]);
        }
    }
    if (searchResultList != '') {
        return true;
    } else {
        return false;
    }
}

function randomSite() {
    var tds = document.querySelectorAll("#main .link");
    var rand = Math.floor(Math.random() * tds.length);
    // KeepWatchingCheck($(tds[rand]));
    tds[rand].click();
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

// $("#main").on('click', '.link', function () {
//     KeepWatchingCheck($(this));
// });

$("#mainSlides").on('click', '.slide-img', function () {
    // KeepWatchingCheck($(this).find('a'));
    // location.href = $(this).find('a').attr('href');
});

$("#keepWatching").on('click', '.slide-img', function () {
    // KeepWatchingCheck($(this).find('a'));
    // location.href = $(this).find('a').attr('href');
});

$("#main div img").click(function () {
    w2popup.open({
        title: 'Image',
        body: '<div class="w2ui-centered"><img src="' + $(this).attr('src') + '"></img></div>'
    });
});

// $("#searchResults").on('click', '.found', function () {
//     KeepWatchingCheck($(this).find('div').find('a'));
//     location.href = $(this).find('div').find('a').attr('href');
// });

$("#editUN").on('click', function () {
    username = prompt("Insira seu nome:", "Harry Potter");
    if (username != null) {
        if (nameInputed == false) {
            nameInputed = true;
            setCookie('nameInputed', nameInputed, 365);
        }
        setCookie('username', username, 365);
        alert("Seja bem-vindo(a) ao UrAnimes, " + username + "!");
    }
})

$(".hamburguer").on('click', function () {
    $("ul.nav").toggleClass('active')
})

function KeepWatchingCheck(obj) {

    for (let j = 0; j < response.length; j++) {
        if (response[j].name.includes(obj.text())) {
            if (watchList != '') {
                for (let i = 0; i < watchList.length; i++) {
                    if (watchList[i].includes(obj.text())) {
                        watchList.splice(i, 1);
                        watchList.unshift(response[j].name);
                        break;
                    } else {
                        if (i == watchList.length - 1) {
                            watchList.unshift(response[j].name);
                            break;
                        }
                    }
                }
            } else {
                watchList.unshift(response[j].name);
            }
            break;
        }
    }
    localStorage.watchList = JSON.stringify(watchList);
    // $.cookie('watchList', JSON.stringify(watchList));
}

function KeepWatchingNewCheck(obj) {

    for (let j = 0; j < response.length; j++) {
        if (response[j].name.includes(obj.attr('title'))) {
            if (watchList != '') {
                for (let i = 0; i < watchList.length; i++) {
                    if (watchList[i].includes(obj.attr('title'))) {
                        watchList.splice(i, 1);
                        watchList.unshift(response[j].name);
                        break;
                    } else {
                        if (i == watchList.length - 1) {
                            watchList.unshift(response[j].name);
                            break;
                        }
                    }
                }
            } else {
                watchList.unshift(response[j].name);
            }
            break;
        }
    }
    localStorage.watchList = JSON.stringify(watchList);
    // $.cookie('watchList', JSON.stringify(watchList));
}

function RandomContent(opt) {
    let x = Math.floor((Math.random() * response.length));
    if (opt == 'name') {
        return response[x].name;
    } else {
        if (opt == 'path') {
            return response[x].path;
        } else {
            if (opt == 'img') {
                return response[x].img;
            }
        }
    }
}
var aberto = 0;
var pesquisa = document.getElementById("pesquisa");
var resultado = document.getElementById("searchResults");
var pixKey = 'ffc1ec44-10d8-4742-a770-2abb42142827';
var searchResultList = [];
var watchList = [];
var data;
var response;

const url = "wwwroot/json/list.json";
const fetchJson = function () {
    fetch(url)
        .then(response => response.json())
        .then(test => {
            response = test;
        });
}();

const button = document.querySelector('button');
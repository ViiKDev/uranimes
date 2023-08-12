var news = "Temporada 1 de Sword Art Online está novamente disponível!\nAproveite ;3";
let showNewsToUser = "1.0.12"
$(document).ready(function () {
    let recentNews = getCookie('recentNews')
    if (recentNews != showNewsToUser) {
        showNews()
        recentNews = showNewsToUser
        setCookie('recentNews', recentNews)
    }
})
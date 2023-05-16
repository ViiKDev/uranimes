var news = "Novo layout de exibição de animes!\nAproveite ;3";
let showNewsToUser = 1
//Change between 0 and 1

$(document).ready(function () {
    let recentNews = getCookie('recentNews')
    if (recentNews != showNewsToUser) {
        showNews()
        recentNews = showNewsToUser
        setCookie('recentNews', recentNews)
    }
})
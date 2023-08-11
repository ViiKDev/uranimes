var news = "Anime Hunter X Hunter disponível!\nAproveite ;3";
let showNewsToUser = "1.0.13"
$(document).ready(function () {
    let recentNews = getCookie('recentNews')
    if (recentNews != showNewsToUser) {
        showNews()
        recentNews = showNewsToUser
        setCookie('recentNews', recentNews)
    }
})
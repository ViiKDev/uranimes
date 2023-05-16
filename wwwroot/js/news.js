var news = "Novos animes: Tonikaku Kawaii, Kimetsu no Yaiba!\nContinuação de DanMachi (Dungeon ni Deai)";
let showNewsToUser = 0

$(document).ready(function () {
    let recentNews = getCookie('recentNews')
    if (recentNews != showNewsToUser) {
        showNews()
        recentNews = showNewsToUser
        setCookie('recentNews', recentNews)
    }
})
var news = "4ª Temp de Kimetsu no Yaiba completa!\nAproveite ;3";
let showNewsToUser = "1.0.14"
$(document).ready(function () {
    let recentNews = getCookie('recentNews')
    if (recentNews != showNewsToUser) {
        showNews()
        recentNews = showNewsToUser
        setCookie('recentNews', recentNews)
    }
})
var news = "Mais de 50 novos animes adicionados, incluindo os animes: Oshi no Ko, Konosuba, Fullmetal Alchemist!! :o\nAproveite ;3";
let showNewsToUser = 0
//Change between 0 and 1

$(document).ready(function () {
    let recentNews = getCookie('recentNews')
    if (recentNews != showNewsToUser) {
        showNews()
        recentNews = showNewsToUser
        setCookie('recentNews', recentNews)
    }
})
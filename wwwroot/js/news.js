var news = "Agora sim, Oshi no Ko está realmente no ar juntamente com os novos episódios de Kimetsu no Yaiba!! :o\nAproveite ;3";
let showNewsToUser = "1.0.0"
$(document).ready(function () {
    let recentNews = getCookie('recentNews')
    if (recentNews != showNewsToUser) {
        showNews()
        recentNews = showNewsToUser
        setCookie('recentNews', recentNews)
    }
})
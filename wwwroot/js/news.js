var news = "Agora os episódios assistidos receberão uma cor diferente e o próximo será marcado!\nAproveite ;3";
let showNewsToUser = "1.0.11"
$(document).ready(function () {
    let recentNews = getCookie('recentNews')
    if (recentNews != showNewsToUser) {
        showNews()
        recentNews = showNewsToUser
        setCookie('recentNews', recentNews)
    }
})
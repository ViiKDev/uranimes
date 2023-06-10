var news = "Novo anime no ar: \"Araburu Kisetsu\"!\nAproveite ;3";
let showNewsToUser = "1.0.1"
$(document).ready(function () {
    let recentNews = getCookie('recentNews')
    if (recentNews != showNewsToUser) {
        showNews()
        recentNews = showNewsToUser
        setCookie('recentNews', recentNews)
    }
})
var news = "Overlord e Black Clover!\nAproveite ;3";
let showNewsToUser = "1.0.16"
$(document).ready(function () {
    let recentNews = getCookie('recentNews')
    if (recentNews != showNewsToUser) {
        showNews()
        recentNews = showNewsToUser
        setCookie('recentNews', recentNews)
    }
})
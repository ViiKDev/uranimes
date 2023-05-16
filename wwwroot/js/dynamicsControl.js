$("#animeDescContent .tempChoose").on('change', function () {
    $("#animeDescContent div.show").addClass('hide')
    $("#animeDescContent div.show").removeClass('show')
    $("#animeDescContent div#" + $(this).val()).removeClass('hide')
    $("#animeDescContent div#" + $(this).val()).addClass('show')
})

$(".ep-list .list-link").on('click', function () {
    KeepWatchingNewCheck($(this));
})

$(".read-more span").on('click', function () {
    if (!$(".description").hasClass("expand")) {
        $(".description").addClass("expand")
        $(".read-more").attr('style', 'animation: hideReadMore .3s forwards;')
        setTimeout(function () {
            $(".read-more").addClass("hide")
        }, 300)
    }
})
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
        let y = ($("#animeDesc").height() - document.querySelector(".tempChoose").getBoundingClientRect().top) * -1 + Number(document.documentElement.style.getPropertyValue('--desc-size').replace('px', ''))
        document.getElementById('animeDesc').scroll({
            top: y,
            behavior: 'smooth'
        });
        // document.querySelector(".tempChoose").scrollIntoView();
        // $("#animeDesc").animate({
        //     scrollTop: document.querySelector(".tempChoose").getBoundingClientRect().top - $("#animeDesc").height()
        //     // scrollTop: $("#animeDesc").height() - ($("#animeDesc").height() - $('.description.expand').height()) + 80
        // }, 'linear')
        // document.getElementById('animeDesc').scrollBy({ top: $('.description.expand').height() }, 'slow', 'linear')
    }
})

$("body.modal-open").on('keydown', function (e) {
    if (event.keyCode == 27) {
        $("button[rel='modal:close']").click()
    }
})

jQuery(document).ready(function ($) {

    if (window.history && window.history.pushState) {

        window.history.pushState('forward', null, './#forward');

        $(window).on('popstate', function () {
            if ($("body").hasClass("modal-open")) {
                $("button[rel='modal:close']").click()
            }
        });

    }
});
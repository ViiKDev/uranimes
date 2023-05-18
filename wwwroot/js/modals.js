$("a[rel='modal:open']").on('click', function () {
    addBackModal()
    addModals(this.hash)
    $("button[rel='modal:close']").addClass('show')
    // addDynamicScript()
})

$("[rel='modal:close']").on('click', function () {
    removeBackModal()
    removeModals('.modal')
    removeHash()
    removeDynamicScript()
    $("button[rel='modal:close']").removeClass('show')
})

$("#backModal").on('click', function () {
    removeBackModal()
    removeModals('.modal')
    removeHash()
    removeDynamicScript()
    $("button[rel='modal:close']").removeClass('show')
})

function addBackModal() {
    $("#backModal").addClass('show')
}

function removeBackModal() {
    $("#backModal").removeClass('show')
}

function addModals(m) {
    $(m).addClass('show')
    document.querySelector(m).scrollTop = 0
    $('body').addClass('modal-open')
}

function removeModals(m) {
    $(m).removeClass('show')
    $('body').removeClass('modal-open')
}

function removeHash() {
    history.pushState("", document.title, window.location.pathname
        + window.location.search);
}

function addDynamicScript() {
    $("body").append($("<script class='dynamic' src='wwwroot/js/dynamicsControl.js'></script>"))
}

function removeDynamicScript() {
    $("body script.dynamic").remove()
}

function scrollSmoothTo(e) {
    let el = e
    let elOffset = el.offset().top
    let elHeight = el.height()
    let windowHeight = $(window).height()
    let offset

    if (elHeight < windowHeight) {
        offset = elOffset - elHeight
    }
    else {
        offset = elOffset
    }
    let speed = 1000
    $('#animeDesc').animate({ scrollTop: offset }, speed)
}
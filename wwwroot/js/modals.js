$("a[rel='modal:open']").on('click', function () {
    addBackModal()
    addModals(this.hash)
    // addDynamicScript()
})

$("[rel='modal:close']").on('click', function () {
    removeBackModal()
    removeModals('.modal')
    removeHash()
    removeDynamicScript()
})

$("#backModal").on('click', function () {
    removeBackModal()
    removeModals('.modal')
    removeHash()
    removeDynamicScript()
})

function addBackModal() {
    $("#backModal").addClass('show')
}

function removeBackModal() {
    $("#backModal").removeClass('show')
}

function addModals(m) {
    $(m).addClass('show')
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
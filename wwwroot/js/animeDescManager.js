import animes from '../json/list.json' with { type: 'json' };

var data = animes;
var numArray = [];

data = data.sort((a, b) => {
    if (a.name < b.name) {
        return -1;
    }
});

$("a.link").on('click', function (e) {
    e.preventDefault()
})

$("#searchResults").on('click', '.found', function (e) {
    e.preventDefault()
    let title = $(this).find('div').find('a').text()
    prepareModal(title)
});

$("#main a.link").on('click', function (e) {
    let title = this.title
    prepareModal(title)
})

$("#mainSlides").on('click', '.slide-img', function () {
    let title = $(this).find('a').attr('title')
    prepareModal(title)
});

$("#keepWatching").on('click', '.slide-img', function () {
    let title = $(this).find('a').attr('title')
    prepareModal(title)
});

$(document).on('click', '.w2ui-centered img', function () {
    let title = $(this).attr('title')
    w2popup.close()
    prepareModal(title)
})

$(document).on('click', '#main div', function (e) {
    if (!$(e.target).is('img')) {
        let title = $(this).find('a').attr('title')
        prepareModal(title)
    }
})

function prepareModal(title) {
    $("a[href='#animeDesc']").click()
    let animeInfo = data.filter((e) => e.name == title)
    animeInfo = animeInfo[0]
    // save Seasons as T1, T2... Movies, OVAs
    $("#animeDescContent").empty()
    $("#animeDescContent").append($("<upper style='background-image: url(\"" + animeInfo.banner + "\")'><div class='wrapper'></div></upper>"))
    $("#animeDescContent upper .wrapper").append($("<div class='imgWrapper'><img src='" + animeInfo.img + "'></div>"))
    $("#animeDescContent upper .wrapper .imgWrapper").append($("<h1>" + animeInfo.name + "</h1>"))
    $("#animeDescContent").append($("<div class='description ignore'><p>" + animeInfo.desc + "</p><span class='read-more'><span>Mais</span></span></div>"))

    //get max height to animate "read more"
    document.documentElement.style.setProperty('--desc-size', $(".description p").height() + 'px')
    $(".description").removeClass("ignore")

    $("#animeDescContent").append($("<select class='tempChoose'></select>"))
    for (let prop in animeInfo.eps) {
        if ($("#animeDescContent .tempChoose")[0].innerHTML == "") {
            $("#animeDescContent .tempChoose").append($("<option value='" + prop + "'>" + prop + "</option>"))
        } else {
            $("#animeDescContent .tempChoose").append($("<option value='" + prop + "'>" + prop + "</option>"))
        }
        // $("#animeDescContent").append($("<p>" + prop + "</p>"))
        $("#animeDescContent").append($("<div id=" + prop + " class='hide ep-list'></div>"))
        for (let prop2 in animeInfo.eps[prop]) {
            let info = animeInfo.eps[prop][prop2]
            if (prop == "Movies") {
                // console.log(prop2, animeInfo.eps[prop][prop2])
                for (let m in info) {
                    let len = Object.keys(info).length
                    let idx = Object.keys(info).indexOf(m) + 1
                    let phrase = len > 1 ? prop2 + ' - Ep' + idx : prop2
                    $("#animeDescContent #" + prop).append($("<a class='list-link' target='_blank' title='" + animeInfo.name + "' href=" + info[m] + ">" + phrase + "</a>"))
                }
            } else {
                $("#animeDescContent #" + prop).append($("<a class='list-link' target='_blank' title='" + animeInfo.name + "' href=" + info + ">" + prop2 + "</a>"))
            }
            // console.log(prop2, animeInfo.eps[prop][prop2])
        }
    }
    $("#animeDescContent div#" + $(".tempChoose").val()).addClass('show')
    $("#animeDescContent div#" + $(".tempChoose").val()).removeClass('hide')
    addDynamicScript()
    CheckVisitedList($(".ep-list.show"))
}

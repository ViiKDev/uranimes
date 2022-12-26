var watchList = [];

import { data } from './animeList.js';

if ($.cookie('watchList') != undefined) {
    watchList = JSON.parse($.cookie('watchList'));
}

if (watchList != '') {
    $("#keepWatching").attr('style', '');
    if (username) {
        $("#kWAs").prepend("<h2>Continuar Assistindo Como " + username + "</h2>");
    } else {
        $("#kWAs").prepend("<h2>Continuar Assistindo</h2>");
    }
    for (let i = 0; i < watchList.length; i++) {
        $("#kWSlides").append("<div><div class='slide2'><div class='slide-img'><a href='' class='link'></a></div></div></div>");
    }
    $(".slide2 .slide-img").each(function (i, obj) {
        // $(this).attr('onclick', 'slideItemClick("' + data[numArray[i]].path + '")')
        $(this).attr('style', 'background-image: url("' + watchList[i][2] + '");');
        $(this).find('a').attr('href', watchList[i][0]);
        $(this).find('a').text(watchList[i][1]);
    });
}

function KeepWatchingCheck(obj) {

    for (let i = 0; i < data.length; i++) {
        if (data[i].name.includes(obj.text())) {
            if (watchList != '') {
                for (let j = 0; j < watchList.length; j++) {

                }
            } else {
                watchList.unshift([$(obj).attr('href'), $(obj).text()]);
            }
            break;
        }
    }


    // if (watchList != '') {
    //     for (let i = 0; i < watchList.length; i++) {
    //         if (watchList[i].includes($(obj).text()) == true) {
    //             watchList.splice(i, 1);
    //             watchList.unshift([$(obj).attr('href'), $(obj).text(), $(obj).parent().find('img').attr('src')]);
    //             break;
    //         } else {
    //             if (i == watchList.length - 1) {
    //                 watchList.unshift([$(obj).attr('href'), $(obj).text(), $(obj).parent().find('img').attr('src')]);
    //                 break;
    //             }
    //         }
    //     }
    // } else {
    //     watchList.unshift([$(obj).attr('href'), $(obj).text()]);
    // }


    $.cookie('watchList', JSON.stringify(watchList));
}


$("#main").on('click', '.link', function () {
    KeepWatchingCheck(this);
});

$("#mainSlides").on('click', '.slide-img', function () {
    KeepWatchingCheck($(this).find('a'));
    // location.href = $(this).find('a').attr('href');
});

$("#keepWatching").on('click', '.slide-img', function () {
    KeepWatchingCheck($(this).find('a'));
    // location.href = $(this).find('a').attr('href');
});
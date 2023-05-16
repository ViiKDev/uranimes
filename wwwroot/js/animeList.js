import animes from '../json/list.json' assert { type: 'json' };

var data = animes;
var numArray = [];

data = data.sort((a, b) => {
    if (a.name < b.name) {
        return -1;
    }
});

// console.log(data)

// window.addEventListener("pageshow", function (event) {
//     var historyTraversal = event.persisted ||
//         (typeof window.performance != "undefined" &&
//             window.performance.navigation.type === 2);
//     if (!historyTraversal) {
//         // Handle page restore.

//     }
// });

for (let i = 0; i < 12; i++) {
    $("#mainSlides").append('<div><div class="slide"><div class="slide-img"><a href="" class="link"></a></div></div></div>');
}

$(".slide .slide-img").each(function (i, obj) {
    RandomNumbers(i);
    // $(this).attr('onclick', 'slideItemClick("' + data[numArray[i]].path + '")')
    $(this).attr('style', 'background-image: url("' + data[numArray[i]].img + '");');
    $(this).find('a').attr('href', data[numArray[i]].path);
    $(this).find('a').text(data[numArray[i]].name);
    $(this).find('a').attr('title', data[numArray[i]].name);
});

// console.log(numArray);

// $(".slide .slide-img").attr('onclick', 'slideItemClick("' + data[0].path + '")')
// $(".slide .slide-img").attr('style', 'background-image: url("' + data[0].img + '");')
// $(".slide .slide-img a").attr('href', data[0].path)
// $(".slide .slide-img a").text(data[0].name)

for (let i = 0; i < data.length; i++) {
    // if (i < 10) {
    //     $("#mainSlides").append("<div><div class='slide'><div class='slide-img' style=\"background-image: url('" + data[i].img + "');\" onclick=\"slideItemClick(\'" + data[i].path + "\')\"><a class='link' href='" + data[i].path + "'>" + animes[i].name + "</a></div></div></div>");
    // }
    $("#main").append("<div><img src='" + data[i].img + "' alt='" + data[i].name + " Poster'><a href='" + data[i].path + "' class='link' title='" + animes[i].name + "'>" + animes[i].name + "</a></div>");
    // console.log("Name: " + data[i].name + "\nPath: " + data[i].path + "\nImage: " + data[i].img);
}

// <div class="slide"><div class="slide-img img-2" onclick="slideItemClick('Animes/Boku No Hero.html')"><a href="Animes/Boku No Hero.html">Boku No Hero</a></div></div>

// console.log(animes.filter(a => a.name === 'Akame Ga Kill')[0].img)

function RandomNumbers(i) {
    let x = Math.floor((Math.random() * data.length));
    if (i > 0 && numArray.includes(x)) {
        // console.log("Includes " + x + " in " + i)
        RandomNumbers(i);
        return;
    }
    numArray.push(x);
}



// watchList



if (localStorage.watchList != undefined) {
    watchList = JSON.parse(localStorage.watchList);
}

if (watchList != '') {
    $("#keepWatching").attr('style', null);
    for (let i = 0; i < watchList.length; i++) {
        $("#kWSlides").append("<div><div class='slide2'><div class='slide-img'><a href='' class='link'></a></div></div></div>");
    }
    $(".slide2 .slide-img").each(function (i, obj) {
        // $(this).attr('onclick', 'slideItemClick("' + data[numArray[i]].path + '")')
        let x = findAnimeOnList(watchList[i]);
        let item = data[x];
        $(this).attr('style', 'background-image: url("' + item.img + '");');
        $(this).find('a').attr('href', item.path);
        $(this).find('a').text(item.name);
        $(this).find('a').attr('title', item.name);
    });
}

function findAnimeOnList(val) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].name.search(new RegExp(val, "i")) == 0) {
            return i;
        }
    }
}
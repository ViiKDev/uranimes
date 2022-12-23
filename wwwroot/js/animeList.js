import animes from '../json/list.json' assert { type: 'json' };

var data = animes;

data = data.sort((a, b) => {
    if (a.name < b.name) {
        return -1;
    }
});

console.log(data)

for (let i = 0; i < data.length; i++) {
    $("#main").append("<div><img src='" + data[i].img + "' alt='" + data[i].name + " Poster'><a href='" + data[i].path + "' class='link' title='" + animes[i].name + "'>" + animes[i].name + "</a></div>");
    // console.log("Name: " + data[i].name + "\nPath: " + data[i].path + "\nImage: " + data[i].img);
}

$("#main div img").click(function () {
    w2popup.open({
        title: 'Image',
        body: '<div class="w2ui-centered"><img src="' + $(this).attr('src') + '"></img></div>'
    });
});

// console.log(animes.filter(a => a.name === 'Akame Ga Kill')[0].img)
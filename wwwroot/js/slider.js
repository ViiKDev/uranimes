let slider = tns({
    container: ".my-slider",
    "slideBy": 1,
    "speed": 400,
    "nav": false,
    "rewind": true,
    controlsContainer: "#controls",
    prevButton: ".voltar",
    nextButton: ".avancar",
    responsive: {
        1440: {
            "slideBy": 5,
            items: 5,
            gutter: 20
        },
        1152: {
            "slideBy": 4,
            items: 4,
            gutter: 20
        },
        800: {
            "slideBy": 3,
            items: 3,
            gutter: 20
        },
        540: {
            "slideBy": 2,
            items: 2,
            gutter: 20
        },
        420: {
            "slideBy": 1,
            items: 1
        },
    }
});

let slider2 = tns({
    container: ".my-slider2",
    "slideBy": 1,
    "speed": 400,
    "nav": false,
    "rewind": true,
    controlsContainer: "#controls2",
    prevButton: ".voltar2",
    nextButton: ".avancar2",
    responsive: {
        1440: {
            "slideBy": 5,
            items: 5,
            gutter: 20
        },
        1152: {
            "slideBy": 4,
            items: 4,
            gutter: 20
        },
        800: {
            "slideBy": 3,
            items: 3,
            gutter: 20
        },
        540: {
            "slideBy": 2,
            items: 2,
            gutter: 20
        },
        420: {
            "slideBy": 1,
            items: 1
        },
    }
});
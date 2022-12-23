let slider = tns({
    container: ".my-slider",
    "slideBy": 1,
    "speed": 400,
    "nav": false,
    // controlsContainer: "#controls",
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
})
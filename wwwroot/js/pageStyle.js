setInterval(function () {
    document.documentElement.style.setProperty('--navbar-height', document.getElementsByTagName("header")[0].offsetHeight + 'px');
}, 1);
// Measuring the Critical Rendering Path with Navigation Timing
// https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp

function logCRP() {
    var t = window.performance.timing,
        dcl = t.domContentLoadedEventStart - t.domLoading,
        complete = t.domComplete - t.domLoading;
    var stats = document.getElementById('crp-stats');
    stats.textContent = 'DCL: ' + dcl + 'ms, onload: ' + complete + 'ms';
}

window.addEventListener('load', function (event) {
    logCRP();
});

!function () {
    function e(e, t, n) {
        e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n)
    }

    function t(e) {
        return window.localStorage && localStorage.font_css_cache && localStorage.font_css_cache_file === e
    }

    function n() {
        if (window.localStorage && window.XMLHttpRequest)
            if (t(o)) a(localStorage.font_css_cache);
            else {
                var n = new XMLHttpRequest;
                n.open("GET", o, !0), e(n, "load", function () {
                    4 === n.readyState && (a(n.responseText), localStorage.font_css_cache = n.responseText, localStorage.font_css_cache_file = o)
                }), n.send()
            } else {
            var c = document.createElement("link");
            c.href = o, c.rel = "stylesheet", c.type = "text/css", document.getElementsByTagName("head")[0].appendChild(c), document.cookie = "font_css_cache"
        }
    }

    function a(e) {
        var t = document.createElement("style");
        t.innerHTML = e, document.getElementsByTagName("head")[0].appendChild(t)
    }

    var o = "http://fonts.googleapis.com/css?family=Open+Sans:400,700";
    window.localStorage && localStorage.font_css_cache || document.cookie.indexOf("font_css_cache") > -1 ? n() : e(window, "load", n)
}();
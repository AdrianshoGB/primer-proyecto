function windowOnLoad() { /* To resize the iframe : unchanged??? */
    /* alert("servicios: onload");
    window.parent.hs.getExpander().reflow(); */
    var params = {};
    alert("in windowOnLoad");
    location.search.slice(1).split("&").forEach(function (pair) {
        pair = pair.split("=");
        /* alert("servicios:"+pair[0]); */
        if (pair[0] === "oscuro") {
            /* alert("servicios: set oscuro"); */
            document.body.classList.add('oscuro');
            document.body.classList.remove('claro');
        } else if (pair[0] === "claro") {
            /* alert("servicios: set claro"); */
            document.body.classList.remove('oscuro');
            document.body.classList.add('claro');
        }
        params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    });
}


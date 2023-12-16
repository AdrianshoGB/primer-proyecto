/* var currBoton = "" */
/*alert("Start: Menu2"); */
/*window.currBoton = "";*/

function updateIFrameToContent(iFrame) {
    /*alert("updateIFrameToContent()"); OK
    var iFrame = document.getElementById("content");
    iFrame.style.height = iFrame.contentWindow.document.body.scrollHeight + "px"; FAILS HERE
    alert("iFrame.style.height set");
    iFrame.width  = iFrame.contentWindow.document.body.scrollWidth;
    iFrame.height = iFrame.contentWindow.document.body.scrollHeight;
    document.hs.getExpander().reflow(); ALSO FAILS
    document.vs.getExpander().reflow();
    alert("after reflow");*/
}

function setTarget(target, btn) {
    var darkmodeswitch = document.getElementById("darkmodeswitch");
    var myIframe = document.getElementById("content");
    if (darkmodeswitch !== null) {
        if (myIframe !== null) {
            window.currBoton = btn;
            if (darkmodeswitch.checked) {
                myIframe.src = target + "?oscuro=\"1\"";
            } else {
                myIframe.src = target + "?claro=\"1\"";
            }
            /*myIframe.onload = function()
            {
                documenths.getExpander().reflow();
            }
            alert("Before myIframe.onload();");
            myIframe.onload();  NOTHING!!!
            alert("After myIframe.onload();");*/
            updateIFrameToContent(myIframe);
        }
    }
}
/* Javascript para el boton de cambio de modo oscuro-claro */

function updateDarkModeClass(darkmodeswitch) {
    if (darkmodeswitch.checked) {
        document.documentElement.classList.add('oscuro');
        document.documentElement.classList.remove('claro');
    } else {
        document.documentElement.classList.remove('oscuro');
        document.documentElement.classList.add('claro');
    }
}

function darkModeSwitchChanged() {
    /* var darkmodeswitch = document.getElementById("darkmodeswitch"); */
    var darkmodeswitch = document.getElementById("darkmodeswitch");
    updateDarkModeClass(darkmodeswitch)
    /* To inform the iframe of the change
    (let it reparse the parameter; calling onload directly on the iframe doesn't work) */
    /*if (window.currBoton !== "") {
        switch (window.currBoton) {
        case "btn_ini": setTarget("./inicio.htm", window.currBoton);
            break;
        case "btn_nos": setTarget("./nosotros.htm", window.currBoton);
            break;
        case "btn_serv": setTarget("./servicios.htm", window.currBoton);
            break;
        case "btn_prod": setTarget("./productos.htm", window.currBoton);
            break;
        case "btn_rep": setTarget("./repuestos.htm", window.currBoton);
            break;
        case "btn_impl": setTarget("./implementos.htm", window.currBoton);
            break;
        case "btn_cont": setTarget("./contacto.htm", window.currBoton);
            break;
        }
    }*/
}

/*
var darkmodeswitch = document.getElementById("darkmodeswitch");
darkmodeswitch.addEventListener('change', darkModeSwitchChanged);
*/

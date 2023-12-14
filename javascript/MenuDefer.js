function resizeIFrameToFitContent(iFrame) {
    alert("MenuDefer resizeIFrameToFitContent"); /* nothing... */
    /*alert("resizeIFrameToFitContent");*/
    iFrame.width = iFrame.contentWindow.document.body.scrollWidth;
    iFrame.height = iFrame.contentWindow.document.body.scrollHeight;
    parent.document.hs.getExpander().reflow();
    parent.document.vs.getExpander().reflow();
}

/*window.addEventListener('DOMContentLoaded', function(e)
{
	var iFrame = document.getElementById( 'content' );
	resizeIFrameToFitContent( iFrame );

	// or, to resize all iframes:
	var iframes = document.querySelectorAll("iframe");
	for( var i = 0; i < iframes.length; i++) {
		resizeIFrameToFitContent( iframes[i] );
	}
} );*/

function resizeIFrame() {
    alert("in Menudefer resizeIFrame");
    /*var iFrame = parent.document.getElementById('content');*/
    resizeIFrameToFitContent(parent.document.getElementById('content'));
    /* or, to resize all iframes:
    var iframes = document.querySelectorAll("iframe");
    for (var i = 0; i < iframes.length; i++) {
        resizeIFrameToFitContent( iframes[i] );
    }*/
}
/*alert("Before window.onload");
window.onload = windowOnLoad();
alert("Before resizeIFrame");
resizeIFrame();
alert("After resizeIFrame");*/


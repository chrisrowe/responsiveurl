var paths = [],
    full = screen.width,
    usepath,
    old_usepath;

paths[0] = "/";
paths[1] = "/rspnsv/url/";
paths[2] = "/responsive/url/";
paths[3] = "/responsive/dont/forget/url/";
paths[4] = "/making/responsive/dont/forget/url/";
paths[5] = "/making/everything/responsive/dont/forget/url/";
paths[6] = "/making/everything/responsive/dont/forget/the/url/";
paths[7] = "/were/making/everything/responsive/dont/forget/the/url/";
paths[8] = "/while/were/making/everything/responsive/dont/forget/the/url/";
paths[9] = "/while/were/making/everything/responsive/lets/not/forget/the/url/";
paths[10] = "/while/were/making/every/damn/thing/responsive/lets/not/forget/the/url/";
paths[11] = "/while/were/making/every/damn/thing/responsive/lets/not/forget/about/the/url/";

function adjustURL() {
    width = $(this).width();
    usepath = Math.floor((((width/full)-.3)*16));
    if (usepath < 0 || full < 400) {
        if (window.location.hostname != "rspnsvurl.co.uk") window.location = "http://rspnsvurl.co.uk";
    }else{
        if (window.location.hostname != "responsiveurl.co.uk") window.location = "http://responsiveurl.co.uk";
    }
    if (usepath != old_usepath AND window.location.hostname != "rspnsvurl.co.uk") {
        history.pushState(null, null, paths[usepath]);
        old_usepath = usepath;
    }
}
$(window).resize(function (){
    adjustURL();
});
$(document).ready(function (){
    $("h1").fitText();
    adjustURL();
});
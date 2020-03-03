// adding pin icon
var cartpin = $('<div class="action-menu-item"></div>');
cartpin.css({ 'color': 'green' , 'cursor': 'pointer' });
var pinicon = $('<i id="cartpin" class="icon fa fa-thumb-tack" title="Pin delekurv til top"></i>');
cartpin.append(pinicon);
cartpin.insertBefore($('.block_sharing_cart').find('.action-menu-item'));

// getting cookie
var isPinned = getCookie("isPinned");
if (isPinned == "") {
    setCookie("isPinned", "false");
    isPinned = "false";
} else if (isPinned == "true") {
    $('#cartpin').css({ 'color': 'red' });
    $('#cartpin').prop('title', 'Fjern pin til toppen');
    $('.block_sharing_cart').css({ 'position': 'fixed', 'top': '75px', 'z-index': '1000' });
}

//setup eventhandler for cartpin icon
$('#cartpin').on("click", function () {
    if (isPinned == "true") {
        setCookie("isPinned", "false");
        isPinned = "false";
        $('#cartpin').css({ 'color': 'green' });
        $('#cartpin').prop('title', 'Pin delekurv til top');
        $('.block_sharing_cart').css({ 'position': '', 'top': '', 'z-index': '' });
    } else if (isPinned == "false") {  
        setCookie("isPinned", "true");
        isPinned = "true";     
        $('#cartpin').css({ 'color': 'red' });
        $('#cartpin').prop('title', 'Fjern pin til toppen');
        $('.block_sharing_cart').css({ 'position': 'fixed', 'top': '75px', 'z-index': '1000' });
    }
});


//function for setting cookie( only sessioncookie)
function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";path=/";
}
//vanilla function to get cookie value
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

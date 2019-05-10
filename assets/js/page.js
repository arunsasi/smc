$(function () {

    'use strict';

    // SLIMSCROLL FOR CRITICAL UPDATE NOTIFICATION
    $('#recent-critical-update').slimScroll({
        height: '180px'
    })
    // TOOLTIP
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();

    $(".box-tools .full-card").on("click", function () {
        var e = $(this);
        $(e.parents(".box")).toggleClass("full-card"), $(this).toggleClass("icon-maximize"), $(this).toggleClass("icon-minimize")
    });

});


function toggleFullScreen() {
    var a = $(window).height() - 10;
    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement) {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
    $('.full-screen').toggleClass('fa-expand');
    $('.full-screen').toggleClass('fa-compress');
}

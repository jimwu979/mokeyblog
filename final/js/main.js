(function(){
'use strict';
var global = [];
global.$window = $(window),
global.win = $('#topLayer'),
global.winW = global.win.width(),
global.winH = global.win.height();
function init(){
    $('header a').each(function(){
       var _this = $(this);
       if (location.pathname.slice(1) == _this.attr('href')) {
           _this.addClass('now');
       } 
    });
}
function windowResize(){
    global.winW = global.win.width(),
    global.winH = global.win.height();
}
function openDropdownBox(){
    if (global.winW > 767) {
        $(this).children('.dropdown').stop().fadeIn();
    }else{
        $(this).children('.dropdown').stop().slideDown();
    }
}
function closeDropdownBox(){
    if (global.winW > 767) {
        $(this).children('.dropdown').stop().fadeOut();
    }else{
        $(this).children('.dropdown').stop().slideUp();
    }
}
function toggleMenu(){
    $(this).siblings('.content').toggleClass('show');
}
function scrollEvent(){
    if (global.$window.scrollTop() > global.winH / 2) {
        $('#gototop_btn').addClass('show');
    }else{
        $('#gototop_btn').removeClass('show');
    }
}
function gototop(){
    $('html, body').animate({'scrollTop': 0}, 300);
}
init();
$('header .dropdown_box').on({
    'mouseover': openDropdownBox,
    'mouseleave': closeDropdownBox
});
$('#menu_btn').click(toggleMenu);
$('#gototop_btn').click(gototop);
global.$window.on({
    'scroll': scrollEvent,
    'resize': windowResize
});
}());
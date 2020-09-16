(function(){
'use strict';
const global = [];
global.$window = $(window),
global.win = $('#fixbox'),
global.winW = global.win.width(),
global.winH = global.win.height();
function init(){
    let $bannerbox = $('#banner_box');
    let banner_length = $bannerbox.children().length;
    $bannerbox.width(banner_length * global.winW);
    $bannerbox.children().width(global.winW);
}
function switchBanner(){
    let _this = $(this);
    let direction = _this.index() == 0 ? -1 : 1;
    let banner_length = $('#banner_box').children().length;
    let $nowLi = _this.parent().siblings('ul').children('li.now');
    let nowIndex = $nowLi.index();
    let newIndex = nowIndex + direction;
    if (newIndex >= banner_length) {
        newIndex = 0;
    } else if (newIndex < 0){
        newIndex = banner_length - 1;
    }
    $nowLi.removeClass('now').parent().children().eq(newIndex).addClass('now');
    let banner_box_newposition = newIndex * global.winW * -1;
    $('#banner_box').css('left', banner_box_newposition);
}

init();
$(window).resize(init);
$('#switch div').click(switchBanner);
}());
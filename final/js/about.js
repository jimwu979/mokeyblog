(function(){
'use strict';
var global = [];
global.$information = $('#information');
function init(){
    setInterval(function(){
        var now = global.$information.children('.show').index() + 1;
        var total = global.$information.children().length;
        now = (now == total) ? 0 : now;
        global.$information.children('.show').removeClass('show');
        global.$information.children().eq(now).addClass('show');
    }, 4000);
}
function select_supervisor(){
    $(this).next().children().removeClass('show')
        .eq(_this.val()).addClass('show');
}
$('#supervisor_select').change(select_supervisor);
init();
}());
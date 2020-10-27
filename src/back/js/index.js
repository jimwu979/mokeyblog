(function(){
'use strict';
function init(){

}
function saveSlideShow(){
    let $element = $('.COMPONENT_elementbox > .element');
    let sideshow_length = $element.length;
    let post_content = [];
    for(let i = 0; i < sideshow_length; i++){
        post_content.push($element.eq(i).find('h3').attr('data-id'));
    }
    ajax(post_content);
    $('#saveSuccess').addClass('open');
}
function closeLightbox(){
    $('#saveSuccess').removeClass('open');
}

init();
$('.main_btn .save').click(saveSlideShow);
$('#saveSuccess .confirm').click(closeLightbox);
}());
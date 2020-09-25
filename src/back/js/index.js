(function(){
'use strict';
function init(){

}
function saveSlideShow(){
    let $element = $('.COMPONENT_elementbox > .element');
    let sideshow_length = $element.length;
    let form_url = $('#form').attr('action') + '?'; 
    for(let i = 0; i < sideshow_length; i++){
        form_url += $element.eq(i).find('h3').attr('data-id') +'&';
    }
    $('#form').attr('action', form_url).trigger('submit');
}

init();
$('.main_btn .save').click(saveSlideShow);
}());
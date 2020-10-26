(function(){
'use strict';
function init(){
}
function upload_img(){
    $(this).parent().addClass('newImg');
}
function filltext(){
    $(this).addClass('newText');
}
function save(){
    let post_content = [];
    let member_length = $('.COMPONENT_elementbox .element').length;
    for(let i = 0; i < member_length; i++){
        let $element = $('.COMPONENT_elementbox .element').eq(i);
        if($element.attr('data-type') == 'member'){
            let element_id = $element.attr('data-id');
            let $imgbox = $element.find('.COMPONENT_inputbox_image');
            let element_image = 
                $imgbox.hasClass('newImg') ? 
                $imgbox.css('background-image').slice(5, -2) : false;
            let name = 
                $element.find('.text div:nth-child(1) input').hasClass('newText') ?
                $element.find('.text div:nth-child(1) input').val() : false;
            let job = 
                $element.find('.text div:nth-child(2) input').hasClass('newText') ?
                $element.find('.text div:nth-child(2) input').val() : false;
            post_content.push({element_id, element_image, name, job});
        }
    }
    ajax(post_content);
    $('#saveSuccess').addClass('open');
}
function closeLightbox(){
    $('#saveSuccess').removeClass('open');
}

init();
$('.COMPONENT_elementbox')
    .on('change', 'input[type="file"]', upload_img)
    .on('change', 'input[type="text"]', filltext);
$('#save').click(save);
$('#saveSuccess .confirm').click(closeLightbox);
}());
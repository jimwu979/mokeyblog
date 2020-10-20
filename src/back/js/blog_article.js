(function(){
'use strict';
let post_content = {
    'info': {
        'title': false,
        'class': false,
        'date': {
            'year': false,
            'month': false,
            'day': false
        },
        'img': false,
        'banner': false,
        'slideShow': false
    },
    'article': '',
    'message': {
        'all': false,
        'each': []
    }
}
function init(){
}
function save(){
    let $elementbox = $('.COMPONENT_elementbox');
    if($elementbox.hasClass('fill')){
        let element_length = $elementbox.children().length;
        let article = '';
        for(let i = 0; i < element_length; i++){
            let $element = $elementbox.children().eq(i);
            let element_type = $element.attr('data-type');
            let value;
            switch (element_type) {
                case 'title':
                    value = $element.find('input').val();
                    article += `<h3>${value}</h3>`;
                    break;
                case 'paragraphy':
                    value = $element.find('textarea').val();
                    article += `<p>${value}</p>`;
                    break;
                case 'image':
                    value = $element.find('.COMPONENT_inputbox_image').css('background-image').slice(5, -2);
                    article += `<img src='${value}'/>`;
                    break;
            }
            post_content.article = article;
        }
    }
    console.log(post_content);
    ajax(post_content);
    event.preventDefault();
}
function display_allmessage(){
    let _this = $(this);
    post_content.message.all = _this.siblings('label').hasClass('open');
    console.log(post_content);
}
function fill_information(){
    let _this = $(this);
    let goal = _this.attr('data-savePosition');
    let value;
    let inputType = _this.attr('type');
    let setTimeout_sec;
    if (inputType == 'file') {
        setTimeout_sec = 500;
        let reader = new FileReader();
        reader.readAsDataURL(_this['0']['files']['0']);
        reader.onload = function(e){
            value = reader.result;
        }
    } else {
        setTimeout_sec = 0;
        value = _this.val();
    }
    setTimeout(() => {
        eval('post_content.' + goal + '= value');
    }, setTimeout_sec);
}
function fill_message(){
    let _this = $(this);
    let input_id = _this.attr('id');
    let display = _this.siblings('label').hasClass('open');
    post_content.message.each.push({input_id, display});
}
function fillArticle(){
    $(this).addClass('fill');
}

init();
$('.COMPONENT_elementbox').click(fillArticle);
$('#sec_information input').change(fill_information);
$('#sec_message input#showAllMessage').change(display_allmessage);
$('#sec_message .message_list input').change(fill_message);
$('#save').click(save);
}());
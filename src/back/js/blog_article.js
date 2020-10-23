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
    'article': {
        'html': false,
        'img':[]
    },
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
            let data_id;
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
                    let $inputbox_image = $element.find('.COMPONENT_inputbox_image');
                    let inputboxBGI = $inputbox_image.css('background-image');
                    let base64_start = inputboxBGI.indexOf(';base64,');
                    if (base64_start != -1) {
                        let img_base64 = inputboxBGI.slice(5, -2);
                        let imgFormat = img_base64.slice(0, base64_start);
                        if (imgFormat.indexOf('jpeg') != -1) {
                            imgFormat = 'jpeg';
                        } else if (imgFormat.indexOf('jpg') != -1){
                            imgFormat = 'jpg';
                        } else if (imgFormat.indexOf('png') != -1){
                            imgFormat = 'png';
                        } else if (imgFormat.indexOf('svg') != -1){
                            imgFormat = 'svg';
                        }
                        value = $element.find('input').attr('id') + '.' + imgFormat;
                        article += `<img src='img/${value}'/>`;
                        
                        let searchArray = 
                            $.map(  post_content.article.img, 
                                    function(item, index) {
                                        return item.value
                            })
                            .indexOf(value);
                        if (searchArray == -1) {
                            post_content.article.img.push({value, img_base64});
                        } else {
                            post_content.article.img[searchArray]['img_base64'] = img_base64;
                        }
                    }else{
                        value = inputboxBGI.slice(5, -2);
                        article += `<img src='${value}'/>`;
                    }
                    break;
            }
            post_content.article.html = article;
        }
    }
    // console.log(post_content.article);
    ajax(post_content);
    // alert('儲存完成！');
    $('#saveSuccess').addClass('open');
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
function deleteArticle(){
    ajax('delete');
    goToBlogList();
}
function whetherToConfirmDelete(){
    $('.whetherToDeleteArticle').addClass('open');
}
function closeLightbox(){
    $(this).parents('.lightbox').removeClass('open');
}
function goToBlogList(){
    location.href = 'blog_list.php';
}

init();
$('.COMPONENT_elementbox').click(fillArticle);
$('#sec_information input').change(fill_information);
$('#sec_message input#showAllMessage').change(display_allmessage);
$('#sec_message .message_list input').change(fill_message);
$('#save').click(save);
$('#delete').click(whetherToConfirmDelete);
$('#whetherToDeleteArticle .cancel').click(closeLightbox);
$('#whetherToDeleteArticle .confirm').click(deleteArticle);
$('#saveSuccess .confirm').click(goToBlogList);
}());
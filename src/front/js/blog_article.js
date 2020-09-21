(function(){
'use strict';
function init(){
    const photo_random = parseInt(Math.random() * 10);
    let animal = 'url(img/blog_article/animal_' + photo_random + '.jpg)';
    $('#fixbox .img').css('background-image', animal);
    
    const name_random = parseInt(Math.random() * 10);
    let name_preset = [ '米格魯', '螢火蟲', '北極熊', '蝸牛', '眼鏡猴', 
                        '波斯貓', '長頸鹿', '白頭翁', '蜻蜓', '哈士奇'];
    name_preset = name_preset[name_random];
    $('#userName').attr('placeholder', name_preset);
}
function reply(){
    let _this = $(this);
    let dataGoal = (_this.attr('id') == 'reply') ? 'newMessage' : _this.parent().parent().attr('data-message');
    $('#fixbox').addClass('show').children('form').attr('data-goal', dataGoal);
}
function closeForm(){
    $(this).parents('#fixbox').removeClass('show');
}
function reCAPTCHA(){
    // reCAPTCHA
    grecaptcha.ready(function() {
        grecaptcha.execute(
            '6LcLrc0ZAAAAACp0KdXkXxyRJJu3AH5xB2mEqxgg', 
            {action: 'homepage'}).then(function(token) {
                var recaptchaResponse = document.getElementById('recaptchaResponse');
                recaptchaResponse.value = token;
            }
        );
    });
}
function form_submit(){
    let message_length = $(this).find('textarea').val().length;
    if (message_length == 0){
        event.preventDefault();
    }
}
init();
reCAPTCHA();
$('#reply, #message .name span').click(reply);
$('#message_form').submit(form_submit);
$('#close').click(closeForm);
}());
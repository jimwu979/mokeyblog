(function(){
'use strict';
function init(){
    
}
function closeAlert(){
    $(this).parents('#alert').removeClass('open');
    event.preventDefault();
}
function removeData(){
    // ajax
    event.preventDefault();
}
function input_addNow(){
    $(this).parent().addClass('now');
}
function input_removeNow(){
    $(this).parent().removeClass('now');
}
function toggleDropDownMenu(){
    $(this).toggleClass('open');
}
function uploadImg(){
    var _this = $(this);
    var reader = new FileReader();
    reader.readAsDataURL(_this['0']['files']['0']);
    reader.onload = function(e){
        _this.parent().css('background-image', 'url('+ e.target.result +')');
    }
}
function openAlert(){
    var alert_text = $(this).attr('data-alertText');
    $('#alert').addClass('open')
                .children('p').text(alert_text);
    event.preventDefault();
}


$('.inputbox_text input, .inputbox_textarea textarea').on({
    'focus': input_addNow,
    'blur': input_removeNow
});


$('.body').on('change', '.GLOBAL_inputFile', uploadImg);
$('#article').on('click', '.element_addElement .dropDownMenu',
toggleDropDownMenu);

$('.GLOBAL_alert_btn').click(openAlert);
$('#alert_cancel').click(closeAlert);
$('#alert_submit').click(removeData);
$('#removeData_btn').click(openAlert);
init();



// test !!
$('.body').scrollTop(localStorage.getItem('scrollY'));
$('.body').scroll(function(){
    localStorage.setItem('scrollY', $('.body').scrollTop());
});
}());
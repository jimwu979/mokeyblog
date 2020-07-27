(function(){
'use strict';
function saveData(){
    $('#formSubmit').trigger('click');
}
function input_addNow(){
    $(this).parent().addClass('now');
}
function input_removeNow(){
    $(this).parent().removeClass('now');
}
$('.inputbox_text input').on({
   'focus': input_addNow,
   'blur': input_removeNow
});
$('#btn_add').click(saveData);
}());
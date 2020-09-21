(function(){
'use strict';
function init(){

}
function form_submit(){
    let userName    = $('#name').val().length;
    let userPhone   = $('#phone').val().length;
    let userCompany = $('#company').val().length;
    let userJob     = $('#job').val().length;
    let userMessage = $('#message').val().length;
    if (userName    == 0 ||
        userPhone   == 0 ||
        userCompany == 0 ||
        userJob     == 0 ||
        userMessage == 0 
    ){
        alert('請將所有欄位填寫完整');
        event.preventDefault();
    }
}
init();
$('form').submit(form_submit);
}());
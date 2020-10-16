(function(){
'use strict';
function init(){

}
function ajax_test(){
    let now_url = window.location.pathname;
    let post_data = {
        'url': now_url,
        'content': {
            "a": "aaa",
            "b": "bbb"
        }
    };
    $.ajax({
        type: 'POST',
        url: 'function/ajax_receiver.php',
        dataType: 'text',
        data: post_data,
        success: function(data){
            console.log(data);
        },
        error: function(data){
            console.log('ERROR!');
            console.log('data.status :'+ data.status);
        }
    });
}

init();
$('.ajax_btn').click(ajax_test);
}());
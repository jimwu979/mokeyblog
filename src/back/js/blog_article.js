(function(){
'use strict';
function init(){

}
function save(){
    let info = {
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
    };
    let article = '';
    let message = '';
    let post_content = {
        'info': info,
        'article': article,
        'message': message
    };
    ajax(post_content);
    event.preventDefault();
}

init();
$('#asd').change(function(){
    console.log('change!!!');
})
$('#save').click(save);
}());
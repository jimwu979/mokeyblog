// (function(){
// 'use strict';
const global = [];
global.window = $(window),
global.win = $('#fixbox'),
global.winW = global.win.width(),
global.winH = global.win.height();
global.elementHTML = function(type, data_id, label, content){
    return `<div class="element" data-type="${type}" data-id="${data_id}">
                <label>${label}</label>
                <div class="content">${content}</div>
                <div class="btn_box">
                    <div class="delete"></div>
                    <div class="up"></div>
                    <div class="down"></div>
                </div>
            </div>`;
}
global.element_content = {
    'title': {
        'label': '標題',
        'content': `<div class="COMPONENT_inputbox_text">
                        <input type="text">
                    </div>`
    },
    'paragraphy': {
        'label': '段落',
        'content':  `<textarea class="COMPONENT_inputbox_textarea">`+
                    `</textarea>`
    },
    'image': {
        'label': '圖片',
        'content': `<div class="COMPONENT_inputbox_image">
                        <input type="file" id="img_">
                        <label for="upload_img"></label>
                    </div>`
    },
    'member': {
        'label': '成員',
        'content': `<div class="member">
                        <div class="img">
                            <div class="COMPONENT_inputbox_image">
                                <input type="file" id="" accept="image/jpeg, image/png">
                                <label for=""></label>
                            </div>
                        </div>
                        <div class="text">
                            <div class="COMPONENT_inputbox_text">
                                <input type="text" placeholder="姓名">
                            </div>
                            <div class="COMPONENT_inputbox_text">
                                <input type="text" placeholder="職位">
                            </div>
                        </div>
                    </div>`
    }
}

// COMPONENT
    function togglebtn(){
        $(this).toggleClass('open');
    }
    function message_toggle(){
        let _this = $(this);
        if (!_this.hasClass('open')) {
            _this.parent().addClass('off');
        }else{
            _this.parent().removeClass('off');
        }
    }
    function uploadImg(){
        var _this = $(this);
        var reader = new FileReader();
        reader.readAsDataURL(_this['0']['files']['0']);
        reader.onload = function(e){
            _this.parent().css('background-image', `url(${e.target.result})`);
        }
    }
    // elementbox
        function COMPONENT_getElementHeight(element){
            return element.height()
                    + parseInt(element.css('padding-top'))
                    + parseInt(element.css('padding-bottom'))
                    + parseInt(element.css('border-top-width'))
                    + parseInt(element.css('border-bottom-width'));
        }
        function COMPONENT_reset_elementbox_height(){
            let $elementbox = $('.COMPONENT_elementbox');
            let $element = $elementbox.children('.element');
            let element_length = $element.length;
            let elementbox_height = 0;
            let element_spacing = (global.winW >= 768) ? 15 : 7;
            for(let i = 0; i < element_length; i++){
                elementbox_height += COMPONENT_getElementHeight($element.eq(i)) + element_spacing;
            }
            $elementbox.height(elementbox_height);
        }
        function COMPONENT_reset_element_position(){
            let $element = $('.COMPONENT_elementbox .element');
            let element_length = $element.length;
            let element_spacing = (global.winW >= 768) ? 15 : 7;
            let element_position = element_spacing;
            for(let i = 0; i < element_length; i++){
                let $element_eq = $element.eq(i);
                if (i > 0) {
                    element_position += COMPONENT_getElementHeight($element.eq(i - 1)) + element_spacing;
                }
                $element_eq.css('top', element_position);
            }
        }
        function COMPONENT_removeElement(){
            $(this).parents('.element').remove();
            COMPONENT_reset_elementbox_height();
            COMPONENT_reset_element_position();
        }
        function COMPONENT_moveElement(){
            let _this = $(this);
            let direction = (_this.index() > 1) ? 1 : -1;
            let $element = _this.parents('.element');
            let $elementbox = _this.parents('.COMPONENT_elementbox');
            $elementbox.css('pointer-events', 'none');
            let siblingElement_index = $element.index() + direction;
            let $siblingElement = _this.parents('.COMPONENT_elementbox')
                                        .children('.element').eq(siblingElement_index);
            let $prevElement = direction > 0 ? $element : $siblingElement;
            let $nextElement = direction > 0 ? $siblingElement : $element;
            let prevElement_T = parseInt($prevElement.css('top'));
            let nextElement_H = COMPONENT_getElementHeight($nextElement);
            let nextElement_html = $nextElement.html();
            let nextElement_type = $nextElement.attr('data-type');
            let nextElement_value;
            switch (nextElement_type) {
                case 'title':
                    nextElement_value = {
                        'data-id': $nextElement.attr('data-id'),
                        'htmlTag': 'input',
                        'value': $nextElement.find('input').val()
                    }
                    break;
                case 'paragraphy':
                    nextElement_value = {
                        'data-id': $nextElement.attr('data-id'),
                        'htmlTag': 'textarea',
                        'value': $nextElement.find('textarea').val()
                    }
                    break;
                case 'image':
                    nextElement_value = {
                        'data-id': $nextElement.attr('data-id'),
                        'htmlTag': 'input',
                        'value': $nextElement.find('input').val()
                    }
                    break;
                case 'addElement':
                    nextElement_value = {}
                    break;
                case 'member':
                    nextElement_value = {
                        'data-id': $nextElement.attr('data-id'),
                        'image': {
                            'htmlTag': 'input[type="file"]',
                            'value': $nextElement.find('input[type="file"]').val()
                        },
                        'name': {
                            'htmlTag': 'input[placeholder="姓名"]',
                            'value': $nextElement.find('input[placeholder="姓名"]').val()
                        },
                        'job': {
                            'htmlTag': 'input[placeholder="職位"]',
                            'value': $nextElement.find('input[placeholder="職位"]').val()
                        }
                    }
                    break;
            }
            $nextElement.css('top', prevElement_T);
            let element_spacing = (global.winW >= 768) ? 15 : 7;
            $prevElement.css('top', prevElement_T + nextElement_H + element_spacing);
            setTimeout(function(){
                $prevElement.before(
                    `<div   class="element" 
                            style="top: ${prevElement_T}px"
                            data-type="${nextElement_type}"
                            data-id="${nextElement_value['data-id']}"
                    >
                        ${nextElement_html}
                    </div>`);
                let $prevElement_prev = $prevElement.prev();
                switch ($prevElement_prev.attr('data-type')) {
                    case 'title':
                        $prevElement_prev
                            .find(nextElement_value['htmlTag'])
                            .val(nextElement_value['value']);
                        break;
                    case 'paragraphy':
                        $prevElement_prev
                            .find(nextElement_value['htmlTag'])
                            .val(nextElement_value['value']);
                        break;
                    case 'image':
                        $prevElement_prev
                            .find(nextElement_value['htmlTag']).value
                            = nextElement_value['value'];
                        break;
                    case 'member':
                        $prevElement_prev
                            .find(nextElement_value['image']['htmlTag']).value
                            = nextElement_value['image']['value'];
                        $prevElement_prev
                            .find(nextElement_value['name']['htmlTag'])
                            .val(nextElement_value['name']['value']);
                        $prevElement_prev
                            .find(nextElement_value['job']['htmlTag'])
                            .val(nextElement_value['job']['value']);
                        break;
                }
                $nextElement.remove();
                $elementbox.css('pointer-events', '');
            }, 200);
        }
        function COMPONENT_toggleDropdownMenu(){
            $(this).toggleClass('open');
        }
        function COMPONENT_selectElementType(){
            let _this = $(this);
            let element_type = _this.attr('data-type');
            let element_typeName = _this.text();
            _this.parent().siblings().attr('data-type', element_type).text(element_typeName);
        }
        function COMPONENT_addElement(){
            let _this = $(this);
            let element_type = _this.parent().siblings('.content').children().children('div').attr('data-type');
            let getTime = '';
            var time = new Date();
            var year = time.getFullYear().toString();
            var month = time.getMonth().toString();
            var date = time.getDate().toString();
            var hour = time.getHours().toString();
            var minute = time.getMinutes().toString();
            var second = time.getSeconds().toString();
            getTime = year + month + date + hour + minute + second;
            let data_id = 'element_'+ getTime;
            _this.parents('.element').before(global.elementHTML(
                element_type,
                data_id,
                global.element_content[element_type]['label'],
                global.element_content[element_type]['content']
            ))
                .prev('.element').find('.COMPONENT_inputbox_image input').attr('id', 'img_'+ getTime)
                .siblings('label').attr('for', 'img_'+ getTime);
            COMPONENT_reset_elementbox_height();
            COMPONENT_reset_element_position();
        }
        // function COMPONENT_buildArticle(){
        //     let article = '';
        //     let $elementbox = $('.COMPONENT_elementbox');
        //     let $element = $elementbox.children('.element');
        //     let element_length = $element.length;
        //     for(let i = 0; i < element_length; i++){
        //         let $element_eq = $element.eq(i);
        //         let element_type = $element_eq.attr('data-type');
        //         let element_tag;
        //         if (element_type == 'title') {
        //             article += 
        //                 `<h3>
        //                     ${$element_eq.find('.content input').val()}
        //                 </h3>`
        //         } else if (element_type == 'paragraphy') {
        //             article += 
        //                 `<p>
        //                     ${$element_eq.find('.content textarea').val()}
        //                 </p>`
        //         } else if (element_type == 'image') {
        //             let background_image = $element_eq.find('.COMPONENT_inputbox_image').css('background-image');
        //             article += 
        //                 `<img src='${background_image}'>`
        //         } else if (element_type == 'member'){
                    
        //         }
        //         // $('.COMPONENT_article').append(`
        //         //     <div style='width: 300px; height: 200px;background-image: ` + $element_eq.find('.COMPONENT_inputbox_image').css('background-image') +
        //         // `'>`)
                
        //         // $('.COMPONENT_article').append(`
        //         //     <img src=' `+
        //         //             $element_eq.find('.COMPONENT_inputbox_image').css('background-image') +
        //         //     `'/>
        //         // `)
        //     }
        //     // $('.COMPONENT_article').html(article);
        //     event.stopPropagation();
        // }
    // input[radio]
        function COMPONENT_selectRadio(){
            $(this).addClass('check')
                    .parent().siblings('.COMPONENT_inputbox_radio').children('label').removeClass('check');
        }
    // input[text]
        function COMPONENT_inputFocus(){
            $(this).parent().addClass('focus');
        }
        function COMPONENT_inputBlur(){
            $(this).parent().removeClass('focus');
        }

function init(){
    global.winW = global.win.width();
    global.winH = global.win.height();
    let $elementbox = $('.COMPONENT_elementbox');
    let element_length = $elementbox.children().length;
    let type, value, data_id;
    for(let i = 0; i < element_length; i++){
        let $element = $elementbox.children().eq(i);
        let elementType = $element.prop("tagName").toLowerCase();
        switch (elementType) {
            case 'h3':
                type = 'title';
                value = $element.text();
                data_id = $element.attr('data-id');
                $element.before(
                    global.elementHTML(
                        type,
                        data_id,
                        global.element_content[type]['label'],
                        global.element_content[type]['content']
                    )
                ).prev().find('input').val(value)
                .parents('.element').next().remove();
                break;
            case 'p':
                type = 'paragraphy';
                value = $element.text();
                data_id = $element.attr('data-id');
                $element.before(
                    global.elementHTML(
                        type,
                        data_id,
                        global.element_content[type]['label'],
                        global.element_content[type]['content']
                    )
                ).prev().find('textarea').val(value)
                .parents('.element').next().remove();
                break;
            case 'img':
                type = 'image';
                data_id = $element.attr('data-id');
                value = $element.attr('src');
                var time = new Date();
                var year = time.getFullYear().toString();
                var month = time.getMonth().toString();
                var date = time.getDate().toString();
                var hour = time.getHours().toString();
                var minute = time.getMinutes().toString();
                var second = time.getSeconds().toString();
                let image_id = 'upload_img' + year + month + date + hour + minute + second;
                $element.before(
                    global.elementHTML(
                        type,
                        data_id,
                        global.element_content[type]['label'],
                        global.element_content[type]['content']
                    )
                ).prev().find('.COMPONENT_inputbox_image').attr('style', 'background-image: url('+ value +')')
                .children('input').attr('id', image_id)
                .siblings('label').attr('for', image_id)
                .parents('.element').next().remove();
                break;
        }
    }
    COMPONENT_reset_elementbox_height();
    COMPONENT_reset_element_position();
}
function ajax(dataContent){
    if (!dataContent) console.log('請於 ajax() 中填入欲傳遞的資料');
    let post_data = {
        'url': window.location.pathname,
        'content': dataContent
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
function toggleMenu(){
    $(this).parent().toggleClass('open');
}
// COMPONENT
    $('.COMPONENT_elementbox')
        .on('click', '.btn_box .delete', COMPONENT_removeElement)
        .on('click', '.btn_box .up, .btn_box .down', COMPONENT_moveElement)
        .on('click', '.COMPONENT_inputbox_dropdown', COMPONENT_toggleDropdownMenu)
        .on('click', '.COMPONENT_inputbox_dropdown li', COMPONENT_selectElementType)
        .on('click', '.element .add', COMPONENT_addElement);
    $('.COMPONENT_inputbox_text input').on({
        'focus': COMPONENT_inputFocus,
        'blur': COMPONENT_inputBlur
    });
    $('.body').on('change', '.COMPONENT_inputbox_image input', uploadImg);
    $('.COMPONENT_inputbox_radio label').click(COMPONENT_selectRadio);
    $('.COMPONENT_togglebtn').click(togglebtn);
    $('.COMPONENT_message .COMPONENT_togglebtn').click(message_toggle);
init();
$(window).resize(init);
$('header .menu_btn').click(toggleMenu);
// $('.main_btn .save').click(COMPONENT_buildArticle);

// test!
	$('html head').prepend(
		'<style>'+
			'.t{'+
			    // 'box-shadow: 0 0 3px #F22;'+
			    'box-shadow: 0 0 3px #F22 inset;'+
			    'animation: test .2s 0s infinite alternate-reverse forwards;'+
			'}'+
			'@keyframes test{'+
				// 'to{box-shadow: 0 0 2px #22F ;}'+
				'to{box-shadow: 0 0 2px #22F inset;}'+
			'}'+
		'</style>'
	);
    if (localStorage.scrollTop) {
        $('.body').scrollTop(localStorage.scrollTop);
    }
    $('.body').on('scroll', function(){
        localStorage.setItem('scrollTop', $('.body').scrollTop());
    });
// }());
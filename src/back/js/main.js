(function(){
'use strict';
const global = [];
global.window = $(window),
global.win = $('#fixbox'),
global.winW = global.win.width(),
global.winH = global.win.height();

// COMPONENT
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
        $nextElement.css('top', prevElement_T);
        let element_spacing = (global.winW >= 768) ? 15 : 7;
        $prevElement.css('top', prevElement_T + nextElement_H + element_spacing);
        setTimeout(function(){
            $prevElement.before(
                `<div class="element" style="top: `+ prevElement_T +`px">`+ 
                    nextElement_html +
                `</div>`);
            $nextElement.remove();
            $elementbox.css('pointer-events', '');
        }, 200);
    }
    function COMPONENT_inputFocus(){
        $(this).parent().addClass('focus');
    }
    function COMPONENT_inputBlur(){
        $(this).parent().removeClass('focus');
    }

function init(){
    COMPONENT_reset_elementbox_height();
    COMPONENT_reset_element_position();
}
function toggleMenu(){
    $(this).parent().toggleClass('open');
}

// COMPONENT
    $('.COMPONENT_elementbox')
        .on('click', '.btn_box .delete', COMPONENT_removeElement)
        .on('click', '.btn_box .top, .btn_box .bottom', COMPONENT_moveElement);
    $('.COMPONENT_inputbox input').on({
        'focus': COMPONENT_inputFocus,
        'blur': COMPONENT_inputBlur
    });
init();
$(window).resize(init);
$('header .menu_btn').click(toggleMenu);
}());
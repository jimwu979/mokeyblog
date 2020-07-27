(function(){
    'use strict';
    var global = [];
    global.$article = $('#article');
    global.element_T;
    function init(){
        // date
            var $dateRow = $('#dateRow');
            var date = new Date();
            var dateInfo = [date.getFullYear(), date.getMonth() + 1, date.getDate()];
            for(var i = 1; i < 4; i++){
                var $input = $dateRow.children().eq(i).children();
                if ($input.val().length == 0) {
                    $input.val(dateInfo[i - 1]);
                }
            }
        // card
            var $card = $('.article').children('.card');
            var elements_length = $card.children('.element').length;
            var cardHeight_total = 0;
            var prevElement_H = 0;
            var prevElement_T = 0;
            for(var i = 0; i < elements_length; i++){
                var $element = $card.children('.element').eq(i);
                var element_paddingTop = parseInt($element.css('padding-top'));
                var element_contentHeight = $element.height();
                var element_paddingBottom = parseInt($element.css('padding-bottom'));
                var element_height = element_paddingTop + 
                                        element_contentHeight + 
                                        element_paddingBottom;
                cardHeight_total += element_height + 30;
                var position_top = prevElement_T + prevElement_H + 30;
                $element.css('top', position_top);
                prevElement_H = element_height;
                prevElement_T = parseInt($element.css('top'));
            }
            $card.height(cardHeight_total);
    }
    function limitNumber(){
        this.value = this.value.replace(/[^\d]/g,'');
    }
    function selectElement(){
        var _this = $(this);
        var elementTypeName = _this.text();
        var elementTypeClass = _this.attr('data-type');
        _this.parent().siblings('.select').text(elementTypeName).attr('data-type', elementTypeClass);
    }
    function addElement(){
        var _this = $(this);
        var $addElement = _this.parent();
        var newPositionTop = $addElement.css('top');
        // add new element
            var elementClass = _this.siblings('.input').find('.select').attr('data-type');
            
            var newElement = $('#template').find('.' + elementClass).html();
            newElement = 
                '<div class="element '+ elementClass +' building" style="top:'+ newPositionTop +';">' + 
                    newElement + 
                '</div>';
            $addElement.before(newElement).prev().addClass('done');
            setTimeout(function(){
                $addElement.prev().removeClass('building').removeClass('done');
            }, 200);
            if (elementClass == 'element_imgGroup') {
                var $element = $addElement.prev();
                add_elementImgGroup($element);
            }
            
        // reset card's height
            var card_H = _this.parents('.card').height();
            card_H += $addElement.prev().height() + 30 + 30;
            _this.parents('.card').height(card_H);
        // move 
            var this_newPositionTop = parseInt(newPositionTop) + 
                                        $addElement.prev().height() + 30 + 30;
            $addElement.css('top', this_newPositionTop);
            var this_index = $addElement.index();
            var element_last_index = $addElement.siblings('.element').length;
            for(var i = this_index; i < element_last_index; i++){
                var $element =$addElement.parent().children().eq(i + 1);
                var element_T = parseInt($element.css('top'));
                var newElement_H = $addElement.prev().height();
                element_T = element_T + newElement_H + 60;
                $element.css('top', element_T);
            }
    }
    function removeElement(){
        var _this = $(this);
        var $element_remove = _this.parent();
        var element_H = $element_remove.height() + 30;
        var card_H = _this.parents('.card').height();
        var card_newH = card_H - element_H - 30;
        var this_index = $element_remove.index();
        _this.parents('.card').height(card_newH);
        var last_length = $element_remove.parent().children().length;
        for(var i = this_index + 1; i < last_length; i++){
            var $element = $element_remove.parent().children().eq(i);
            var element_T = parseInt($element.css('top'));
            element_T = element_T - element_H - 30;
            $element.css('top', element_T);
        }
        $element_remove.remove();
    }
    function moveElement(){
        var _this = $(this);
        _this.parent().siblings('.element').children('.move_btn').css('pointer-events', 'none');
        var $element = _this.parent();
        var element_index = $element.index();
        var element_H = $element.height();
        var Element_index_max = $element.siblings().length + 2;
        if (element_index >= 0 && element_index < Element_index_max) {
            var moveDirection = (_this.index() == 3) ? -1 : 1;
            var $siblingElement = (moveDirection == -1) ? $element.prev() : $element.next();
            if (moveDirection == -1) {
                var $element_T_new = parseInt($siblingElement.css('top'));
                var $siblingElement_T_new = $element_T_new + element_H + 30 + 30;
                $element.addClass('moving').css('top', $element_T_new);
                $siblingElement.css('top', $siblingElement_T_new)
                setTimeout(function (){
                    $siblingElement.before($element);
                    $element.removeClass('moving');
                    _this.parent().siblings('.element').children('.move_btn').css('pointer-events', '');
                }, 200);
            }else{
                var $siblingElement_T_new = parseInt($element.css('top'));
                var $element_T_new = $siblingElement_T_new + $siblingElement.height() + 30 + 30;
                $element.addClass('moving').css('top', $element_T_new);
                $siblingElement.css('top', $siblingElement_T_new);
                setTimeout(function (){
                    $siblingElement.after($element);
                    $element.removeClass('moving');
                    _this.parent().siblings('.element').children('.move_btn').css('pointer-events', '');
                }, 200);
            }
        }
    }
    function input_checked(){
        $(this).addClass('check')
                .siblings('label').removeClass('check');
    }
    init();
    $('.inputbox_radio label').click(input_checked);
    global.$article.on('click', '.element_addElement .menu div', selectElement);
    global.$article.on('click', '.element_addElement .add_btn', addElement);
    global.$article.on('click', '.element .clear_btn', removeElement);
    global.$article.on('click', '.element .move_btn', moveElement);
    $('.row.date input').keyup(limitNumber);
    }());
    
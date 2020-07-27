<div class="body">
    <div class="container">
        <div class="content">
            <h1>例行活動</h1>
            <a href="activity_list.php" class="btn_back">返回列表頁</a>
            <form class="form" action="">
                <section class="information">
                    <div class="row">
                        <label>標題</label>
                        <div class="inputbox inputbox_text">
                            <input type="text">
                        </div>
                    </div>
                    <div class="row date" id="dateRow">
                        <label>時間</label>
                        <div class="inputbox inputbox_text">
                            <input id="input_year" type="text" data-val="year">
                        </div>
                        <div class="inputbox inputbox_text">
                            <input id="input_month" type="text" data-val="month">
                        </div>
                        <div class="inputbox inputbox_text">
                            <input id="input_day" type="text" data-val="day">
                        </div>
                    </div>
                    <div class="row description">
                        <label>描述 1</label>
                        <div class="inputbox inputbox_text">
                            <input type="text">
                        </div>
                    </div>
                    <div class="row description">
                        <label>描述 2</label>
                        <div class="inputbox inputbox_text">
                            <input type="text">
                        </div>
                    </div>
                    <div class="row description">
                        <label>描述 3</label>
                        <div class="inputbox inputbox_text">
                            <input type="text">
                        </div>
                    </div>
                    <div class="row imgUpload">
                        <div class="inputbox inputbox_rectImg">
                            <label>縮圖</label>
                            <div class="imgTag" style="width: 196px; background-image: url(https://api.fnkr.net/testimg/392x286/333/666/?text=img)">
                                <label for="file_btn_thumbnail"></label>
                                <input class="GLOBAL_inputFile" id="file_btn_thumbnail" type="file" accept="image/jpeg, image/png">
                            </div>
                        </div>
                        <div class="inputbox inputbox_rectImg">
                            <label>Banner</label>
                            <div class="imgTag" style="width: 288px; background-image: url(https://api.fnkr.net/testimg/596x286/333/666/?text=img)">
                                <label for="file_btn_banner"></label>
                                <input class="GLOBAL_inputFile" id="file_btn_banner" type="file" accept="image/jpeg, image/png">
                            </div>
                        </div>
                    </div>
                    <div class="row textarea">
                        <label>簡述</label>
                        <div class="inputbox inputbox_textarea">
                            <textarea resize="none"></textarea>
                        </div>
                    </div>
                </section>
                <section class="article" id="article">
                    <div class="card">
                        <div class="title_dashboard">區塊</div>
                        <div class="sectionTag">
                            <div>講者介紹</div>
                            <input type="text">
                        </div>
                        <div class="element element_addElement">
                            <div class="title">添加元件</div>
                            <div class="input">
                                <div class="dropDownMenu">
                                    <div class="select" data-type="element_title">標題</div>
                                    <div class="menu">
                                        <div data-type="element_title">標題</div>
                                        <div data-type="element_img">大頭貼</div>
                                        <div data-type="element_fontWeightBold">粗體字</div>
                                        <div data-type="element_paragraphy">內文</div>
                                        <div data-type="element_imgGroup">活動剪影</div>
                                        <div data-type="element_link">超連結</div>
                                    </div>
                                </div>
                            </div>
                            <div class="add_btn"></div>
                            <div class="move_btn movetoTop_btn"></div>
                            <div class="move_btn movetoBottom_btn"></div>
                            <a href="" class="output"></a>
                        </div>
                        <div class="remove_btn"></div>
                    </div>
                    <div class="newCard">
                        <div class="title_dashboard">新區塊</div>
                        <div class="add_btn" id="addCard_btn"></div>
                    </div>
                </section>
            </form>
        </div>
    </div>
</div>
<div class="fixbox">
    <div class="container">
        <a class="btn remove GLOBAL_alert_btn" href="#" id="removeData_btn" data-alertText="確定刪除這篇文章嗎？"><span>刪除</span></a>
        <a class="btn add" id="btn_add"><span>儲存</span></a>
    </div>
    <div class="alert" id="alert">
        <p></p>
        <div class="btnbox">
            <a href="#" class="gray" id="alert_cancel">取消</a>
            <a href="#" class="orange" id="alert_submit">確定</a>
        </div>
    </div>
</div>
<div class="template" id="template">
    <div class="card">
        <div class="title_dashboard">區塊</div>
        <div class="sectionTag">
            <div>講者介紹</div>
            <input type="text">
        </div>
        <div class="element element_addElement">
            <div class="title">添加元件</div>
            <div class="input">
                <div class="dropDownMenu">
                    <div class="select" data-type="element_title">標題</div>
                    <div class="menu">
                        <div data-type="element_title">標題</div>
                        <div data-type="element_img">大頭貼</div>
                        <div data-type="element_fontWeightBold">粗體字</div>
                        <div data-type="element_paragraphy">內文</div>
                        <div data-type="element_imgGroup">活動剪影</div>
                        <div data-type="element_link">超連結</div>
                    </div>
                </div>
            </div>
            <div class="add_btn"></div>
            <div class="move_btn movetoTop_btn"></div>
            <div class="move_btn movetoBottom_btn"></div>
            <a href="" class="output"></a>
        </div>
        <div class="remove_btn"></div>
    </div>
    <div class="element element_title">
        <div class="title">標題</div>
        <div class="input">
            <input type="text">
        </div>
        <div class="clear_btn"></div>
        <div class="move_btn movetoTop_btn"></div>
        <div class="move_btn movetoBottom_btn"></div>
        <h3 class="output"></h3>
    </div>
    <div class="element element_img">
        <div class="title">大頭貼</div>
        <div class="input">
            <div class="img">
                <label></label>
            </div>
            <input type="file"">
        </div>
        <div class="clear_btn"></div>
        <div class="move_btn movetoTop_btn"></div>
        <div class="move_btn movetoBottom_btn"></div>
    </div>
    <div class="element element_fontWeightBold">
        <div class="title">粗體字</div>
        <div class="input">
            <textarea></textarea>
        </div>
        <div class="clear_btn"></div>
        <div class="move_btn movetoTop_btn"></div>
        <div class="move_btn movetoBottom_btn"></div>
        <div class="output"></div>
    </div>
    <div class="element element_paragraphy">
        <div class="title">內文</div>
        <div class="input">
            <textarea></textarea>
        </div>
        <div class="clear_btn"></div>
        <div class="move_btn movetoTop_btn"></div>
        <div class="move_btn movetoBottom_btn"></div>
        <p class="output"></p>
    </div>
    <div class="element element_imgGroup">
        <div class="title">活動剪影</div>
        <div class="input">
            <div class="img">
                <label></label>    
                <input class="GLOBAL_inputFile" type="file" accept="image/jpeg, image/png">
            </div>
            <div class="img">
                <label></label>    
                <input class="GLOBAL_inputFile" type="file" accept="image/jpeg, image/png">
            </div>
            <div class="img">
                <label></label>    
                <input class="GLOBAL_inputFile" type="file" accept="image/jpeg, image/png">
            </div>
            <div class="img">
                <label></label>    
                <input class="GLOBAL_inputFile" type="file" accept="image/jpeg, image/png">
            </div>
            <div class="img">
                <label></label>    
                <input class="GLOBAL_inputFile" type="file" accept="image/jpeg, image/png">
            </div>
            <div class="img">
                <label></label>    
                <input class="GLOBAL_inputFile" type="file" accept="image/jpeg, image/png">
            </div>
            <div class="img">
                <label></label>    
                <input class="GLOBAL_inputFile" type="file" accept="image/jpeg, image/png">
            </div>
            <div class="img">
                <label></label>    
                <input class="GLOBAL_inputFile" type="file" accept="image/jpeg, image/png">
            </div>
        </div>
        <div class="clear_btn"></div>
        <div class="move_btn movetoTop_btn"></div>
        <div class="move_btn movetoBottom_btn"></div>
    </div>
    <div class="element element_link">
        <div class="title">超連結</div>
        <div class="input">
            <input type="text" class="text" placeholder="按鈕文字 ex.我要報名">
            <input type="text" class="url" placeholder="超連結網址 ex.https://www.google.com">
        </div>
        <div class="clear_btn"></div>
        <div class="move_btn movetoTop_btn"></div>
        <div class="move_btn movetoBottom_btn"></div>
        <a href="" class="output"></a>
    </div>
</div>
<div class="body">
    <div class="container">
        <div class="content">
            <h1>協會公告</h1>
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
                </section>
                <section class="article" id="article">
                    <div class="card">
                        <div class="element element_subtitle">
                            <div class="title">小標題</div>
                            <div class="input">
                                <input type="text">
                            </div>
                            <div class="clear_btn"></div>
                            <div class="move_btn movetoTop_btn"></div>
                            <div class="move_btn movetoBottom_btn"></div>
                            <h3 class="output"></h3>
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
                        <div class="element element_addElement" style="top: 30px;">
                            <div class="title">添加元件</div>
                            <div class="input">
                                <div class="dropDownMenu">
                                    <div class="select" data-type="element_subtitle">小標題</div>
                                    <div class="menu">
                                        <div data-type="element_subtitle">小標題</div>
                                        <div data-type="element_paragraphy">內文</div>
                                    </div>
                                </div>
                            </div>
                            <div class="add_btn"></div>
                            <div class="move_btn movetoTop_btn"></div>
                            <div class="move_btn movetoBottom_btn"></div>
                            <a href="" class="output"></a>
                        </div>
                    </div>
                </section>
            </form>
        </div>
    </div>
</div>
<div class="fixbox">
    <div class="container">
        <a class="btn remove GLOBAL_alert_btn" href="#" id="removeData_btn" data-alertText="確定刪除這篇公告嗎？"><span>刪除</span></a>
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
    <div class="card" style="height: 1838px;">
        <div class="title_dashboard">區塊</div>
        <div class="sectionTag">
            <div>講者介紹</div>
            <input type="text">
        </div>
        <div class="element element_addElement" style="top: 143px;" id="element_addElement">
            <div class="title">添加元件</div>
            <div class="input">
                <div class="dropDownMenu">
                    <div class="select" data-type="element_title">標題</div>
                    <div class="menu">
                        <div data-type="element_title">標題</div>
                        <div data-type="element_subtitle">小標題</div>
                        <div data-type="element_paragraphy">內文</div>
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
    <div class="element element_subtitle" style="top: 144px;">
        <div class="title">小標題</div>
        <div class="input">
            <input type="text">
        </div>
        <div class="clear_btn"></div>
        <div class="move_btn movetoTop_btn"></div>
        <div class="move_btn movetoBottom_btn"></div>
        <h3 class="output"></h3>
    </div>
    <div class="element element_paragraphy" style="top: 631px;">
        <div class="title">內文</div>
        <div class="input">
            <textarea></textarea>
        </div>
        <div class="clear_btn"></div>
        <div class="move_btn movetoTop_btn"></div>
        <div class="move_btn movetoBottom_btn"></div>
        <p class="output"></p>
    </div>
</div>
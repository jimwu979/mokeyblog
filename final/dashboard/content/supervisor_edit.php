<div class="body">
    <div class="container">
        <div class="content">
            <h1>理監事</h1>
            <a href="supervisor_list_periodContent.php" class="btn_back">返回列表頁</a>
            <form class="form" action="function/supervisor_add.php" method="post">
                <div class="row">
                    <label>姓名</label>
                    <div class="inputbox inputbox_text">
                        <input type="text" name="name">
                    </div>
                </div>
                <div class="row">
                    <label>服務單位</label>
                    <div class="inputbox inputbox_text">
                        <input type="text" name="company">
                    </div>
                </div>
                <div class="row">
                    <label>職稱</label>
                    <div class="inputbox inputbox_text">
                        <input type="text" name="position">
                    </div>
                </div>
                <div class="row">
                    <label>UXTW 職位</label>
                    <div class="inputbox inputbox_text">
                        <input type="text" name="position">
                    </div>
                </div>
                <div class="row">
                    <label>照片</label>
                    <div class="inputbox inputbox_circleImg">
                        <div class="imgTag" id="imgTag" style="background-image: url('https://api.fnkr.net/testimg/246x246/333/666/?text=img')">
                            <label for="file_btn"></label>
                            <input class="GLOBAL_inputFile" id="file_btn" type="file" accept="image/jpeg, image/png" name="photo">
                        </div>
                        <label for="file_btn">
                            <img src="img/edit_white.svg">
                        </label>
                    </div>
                </div>
                <input type="submit" id="formSubmit">
            </form>
        </div>
    </div>
</div>
<div class="fixbox">
    <div class="container">
        <a class="btn remove GLOBAL_alert_btn" href="#" id="removeData_btn" data-alertText="確定刪除此成員嗎"><span>刪除</span></a>
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
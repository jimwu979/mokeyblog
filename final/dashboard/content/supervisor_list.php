<div class="body">
    <div class="container">
        <div class="content">
            <h1>理監事</h1>
            <table class="list">
                <tbody>
                    <tr>
                        <th width="45px">屆</th>
                        <th width="120px">理事長</th>
                        <th>人數</th>
                        <th width="60px">編輯</th>
                    </tr>
                    <?php 
                        $sql_query = "SELECT * FROM supervisor WHERE 1";
                        $result = mysqli_query($db_link,"SELECT * FROM supervisor WHERE 1");
                        // $total_length = 
                        while($row = $result->fetch_assoc()) {
                            echo  
                            '<tr>'.
                                '<td>5</td>'.
                                '<td>' . $row['name'] . '</td>'.
                                '<td>24</td>'.  
                                '<td>'.
                                    '<a href="supervisor_list_periodContent.php">'.
                                        '<img src="img/edit.svg">'.
                                    '</a>'.
                                '</td>'.
                            '</tr>';
                            // '<div class="col-sm-6 col-md-4">'.
                            //     '<div class="thumbnail">'.
                            //         '<div class="img" style="background-image: url('. $row['image'] .')"></div>'.
                            //         '<div class="caption">'.
                            //             '<h3>'. $row['title'] .'</h3>'.
                            //             '<p>'. $row['content'] .'</p>'.
                            //         '</div>'.
                            //     '</div>'.
                            // '</div>';
                        }
                    ?>
                    <tr>
                        <td>5</td>
                        <td>張群儀</td>
                        <td>24</td>
                        <td>
                            <a href="supervisor_list_periodContent.php">
                                <img src="img/edit.svg">
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>張群儀</td>
                        <td>24</td>
                        <td>
                            <a href="supervisor_list_periodContent.php">
                                <img src="img/edit.svg">
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>張群儀</td>
                        <td>24</td>
                        <td>
                            <a href="supervisor_list_periodContent.php">
                                <img src="img/edit.svg">
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>張群儀</td>
                        <td>24</td>
                        <td>
                            <a href="supervisor_list_periodContent.php">
                                <img src="img/edit.svg">
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>張群儀</td>
                        <td>24</td>
                        <td>
                            <a href="supervisor_list_periodContent.php">
                                <img src="img/edit.svg">
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
<div class="fixbox">
    <div class="container">
        <a href="supervisor_list.php" class="btn add"><span>添加新一屆</span></a>
    </div>
</div>
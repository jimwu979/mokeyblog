<nav>
    <img src="img/logo.png">
    <div>
        <a <?php 
                if ($_SERVER['PHP_SELF'] == '/dashboard/supervisor_list.php') {
                    echo 'class="now"';
                }
            ?> href="supervisor_list.php">監理事</a>
        <a <?php 
                if ($_SERVER['PHP_SELF'] == '/dashboard/activity_list.php') {
                    echo 'class="now"';
                }
            ?> href="activity_list.php">例行活動</a>
        <a <?php 
                if ($_SERVER['PHP_SELF'] == '/dashboard/knowledge_list.php') {
                    echo 'class="now"';
                }
            ?> href="knowledge_list.php">產業新知</a>
        <a <?php 
                if ($_SERVER['PHP_SELF'] == '/dashboard/announcement_list.php') {
                    echo 'class="now"';
                }
            ?> href="announcement_list.php">協會公告</a>
    </div>
</nav>
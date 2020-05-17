
<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
    <input type="text" name="username">
    <input type="submit" value="login">
</form>

<?php 

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {

        echo $_POST['username'];

    }else {

        echo "You can not browse this page directly";
    }
?>

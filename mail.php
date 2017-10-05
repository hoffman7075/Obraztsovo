<?php
$headers  = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: ".$_SERVER['SERVER_NAME']."\r\n";
$result = mail('obrazcovo74@mail.ru','Письмо по сайту Образцово74.рф от ' . $_POST['name'],'Запись на экскурсию<br><br>Имя: ' . $_POST['name'] . '<br><br>Телефон: ' . $_POST['tel'] ,$headers);
if($result) {
    echo "Письмо успешно отправлено";
} else {
    echo "Письмо не отправлено. Ошибка: " . $result;
}
?>
$(document).ready(function () {
/*Работа отправки данных*/
    $(function () {
        $("body").on("submit", ".form_newsletter", function (e) {
            var message = $('.alert_message', this),
                emVal = $(".mail", this).val(),
                pVal = $(".phone", this).val(),
                check = $('.check', this),
                reNone = /.+/,
                reEm = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                rePh = /^[+]?\d*\.?\d*$/,
                mess;

            if (!emVal.match(reNone)) {
                message.text('Введите email').slideDown(500).delay(2000).slideUp(500);
                return false
            };
            if (!emVal.match(reEm)) {
                message.text('Email введен некорректно').slideDown(500).delay(2000).slideUp(500);
                return false;

            };
            if (!pVal.match(reNone)) {
                message.text('Введите телефон').slideDown(500).delay(2000).slideUp(500);
                return false
            };
            if (!pVal .match(rePh)) {
                message.text('Только цифры в поле телефона').slideDown(500).delay(2000).slideUp(500);
                return false
            };

            if (!check.prop("checked")) {
                message.text('Подтвердите соглашение').slideDown(500).delay(2000).slideUp(500);
                return false
            };

            
        });

    });

    /*Конец документа*/
});
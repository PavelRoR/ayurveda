$(document).ready(function() {
    /* Маска ввода */
    glb_var = 0;
    $("#contact_phone").val("");
    $("#contact_mail").val("");
    $("#bon").val("");

    function show_mess(x, y) {
        // вывод сообщение в dbgemail
        glb_var = y;
        $("#base" + y + " #dbgemail").css("display", "block").html(x);
        setTimeout(function() {
            $("#base" + glb_var + " #dbgemail").css("display", "none");
        }, 2000);
    }

    function mycheck(x) {
        var rez = false;
        var em_rez = false;
        var ph_rez = false;
        glb_var = x;
        //var fk = false;
        var el0 = $("#base" + x + " input#contact_mail")
        var el = el0.val();
        if (isNotEmpty(el)) {
            if (isEmail(el)) {
                em_rez = true;
                el0.css("display", "none");
                fk = true;
                $("#base" + x + " #span_email").html("Зарегистрирован Ваш e-mail: " + el + " Бонус уже у Вас на почте").css("display", "block");
                $("#base" + x + " #bon").html("Зарегистрирован Ваш e-mail: " + el + " Бонус уже у Вас на почте").css("display", "block");
                setTimeout(function() {
                    $("#base" + glb_var + " #lb_ph").css("display", "block");
                    $("#base" + glb_var + " #bon").css("display", "none");
                    $("#base" + glb_var + " #tell").css("display", "block");
                    $("#base" + glb_var + " #contact_phone").css("display", "block");
                }, 0);
            } else {
                show_mess("Email имеет неправильный формат! Форма не отправлена", x);
            }
        } else {
            show_mess("Поле Email пустое!  Форма не отправлена", x);
        }
        var el0 = $("#base" + x + " #contact_phone");
        var hd = el0.css('display');
        // ph_rez = true;
        if (hd != 'none') {
            el = $.trim(el0.val());
            if (isNotEmpty(el)) {
                //el = parseInt(el);
                if (em_rez) {
                    if (isNumb(el)) {
                        ph_rez = true;
                    } else {
                        show_mess("Телефон должен содержать только цифры! Форма не отправлена", x);
                    }
                }
            } else {
                show_mess("Поле 'Телефон' пустое!  Форма не отправлена", x);
            }
        } else {
            ph_rez = true;
            if (fk)
                $("#base" + x + " #contact_phone").css("display", "block");


        }
        rez = (em_rez && ph_rez);
        if (rez && (hd != 'none')) window.open("http://mastervision.su/taro-popova-2/special-offer.html");
        return rez;
    }

    function isNumb(el) {
        //введены только числа?
        var str = el;
        var rez = true;
        var re = /^[+]?\d*\.?\d*$/;

        str = str.toString();
        if (str.indexOf(".") > 0)
            rez = false;
        else
        if (!str.match(re)) {
            //alert("Введите в поле 'Phone' только цифры!");
            rez = false;
        }
        return rez;
    }

    function isEmail(el) {
        //это мыло?
        var str = el;
        var re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        if (!str.match(re)) {
            //alert("не верна структура email!");
            return false;
        } else {
            return true;
        }
    }

    function isNotEmpty(el) {
        // строка пустая?
        var str = el;
        var re = /.+/;
        if (!str.match(re)) {
            //alert("Пустые поля!");
            return false;
        } else {
            return true;
        }
    }


/*Конец документа*/
});
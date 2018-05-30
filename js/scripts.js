$(document).ready(function () {
    /*Работа отправки данных*/
    $(function () {
        var message = $('.alert_message', this),
            email = $(".mail", this),
            phone = $(".phone", this),
            check = $('.check', this),
            reNone = /.+/,
            reEm = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
            rePh = /^[+]?\d*\.?\d*$/,
            mess;
        $("body").on("submit", ".form_newsletter", function (e) {
            var message = $('.alert_message', this),
                email = $(".mail", this),
                phone = $(".phone", this),
                check = $('.check', this),
                reNone = /.+/,
                reEm = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                rePh = /^[+]?\d*\.?\d*$/,
                mess;
            $(".form_newsletter", this).submit().delay(2000);
            if (!email.val().match(reNone)) {
                email.css("border", "1px solid red");
                message.text('Введите email').slideDown(500)
                return false
            };
            if (!email.val().match(reEm)) {
                email.css("border", "1px solid red");
                message.text('Email введен некорректно').slideDown(500);
                return false;
            };
            if (!phone.val().match(reNone)) {
                phone.css("border", "1px solid red");
                message.text('Введите телефон').slideDown(500);
                return false
            };
            if (!phone.val().match(rePh)) {
                phone.css("border", "1px solid red");
                message.text('Только цифры в поле телефона').slideDown(500);
                phone.val('');
                return false
            };
            if (!check.prop("checked")) {
                check.next().css("color", "red");
                message.text('Подтвердите соглашение').slideDown(500);
                return false
            };
            $('.button', this).text('Отправлено!');
            if (email && phone && check) {
                window.open('https://pavelror.github.io/ayurveda/bonus')
            }
        });
        email.click(function () {
            email.css("border-color", "rgb(232, 232, 232)");
            message.slideUp(500);
        });
        phone.click(function () {
            phone.css("border-color", "rgb(232, 232, 232)");
            message.slideUp(500);
        });
        check.click(function () {
            check.next().css("color", "rgba(255,255,255,0.8)");
            message.slideUp(500);
        });
    });
    /*Видео*/
    $(function () {
        $(".video_wrapper").click(function () {
            var a = $(this).attr("data-youtube");
            $(this).html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1" frameborder="0" class="video_testimonial" allowfullscreen></iframe>')
        });
    });
    /* Якорь */
	$(function () {
		$("a[href^='#']").click(function (h) {
			h.preventDefault();
			var f = $(this).attr("href"),
				g = $(f).offset().top;
			$("body,html").animate({
				scrollTop: g
			}, 1500)
		});
	});
    /*Конец документа*/
});
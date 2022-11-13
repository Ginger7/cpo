$(document).ready(function () {
    $('#agree').change(function () {
        if ($(this).is(':checked')) {
            $(this).parents('.form-checkbox').siblings('.btn-primary').removeAttr('disabled');
        } else {
            $(this).parents('.form-checkbox').siblings('.btn-primary').attr('disabled', 'disabled');
        }
    });
    $("#request-form").submit(function (e) {
        e.preventDefault();
        let fd = new FormData();
        let data = $(this).serializeArray();
        let form = this;
        data.forEach(function (v, k) {
            fd.append(v.name, v.value);
        });
        fd.append('type', 'Общая заявка на вступление в СРО');

        if ($('#phone').val() == '' || $('#email').val() == '') {
            $("#modal-answer__text").html('Заполните поле телефон или адрес электронной почты');
            window.parent.$.fancybox.close();
            $.fancybox.open($('#modal-answer'));
        } else {
            $.ajax({
                type: "POST",
                enctype: 'multipart/form-data',
                url: "send_form.php",
                data: fd,
                processData: false,
                contentType: false,
                cache: false,
            }).done(function (res) {
                let result = JSON.parse(res);
                if (result.status) {
                    $("#modal-answer__text").html('Ваша заявка отправлена, мы обязательно свяжемся с Вами.');
                    window.parent.$.fancybox.close();
                    $(form)[0].reset();
                    $(form).find('.btn-primary').attr('disabled', 'disabled');
                    $.fancybox.open($('#modal-answer'));

                } else {
                    $("#modal-answer__text").html('В процессе отправки возникла ошибка, повторите попытку позже.');
                    window.parent.$.fancybox.close();
                    $.fancybox.open($('#modal-answer'));
                }
            });
        }
    });
    $('#m-agree-1').change(function () {
        if ($(this).is(':checked')) {
            $(this).parents('.form-checkbox').siblings('.modal-btns').find('.btn-primary').removeAttr('disabled');
        } else {
            $(this).parents('.form-checkbox').siblings('.modal-btns').find('.btn-primary').attr('disabled', 'disabled');
        }
    });
    $("#construction-form").submit(function (e) {
        e.preventDefault();
        let fd = new FormData();
        let data = $(this).serializeArray();

        let form = this;
        data.forEach(function (v, k) {
            fd.append(v.name, v.value);
        });
        if ($('#m-phone-1').val() == '' || $('#m-email-1').val() == '') {
            $("#modal-answer__text").html('Заполните поле телефон или адрес электронной почты');
            $.fancybox.open($('#modal-answer'));
        } else {
            $.ajax({
                type: "POST",
                enctype: 'multipart/form-data',
                url: "send_form.php",
                data: fd,
                processData: false,
                contentType: false,
                cache: false,
            }).done(function (res) {

                let result = JSON.parse(res);
                if (result.status) {
                    $("#modal-answer__text").html('Ваша заявка отправлена, мы обязательно свяжемся с Вами.');
                    window.parent.$.fancybox.close();
                    $(form)[0].reset();
                    $(form).find('.btn-primary').attr('disabled', 'disabled');
                    $.fancybox.open($('#modal-answer'));

                } else {
                    $("#modal-answer__text").html('В процессе отправки возникла ошибка, повторите попытку позже.');
                    window.parent.$.fancybox.close();
                    $.fancybox.open($('#modal-answer'));
                }
            });
        }
    })
    $('#m-agree-2').change(function () {
        if ($(this).is(':checked')) {
            $(this).parents('.form-checkbox').siblings('.modal-btns').find('.btn-primary').removeAttr('disabled');
        } else {
            $(this).parents('.form-checkbox').siblings('.modal-btns').find('.btn-primary').attr('disabled', 'disabled');
        }
    });
    $("#designing-form").submit(function (e) {
        e.preventDefault();
        let fd = new FormData();
        let form = this;
        let data = $(this).serializeArray();

        data.forEach(function (v, k) {
            fd.append(v.name, v.value);
        });
        if ($('#m-phone-2').val() == '' || $('#m-email-2').val() == '') {
            $("#modal-answer__text").html('Заполните поле телефон или адрес электронной почты');
            $.fancybox.open($('#modal-answer'));
        } else {
            $.ajax({
                type: "POST",
                enctype: 'multipart/form-data',
                url: "send_form.php",
                data: fd,
                processData: false,
                contentType: false,
                cache: false,
            }).done(function (res) {

                let result = JSON.parse(res);
                if (result.status) {
                    $("#modal-answer__text").html('Ваша заявка отправлена, мы обязательно свяжемся с Вами.');
                    window.parent.$.fancybox.close();
                    $(form)[0].reset();
                    $(form).find('.btn-primary').attr('disabled', 'disabled');
                    $.fancybox.open($('#modal-answer'));

                } else {
                    $("#modal-answer__text").html('В процессе отправки возникла ошибка, повторите попытку позже.');
                    window.parent.$.fancybox.close();
                    $.fancybox.open($('#modal-answer'));
                }
            });
        }
    })
    $('#calc-agree-1').change(function () {
        if ($(this).is(':checked')) {
            $(this).parents('.form-checkbox').siblings('.modal-btns').find('.btn-primary').removeAttr('disabled');
        } else {
            $(this).parents('.form-checkbox').siblings('.modal-btns').find('.btn-primary').attr('disabled', 'disabled');
        }
    });
    $("#form-construction-calculator").submit(function (e) {
        e.preventDefault();
        let fd = new FormData();
        let form = this;
        let data = $(this).serializeArray();

        data.forEach(function (v, k) {
            fd.append(v.name, v.value);
        });
        if ($('#calc-phone-1').val() == '' || $('#calc-email-1').val() == '') {
            $("#modal-answer__text").html('Заполните поле телефон или адрес электронной почты');
            $.fancybox.open($('#modal-answer'));
        } else {
            $.ajax({
                type: "POST",
                enctype: 'multipart/form-data',
                url: "send_form.php",
                data: fd,
                processData: false,
                contentType: false,
                cache: false,
            }).done(function (res) {

                let result = JSON.parse(res);
                if (result.status) {
                    $("#modal-answer__text").html('Ваша заявка отправлена, мы обязательно свяжемся с Вами.');
                    window.parent.$.fancybox.close();
                    $(form)[0].reset();
                    $(form).find('.btn-primary').attr('disabled', 'disabled');
                    $.fancybox.open($('#modal-answer'));

                } else {
                    $("#modal-answer__text").html('В процессе отправки возникла ошибка, повторите попытку позже.');
                    window.parent.$.fancybox.close();
                    $.fancybox.open($('#modal-answer'));
                }
            });
        }
    })
    $('#calc-designing-agree-1').change(function () {
        if ($(this).is(':checked')) {
            $(this).parents('.form-checkbox').siblings('.modal-btns').find('.btn-primary').removeAttr('disabled');
        } else {
            $(this).parents('.form-checkbox').siblings('.modal-btns').find('.btn-primary').attr('disabled', 'disabled');
        }
    });
    $("#form-designing-calculator").submit(function (e) {
        e.preventDefault();
        let fd = new FormData();
        let form = this;
        let data = $(this).serializeArray();

        data.forEach(function (v, k) {
            fd.append(v.name, v.value);
        });
        if ($('#calc-designing-phone-1').val() == '' || $('#calc-designing-email-1').val() == '') {
            $("#modal-answer__text").html('Заполните поле телефон или адрес электронной почты');
            $.fancybox.open($('#modal-answer'));
        } else {
            $.ajax({
                type: "POST",
                enctype: 'multipart/form-data',
                url: "send_form.php",
                data: fd,
                processData: false,
                contentType: false,
                cache: false,
            }).done(function (res) {

                let result = JSON.parse(res);
                if (result.status) {
                    $("#modal-answer__text").html('Ваша заявка отправлена, мы обязательно свяжемся с Вами.');
                    window.parent.$.fancybox.close();
                    $(form)[0].reset();
                    $(form).find('.btn-primary').attr('disabled', 'disabled');
                    $.fancybox.open($('#modal-answer'));

                } else {
                    $("#modal-answer__text").html('В процессе отправки возникла ошибка, повторите попытку позже.');
                    window.parent.$.fancybox.close();
                    $.fancybox.open($('#modal-answer'));
                }
            });
        }
    })
})

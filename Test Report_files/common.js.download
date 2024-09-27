// $version = 0.1;
var g_db_mode = 2;
var g_cookie_prefix = "_qr_";
var g_test_duration = 6;
var test_offline=0;
switch (g_db_mode) {
    case 0:
    case 1:
        g_url = "https://dev.quizr.in/";
        g_api_url = "https://devapi.quizr.in/";
        break;
    case 2:
        g_url = "https://www.quizr.in/";
        g_api_url = "https://api.quizr.in/";
        break;
    case 3:
        g_url = "https://staging.quizr.in/";
        g_api_url = "https://stagingapi.quizr.in/";
        break;
}

g_url = domain = "https://" + window.location.hostname + "/";

function getUserToken() {
    return "ok";
}

/*get user token if present*/
function fetch_user_token() {
    if (document.cookie.indexOf(g_cookie_prefix + "ut") >= 0)
        return getCookie(g_cookie_prefix + "ut");
    else
        return 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImp0aSI6IjEtMTU1NDIwNjM1MSJ9.eyJpc3MiOiJodHRwOlwvXC9kZXYuZmFjZW5vdy5pblwvIiwiYXVkIjoiaHR0cDpcL1wvZGV2LmZhY2Vub3cuaW5cLyIsImp0aSI6IjEtMTU1NDIwNjM1MSIsImlhdCI6MTU1NDIwNjM1MSwibmJmIjoxNTU0MjA2MzUxLCJleHAiOjE1NTQ0MjIzNTEsInVpZCI6IjEiLCJjb2RlIjoiMS0xNTU0MjA2MzUxIiwidmVuZG9yX2lkIjoiVlNfNiIsInNlY29uZGFyeV9pZCI6IkNfMSIsImFjY2Vzc190eXBlIjpudWxsfQ.O0HtzBE-we-Do_vsmiZmIqjgHmznv9M8KTzrns6UcAk';

    // error_response({"responseText": 'INVALID_TOKEN', "status": 401});
}

function getCookie(name) {
    var re = new RegExp(name + "=([^;]+)");
    var value = re.exec(document.cookie);
    return (value != null) ? unescape(value[1]) : null;
}

/*remove all user cookies*/
function remove_user_cookies() {
    var cookies = document.cookie.split(";");
    $.each(cookies, function (key, value) {
        delete_cookie((value.split('='))[0]);
    });
}

/*delete cookie*/
var delete_cookie = function (name) {
    document.cookie = name + '=;path=/;domain=' + g_cookie_domain + ';expires=' + new Date(0).toUTCString();
};

function show_toast(mode, title, message, timeout, position, backgroundColor, buttons, imageUrl) {
    if (iziToast !== undefined)
        iziToast.destroy();

    timeout = (timeout !== undefined && timeout !== null) ? timeout : 3000;
    if($(window).width() > 768){
        position = (position !== undefined && position !== null) ? position : 'bottomCenter';
    }else{
        position = (position !== undefined && position !== null) ? position : 'topCenter';
    }
    switch (mode) {
        case 'custom':
            iziToast.show({
                title: title,
                image: imageUrl,
                imageWidth: 100,
                message: message,
                position: position,
                timeout: timeout,
                theme: 'dark',
                backgroundColor: backgroundColor
                // buttons:buttons
            });
            break;
        case 'success':
            iziToast.show({
                title: title,
                message: message,
                position: position,
                timeout: timeout,
                theme: 'dark',
                backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--color-success')
            });
            break;
        case 'failure':
            iziToast.show({
                title: title,
                message: message,
                position: position,
                timeout: timeout,
                theme: 'dark',
                backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--color-failure')
            });
            break;
        case 'warning':
            iziToast.show({
                title: title,
                message: message,
                position: position,
                timeout: timeout,
                theme: 'dark',
                backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--color-warning')
            });
            break;
        case 'error':
            iziToast.show({
                title: title,
                message: message,
                position: position,
                timeout: timeout,
                theme: 'dark',
                backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--theme-color-1')
            });
            break;
    }
}

function error_response(err) {
    /*error response from server*/
    if (err !== undefined && err.responseText !== undefined) {
        test_offline=0;
        var message = err.responseText;
        var status = err.status;
        var hostname = location.hostname;
        var protocol = location.protocol;
        var g_url = protocol + "//" + hostname + "/";
        switch (status) {
            /*access denied*/
            case 403:
                gotoError(403);
                break;
            case 401:
                /*unset cookie token*/
                remove_user_cookies();
                var current_url = window.location.href;
                if (g_url !== undefined && current_url !== g_url) {
                    show_toast("error", "The same  account is used in multiple devices (or) your session has expired.", "Please login to authorize your account.");
                    window.location = g_url;
                }
                break;
            /*limit reached*/
            case 429:
                show_toast("error", "Too many requests from this account.", "Please wait for a minute and try again.");
                alert();
                break;
            /*server error*/
            case 500:
                show_toast("error", "Breathe Deeply. Stay Calm.", "We are facing server issues at the moment.");
                break;
            case 404:
                gotoError(404);
                break;
        }
    }
    /*timeout or no response from server*/
    else {

        if(test_offline <5) {
            show_toast("error", "Timeout Error. Check your network. Please try again after sometime.", "If nothing works contact support team.");
            test_offline++;
        }else{
            //what to do here
        }

    }
}

function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}
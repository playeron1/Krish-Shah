//Redirect to error page
function gotoError(error_code) {
    window.location = g_url + error_code + ".php"
}

//Convert Seconds to Text
function secondsToDhms(seconds, short) {
    if (short === undefined)
        short = false;
    seconds = Number(seconds);
    var d = Math.floor(seconds / (3600 * 24));
    var h = Math.floor(seconds % (3600 * 24) / 3600);
    var m = Math.floor(seconds % 3600 / 60);
    var s = Math.floor(seconds % 60);
    if (short) {
        var dDisplay = d > 0 ? (d < 10 ? "0" + d : d) + (d == 1 ? "d " : "d ") : "";
        var hDisplay = h > 0 ? (h < 10 ? "0" + h : h) + (h == 1 ? "h " : "h ") : (d>0?"00h":"");
        var mDisplay = m > 0 ? (m < 10 ? "0" + m : m) + (m == 1 ? "m " : "m ") : (h>0?"00m":"");
        var sDisplay = s > 0 ? (s < 10 ? "0" + s : s) + (s == 1 ? "s" : "s") : (m>0?"00s":"");
    } else {
        var dDisplay = d > 0 ? d + (d == 1 ? "day " : "days ") : "";
        var hDisplay = h > 0 ? h + (h == 1 ? "hour " : "hours ") : "";
        var mDisplay = m > 0 ? m + (m == 1 ? "minute " : "minutes ") : "";
        var sDisplay = s > 0 ? s + (s == 1 ? "second" : "seconds") : "";
    }

    return dDisplay + hDisplay + mDisplay + sDisplay;
}


function syncTimeStamp() {
    setInterval(function () {
        timestamp++;
    }, 1000);
    setInterval(function () {
        if (test_data !== undefined) {
            actionListner('sync_time', '');
            if (sectional_timeleft!=undefined)
            findActiveSection();
        }
    }, 60000);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function replaceAll(str, find, fillups) {
    for (var i = 0; i < fillups; i++) {
        str = str.replace(find, "___________ " + "[" + (i + 1) + "]");

    }
    return str;
}


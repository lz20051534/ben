var $systemHeda = document.getElementById('systemHead');
var $cptHead = document.getElementById('cptHead');
var systemTime = null;
window.onload = function () {
    if (/Android|webOS|iPhone|iPod|BlackBerry|Windows Phone|SymbianOS/.test(navigator.userAgent)) {
        $systemHeda.style.display = 'none';
        $cptHead.style.top = '0';
    }
    startTime();//调用时间函数
}
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    // add a zero in front of numbers<10
    m = checkTime(m);
    document.getElementById('systemTime').innerHTML = h + ":" + m;
    systemTime = setTimeout('startTime()', 500);
}
function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}


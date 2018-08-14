document.getElementById('P4_buttonCaidan').onclick = function(){
    document.getElementById('P4_Tan').style.display = 'block';
    document.body.style.overflow = 'hidden';
};
document.getElementById('P4_Tan_caidanClose').onclick = function(){
    document.getElementById('P4_Tan').style.display = 'none';
    document.body.style.overflowY = 'visible';
};
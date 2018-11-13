window.onload = function(){
    $('#m2-aboutSec-list ul').roundabout({
        
        easing: 'easeOutInCirc',
        duration: 600
    });
    $('.m2-frontHead').css('z-index',120);
    $('.m2-topNav-ulSec').css('z-index',130);
    $('.m2-parBg').css('z-index',140);
    $('.m2-parHidebox').css('z-index',150);
};
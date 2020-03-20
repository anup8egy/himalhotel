let c=0;
$(document).ready(function(){
    $('.navButt').on('click',showHideMobileNav);
})
function showHideMobileNav(){//To open popup for menu bar in mobile
    c+=1;
    $('.mobNavList').fadeToggle();
    if(c%2==1){
        var check=true;
        $('.mobNavList').show();
        gsap.to('.mobNavList',{ duration: 2.5, ease: "expo.in"});
    }else{
        var check=false;
        $('.mobNavList').fadeOut();
    }
    $('.navButt i').toggleClass('fa-bars',!check);
    $('.navButt i').toggleClass('fa-close',check);
}
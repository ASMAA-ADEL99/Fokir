//&===========> jQuery <==========&
//^==========> nav bar <==========^
let abouteSection =$("#about").offset().top;
$(window).scroll(function(){
    let offset = $(window).scrollTop();
    if(offset >= abouteSection-200){
        $(".nav").css({"background-color":"rgba(0,0,0,0.6)"});
    }
    else{
        $(".nav").css({"background-color":"transparent"});
       

    }

})


$(function(){
    let hobie=$("#coontendor").offset().top,
    Logros=$("#Loggro").offset().top;
    window.addEventListener('resize', function(){
        let hobie=$("#coontendor").offset().top,
    Logros=$("#Loggro").offset().top;

    });
    $("#enlaceInicio").on("click", function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        },450);
    })
    $("#enlaceHobbies").on("click", function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: hobie
        },450);
    })
    $("#enlaceLogros").on("click", function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: Logros -160
        },450);
    })
   
})



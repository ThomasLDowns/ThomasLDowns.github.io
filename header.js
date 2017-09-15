$(document).ready(function(){
    $(".navbar-hamburger").click(function(){
        $(".hamburger-icon").stop().toggleClass("fa-bars").toggleClass("fa-times");
        $(".navbar-container").stop().slideToggle(300);
    });
});
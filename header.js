$(document).ready(function(){
    $(".navbar-hamburger").click(function(){
        $(".hamburger-icon").stop().toggleClass("fa-bars");
        $(".hamburger-icon").stop().toggleClass("fa-times");
        $(".navbar-container").stop().slideToggle(300);
    });
});
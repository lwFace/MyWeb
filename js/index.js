/**
 * Created by Shen on 2015/7/3.
 */
$(document).ready(function(){
    $(".teacher").mouseenter(function(){
        $(this).children(".tDetail").fadeIn(500);
    })

    $(".teacher").mouseleave(function(){
        $(this).children(".tDetail").fadeOut(1);
    })
});
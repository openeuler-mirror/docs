$(function($) {
    
    $(".h5-right>.icon-lang,#lang").click(function (e) {
        $(this).find(".option").show();
        $(document).one("click", function(){
            $(this).find(".option").hide();
        });
        e.stopPropagation();
    });
    $("#nav-search").click(function (e) {
        $(this).find("input").animate({
            width: "300px"
        },1000);
        $(this).addClass("search-active");
        $(document).one("click", function(){
            $("#nav-search").find("input").animate({
                width: "0"
            },300);
            $("#nav-search").removeClass("search-active");
        });
        e.stopPropagation();
    });
    $("#LTS-value").click(function (e) {
        $(this).toggleClass("active");
        if($(this).attr("class")) {
            $(".doc-box>.version").not("[key*='LTS']").hide();
        }else {
            $(".doc-box>.version").not("[key*='LTS']").show();
        }
    });
    $(".doc-box>.version").click(function (e) {
        $(".doc-box>.version").removeClass("active");
        $(this).addClass("active");
        var index = $(this).attr("index");
        $(".doc-catalog>.list").hide();
        $(".doc-catalog").find(`[index=${index}]`).show();
    });
    $(".nav-menu .left,.nav-menu .h5-right").find(".home").click(function (e) {
        let currentUrl = window.location.pathname;
        if(currentUrl == '/'+lang+'/') {
            return false;
        }else {
            window.location.href = '/' + lang + '/';
        }
    });
})
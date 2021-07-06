$(function($) {
    var keyword = "";
    $(".baseof_mask").click(function (e) {
        $(".baseof_mask").css('display','none');
        $("#result-container").css("display","none");
    });

    $(".search-header>.icon-search").click(function (e) {
        keyword = $(".search-header>.search-text").val();
        $("#search_content").css('display','block');
        searchMethods.search(decodeURI(keyword),1,"#baseof-pagination");
    });

    $(".search-header>.search-text").bind('keypress',function(event){
        if(event.keyCode == "13") {
            keyword = $(".search-header>.search-text").val();
            $("#search_content").css('display','block');
            searchMethods.search(decodeURI(keyword),1,"#baseof-pagination");
        }
    });

    $(document).ready(function() {
        $(".search-header>.search-text").blur(function() {
            var value = $(this).val();
            value = $.trim(value); 
            if (value == '') {
                searchMethods.search(decodeURI(value),1,"#baseof-pagination");  
                $("#search-result>#baseof-pagination").css("display",'none')
            }
        })
    });

    $("#search-input>.icon-search").click(function (e) {
        keyword = $("#search-input>.search-text").val();
        $("#search_content").css('display','block');
        searchMethods.search(decodeURI(keyword),1,"#web-pagination");
    });

    $("#search-input>.search-text").bind('keypress',function(event){
        if(event.keyCode == "13") {
            keyword = $("#search-input>.search-text").val();
            $("#search_content").css('display','block');
            searchMethods.search(decodeURI(keyword),1,"#web-pagination");
        }
    });

    $(".white_search").click(function (e) {
        $(".searcher").css('display','block');
        $(".h5_index .zhezhao").css('display','block');
        var height = $(".h5_index").outerHeight(true)-279;
        $(".h5_index .zhezhao").css("height",height);

    });

    $(".h5_index .zhezhao").click(function (e) {
        $(".searcher").css('display','none');
        $(".h5_index .zhezhao").css('display','none');
    });

    $(".h5-search").find(".search-btn").click(function (e) {
        keyword = $(".h5-search").find("input").val();
        searchMethods.search(decodeURI(keyword),1,"#pagination");
    });

    $(".h5-search>.search-text").bind('keypress',function(event){
        if(event.keyCode == "13") {
            keyword = $(".h5-search>.search-text").val();
            searchMethods.search(decodeURI(keyword),1,"#pagination");
            
        }
    });
    var versionText = '';
    var articles = '';
    var totalAmount = 0;
    var pagecount = 5;
    var currentScreen = document.body.clientWidth;
    if(currentScreen <= 1000) {
        pagecount = 3;
    }
    if(lang === 'zh') {
        versionText = '版本';
        articles = 'openeuler_articles';
    }else if(lang === 'en') {
        versionText = 'version';
        articles = 'openeuler_articles_en';
    }else {
        versionText = 'Версия';
        articles = 'openeuler_articles_ru';
    }

    var searchMethods = {
        search: function (value,page,el) {
            let postData = {
                keyword: value,
                model: 'docs',
                indexEs: articles,
                version: '',
                page: page
            }
            $.ajax({
                type: "POST",
                url: '/docs-search/search/keyword',
                data: JSON.stringify(postData),
                contentType: "application/json; charset=utf-8",
                datatype: "json",
                headers: {
                    Authorization: 'Basic b3BlbmV1bGVyc2VydmVyOm9wZW5ldWxlcnNlcnZlckAxMjM0'
                },
                success: function (data) {
                    let dataArr = data.data.records;
                    totalAmount = data.data.totalNum;
                    if(page === 1) {
                        let pag = new Pagination({
                            element: el,
                            type: 1,
                            pageIndex: 1,
                            pageSize: 10,
                            pageCount: pagecount,
                            total: totalAmount,
                            jumper: false,
                            singlePageHide: false,
                            prevText: '<',
                            nextText: '>',
                            disabled: false,
                            currentChange: function(index) {
                                searchMethods.search(decodeURI(keyword),index);
                            }
                        });
                        $("#search-result>.title").find(".res-amount").text(totalAmount);
                    }
                    searchMethods.solveData(dataArr,versionText);
                },
                error: function (data) {
                    totalAmount = 0;
                    $("#search-result>.title").find(".res-amount").text(totalAmount);
                },
            });
        },
        solveData: function (result,text) {
            $("#search-result>ul").empty();
            result.forEach((item) => {
                let urlArr = item.path.split('/');
                let name = item.title.replace("<em>","");
                name = name.replace("</em>","");
                let url = `/${urlArr[7]}/docs/${urlArr[6]}/docs/${urlArr[9]}/${name}.html` ;
                $("#search-result>ul").append(`<li>
                <div class="res-title" href="${url}">
                ${item.title}
                </div>
                <div class="res-desc">
                ${item.textContent}
                </div>
                <div class="res-vers">
                    ${text}：<span class="which-version">${item.version}</span>
                </div>
                </li>`);
                $("#search-result>ul li").find(".res-title").click(function (e) {
                    window.location.href = $(this).attr("href");
                });
            });
        }
    };

    if(typeof(keyword) === 'undefined') {
        $("#search-result").empty();
    }else {
        $("#search-result>.title").find(".keyword").text(decodeURI(keyword));
        $(".input>.search-text").val(decodeURI(keyword));
        $(".h5-search>div").find("input").val(decodeURI(keyword));
    }
})
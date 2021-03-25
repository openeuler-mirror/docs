$(function($) {
    var keyword = window.location.search.split("=")[1];
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
        articles = 'openeuler_articles_en';
    }

    var searchMethods = {
        search: function (value,page) {
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
                        new Pagination({
                            element: '#pagination',
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
                $("#search-result>ul").append(`<li>
                <div class="res-title">
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
                    window.location.href = item.path;
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
    searchMethods.search(decodeURI(keyword),1);
})
/*** Created by xiaolong on 2016/1/13.*/
//头部鼠标移入显示移出隐藏
$(document).ready(function () {
    //头部的下拉菜单
    $(".fore").mouseenter(function () {
        $(this).css("background", "white").children().show()
    });
    $(".fore").mouseleave(function () {
        $(".fore").css("background", "#F2F2F2")
        $(".fore>ul").hide();
    });
    //分类
    $(".fenlei>div").hide().css('z-index', 0);
    //获得左边所有的li  .给li设置鼠标移进事件
    $(".fenlei>ul>li").on("mouseenter", function () {
        $(this).css("backgroundColor", "black")
        $(".fenlei>div").css('z-index', 10000).show();
        //索引 = 鼠标在这个li索引
        var index = $(this).index();

        //console.log(index)
        //每个图片的
        $(".fenlei>div>ul>li").eq(index).show().siblings().hide();
        //console.log(index);
        //每个图片的
        $(".fenlei>div>ul>li").eq(index).show().siblings().hide();

    });
    $(".fenlei>ul>li").mouseleave(function () {
        $(this).css("backgroundColor", "#333333")
    });

    $(".fenlei").on("mouseleave", function () {
        $(".fenlei>div").css('z-index', 10000).hide();
    })
    var index = 0;
    var timer = null;
    //大图片
    $(".circle>span").mouseenter(function () {
        $(".circle>span").css("background", "#A2A2A2");
        $(this).css("background", "white");
        index = $(this).index();
        //console.log(index);
        $(".lbt-zhfq>div:eq(" + index + ")").fadeIn(1000).siblings("div").hide().stop();
    });
//自动播放  1设置定时器
    $(".lbt-zhfq").mouseenter(function () {
        clearInterval(timer);
    });
    $(".circle>span").mouseenter(function () {
        clearInterval(timer);
    });
    $(".lbt-zhfq").mouseleave(function () {
         timer = setInterval(function () {
            if (index < $(".circle").children().length - 1) {
                index++;
            } else {
                index = 0;
            }
            $(".circle>span").css("background", "#A2A2A2");
            $($(".circle>span")[index]).css("background", "white");
    
            $(".lbt-zhfq>div:eq(" + index + ")").fadeIn(1000).siblings("div").hide().stop();
        }, 3000);
       
    });
    timer = setInterval(function () {
        if (index < $(".circle").children().length - 1) {
            index++;
        } else {
            index = 0;
        }
        $(".circle>span").css("background", "#A2A2A2");
        $($(".circle>span")[index]).css("background", "white");

        $(".lbt-zhfq>div:eq(" + index + ")").fadeIn(1000).siblings("div").hide().stop();
    }, 3000);
// 下拉搜索
    function scroll() {
        return {
            top: document.body.scrollTop,
            left: document.body.scrollLeft
        }
    }
    var xiaLa = $(".xiala-ss");
    window.onscroll = function () {
        if (scroll().top > 500) {
            xiaLa.slideDown();
        } else {
            xiaLa.slideUp();
        }
    }
});







<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 8d717c619039d0791b4b4fb0d4d4a46a14180c48
>>>>>>> 5c368f2e812e3670c6b58644ea2b71b98d8a6a61
/*** Created by xiaolong on 2016/1/13.*/
//ͷ�����������ʾ�Ƴ�����
$(document).ready(function () {
    //ͷ���������˵�
    $(".fore").mouseenter(function () {
        $(this).css("background", "white").children().show()
    });
    $(".fore").mouseleave(function () {
        $(".fore").css("background", "#F2F2F2")
        $(".fore>ul").hide();
    });
    //����
    $(".fenlei>div").hide().css('z-index', 0);
    //���������е�li  .��li��������ƽ��¼�
    $(".fenlei>ul>li").on("mouseenter", function () {
        $(this).css("backgroundColor", "black")
        $(".fenlei>div").css('z-index', 10000).show();
        //���� = ��������li����
        var index = $(this).index();
<<<<<<< HEAD
        //console.log(index)
        //ÿ��ͼƬ��
        $(".fenlei>div>ul>li").eq(index).show().siblings().hide();
        //console.log(index);
=======
        //ÿ��ͼƬ��
        $(".fenlei>div>ul>li").eq(index).show().siblings().hide();
>>>>>>> 5c368f2e812e3670c6b58644ea2b71b98d8a6a61
    });
    $(".fenlei>ul>li").mouseleave(function () {
        $(this).css("backgroundColor", "#333333")
    });

    $(".fenlei").on("mouseleave", function () {
        $(".fenlei>div").css('z-index', 10000).hide();
    })
    var index = 0;
    var timer = null;
    //��ͼƬ
    $(".circle>span").mouseenter(function () {
        $(".circle>span").css("background", "#A2A2A2");
        $(this).css("background", "white");
        index = $(this).index();
        //console.log(index);
        $(".lbt-zhfq>div:eq(" + index + ")").fadeIn(1000).siblings("div").hide().stop();
    });
//�Զ�����  1���ö�ʱ��
    $(".lbt-zhfq").mouseenter(function () {
        clearInterval(timer);
    });
    $(".circle>span").mouseenter(function () {
        clearInterval(timer);
    });
    $(".lbt-zhfq").mouseleave(function () {
<<<<<<< HEAD
        timer = setInterval(function () {
=======
<<<<<<< HEAD
         timer = setInterval(function () {
>>>>>>> 5c368f2e812e3670c6b58644ea2b71b98d8a6a61
            if (index < $(".circle").children().length - 1) {
                index++;
            } else {
                index = 0;
            }
            $(".circle>span").css("background", "#A2A2A2");
            $($(".circle>span")[index]).css("background", "white");

            $(".lbt-zhfq>div:eq(" + index + ")").fadeIn(1000).siblings("div").hide().stop();
        }, 3000);
<<<<<<< HEAD
=======
=======
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
>>>>>>> 8d717c619039d0791b4b4fb0d4d4a46a14180c48
>>>>>>> 5c368f2e812e3670c6b58644ea2b71b98d8a6a61
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
// ��������
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




<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
$(document).ready(function(){$(".fore").mouseenter(function(){$(this).css("background","white").children().show()});$(".fore").mouseleave(function(){$(".fore").css("background","#F2F2F2");$(".fore>ul").hide()});$(".fenlei>div").hide().css("z-index",0);$(".fenlei>ul>li").on("mouseenter",function(){$(this).css("backgroundColor","black");$(".fenlei>div").css("z-index",10000).show();var index=$(this).index();$(".fenlei>div>ul>li").eq(index).show().siblings().hide()});$(".fenlei>ul>li").mouseleave(function(){$(this).css("backgroundColor","#333333")});$(".fenlei").on("mouseleave",function(){$(".fenlei>div").css("z-index",10000).hide()});var index=0;var timer=null;$(".circle>span").mouseenter(function(){$(".circle>span").css("background","#A2A2A2");$(this).css("background","white");index=$(this).index();$(".lbt-zhfq>div:eq("+index+")").fadeIn(1000).siblings("div").hide().stop()});$(".lbt-zhfq").mouseenter(function(){clearInterval(timer)});$(".circle>span").mouseenter(function(){clearInterval(timer)});$(".lbt-zhfq").mouseleave(function(){timer=setInterval(function(){if(index<$(".circle").children().length-1){index++}else{index=0}$(".circle>span").css("background","#A2A2A2");$($(".circle>span")[index]).css("background","white");$(".lbt-zhfq>div:eq("+index+")").fadeIn(1000).siblings("div").hide().stop()},3000)});timer=setInterval(function(){if(index<$(".circle").children().length-1){index++}else{index=0}$(".circle>span").css("background","#A2A2A2");$($(".circle>span")[index]).css("background","white");$(".lbt-zhfq>div:eq("+index+")").fadeIn(1000).siblings("div").hide().stop()},3000);function scroll(){return{top:document.body.scrollTop,left:document.body.scrollLeft}}var xiaLa=$(".xiala-ss");window.onscroll=function(){if(scroll().top>500){xiaLa.slideDown()}else{xiaLa.slideUp()}}});
>>>>>>> a6fc94857253c0d7f7bcac206bbc4fd36cb8d4b9
>>>>>>> 8d717c619039d0791b4b4fb0d4d4a46a14180c48
>>>>>>> 5c368f2e812e3670c6b58644ea2b71b98d8a6a61

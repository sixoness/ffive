//banner轮播
$(document).ready(function () {
    $('.m2-banner-box').mouseenter(function () {
        $('.m2-prev,.m2-next').fadeIn(200);
    });
    $('.m2-banner-box').mouseleave(function () {
        $('.m2-prev,.m2-next').fadeOut(200);
    })
    //焦点图轮播
    $(".prev,.next").hover(function () {
        $(this).stop(true, false).fadeTo("show", 0.9);
    }, function () {
        $(this).stop(true, false).fadeTo("show", 0.4);
    });
    $(".m2-banner-box").slide({
        titCell: ".m2-hd ul",
        mainCell: ".m2-bd ul",
        effect: "fold",
        interTime: 3500,
        delayTime: 500,
        autoPlay: true,
        autoPage: true,
        trigger: "mouseover"
    });

     //右侧悬浮框
     var aLi = $('.m2-comRigli_new');
     for (var i = 0; i < aLi.length; i++) {
         (function (index) {
             aLi[index].onmouseover = function () {
                 var oDiv = aLi[index].children[2];
                 var aDiv = oDiv.children;
                 oDiv.style.display = 'block';
                 if (flag == 1) {
                     var iNum = parseInt(aDiv[1].innerHTML);
                     if (iNum >= 100) {
                         aDiv[1].innerHTML = '···';
                     }
                 }
             };
         })(i)
     }
     for (var i = 0; i < aLi.length; i++) {
         (function (index) {
             aLi[index].onmouseout = function () {
                 var oDiv = aLi[index].children[2];
                 var aDiv = oDiv.children;
                 oDiv.style.display = 'none';
                 if (flag == 1) {
                     var iNum = parseInt(aDiv[1].innerHTML);
                     if (iNum >= 100) {
                         aDiv[1].innerHTML = '···';
                     }
                 }
             };
         })(i)
     }

    $('.mo2-indLogtab ul li').click(function () {

        if ($(this).hasClass('mo2-logTab-unsel')) {
            $(this).addClass('mo2-logTab-sel').removeClass('mo2-logTab-unsel');
            $(this).siblings('.mo2-logTab-sel').addClass('mo2-logTab-unsel').removeClass(
                'mo2-logTab-sel');
        }
    });

    // 勾选注册用户协议
    $('#reverifyCode').click();
    $('.mo2-indRegagree i').click(function () {
        if ($(this).hasClass('mo2-indReg-sel')) {
            $(this).addClass('mo2-indReg-unsel').removeClass('mo2-indReg-sel');
            $('.mo2-indReg-btn a').addClass('mo2-indRegbtn-unable').removeClass(
                'mo2-indRegbtn-able');
            $('.mo2-indReg-btn a').attr('href', 'javascript:void(0);') // 禁止注册链接
        } else if ($(this).hasClass('mo2-indReg-unsel')) {
            $(this).addClass('mo2-indReg-sel').removeClass('mo2-indReg-unsel');
            $('.mo2-indReg-btn a').addClass('mo2-indRegbtn-able').removeClass(
                'mo2-indRegbtn-unable');
            $('.mo2-indReg-btn a').attr('href', 'javascript:void(0);') // 添加注册链接
        }
    });


    // 注册登录显示隐藏
    $('.mo2-indTab-reg').click(function () {
        $('.mo2-indRegboxRight').show();
        $('.mo2-indLogboxRight').hide();
    });
    $('.mo2-indTab-log').click(function () {
        $('.mo2-indRegboxRight').hide();
        $('.mo2-indLogboxRight').show();
    });
    //滚动广告
    function marquee(height, speed, delay) {
        var scrollT;
        var pause = false;
        var ScrollBox = document.getElementById("upRoll1");
        if (document.getElementById("holder1").offsetHeight <= height) return;
        var _tmp = ScrollBox.innerHTML.replace('holder1', 'holder')
        ScrollBox.innerHTML += _tmp;
        ScrollBox.onmouseover = function () {
            pause = true
        }
        ScrollBox.onmouseout = function () {
            pause = false
        }
        ScrollBox.scrollTop = 0;

        function start() {
            scrollT = setInterval(scrolling, speed);
            if (!pause) ScrollBox.scrollTop += 2;
        }

        function scrolling() {
            if (ScrollBox.scrollTop % height != 0) {
                ScrollBox.scrollTop += 2;
                if (ScrollBox.scrollTop >= ScrollBox.scrollHeight / 2) ScrollBox.scrollTop = 0;
            } else {
                clearInterval(scrollT);
                setTimeout(start, delay);
            }
        }
        setTimeout(start, delay);
    }
    marquee(42, 30, 3000);
    //倒计时
    var timeLeftpri = 0;
    var pristatus = Number('3');

    function timeDownpri() {
        if (timeLeftpri < 86400 & timeLeftpri > 0) {
            var minLeft1 = Number(parseInt(timeLeftpri % 3600 / 60 / 10)).toString(); //分钟第一位
            var minLeft2 = Number(parseInt(timeLeftpri % 3600 / 60 % 10)).toString(); //分钟数第二位
            var secLeft1 = Number(parseInt(timeLeftpri % 3600 % 60 / 10)).toString(); //秒第一位
            var secLeft2 = Number(parseInt(timeLeftpri % 10)).toString(); //秒第二位
            $('.mo2-priDay').hide(); //隐藏天
            $('.mo2-priSec').show(); //显示秒
            $('.mo2-priHou').children('i').html(parseInt(timeLeftpri / 3600)); //小时
            $('.mo2-priMin').children('i').html(minLeft1 + minLeft2); //分钟
            $('.mo2-priSec').children('i').html(secLeft1 + secLeft2); //秒
            timeLeftpri--;
            setTimeout("timeDownpri()", 1000); //设置1秒以后执行一次本函数
        } else if (timeLeftpri >= 86400) {
            var houLeft1 = Number(parseInt(timeLeftpri % 86400 / 3600 / 10)).toString(); //小时第一位
            var houLeft2 = Number(parseInt(timeLeftpri % 86400 / 3600 % 10)).toString(); //小时数第二位
            var minLeft1 = Number(parseInt(timeLeftpri % 86400 % 3600 / 60 / 10)).toString(); //分钟第一位
            var minLeft2 = Number(parseInt(timeLeftpri % 86400 % 3600 / 60 % 10)).toString(); //分钟数第二位
            $('.mo2-priDay').show(); //隐藏天
            $('.mo2-priSec').hide(); //显示秒
            $('.mo2-priDay').children('i').html(parseInt(timeLeftpri / 86400)); //天
            $('.mo2-priHou').children('i').html(houLeft1 + houLeft2); //小时
            $('.mo2-priMin').children('i').html(minLeft1 + minLeft2); //分钟
            timeLeftpri--;
            setTimeout("timeDownpri()", 1000); //设置1秒以后执行一次本函数
        } else if (timeLeftpri == 0) {
            $('.mo2-priDay').hide(); //隐藏天
            $('.mo2-priSec').show(); //显示秒
            $('.mo2-priHou').children('i').html(0); //小时
            $('.mo2-priMin').children('i').html('00'); //分钟
            $('.mo2-priSec').children('i').html('00'); //秒

            $('.mo2-indPritim').hide();
            $('.mo2-priProc').show();
            if (pristatus == 2 || pristatus == 7 || pristatus == 11) {
                $('.mo2-priBtn a').html('已满额');
                $('.mo2-priBtn a').addClass('mo2-btnGery');
                $('.mo2-priProcess b u').css('color', '#ccc');
                $('.mo2-priProcess b i').css('background-color', '#ccc');
                $('.mo2-priProcess b u em').css('background',
                    'url(statics/home2/images/m2-indexIcon.png) no-repeat -288px -30px');
            } else {
                $('.mo2-priBtn a').html('立即投资');
                $('.mo2-priBtn a').removeClass('mo2-btnGery');
            }
        }

    }

    timeDownpri();


    //活动加息
    $(".huodongjiaxi").mouseover(function () {
        $(this).parent().find(".jiaxishow").show();
    })
    $(".huodongjiaxi").mouseout(function () {
        $(this).parent().find(".jiaxishow").hide();
    })

    // 爱车贷滑入效果
    $('.mo2-indCarlist').mouseenter(function () {
        $(this).children('.mo2-indCartop').children('.mo2-indCartop-rig').children('ul').stop()
            .animate({
                top: "-36px"
            }, 250);
    });
    $('.mo2-indCarlist').mouseleave(function () {
        $(this).children('.mo2-indCartop').children('.mo2-indCartop-rig').children('ul').stop()
            .animate({
                top: "0px"
            }, 250);
    });

    
    $(function () {
        carListpage();
    });

    function carListpage() {
        var ulLeft = 0;
        var maxLeft = ($('.mo2-indCarlist').length - 3) * 341;
        $('.mo2-indCarlist-next').click(function () {
            if (ulLeft > -maxLeft) {
                ulLeft -= 341;
                $('.mo2-indCar').animate({
                    left: ulLeft
                }, 400);
            }
        });

        $('.mo2-indCarlist-prev').click(function () {
            if (ulLeft < 0) {
                ulLeft += 341;
                $('.mo2-indCar').animate({
                    left: ulLeft
                }, 400);
            }
        });
    }

    
     // 爱房贷滑入效果
     $('.mo2-indHoulist').mouseenter(function () {
        $(this).children('.mo2-indHoutop').children('.mo2-indHoutop-rig').children('ul').stop()
            .animate({
                top: "-36px"
            }, 250);
    });
    $('.mo2-indHoulist').mouseleave(function () {
        $(this).children('.mo2-indHoutop').children('.mo2-indHoutop-rig').children('ul').stop()
            .animate({
                top: "0px"
            }, 250);
    });
    $(function () {
        houListpage();
    });
    function houListpage() {
        var ulLeft = 0;
        var maxLeft = ($('.mo2-indHoulist').length - 3) * 341;
        $('.mo2-indHoulist-next').click(function () {
            if (ulLeft > -maxLeft) {
                ulLeft -= 341;
                $('.mo2-indHou').animate({
                    left: ulLeft
                }, 400);
            }
        });

        $('.mo2-indHoulist-prev').click(function () {
            if (ulLeft < 0) {
                ulLeft += 341;
                $('.mo2-indHou').animate({
                    left: ulLeft
                }, 400);
            }
        });
    }

    // 消费金融滑入效果
    $('.mo2-indFinlist').mouseenter(function () {
        $(this).children('.mo2-indFintop').children('.mo2-indFintop-rig').children('ul').stop()
            .animate({
                top: "-36px"
            }, 250);
    });
    $('.mo2-indFinlist').mouseleave(function () {
        $(this).children('.mo2-indFintop').children('.mo2-indFintop-rig').children('ul').stop()
            .animate({
                top: "0px"
            }, 250);
    });
    $(function () {
        finListpage();
    });

    function finListpage() {
        var ulLeft = 0;
        var maxLeft = ($('.mo2-indFinlist').length - 3) * 341;
        $('.mo2-indFinlist-next').click(function () {
            if (ulLeft > -maxLeft) {
                ulLeft -= 341;
                $('.mo2-indFin').animate({
                    left: ulLeft
                }, 400);
            }
        });

        $('.mo2-indFinlist-prev').click(function () {
            if (ulLeft < 0) {
                ulLeft += 341;
                $('.mo2-indFin').animate({
                    left: ulLeft
                }, 400);
            }
        });
    }
    var ulLeft;
    $(function () {
        //项目列表切换
        $('.m2-indexSteplist li').click(function () {
            var stepIndex = 0;
            if ($(this).hasClass('m2-indexStep-unsel')) {
                stepIndex = $(this).index();
                $(this).addClass('m2-indexStep-sel').removeClass('m2-indexStep-unsel');
                $(this).siblings('.m2-indexStep-sel').addClass('m2-indexStep-unsel').removeClass(
                    'm2-indexStep-sel');
                $('.m2-indexStepimg-list li').eq(stepIndex).show();
                $('.m2-indexStepimg-list li').eq(stepIndex).siblings().hide();
                if (stepIndex == 0) {
                    //直投
                    borrowcate(0);
                    $('#statistics-title').html('<i class="m2-indexStepfoot-icon"></i>项目直投统计数据');
                }
                else if (stepIndex == 1) {
                    //债转
                    transcate();
                    $('.m2-indexStepfoot').hide();
                }
                ulLeft = 0;
                $('.m2-indexItemlist').animate({
                    left: ulLeft
                }, 400);
            }
        });
        //项目分类显示
        borrowcate(0);

        function borrowcate(cate) {
            $('.trans').hide();
            $('.borrow').show();
            $('.m2-indexStepfoot').show();
            if ($('#statistics-' + cate).data('bnum') > 0) {
                $('#statistics-bnum').text($('#statistics-' + cate).data('bnum'));
                $('#statistics-pnum').text($('#statistics-' + cate).data('pnum'));
                $('#statistics-inum').text($('#statistics-' + cate).data('inum'));
            } else {
                $('#statistics-bnum').text(0);
                $('#statistics-pnum').text(0);
                $('#statistics-inum').text(0);
            }
        }
        //显示债转
        function transcate() {
            $('.trans').show();
            $('.borrow').hide();
        }
        //项目列表翻页
        itemListpage();
        //视频列表翻页
        vodListpage();
        //新闻列表tab切换
        $('.m2-indNewstablist li').click(function () {
            if ($(this).hasClass('m2-indNewtab-unsel')) {
                $(this).addClass('m2-indNewtab-sel').removeClass('m2-indNewtab-unsel');
                $(this).siblings('.m2-indNewtab-sel').addClass('m2-indNewtab-unsel').removeClass(
                    'm2-indNewtab-sel');
            }
        });
        // 新闻列表tab切换下方展示
        $('.m2-indNewstablist li').click(function () {
            if ($(this).index() == 0) {
                //媒体报道
                $('.newslist').hide();
                $('#newslist1').show();
                $('#article-more').prop('href', 'meitibaodao_aiqianbang_licaiwang/');
            } else if ($(this).index() == 1) {
                //行业动态
                $('.newslist').hide();
                $('#newslist2').show();
                $('#article-more').prop('href', 'touzi_licaiwang_xinwendongtai/');
            } else if ($(this).index() == 2) {
                //网站公告
                $('.newslist').hide();
                $('#newslist3').show();
                $('#article-more').prop('href', 'aiqianbang_licaiwang_gonggao/');
            } else if ($(this).index() == 3) {
                //网站公告
                $('.newslist').hide();
                $('#newslist4').show();
                $('#article-more').prop('href', 'aiqianbang_touzi_licai_chanpin_gonggao/');
            } else if ($(this).index() == 4) {
                //还款公告
                $('.newslist').hide();
                $('#newslist5').show();
                $('#article-more').prop('href', 'aiqianbang_touzi_licai_chanpin_jieshu_gonggao/');
            } else if ($(this).index() == 5) {
                //活动公告=爱钱帮动态
                $('.newslist').hide();
                $('#newslist6').show();
                $('#article-more').prop('href', 'aiqianbang_licaiwang_xinwendongtai/');
            } else if ($(this).index() == 6) {
                //活动公告=爱钱帮动态
                $('.newslist').hide();
                $('#newslist7').show();
                $('#article-more').prop('href', 'touzi_licaijianyi/');
            }
        });
        // 视频播放
        $('.m2-indVodlist li').click(function () {
            $('.m2-indVoditem').remove();
            var vedio = $(this).data('vedio');
            $('.m2-indexVod-con').prepend(
                '<div class="m2-indVoditem"><i></i><video class="m2-indexVideo" data-setup="{}" preload="none" loop="false" controls="controls"><source src="' +
                vedio + '" type="video/mp4">您的浏览器版本过低,不能播放此视频</video></div>');
            $('.m2-indexVideo').attr("autoplay", "autoplay");
            closeVideo();
        });

        function closeVideo() {
            $('.m2-indVoditem i').click(function () {
                $('.m2-indVoditem').remove();
            })
        }
    });
    //项目列表翻页
    function itemListpage() {
        ulLeft = 0;
        $('.m2-indexItemlist-next').click(function () {
            var maxLeft = ($('.m2-indexItemlist li:visible').length - 3) * 341;
            if (ulLeft > -maxLeft) {
                ulLeft -= 341;
                $('.m2-indexItemlist').animate({
                    left: ulLeft
                }, 400);
            }
        });
        $('.m2-indexItemlist-prev').click(function () {
            if (ulLeft < 0) {
                ulLeft += 341;
                $('.m2-indexItemlist').animate({
                    left: ulLeft
                }, 400);
            }
        });
    }

    //视频列表翻页
    function vodListpage() {
        var ulLeft = 0;
        var maxLeft = ($('.m2-indVodlist li').length - 4) * 220;
        $('.m2-indexVodbtn-next').click(function () {
            if (ulLeft > -maxLeft) {
                ulLeft -= 220;
                $('.m2-indVodlist').animate({
                    left: ulLeft
                }, 300);
            }
        });
        $('.m2-indexVodbtn-prev').click(function () {
            if (ulLeft < 0) {
                ulLeft += 220;
                $('.m2-indVodlist').animate({
                    left: ulLeft
                }, 300);
            }
        });
    }
    //圆环进度条
    $(function () {
        //加载进度条
        $(".m2-indKnob").knob();
        //显示进度条百分比
        $('.m2-indPercent').each(function () {
            $(this).html($(this).siblings().children('input').attr('value') + "%");
        })
    });
});



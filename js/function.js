$(function () {

    // 1、打开和关闭侧边栏菜单按钮===============================
    $('.dj-meun').click(function () {
        $('#meun').addClass('is--open')
        $('#meun').addClass('is--active')
        $('.fill-body').show()
        $('body').css({
            "overflow": "hidden",
            "height":'100%'
        })
        $('html').css({
            "overflow": "hidden",
            "height":'100%'
        })
    })
    $('#gb-meun').click(function () {
        $('#meun').removeClass('is--open')
        $('#meun').removeClass('is--active')
        $('.fill-body').hide()
        $('body').css({
            "overflow": "scroll"
        })
        $('html').css({
            "overflow": "scroll"
        })
    })


    // 2、主导航栏内容鼠标的进入和离开事件处理==============================
    $('.nav-idx>.navigation--entry').mouseenter(function () {
        var idx=$(this).index();
        $('.advanced-menu>div').removeClass('menu--is-active')
        $('.advanced-menu>div').eq(idx).addClass('menu--is-active')
    })

    $('.navigation-main').mouseleave(function () {
        $('.advanced-menu>div').removeClass('menu--is-active')
    })



    // 3、显示和隐藏侧边栏分目录==================================

    // 所有的列表目录标签
    var $contentcbxs=$('.cbxs')
    var $content=$('.kg-contents').children().children('a')
    // 所有的列表分目录标签
    var $contentYc=$('.kg-contents').children().children('ul')
    // 先隐藏所有的列表分目录
    $contentYc.hide()
    // 为所有的列表标签注册点击事件,隐藏或者显示
    $contentcbxs.click(function () {
        // var ul= $(this).parents('a').next()
        var ul= $(this).next()
        if(ul.is(":hidden")){
            // $("$contentYc").hide();
            ul.slideDown()
            ul.parents().parents().siblings().children().children('ul').slideUp()
            // 图标旋转90度
            $(this).css({
                transform:'rotate(90deg)'
            })

            console.log('图标旋转90度')
        }else{
            ul.slideUp()
            // 恢复
            $(this).css({
                transform:'rotate(0deg)'
            })
        }

    })


    // 4、产品图轮播点击切换=======================
    $('.hq-img>a').click(function () {
        $('#imgs').attr("src",$(this).attr("href"))
        $(this).addClass('is--active').siblings().removeClass('is--active')
        return false
    })


    // 5、产品图放大镜效果===========================
    $(".qhzoom").imagezoom();

    $("#thumblist li a").click(function(){
        $(this).parents("li").addClass("tb-selected").siblings().removeClass("tb-selected");
        $(".qhzoom").attr('src',$(this).find("img").attr("mid"));
        $(".qhzoom").attr('rel',$(this).find("img").attr("big"));
    });


    // 6、360产品图的显示与隐藏=======================
    var $show=$('.show-360')
    $show.click(function () {
        timer = setInterval(function () {
            /*获得距离顶部的距离*/
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            /*滑动的速度 floor向下取整*/
            var speed = Math.floor(-scrollTop/9)
            console.log('1')
            /*回到顶部时，清除定时器*/
            if(scrollTop == 0){
                clearInterval(timer)
            }
            document.documentElement.scrollTop = document.body.scrollTop = scrollTop + speed
            /*系统滑动*/
            isScroll = true
        },30)
        $('.showmark').fadeIn()
        $('.center').fadeIn()
        $('body').css({
            "overflow": "hidden",
            "height":'100%'
        })
        $('html').css({
            "overflow": "hidden",
            "height":'100%'
        })
    })
    $('.gb').click(function () {
        $('.showmark').fadeOut()
        $('.center').fadeOut()
        $('.map').fadeOut()
        $('body').css({
            "overflow": "visible"
        })
        $('html').css({
            "overflow": "visible"
        })
    })

    // 7、视频的显示与隐藏=======================
    var $video=$('.show-370')
    $video.click(function () {
        timer = setInterval(function () {
            /*获得距离顶部的距离*/
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            /*滑动的速度 floor向下取整*/
            var speed = Math.floor(-scrollTop/9)
            console.log('1')
            /*回到顶部时，清除定时器*/
            if(scrollTop == 0){
                clearInterval(timer)
            }
            document.documentElement.scrollTop = document.body.scrollTop = scrollTop + speed
            /*系统滑动*/
            isScroll = true
        },30)
        $('.showmark').fadeIn()
        $('.video-show1').fadeIn()
        $('body').css({
            "overflow": "hidden",
            "height":'100%'
        })
        $('html').css({
            "overflow": "hidden",
            "height":'100%'
        })
        $('.video-show1 video').get(0).play();
    })
    $('.gb-video').click(function () {
        $('.showmark').fadeOut()
        $('.video-show1').fadeOut()
        $('body').css({
            "overflow": "visible"
        })
        $('html').css({
            "overflow": "visible"
        })
        $('.video-show1 video').get(0).pause();
    })

    var $video2=$('.show-380')
    $video2.click(function () {
        timer = setInterval(function () {
            /*获得距离顶部的距离*/
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            /*滑动的速度 floor向下取整*/
            var speed = Math.floor(-scrollTop/9)
            console.log('1')
            /*回到顶部时，清除定时器*/
            if(scrollTop == 0){
                clearInterval(timer)
            }
            document.documentElement.scrollTop = document.body.scrollTop = scrollTop + speed
            /*系统滑动*/
            isScroll = true
        },30)
        $('.showmark').fadeIn()
        $('.video-show2').fadeIn()
        $('body').css({
            "overflow": "hidden",
            "height":'100%'
        })
        $('html').css({
            "overflow": "hidden",
            "height":'100%'
        })
        $('.video-show2 video').get(0).play();
    })

    $('.gb-video2').click(function () {
        $('.showmark').fadeOut()
        $('.video-show2').fadeOut()
        $('body').css({
            "overflow": "visible"
        })
        $('html').css({
            "overflow": "visible"
        })
        $('.video-show2 video').get(0).pause();
    })

    // 地图
    $('.icon--international').click(function () {
        timer = setInterval(function () {
            /*获得距离顶部的距离*/
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            /*滑动的速度 floor向下取整*/
            var speed = Math.floor(-scrollTop/9)
            console.log('1')
            /*回到顶部时，清除定时器*/
            if(scrollTop == 0){
                clearInterval(timer)
            }
            document.documentElement.scrollTop = document.body.scrollTop = scrollTop + speed
            /*系统滑动*/
            isScroll = true
        },30)
        $('.showmark').fadeIn()
        $('.map').fadeIn()
        $('body').css({
            "overflow": "hidden",
            "height":'100%'
        })
        $('html').css({
            "overflow": "hidden",
            "height":'100%'
        })
    })

})


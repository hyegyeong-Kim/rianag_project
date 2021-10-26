$(function(){
    /* 스크롤 막기 */
    function scrollOff(){
        $("#container").on('scroll touchmove mousewheel', function(e){
            e.preventDefault();
            e.stopPropagation(); 
            return false;
        })
    };
    
    function scrollOn(){
        $("#container").off('scroll touchmove mousewheel')
    }

    $(window).resize(function(){
        if($(document).width() > 1024){
            scrollOn();
            $(".lnb").removeClass("open");
            $(".h_gnb .menu, .mylink").removeClass("on")
        }
    });

    /* gotop */
    $(function(){
        $("#btn_gotop").hide();
        $(document).scroll(function(){
            if($(document).scrollTop() > $("body").height() - 300){
                $("#btn_gotop").fadeIn();
            } else if($(document).scrollTop() == $(document).height() - $(window).height()) {
                $("#btn_gotop").fadeIn();
            } else {
                $("#btn_gotop").fadeOut();
            }
        });
        
    })
    $("#btn_gotop").click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
    });
    
    /* mylink */
    $(".mylink").click(function(){
        if ($(this).hasClass("on")){
            $(this).removeClass("on");
        } else {
            $(this).addClass("on");
            $(".h_gnb .menu").removeClass("on");
        }
    });

    /* 1024미만 GNB 보기 */
    $(".btn_menuopen").click(function(){
        if ($(".h_gnb .menu").hasClass("on")){
            $(".h_gnb .menu").removeClass("on");
        } else {
            $(".h_gnb .menu").addClass("on");
            $(".mylink").removeClass("on");
        }
    });

    /* 진행률 */
    $(document).ready(function(){
        $(".size").css("width", $(".size").text());
    });


    /* LNB */
    /*
    $(".lnb_menu > li > a").click(function(){
        $(".lnb_menu a").removeClass();
        $(this).addClass("act")
    });
    $(".depth2 a").click(function(){
        $(".depth2 a").removeClass();
        $(this).addClass("act2")
    });
     */
    $(".btn_lnbopen").click(function(){
        scrollOff();
        $(".lnb").addClass("open");
    });
    $(".btn_lnbclose").click(function(){
        scrollOn();
        $(".lnb").removeClass("open");
    });

    /* switch_btn */
    $(".switch_btn input").click(function(){
        if($(this).is(":checked")){
            $(this).parent().addClass("on");
        } else {
            $(this).parent().removeClass("on");
        }
    });

    /* tooltip */
    $(".tooltip").mouseover(function(){
        $(".tipbox").removeClass("open");
        $(this).next(".tipbox").addClass("open");
    });
    $(".tooltip").mouseout(function(){
        $(".tipbox").removeClass("open");
    });

    /* 게시판 opne */
    $(document).on("click",".alist_tit td .btn_accordion",function(){
        if($(this).parents(".alist_tit").hasClass("on")){
            $(this).parents(".alist_tit").removeClass("on")
            $(this).parents(".alist_tit").next(".alist_contents").removeClass("on")
        }else{
            $(this).parents(".alist_tit").addClass("on")
            $(this).parents(".alist_tit").siblings().removeClass("on")
            $(this).parents(".alist_tit").next(".alist_contents").addClass("on")
        }
    });

    //$('.colorchart').minicolors();

    /* tab_type01 */
    if($(".tab_type01").length){
        $(function(){
            $(".tab_type01").tabs();
            $(".tab01 a").click(function(){
                $(".tab01 a").removeClass("on");
                $(this).addClass("on");
            });
        });
    }

});

/* alert 타입 팝업 */
function showPop(pName){
    $("#"+ pName).addClass("open");
};
function hidePop(pName){
    $("#"+ pName).removeClass("open");
};


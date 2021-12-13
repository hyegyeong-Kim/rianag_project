$(function(){
    /* 스크롤 막기 */
    function scrollOff(){
        $("#container").on("scroll touchmove mousewheel", function(e){
            e.preventDefault();
            e.stopPropagation(); 
            return false;
        })
    };
    
    function scrollOn(){
        $("#container").off("scroll touchmove mousewheel")
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
            if($(document).scrollTop() > $("body").height() - 600){
                $("#btn_gotop").fadeIn();
            } else if($(document).scrollTop() == $(document).height() - $(window).height()) {
                $("#btn_gotop").fadeIn();
            } else {
                $("#btn_gotop").fadeOut();
            }
        });
        
    })
    $("#btn_gotop").click(function(){
        $("html, body").animate({scrollTop:0}, "slow");
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
    /* 알림창 */
    $(".alarm").click(function(){
        if ($(this).hasClass("on")){
            $(this).removeClass("on");
        } else {
            $(this).addClass("on");
        }
    });

    /* 알림창 삭제기능 */
    $(".alarmview li .btn_close").click(function(){
        $(this).parent().remove();
        var _length = $(".alarmview li").length;
        if (_length <= 0) {
            $(".alarm").removeClass("on");
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
    

    /* LNB */
    /* */
    
    $(window).scroll(function() {
        var lnbbtm = $(document).scrollTop() - ($(document).height() - $(window).height()) + 242;
        
        if(lnbbtm > 0){
            $(".lnb").stop().animate(
                {"bottom":lnbbtm  + "px"}
            );
        } else {
            $(".lnb").stop().animate(
                {"bottom":0}
            );
        }
    });

    $(".lnb_menu > li > a").click(function(){
        $(".lnb_menu a").removeClass();
        $(this).addClass("act");
        $(this).siblings(".depth2").children().eq(0).children("a").addClass("act2")
    });
    $(".depth2 > li > a").click(function(){
        $(".depth2 > li > a").removeClass();
        $(this).addClass("act2")
    });

    $(".nav_menu > li > a").click(function(){
        $(".nav_menu > li > a").removeClass();
        $(this).addClass("act3")
    });

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

    //$(".colorchart").minicolors();

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
function allHide(){
    $(".popup").removeClass("open");
};

/* 검색값 클리어 */
 var clearInput = function(obj) {
    obj.parentNode.querySelector("input").value = "";
    obj.style.display = "none";
}
$(function(){
    $(".search input").on("input", function(){
        if($(".search input").val() ==""){
            $(this).siblings(".btn_delete").css("display","none");
        }else{
            $(this).siblings(".btn_delete").css("display","block");
            
        }
    });
});

/* onlycont */
$(function(){
    if($(".coantents").hasClass("onlycont")){
        $("#utility").addClass("hiddenlnb");
    }
})

/* calendarbtn */
$(document).on("click",".calendarbtn .btn", function(){
    if($(this).hasClass("black")){
        $(this).removeClass("black").addClass("white")
    }else{
        $(this).addClass("black").removeClass("white")
        $(this).siblings().removeClass("black").addClass("white")
    }
});

function txtboxauto(){
    $(".comment_area").on( "keyup", function (e){
        $(this).height( this.scrollHeight);
    });
    $(".comment_area").keyup();
}

/* 댓글수정 */
$(document).on("click",".basic_comment .editbox .btn_edit", function(){
    $(".reply").removeClass("open");
    if($(this).parents(".basic_comment").hasClass("hidden")){
        $(this).parents(".basic_comment").removeClass("hidden")
    }else{
        $(this).parents(".basic_comment").addClass("hidden")
    }
    txtboxauto();
});
$(document).on("click",".btn_box .cancel", function(){
    $(this).parents().siblings(".basic_comment").removeClass("hidden")
});

/* 답글쓰기 */
$(document).on("click",".comment_unit .btn_reply", function(){
    $(".reply").removeClass("open");
    $(this).parents(".basic_comment").siblings(".reply").addClass("open")
    $(this).parents().siblings(".comment_depth2").children(".reply").addClass("open")
    txtboxauto();
});
$(document).on("click",".reply .btn_box .cancel", function(){
    $(this).parents(".reply").removeClass("open")
    txtboxauto();
});

/* 애플리케이션등록 */
function scrollMove(seq){
    var offset = $("#app" + seq).offset();
    $('html, body').scrollTop(offset.top - 200);
}
$(window).scroll(function(){
    var _scrolltop = $(window).scrollTop(); 
    _app1 = $("#app1").offset().top - 250;
    _app2 = $("#app2").offset().top - 250;
    _app3 = $("#app3").offset().top - 250;
    _app4 = $("#app4").offset().top - 250;
    _app5 = $("#app5").offset().top - 250;
    _app6 = $("#app6").offset().top - 250;
    _app7 = $("#app7").offset().top - 250;
    _navOn = $(".nav_menu li a");

    if(_scrolltop >= _app1 && _scrolltop < _app2){
        _navOn.removeClass("act3");
        _navOn.eq(0).addClass("act3");
    }
    if(_scrolltop >= _app2 && _scrolltop < _app3){
        _navOn.removeClass("act3");
        _navOn.eq(1).addClass("act3");
        
    }
    if(_scrolltop >= _app3 && _scrolltop < _app4){
        _navOn.removeClass("act3");
        _navOn.eq(2).addClass("act3");
        
    }
    if(_scrolltop >= _app4 && _scrolltop < _app5){
        _navOn.removeClass("act3");
        _navOn.eq(3).addClass("act3");
        
    }
    if(_scrolltop >= _app5 && _scrolltop < _app6){
        _navOn.removeClass("act3");
        _navOn.eq(4).addClass("act3");
        
    }
    if(_scrolltop >= _app6 && _scrolltop < _app7){
        
        _navOn.removeClass("act3");
        _navOn.eq(5).addClass("act3");
    }
    if(_scrolltop >= _app7){
        _navOn.removeClass("act3");
        _navOn.eq(6).addClass("act3");
        
    }
})

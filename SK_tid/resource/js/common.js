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
            $(".menu, .alarm").removeClass("on");
        }
    });
    /* 알림창 */
    $(".alarm").click(function(){
        if ($(this).hasClass("on")){
            $(this).removeClass("on");
        } else {
            $(this).addClass("on");
            $(".menu, .mylink").removeClass("on");
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
            $(".mylink, .alarm").removeClass("on");
        }
    });
    

    /* LNB */
    /* */
    function lnb_btm(){
        var lnbbtm = $(document).scrollTop() - ($(document).height() - $(window).height()) + 142;
        if(lnbbtm > 0){
            $(".lnb").css({"bottom":lnbbtm  + "px"});
        } else {
            $(".lnb").css({"bottom":0});
        }
    };
    $(window).resize(function(){
        lnb_btm();
    });
    $(window).scroll(function() {
        lnb_btm();
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
        $(".lnb").removeClass("open");
    });

    $(".btn_lnbopen").click(function(){
        //scrollOff();
        $(".lnb").addClass("open");
        $("#utility").addClass("nobor");
    });
    $(".btn_lnbclose").click(function(){
        //scrollOn();
        $(".lnb").removeClass("open");
        $("#utility").removeClass("nobor");
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

/* 네비게이션 메뉴 */
function scrollMove(seq){
    var offset = $("#app" + seq).offset();
    $('html, body').scrollTop(offset.top - 200);
}
$(function(){
    if($(".uxguide").length > 0){
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
        
            var _eq = (_scrolltop < _app2) ? 0 : (_scrolltop < _app3) ? 1 : (_scrolltop < _app4) ? 2 : (_scrolltop < _app5) ? 3 : (_scrolltop < _app6) ? 4 : (_scrolltop < _app7) ? 5 : (_scrolltop >= _app7) ? 6 : false;
        
            _navOn.removeClass("act3");
            _navOn.eq(_eq).addClass("act3");
        })
    }
})

/* 통계 */
// plugin
const getOrCreateLegendList = (chart, id) => {
    const legendContainer = document.getElementById(id);
    let listContainer = legendContainer.querySelector('ul');

    if (!listContainer) {
        listContainer = document.createElement('ul');

        legendContainer.appendChild(listContainer);
    }

    return listContainer;
};

const htmlLegendPlugin = {
    id: 'htmlLegend',
    afterUpdate(chart, args, options) {
        const ul = getOrCreateLegendList(chart, options.containerID);

        // Remove old legend items
        while (ul.firstChild) {
            ul.firstChild.remove();
        }

    // Reuse the built-in legendItems generator
    const items = chart.options.plugins.legend.labels.generateLabels(chart);

    items.forEach(item => {
        const li = document.createElement('li');
        li.style.alignItems = 'center';
        li.style.cursor = 'pointer';

        li.onclick = () => {
            const {type} = chart.config;
            if (type === 'pie' || type === 'doughnut') {
                chart.toggleDataVisibility(item.index);
            } else {
                chart.setDatasetVisibility(item.datasetIndex, !chart.isDatasetVisible(item.datasetIndex));
            }
            chart.update();
        };

        // Color box
        const boxSpan = document.createElement('span');
        boxSpan.style.background = item.fillStyle;
        boxSpan.style.borderColor = item.strokeStyle;
        boxSpan.style.borderWidth = item.lineWidth + 'px';
        boxSpan.classList.add('legend_bul');

        // Text
        const textContainer = document.createElement('span');
        textContainer.classList.add('legend_txt');

        const text = document.createTextNode(item.text);
        textContainer.appendChild(text);

        li.appendChild(boxSpan);
        li.appendChild(textContainer);
        ul.appendChild(li);
    });
    }
};
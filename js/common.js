$(function(){
    //말줄임
    generateDot($(".dott"));

    // 모바일 메뉴 - 열기
    $("header").on('click', '.m_btn', function () {
        $("body").addClass("leftOpen");
        openFixed();

    });

    // 모바일 메뉴 - 닫기
    $(".nav .close_btn").on('click', function () {
       // var $rootScr = $("html").scrollTop();
        $("body").removeClass("leftOpen");
        closeFixed();
    });

});

//말줄임 처리
function generateDot($el) {
    $el.dotdotdot({
        // configuration goes here
        ellipsis: '... ',
        wrap: 'word',
        after: null,
        watch: true,
        height: null,
        tolerance: 0
    });
}

//모달 열기
function fnShowPop(sGetName){
    var $layer = $("#"+ sGetName);
    var mHeight = $layer.find(".m_content").height()/2;
    $layer.find(".m_content").css({'margin-top':-mHeight});
    $layer.addClass("on");
    $("body").addClass("m_on");
    openFixed();

}

//모달 닫기
function fnHidePop(sGetName){
    $("#"+ sGetName).removeClass("on");
    $("body").removeClass("m_on");
    closeFixed();
}

//날짜
function getFormatDate(date) {
    var year = date.getFullYear(); //yyyy
    var month = (1 + date.getMonth()); //M
    month = month >= 10 ? month : '0' + month; // month 두자리로 저장
    var day = date.getDate();   //d
    day = day >= 10 ? day : '0' + day;  //day 두자리로 저장
    return year + '-' + month + '-' + day;
}

// 데이트피커 공통
$(function () {
    var date = new Date();
    date = getFormatDate(date);

    if ($.datepicker) {
        jQuery(function ($) {
            $.datepicker.regional['ko'] = {
                closeText: '닫기',
                prevText: '이전달',
                nextText: '다음달',
                currentText: '오늘',
                monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
                monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
                dayNames: ['일', '월', '화', '수', '목', '금', '토'],
                dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
                dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
                weekHeader: 'Wk',
                dateFormat: 'yy-mm-dd',
                firstDay: 0,
                isRTL: false,
                showMonthAfterYear: false,
                showOtherMonths: false,
                changeMonth: false,
                changeYear: false,
                yearRange: "c-5:c+5",
                yearSuffix: ''
            };
            $.datepicker.setDefaults($.datepicker.regional['ko']);
        });
        $.datepicker.setDefaults(jQuery.datepicker.regional['ko']);
    }
    $("input.datepicker").datepicker();
    $("input.datepicker").val(date);
});

//모달시 오픈시 고정
var windowWidth = $( window ).width();

if(windowWidth < 799) {
    function openFixed(){
        var $rootScr = $("html").scrollTop() || $("body").scrollTop();
        var objWrapStyl = {
            position: 'fixed',
            minHeight: $(window).height() + $rootScr + 'px',
            top: ($rootScr * -1) + 'px',
            width: '100%',
        };
        $('.container_wrap').css(objWrapStyl).data("top", $rootScr);
    }

    //모달시 닫을시 고정
    function closeFixed(){
        var $previusScr = $(".container_wrap").data("top");

        $('.container_wrap').attr("style", "");
        $("html, body").animate({scrollTop: $previusScr}, 0);
    }
}



function nullCheck(obj, default_val) {
    if (typeof obj === 'undefined'
        || obj == null
        || !obj
        || obj == ''
        || obj == 'null'
        || String(obj).trim() == '') {

        return default_val;
    }
    return obj;
}






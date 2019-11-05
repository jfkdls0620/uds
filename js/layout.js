$(function(){
    //말줄임
    generateDot($(".dott"));

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

function fnShowPop(sGetName){
    var $layer = $("#"+ sGetName);
    var mHeight = $layer.find(".m_content").height()/2;
    $layer.find(".m_content").css({'margin-top':-mHeight});
    $layer.addClass("on");
    console.log();
}

function fnHidePop(sGetName){
    $("#"+ sGetName).removeClass("on");
}
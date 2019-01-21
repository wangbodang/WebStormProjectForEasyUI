/**
 * Created by wangbodang on 2018/4/19.
 */
$(function (){
    //alert(1);
    init();
});

function init(){
    console.log("页面加载");

    $("#notips1").mouseenter({"info":"文本框内容为:"}, function(event){
        $(this).text(event.data.info+$("#txt1").val());
    }).mouseleave(function(){
        $(this).text("xxxx");
    });
    $(function(){
        $("#myform").validate();
    });
    $("#notips2").click(function(){
        var preTd = $(this).parent().prev();
        var $span = preTd.children("span").eq(0);
        var data = $span.data("name");
        if(data){
            alert("已有数据 : "+data);
        }else{
            alert("没有数据，赋值");
            $span.data("name", "wangboang");
            $span.text($span.data("name")).css("color", "red");
        }

    });
    $("#notips3").click(function(){
        alert("移除数据");
        $(this).parent().prev().children("span").eq(0)
               .removeData("name").text("Content")
               .removeAttr("style");;
    });
}

/**
 * Created by wangbodang on 2018/4/19.
 */
$(function (){
    //alert(1);
    init();
});
function init(){
    //为下拉列表注册事件
    $("ul.dropdown-menu").on("click", "li", {"name":"王伯当"}, function (event){
        //alert("fook");
        var $item = $(event.currentTarget);
        var index = $item.text().indexOf("Something");
        if(index>=0){
            console.log($item.text()+" | "+event.data.name);
        }
    });
    //为链接注册事件
    $("#showLink").on("click", {"name":"东方白"}, function(event){
        alert("点击了链接 : " + event.data.name);
    });
}

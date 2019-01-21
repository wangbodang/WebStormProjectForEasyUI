/**
 * Created by wangbodang on 2018/4/22.
 */
$(function(){
    init2();
});
function init2(){
    //初始化第一个下拉选单
    init_sel1();
}
//初始化第一个下拉选单
function init_sel1(){
    var invoiceStat1 = {"01":"项目发票", "02":"管理发票", "03":"不动产发票"};
    var $sel1 = $("#sel1");
    $sel1.empty();
    var $option = $("<option></option>");
    var opt_defalut = $option.clone().text("请选择");
    $sel1.append(opt_defalut);
    $.each(invoiceStat1, function(k, v){
        var opt = $option.clone();
        opt.text(v);
        opt.prop("value", k);
        $sel1.append(opt);
    });
    $sel1.on("change", function(){
        var $selected = $(this).find("option:selected");
        if($selected.text()=="管理发票"){
            alert("选中管理发票");

            var objArr = [];
            objArr.push({"01":"办公发票"});
            objArr.push({"02":"旅行发票"});
            objArr.push({"03":"车辆发票"});
            init_select($("#sel2"), objArr);
        }
    });
}
//初始化下拉选单
function init_select(sel, objArr){
    sel.empty();
    var $option = $("<option></option>");
    sel.append($option.clone().text("请选择"));
}
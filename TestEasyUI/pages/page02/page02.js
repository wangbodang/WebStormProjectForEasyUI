/**
 * Created by wangbodang on 2018/3/26.
 */
$(function(){
    //alert(222);
});

$(document).ready(function(){
    $("#btn_submit").on('click', function(){
        alert("click me!");
    });
});
$(function(){
    $("#select01").on('change', function(){
        alert("change!");
    });
});
//第一个表格填充数据
$(function(){
    $("#btn_loadData1").on('click', function(event){
        console.log("载入数据");
        var jsonArr = [];
        jsonArr.push({name:"sss", code:123, price:123.2});
        jsonArr.push({name:"xxx", code:111, price:123.2});
        jsonArr.push({name:"yyy", code:1223, price:123.2});
        var obj = {code:556, name:"孙立人", price:324.34}
        $("#data_tab1").datagrid('loadData', jsonArr);

    });
});

function getInfo(){
    //console.log(JSON.stringify($("#data_tab1").datagrid("getSelected")));
    var options = $("#data_tab1").datagrid("options");
    console.log("options : "+JSON.stringify(options));
    if(options.url){
        alert(options.url);
    }
}

function getSelectedRow(){
    var row = $("#data_tab1").datagrid("getSelected");
    $.messager.alert('选中的行信息:', row.code+', '+row.name+', '+row.price);
}
function getSelections(){
    var ss = [];
    var rows = $('#data_tab1').datagrid('getSelections');
    for(var i=0; i<rows.length; i++){
        var row = rows[i];
        ss.push('<span>'+row.code+":"+row.name+":"+row.price+'</span>');
    }
    $.messager.alert('Info', ss.join('<br/>'));
}

//第二个表格填充数据
$(function(){
    $("#btn_loadData2").on('click', function(event){
        console.log(event);
        console.log("载入数据 --- 按钮文本为 : "+$(this).text());
    });
});



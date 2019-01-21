/**
 * Created by wangbodang on 2017/10/31.
 */
$(document).ready(function(){
    test.initPage();
});

var test =(function(){
    var var1;

    var func1 = function(){
        alert("func1()");
    };

    return{
        initPage : function(){
            var date = new Date();
            $('title').eq(0).text('当前时间'+date.toLocaleString());
        },
        func2 : function(){
            alert("func2()");
        }
    };
})();
/**
 * Created by wangbodang on 2017/12/7.
 */
$(function(){
    console.log("页面加载");
});

function queryXzqh(jb, sel){
    console.log(jb);
    console.log($(sel).val());

    var ajax = getAjax();
    var url = "http://localhost:8080/s2/xzqh/getxzqhbyparam.action";
    ajax.open('POST',url,true);
    ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");//添加http头信息，该函数的顺序必须是open之后，send之前
    ajax.send("SJ_XZQH_DM="+$(sel).val()+"&JB="+jb);
    ajax.onreadystatechange = function(){
        if(ajax.readyState == 4){
            if(ajax.status >= 200 && ajax.status < 300 || ajax.status == 304){
                //请求成功的处理函数，服务器返回的数据存入responseText属性中
                requestData = ajax.responseText;//获取到后台响应的数据
                var data = JSON.parse(requestData);//将响应数据转化成json格式，以便使用
                //使用数据
                //~~~
                if(data.state==0){
                    alert(data.message);
                    console.log(JSON.stringify(data.data));
                }else{
                    alert("数据错误");
                }
            }else{
                //请求数据错误的处理函数
                alert("数据错误");
            }
        }else{
            //ajax发送失败，没有得到响应数据
            //alert("ajax发送失败");
            console.log(xhr.readyState);
        }

    }

}

function getAjax(){
    var xhr;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xhr;
}
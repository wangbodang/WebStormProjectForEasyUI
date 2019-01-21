/**
 * Created by wangbodang on 2017/10/31.
 */
$(document).ready(function(){
    test.initPage();
});

var test =(function(){
    var var1;
    var zzjgAry;

    var func1 = function(){
        alert("func1()");
    };
    function setZzjgXmszd(jsonStr){
        var jsonObj = JSON.parse(jsonStr);
        //alert(jsonObj.msg);
        zzjgAry = jsonObj.data;
        var xmssjgHtml = new Array();
        for(var i = 0;i<zzjgAry.length;i++){
            xmssjgHtml[xmssjgHtml.length] = '<option value="'+zzjgAry[i].ZZJG_DM_Y+'">'+zzjgAry[i].ZZJG_MC_Y+'</option>';
        }
        $('select[name="XMZZJG"]').html(xmssjgHtml.join(''));
        loadXMSZD();
    }
    function loadXMSZD(){
        var zzjg_dm_y = $("select[name=XMZZJG] option:selected").val();
        for(var i = 0;i<zzjgAry.length;i++){
            if(zzjg_dm_y == zzjgAry[i].ZZJG_DM_Y){
                var szdStr = zzjgAry[i].XMSZD;
                if(szdStr!=null&&szdStr!=''){
                    var szdAry = JSON.parse(szdStr);
                    var szd_html = new Array();
                    for(var i = 0;i<szdAry.length;i++){
                        szd_html[szd_html.length] = '<option value="'+szdAry[i].xmszdId+'">'+szdAry[i].xmszd+'</option>';
                    }
                    $("select[name=XMSZD]").html(szd_html.join(''));
                }
                break;
            }
        }
    }

    return{
        initPage : function(){
            var date = new Date();
            $('title').eq(0).text('当前时间'+date.toLocaleString());
            var jsonStr = '{"msg":"操作成功","code":"0","data":[{"NSRMC":"河南四建股份有限公司","ZZJG_MC":"河南送变电建设有限公司","ZZJG_DM":"14100000000","ROWNO":"1","XMSZD":"[{"xmszdId":"1","xmszd":"省外","yxbz":"Y"},{"xmszdId":"3","xmszd":"省内公司所在地以外开封市内","yxbz":"Y"},{"xmszdId":"4","xmszd":"省内机关所在地外","yxbz":"Y"},{"xmszdId":"0","xmszd":"机关所在地","yxbz":"Y"}]","QYID":"528E0C3C2D1F01ECE0537F00000101EC","ZZJG_DM_Y":"14100000000","NSRSBH":"91410000170660941L","ZZJG_MC_Y":"河南送变电建设有限公司","ORDERDM":"1"}]}';
            var jsonObj = {"msg":"操作成功","code":"0","data":[{"NSRMC":"河南四建股份有限公司","ZZJG_MC":"河南送变电建设有限公司","ZZJG_DM":"14100000000","ROWNO":"1","XMSZD":"[{\"xmszdId\":\"1\",\"xmszd\":\"省外\",\"yxbz\":\"Y\"},{\"xmszdId\":\"3\",\"xmszd\":\"省内公司所在地以外开封市内\",\"yxbz\":\"Y\"},{\"xmszdId\":\"4\",\"xmszd\":\"省内机关所在地外\",\"yxbz\":\"Y\"},{\"xmszdId\":\"0\",\"xmszd\":\"机关所在地\",\"yxbz\":\"Y\"}]","QYID":"528E0C3C2D1F01ECE0537F00000101EC","ZZJG_DM_Y":"14100000000","NSRSBH":"91410000170660941L","ZZJG_MC_Y":"河南送变电建设有限公司","ORDERDM":"1"}]};
            jsonStr = JSON.stringify(jsonObj);
            //console.log(jsonStr);
            setZzjgXmszd(jsonStr);
        },
        func2 : function(){
            alert("func2()");
        }
    };
})();
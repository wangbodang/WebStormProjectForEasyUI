$(function(){
	//alert("Foo!")
});
function btn_submit(){
	//alert("Foo!");
	var info='';
	info+="username:  "+$(":input[name='username']").val()+'\n';
	info+="password:  "+$(":input[name='password']").val()+'\n';
	var gender = $("input[type='radio']:checked").val();
	//测试多选框
	var interest = 'interest:\n';
	/*var $ckbox = $("input[type='checkbox']:checked");
	$.each($ckbox, function(i, item){
		interest += $(item).val()+(i==$ckbox.length-1?"":", ");
	});*/
	var $ckbox = $("input:checkbox");
	$.each($ckbox, function(i, item){
		if(this.checked){
			interest+=$(item).val()+", ";
		}
	});	
	///alert(interest.substr(0, interest.length-2));
	var $mySel = $("#myselect1");
	alert($mySel.val());
	return false;
}
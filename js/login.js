$(function() {
	// Waves初始化
	// Waves.displayEffect();
	// 输入框获取焦点后出现下划线
	$('.form-control').focus(function() {
		$(this).parent().addClass('fg-toggled');
	}).blur(function() {
		$(this).parent().removeClass('fg-toggled');
	});
});
// Checkbix.init();
$(function() {
	// 点击登录按钮
	$('#login-bt').click(function() {
		login();
	});
	// 回车事件
	$('#username, #password').keypress(function (event) {
		if (13 == event.keyCode) {
			login();
		}
	});
});
// 登录
function login() {
	sessionStorage.setItem('urlBase', 'http://192.168.31.114:8089');
	var urlBase = sessionStorage.getItem('urlBase');
	$.ajax({
		url: urlBase + "/common/login",
		type: 'post',
		contentType:'application/json;charset=utf-8',
        dataType:'json',
		data: JSON.stringify({
			userName: $('#username').val(),
			userPass: $('#password').val(),
		}),
		beforeSend: function() {

		},
		success: function(json){
			// console.log(json)
			sessionStorage.setItem('userId', json.data.userId);
			location.href = "./index.html"
			// if (json.code == 1) {
			// 	sessionStorage.setItem('role', '1');
			// 	location.href = json.data;
			// } else if(json.code == 2) {
			// 	sessionStorage.setItem('role', '2');
			// }else {
			// 	sessionStorage.setItem('role', '3');
			// }
		},
		error: function(error){
			// location.href = "./index.html"
			// sessionStorage.setItem('userId', '1');
			$.alert("登陆失败请重试")
			console.log(error);
		}
	});
}

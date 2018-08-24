//页头已经异步加载完成，挂载到DOM树
$('.header').load('solarHeader.html');
$('#footer').load('solarFooter.html');

//功能点1：监听“登录”按钮的单击事件
$('#bt-login').click(function () {
  var n = $('#uname').val();
  var p = $('#upwd').val();
  //提交异步请求，把登录信息提交给Web服务器
  $.ajax({
    type: 'GET',
    url: '../data/login_do.php',
    data: {uname: n, upwd: p},
    success: function(result){
      if(result>0){
        alert('登录成功!3秒钟跳转到网站首页');
        //在客户端存储会话基本的数据：loginUname
        sessionStorage['loginUname'] = n;
        setTimeout(function(){
          location.href='../index.html';
        }, 3000);
      }else {
        alert("用户名和密码失败，请重新输入");
      }
    }
  });
});
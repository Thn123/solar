//功能点1：监听“注册”按钮的单击事件
$('.header').load('solarHeader.html');
$('#footer').load('solarFooter.html');
$('#bt-register').click(function(){
  var n = $('#uname').val();  //用户名
  var p = $('#upwd').val();   //密码
  //将客户端数据异步提交给服务器
  $.ajax({
    type: 'GET',
    url: '../data/register.php',
    data: {uname: n,  upwd: p},
    success: function(result){
      //[{"msg":"success","rid":31}]
      if(result.length>0){
        alert('注册成功！3s后自动跳转到登录页面...');
        setTimeout(function(){
          location.href='../index.html';
        }, 3000);
      }else {
        alert('注册失败！请稍候重试！')
      }
    }
  });
});
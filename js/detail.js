//页头已经异步加载完成，挂载到DOM树
$('.header').load('solarHeader.html');
$('#footer').load('solarFooter.html');
loadPage(2);
function loadPage(data){
    $.ajax({
        url:"../data/detail.php?pageNo="+data,
        success:function(result){
            console.log(result);
            var html='';
            for(var i=0;i<result.length;i++){
               var obj= result[i];
                console.log(obj);
                html+=`
                     <li>
                        <div class="lf section-pic">
                            <img src="../image/index/${obj.pic}">
                        </div>
                        <div class="menu-content">
                            <h2><a href="#">${obj.title}</a></h2>
                            <div class="note">${obj.content}</div>
                            <div class="info">
                                  <span class="time">${obj.time}</span>
                            </div>
                        </div>
                     </li>
                `
            }
            $('.main-left-detail ul').html(html);
        },
        error:function(){
            alert("响应失败，请检查网络");
        }
    })
}
$("ol.pager a").click(function(e){
    e.preventDefault();
    var p = $(this).html();
    loadPage(p);
});

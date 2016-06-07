myFocus.set({
    id:'boxID',//焦点图盒子ID
    pattern:'mF_fancy',//风格应用的名称
    time:3,//切换时间间隔(秒)
    trigger:'click',//触发切换模式:'click'(点击)/'mouseover'(悬停)
    width:1000,//设置图片区域宽度(像素)
    height:310,//设置图片区域高度(像素)
    txtHeight:'default'//文字层高度设置(像素),'default'为默认高度，0为隐藏
  });
$(document).ready(function(){
 tab();
 click();
 change();
drawCircle()  
 changecolors();
 drawline() ;
 drawzhe();
});
function click(){
	$("#link_button").one("click",function(){
   var value=$('#tuijian2').text();
   value++;
   $('#tuijian2').text(value);
   $("#link_button").one("click",function(){
    $('#tuijian').text("已点值")
  });			
 });
	
}
function show(){
  $(".tab_nav").delegate('div','click',function(){
   var id=($(this).attr('id'));
   d(id);
 });
}
function d(id){

  $(".tab_content_box>div").each(function(index){
   if(index==id)
   {
    $(this).hide();

  }
}) ;  	
}
function tab(){
  $(".tabs").tabs({ 

                    //设置各选项卡在切换时的动画效果
                    fx: { opacity: "toggle" },
                    event: "click" //通过移动鼠标事件切换选项卡
                  });
}
function change(){
 $(".tab_nav li").delegate('a','click',function(){
       //$(this).addClass("current");
       var idq=$(this).parent().attr('id');
       $(".tab_nav li").each(function(index){
        if(index+1==idq)
        {
          $(this).addClass("current");
        }
        else $(this).removeClass("current");
      }) ;     

     });
  }
  //绘制饼图  
  function drawCircle()  
  {  
        //绘制饼图  
                //比例数据和颜色
    var canvasId="canvas_circle";  
    var data_arr = [0.05, 0.25, 0.6, 0.1];  
    var color_arr = ["#00FF21", "#FFAA00", "#00AABB", "#FF4400"];  
    var text_arr = ["天猫", "京东", "一号店", "中关村"];  
    var c = document.getElementById(canvasId);  
    var ctx = c.getContext("2d");  

                var radius = c.height / 2 - 20; //半径  105
                var ox = radius + 20, oy = radius + 20; //圆心  125,125

                var width = 30, height = 10; //图例宽和高  
                var posX = ox * 2 + 20, posY = 30;   //  270,30
                var textX = posX + width + 5, textY = posY + 10;  //305,40

                var startAngle = 0; //起始弧度  
                var endAngle = 0;   //结束弧度  
                for (var i = 0; i < data_arr.length; i++)  
                {  
                    //绘制饼图  
                    endAngle = endAngle + data_arr[i] * Math.PI * 2; //结束弧度  
                    ctx.fillStyle = color_arr[i];  
                    ctx.beginPath();  
                    ctx.moveTo(ox, oy); //移动到到圆心  
                    ctx.arc(ox, oy, radius, startAngle, endAngle, false);  
                    ctx.closePath();  
                    ctx.fill();  
                    startAngle = endAngle; //设置起始弧度  

                    //绘制比例图及文字  
                    ctx.fillStyle = color_arr[i];  
                    ctx.fillRect(posX, posY + 20 * i, width, height);  
                    ctx.moveTo(posX, posY + 20 * i);  
                    ctx.font = 'bold 14px 微软雅黑';    //斜体 30像素 微软雅黑字体  
                    ctx.fillStyle = color_arr[i]; //"#000000";  
                    var percent = text_arr[i] + "：" + 100 * data_arr[i] + "%";  
                    ctx.fillText(percent, textX, textY + 20 * i);  
                  }  
                }  

 function drawline() {            
      var barChartData = {
      labels : ["天猫","京东","一号店","中关村"],
      datasets : [
        {
          fillColor : "#00FF21",
          strokeColor : "rgba(220,220,220,1)",
          data : [65,59,90,81]
        },
        {
          fillColor : "#FFAA00",
          strokeColor : "rgba(151,187,205,1)",
          data : [35,41,10,19]
        }
      ]
      
    }
  var c = document.getElementById("canvas");  
  var ctx = c.getContext("2d"); 
  var myLine = new Chart(document.getElementById("canvas").getContext("2d")).Bar(barChartData);
  var color_arr = ["#00FF21", "#FFAA00"];  
  var text_arr= ["好评","差评"];
  for(var i=0;i<2;i++)
  { 
      ctx.fillStyle = color_arr[i];  
                    ctx.fillRect(500, 25 + 20 * i, 30,10);  
                    ctx.moveTo(500,25 + 20 * i);  
                    ctx.font = 'bold 14px 微软雅黑';    //斜体 30像素 微软雅黑字体  
                    ctx.fillStyle = color_arr[i]; //"#000000";  
                    var percent = text_arr[i] ;  
                    ctx.fillText(percent, 305, 40 + 20 * i);  
  }


             }  
function drawzhe(){
  var lineChartData = {
      labels : ["January","February","March","April","May","June","July"],
      datasets : [
        {
          fillColor : "#FF4400",
          strokeColor : "rgba(220,220,220,1)",
          pointColor : "rgba(220,220,220,1)",
          pointStrokeColor : "#fff",
          data : [65,59,90,81,56,55,40]
        },
        {
          fillColor :  "#00AABB",
          strokeColor : "rgba(151,187,205,1)",
          pointColor : "rgba(151,187,205,1)",
          pointStrokeColor : "#fff",
          data : [28,48,40,19,96,27,100]
        }
      ]
      
    }

  var myLine = new Chart(document.getElementById("canvas2").getContext("2d")).Line(lineChartData);
}
function changecolors(){
  $(".news_nav ul ").delegate('li','click',function(){
     $(this).addClass("bg_color");
  //  alert($(this).parent().siblings().attr('class'));
   $(this).siblings().removeClass("bg_color");
   });
}
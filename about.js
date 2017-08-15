$(function(){

  jadge = "close";


    $("#btnabout").on("click",function(){
      $("#about").slideToggle(600);

      if(jadge=="close"){
        $(".click").text("CLOSE");
        $("#main").animate({
          paddingTop:"320px",
        },600);
        $("#btnabout").animate({
          top:"390px",
        },600);
        $("#btnabout").css("background","url(images/btn_close.gif) no-repeat 100% 50%");
        jadge="about";
      }else{
        $(".click").text("ABOUT");
        $("#main").animate({
          paddingTop:"0px",
        },600);
        $("#btnabout").animate({
          top:"28px",
        },600);
        $("#btnabout").css("background","url(images/ic_arrow-y.gif) no-repeat 100% 50%");
        jadge="close";
    }
  });
});

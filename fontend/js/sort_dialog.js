// const { now } = require("lodash");

$(document).ready(function(){
    $("#btn").click(function(){
        $("#dialog-menu").toggle();
    });
    $("#member button").click(function(){
        
        var value = $(this).html();
        // new confirm1 = confirm('MiniLibrary','Xác Nhận Sách Đã Được Trả Lại?')
        if( value == "Chưa Trả"){
            if(confirm("Xác Nhận Sách Đã Được Trả Lại?") == true){
                $(this).html("Đã Trả");
                $(this).addClass("color1");
            }
        } else{
            if(confirm("Sách Chưa Được Trả Lại?") == true){
                $(this).html("Chưa Trả");
                $(this).removeClass("color1");
            }
        }
           
    });
});
$(document).ready(function(){  
    $("#table1   a").click(function(){
        $("#table1 tr").css("background-color", "white");
        let pname= $(this).parent().siblings().eq(1).text();
        let price= $(this).parent().siblings().eq(2).text();
        let qty=  $(this).parent().siblings().eq(3).text();
        $("#t1").val(pname);
        $("#t2").val(price);
        $("#t3").val(qty);
        $(this).parent().parent().css("background-color", "pink");
    });

    $('#table1 #re').click(function(){
        $(this).parent().parent().remove();
    })
});
 
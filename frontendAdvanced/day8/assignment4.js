let adB=$('.adBox img');
var adArray=['1.jpg','2.gif','3.gif'];
var url='';
setInterval(setSrc,5000);
function setSrc(){
        var num=Math.floor(Math.random()*adArray.length);
        url=`src/${adArray[num]}`;
        console.log(url);
        adB.attr('src',url)

}


function getData(event){
    var total_amt=0;
    var str='';
    event.preventDefault();
    let p_name=$('#ip1').val();
    let p_price=$('#ip2').val();
    let p_quant=$('#ip3').val();
    let res=$('#result');
    var amt=parseInt(p_price)*p_quant;
    if(p_quant>10){
        str=`The total amount after <bold>10% discount</bold> is ${Math.floor(amt-0.1*(amt))}`;
        
    }else{
        str=`The total amount is ${amt}`;

    }
    
    res.html(str)
}

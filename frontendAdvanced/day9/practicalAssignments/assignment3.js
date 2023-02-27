function getData(event){
    event.preventDefault();
    let p_name=$('#ip1').val();
    let p_price=$('#ip2').val();
    let p_quant=$('#ip3').val();
    var str=`<tr><td>${p_name}</td> <td>${p_price}</td> <td>${p_quant}</td></tr>`;
    console.log('working');
    $('#table1').append(str);
    if(p_quant==0){
        // $(this).css('background-color','green')
        $('#table1 tr:last').css('background-color','pink')
    }else{
        $('#table1 tr:last').css('background-color','lightgreen')
    }


}
function formatData(event){
    event.preventDefault();
    $('#table1 tr:first').css('background-color','lightblue');
    $('#table1 tr:last').css('background-color','lightgrey');
}


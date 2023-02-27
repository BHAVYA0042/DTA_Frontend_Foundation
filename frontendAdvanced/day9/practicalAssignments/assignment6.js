var str=``;
$('.butto').click(function(){
    $.ajax( 
        {
            url  :  "https://gorest.co.in/public/v2/users",
            type : "GET",
            success :   function(response)
            {
                response.map(function(i){
                console.log(i.status);
                str=`<div> <p id="idN">${i.id}</p> <p id="name">${i.name}</p> <p id="email">${i.email}</p> <p id="gender">${i.gender}</p> </div>`
                $('.data').append(str);
                if(i.status=='inactive'){
                    $('.data div:last').css('background-color','pink');
                }else{
                    $('.data div:last').css('background-color','green');
                }
                });
            }
        });
})
// #F7C8E0;
// #DFFFD8;


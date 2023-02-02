var str='{"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://reqres.in/img/faces/1-image.jpg"}';
function getD(event){
    event.preventDefault();
    var realData=JSON.parse(str);
    var item=document.getElementsByTagName("ul")[0];
    console.log(realData);
    var uid=document.getElementById("i1");
    var firstName=document.getElementById("i2");
    var lastName=document.getElementById("i3");
    var email=document.getElementById("i4");
    var avatar=document.getElementById("i5");
    uid.innerText=realData.id;
    firstName.innerText=realData.first_name;
    lastName.innerText=realData.last_name;
    email.innerText=realData.email;
    avatar.innerText=realData.avatar;
    item.style.display="block";
}
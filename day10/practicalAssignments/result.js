var obj=JSON.parse(localStorage.getItem('UserData'));
console.log(obj);
var b=document.getElementsByTagName("body")[0];
var heading=document.getElementsByTagName("h1")[0];
var para=document.getElementsByTagName("p")[0];
if(obj.name=="" || obj.joiningDate==""){
    b.style.backgroundColor="white";
    heading.innerText=`Welcome Guest`;
    para.innerText=`You have no joining date.`;
}
else{
    b.style.backgroundColor=obj.favColor;
    heading.innerText=`Welcome Mr./Mrs. ${obj.name}`;
    para.innerText=`Your joining date is ${obj.joiningDate}`;
}



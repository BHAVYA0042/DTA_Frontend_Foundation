var data="";
function work(event){    
    var namee=document.getElementById("i1");
    var number=document.getElementById("i2");
    var role=document.getElementById("i3");
    var salary=document.getElementById("i4");
    var department=document.getElementById("i5");
    var obj={
        Empname:namee.value,
        Empnumber:number.value,
        Emprole:role.value,
        Empsalary:salary.value,
        Empdepartment:department.value
    }
    data=JSON.stringify(obj);
    console.log(data);
    var show=document.getElementById("magic");
    show.innerText=data;
    event.preventDefault();
}

function setD(event){
    event.preventDefault();
    var reData=JSON.parse(data);
    alert(JSON.stringify(reData));
}

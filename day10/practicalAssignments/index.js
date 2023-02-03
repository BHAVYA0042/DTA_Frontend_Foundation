function submitData(event){
    var namee=document.getElementById("i1");
    var jDate=document.getElementById("i2");
    var color=document.getElementById("i3");
    var data={
        name:namee.value,
        joiningDate:jDate.value,
        favColor:color.value
    }
    console.log(data);

    localStorage.setItem('UserData',JSON.stringify(data))
    // event.preventDefault();
}


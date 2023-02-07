
function validate(event){
    console.log("Do something");
    var valid=document.getElementsByClassName("alert-success")[0];
    var invalid=document.getElementsByClassName("alert-danger")[0];
    // event.preventDefault();
    var namee=document.getElementById("staticEmail2");
    if(namee.value=="admin"){
        invalid.classList.add('d-none');
        valid.classList.remove("d-none");
    }else{
        valid.classList.add('d-none');
        invalid.classList.remove("d-none");
    }
}

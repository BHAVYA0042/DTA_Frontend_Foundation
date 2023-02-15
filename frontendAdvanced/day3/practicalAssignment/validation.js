function submitData(event){
    event.preventDefault();
    var myForm=document.forms[0];
    var namee=document.forms[0]['cName'].value;
    var sourceStation=document.forms[0]['sourceSt'].value;
    var destination=document.forms[0]['destSt'].value;
    var contact=document.forms[0]['contact'].value;
    var email=document.forms[0]['email'].value;

    var nameError=document.getElementById('Ne');
    var sourceError=document.getElementById('Se');
    var destError=document.getElementById('De');
    var contactError=document.getElementById('Ce');
    var emailError=document.getElementById('Ee');
    // var submitButton=document.getElementById('b1');

    var isFormValid=true;

    if(namee.length==0){
        nameError.innerText="Please enter some name."
        isFormValid=false;
    }
    if(sourceStation.length==0){
        sourceError.innerText="Please enter a source station."
        isFormValid=false; 
    }
    if(destination.length==0){
        destError.innerText="Please enter a source station."
        isFormValid=false;
    
    }
    if(sourceStation==destination){
        destError.innerText="Destination can't be same as source station."
        isFormValid=false;
    
    }
    if(contact.length!=10){
        contactError.innerText="Contact number should be of 10 digits.";
        isFormValid=false;
    }else{
        contactError.innerText='';
        isFormValid=true;
        
    }
    if(email.length==0){
        emailError.innerText="Please enter an email.";
        isFormValid=false;
        
    }
    
    if(isFormValid==true){
        alert("FORM submitted");
        myForm.reset();
    }
    
}

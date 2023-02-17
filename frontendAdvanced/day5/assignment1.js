function submitData(event){
    event.preventDefault();
    var formObj = document.getElementsByTagName("form")[0];	
    var tableObj = document.getElementById("table1");		 
    var  rowObj  =   tableObj.insertRow(-1);
    var inpArray=document.getElementsByTagName('input')
    for (let i=0;i<inpArray.length;i++){
        rowObj.insertCell(i).innerHTML=inpArray[i].value;
    }
    formObj.reset();

}
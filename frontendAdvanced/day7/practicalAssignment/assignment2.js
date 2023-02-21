function call(val){
    var url="";
    if(val=='button2'){
        url='https://reqres.in/api/users';
    }else{
        url='https://www.w3schools.com/angular/customers.php'
    }
    const data=fetch(url);
    data.then((response)=>{
        response.json().then((resData)=>{
            console.log(resData);
            if(val=='button2'){
                displayData2(resData.data);
            }else{
                displayData(resData.records);
            }
            
        })
    }).catch((error)=>{
        console.log(`SOme error occured ,${error}`);
        })
}

async function call2(){
    var url="";
    url='https://reqres.in/api/users';
    const data=await fetch(url);
    const resData=await data.json();
    try{
        displayData2(resData.data);
    }catch(error){
        console.log(`SOme error occured ,${error}`);
    }
}

var counter=0;
function displayData(parcel){
    var tableObj=document.getElementById("table1");;    
    tableObj.setAttribute('style','display:inline-block');
    if(counter==0){
        parcel.map(function(i){
            var  rowObj =  tableObj.insertRow(-1);	
            var lengthOfObject= Object.keys(i).length;
            for(let a=0;a<lengthOfObject;a++){
                var ke=Object.keys(i)[a];
                var da=i[ke];
                rowObj.insertCell(a).innerHTML=da;
            }
        });	
    }
    else{
        alert('Data already loaded.')
    }
    counter++;
}

function displayData2(parcel){
    var tableObj=document.getElementById("table1");;    
    tableObj.setAttribute('style','display:inline-block');
    if(counter==0){
        parcel.map(function(i){
            var  rowObj =  tableObj.insertRow(-1);	
            var lengthOfObject= Object.keys(i).length;
            for(let a=0;a<lengthOfObject;a++){
                var ke=Object.keys(i)[a];
                var da=i[ke];
                 if(a==4){
                    rowObj.insertCell(a).innerHTML=`<img src=${da} />`;
                }else{
                    rowObj.insertCell(a).innerHTML=da;
                }
            }
        });	
    }
    else{
        alert('Data already loaded.')
    }
    counter++;
}


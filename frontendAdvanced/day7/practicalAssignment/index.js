function generate(){
    var printObj=document.getElementById('printer');
    var promiseObj= new Promise((resolve,reject)=>{
        var numb=Math.floor(Math.random()*50);
        if(numb%5==0){
            resolve(numb);
        }else{
            // reject('Promise rejected, number is not multiple of 5');
            reject(numb);
        }
        

        
    })

    promiseObj.then((resp)=>{

        printObj.innerText=`Congartulations !!!!!  ${resp} is a multiple of 5 `;
        printObj.style.color='green';
        
    }).catch((error)=>{
        printObj.innerText=`Sorry !!! ${error} is not a multiple of 5 `;
        printObj.style.color='red';
        // console.log('The number that was generated was not multiple of 5');
    })
}
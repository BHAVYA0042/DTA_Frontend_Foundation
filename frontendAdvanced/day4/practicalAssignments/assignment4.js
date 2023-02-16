var citiesArray = [ "Hyderabad", "Mumbai",  "Bangalore", "Gurgaon"];
function handle1(){
    var res=document.getElementById('result1');
    
    var str='';
    function upp(i){
        var ans=i.toUpperCase();
        str+=`${ans}, `;
    }
    citiesArray.map(upp);
    res.innerHTML="Uppercase values are " + str;
    
}

function handle2(){
    var res=document.getElementById('result2');
    var str='';
    citiesArray.map(function(i){
        var ans=i.substring(0,3);
        str+=`${ans}, `;
    })
    res.innerHTML="Substring values are " + str;

}

function handle3(){
    var res=document.getElementById('result3');
    var str='';
    var newArr=citiesArray.map(i=>i.replaceAll('a','@'));
    newArr.map(i=>str+=`${i}, `);
    res.innerText="The changed values are: "+ str  
}
function numberInput(event){
    event.preventDefault();
    var iPstring=document.getElementById('numIp').value;
    var res=document.getElementById('result');
    var arr=iPstring.split(',');
    console.log(arr);
    var finArr=[];
    var newStr='';

    function evenOut(i){
        if(i%2==0){
            finArr.push(i);
            newStr+=`${i}, `;
        }
    }

    arr.map(evenOut);

    var str=`The numbers that are even are:${finArr.length},They are:`;
    res.innerText=str+newStr;
}
function f_power(event){
    event.preventDefault();
    var firstNum=document.getElementById('firstNumber').value;
    var lastNum=document.getElementById('lastNumber').value;
    var res=document.getElementById('result2');
    var ans=firstNum**lastNum;
    console.log(ans);
    res.innerText=`The answer is ${ans}`;
}
function f_count(event){
    event.preventDefault();
    var inpStr=document.getElementById('sIp').value;
    var wordArray=inpStr.split(" ");
    var res=document.getElementById('result3');
    res.innerText=`The number of words are ${ wordArray.length}.`;

}
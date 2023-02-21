const buttonTag=document.getElementsByTagName('button')[0];
const stopButtonTag=document.getElementsByTagName('button')[1];
const imgTag=document.getElementById('im');
var idArr=['10','11','12','13','14','15'];
var url=''
var myInterval;
var count=0;
function start(){
    buttonTag.setAttribute('disabled','true');
    if(stopButtonTag.hasAttribute('disabled')){
        stopButtonTag.removeAttribute('disabled');
    }
    
    myInterval=setInterval(setUrl,3000);

    
    function setUrl(){
        count++;
        if(count>idArr.length-1){
            count=0
        }
        url=`https://picsum.photos/id/${idArr[count]}/1200/400`;
        console.log(url);
        imgTag.setAttribute('src',url)
    }

}
function stop(){
    stopButtonTag.setAttribute('disabled','true');
    buttonTag.removeAttribute('disabled');
    clearInterval(myInterval);
    // url='https://picsum.photos/id/10/1200/400'

}
var myInterval;
var seconds=0;
var tim=$('h1');
$('button').click(function(){
    let currentButton=$(this);
    
    if(currentButton.val()=='start'){
        $('#sta').css('opacity','0.2');
        $('#sta').attr('disabled','true');

        $('#sto').css('opacity','1');
        $('#sto').removeAttr('disabled');
        var sec=0;
        var min=0;
        var hour=0;
        var timeStr='00:00:00'
        myInterval=setInterval(setTimer,1000);
        function setTimer(){
            seconds++;
            console.log(seconds);
            if(seconds<60){
                sec=seconds;
            }
            if(seconds>=60){
                min=Math.floor(seconds/60);
                sec=seconds%60;
                if(min>=60){
                    min=min%60;
                    hour=Math.floor(seconds/3600);
                }
            }
            
            var f_sec=('0'+sec).slice(-2);// this only shows the last 2 elements of the string,
            var f_min=('0'+min).slice(-2);//thus including 0 if single digit string or excluding 0
            var f_hour=('0'+hour).slice(-2);//if two digit array.
            timeStr=`${f_hour}:${f_min}:${f_sec}`;
            tim.html(timeStr);

        }
    }
    else{
        $('#sto').css('opacity','0.2');
        $('#sto').attr('disabled','true');
        $('#sta').css('opacity','1');
        $('#sta').removeAttr('disabled');

        clearInterval(myInterval);
        seconds=0;
        tim.html('00:00:00');
    }

})
// function t_start(){
//     var sec=0;
//     var min=0;
//     var hour=0;
//     var timeStr='00:00:00'
//     // $('button')
//     myInterval=setInterval(setTimer,1000);
//     function setTimer(){
//         seconds++;
//         console.log(seconds);
//         if(seconds<60){
//             sec=seconds;
//         }
//         if(seconds>=60){
//             min=Math.floor(seconds/60);
//             sec=seconds%60;
//             if(min>=60){
//                 min=min%60;
//                 hour=Math.floor(seconds/3600);
//             }
//         }
        

//         var f_sec=('0'+sec).slice(-2);// this only shows the last 2 elements of the string,
//         var f_min=('0'+min).slice(-2);//thus including 0 if single digit string or excluding 0
//         var f_hour=('0'+hour).slice(-2);//if two digit array.
//         timeStr=`${f_hour}:${f_min}:${f_sec}`;
//         tim.html(timeStr);
//     }

// }


// function t_end(){
//     clearInterval(myInterval);
//     seconds=0;
//     tim.html('00:00:00');

// }
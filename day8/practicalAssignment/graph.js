function f1(){
    var c1=document.getElementById("can1");
    var ctx=c1.getContext('2d');
    var x=20; //first bar position
    var w=30; //width of bar
    var arr=[250,200,350,150,450]
    for(let i=0;i<arr.length;i++){
        h=arr[i];
        ctx.beginPath();
        ctx.fillStyle="yellow";
        ctx.fillRect(x,500-h,w,h);
        //ctx.fillRect(x,canvasHeight-h,w,h);
        x=x+50; //gap between bars
    }
}


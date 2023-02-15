function getResult(event)
 {  const {name,value}=event.target;

	var txtObj1= document.getElementById("t1");
    var txtObj2= document.getElementById("t2");
    var disp = document.getElementById("p1");
    if (value=='Mul'){
        var  s  =  parseInt(txtObj1.value) * parseInt(txtObj2.value);
        disp.innerHTML = "Result  : "  + s;
    }
    if (value=='Sub'){
        var  s  =  parseInt(txtObj1.value) - parseInt(txtObj2.value);
        disp.innerHTML = "Result  : "  + s;
    }
    if (value=='Div'){
        var  s  =  Math.floor(parseInt(txtObj1.value) / parseInt(txtObj2.value));
        disp.innerHTML = "Result  : "  + s;
    }
    if (value=='Sum'){
        var  s  =  parseInt(txtObj1.value) + parseInt(txtObj2.value);
        disp.innerHTML = "Result  : "  + s;
    }
	// var  s  =  parseInt(txtObj1.value) + parseInt(txtObj2.value);
    // disp.innerHTML = "Sum Result  : "  + s;
 }

 

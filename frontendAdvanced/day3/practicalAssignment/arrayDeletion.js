var  skillsArray = ["HTML5", "CSS3", "BOOTSTRAP", "ANGULAR", "REACT"]; 
    function fn_getData()
   {
        var  str  = "";
        for(var i = 0; i < skillsArray.length;  i++){
            str 	+=  "<li>" +  skillsArray[i] +  "</li>";	
        }
        var  listObj  =  document.getElementById("list1"); 
        listObj.innerHTML = str;				
    }
    function fn_addData(){ 
        var txtObj  =  document.getElementById("t1");
        // console.log(txtObj.value);
        if(skillsArray.includes(txtObj.value.toUpperCase())){
            alert("This skill already exists");
        }else{
            skillsArray.push( txtObj.value.toUpperCase() );
        }					 
        
        fn_getData();				 
    }
        function fn_removeData(){ 
        var txtObj  =  document.getElementById("t1"); 					
    //	skillsArray.pop();	
        var index =  skillsArray.indexOf( txtObj.value.toUpperCase()  );
        if(index>0){
            skillsArray.splice( index,  1  )
            fn_getData();	
        }
        else{
            alert("This skill is not in your list.",index);
        }
        
        
        			 
    }
    


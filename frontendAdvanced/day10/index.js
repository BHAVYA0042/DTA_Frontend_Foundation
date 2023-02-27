$('button').click(function(){
    // console.log('kaam kara');
    if($(this).text()==='B'){
        console.log('kaam kara');
        $('p').css('font-weight','bold');
    }
    if($(this).text()==='U'){
        console.log('kaam kara');
        $('p').css('text-decoration','underline');
    }else{
        $('p').css('font-style','italic');
    }
    
})
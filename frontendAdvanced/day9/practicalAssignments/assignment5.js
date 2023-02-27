// $('.answ').css('display','none');

$('#hideAll').click(function(){
    // $('.answ').animate({'display':'none'});
    $('.answ').hide(800);

});
$('#showAll').click(function(){
    $('.answ').animate({'display':'block'});
    $('.answ').show(800);

})
$('.but').click(function(){
    $(this).siblings().eq(2).toggle(500);
    })
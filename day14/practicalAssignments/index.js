function makeItFancy(event){
    event.preventDefault();

    var butObj=document.getElementsByClassName('normal')[0];
    butObj.classList.remove('normal');
    butObj.classList.add('fancyButton');
}


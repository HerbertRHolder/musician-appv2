(function(){
"use strict"
    let container = document.getElementById("menu-cont");
    let close = document.getElementById("close");
    close.addEventListener("click",menuRevert)

    function menuRevert() {
        const ms1 = document.getElementById('ms1');
        const ms2 = document.getElementById('ms2');
        const ms3 = document.getElementById('ms3');
        
        if (ms2.classList.contains('ms2'))
            ms2.classList.remove('ms2');
        if (ms1.classList.contains('ms1'))
            ms1.classList.remove('ms1');
        if (ms3.classList.contains('ms3'))
            ms3.classList.remove('ms3');
    
        container.removeEventListener("click", menuRevert);
        container.addEventListener("click", menuTransform);
        ms1.classList.add('ms1-flip');
        ms2.classList.add('ms2-flip');
        ms3.classList.add('ms3-flip');
    
    }
    
    function menuTransform() {
        const ms1 = document.getElementById('ms1');
        const ms2 = document.getElementById('ms2');
        const ms3 = document.getElementById('ms3');
       
        if (ms2.classList.contains('ms2-flip'))
            ms2.classList.remove('ms2-flip')
        if (ms1.classList.contains('ms1-flip'))
            ms1.classList.remove('ms1-flip')
        if (ms3.classList.contains('ms3-flip'))
            ms3.classList.remove('ms3-flip')
    
        ms1.classList.add('ms1');
        ms2.classList.add('ms2');
        ms3.classList.add('ms3');
        container.removeEventListener("click", menuTransform)
        container.addEventListener("click", menuRevert)
    }
    container.addEventListener("click", menuTransform)
    
    



})();



const countersE1 = document.querySelectorAll(".counter")


countersE1.forEach(counterEl=>{
    counterEl.innerText= "0";
    incrementCounter();
    function incrementCounter(){
    let currentNum = +counterEl.innerText;
    const dataCeil = counterEl.getAttribute("data-ceil");
    const increment = dataCeil / 2
    currentNum = Math.ceil (currentNum + increment)
    
    if(currentNum < dataCeil){
        counterEl.innerText = currentNum
        setTimeout(incrementCounter, 50)
    }else{
        counterEl.innerText = dataCeil
    }


    }

});
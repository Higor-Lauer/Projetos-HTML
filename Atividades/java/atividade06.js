num.onchange = returnValue

function returnValue(){
    res.innerHTML = "Resultado: ";
}

num.onchange = function(){
    returnValue()

    let valor = parseFloat(document.getElementById("num").value);

    res.innerHTML += Math.pow(valor, 3);
}
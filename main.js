let output = document.getElementById("output")

let reset = true
let count = null

let val

let oldVal = '0'
let countVal = '0'
let sumVal

function update(){
    if (reset){
        output.innerHTML = "<h1>"+ val +"</h1>"
        if(!count){
            oldVal = val
        }
        else{
            countVal = val
        }
        reset = false
    }
    else{
        if(!count){
            oldVal = oldVal + val
            output.innerHTML = "<h1>"+ oldVal +"</h1>"
        }
        else{
            countVal = countVal + val
            output.innerHTML = "<h1>"+ countVal +"</h1>"
        }
        
    }
}

function resetOut(){
    reset = true
    oldVal = '0'
    countVal = '0'
    count = null
    output.innerHTML = "<h1>0</h1>"
}

function Div(){
    reset = true
    count = "div"
}
function Multi(){
    reset = true
    count = 'multi'
}
function Add(){
    reset = true
    count = 'add'
}
function Minus(){
    reset = true
    count = 'minus'
}

function PlusMinus(){
    if(!count || countVal == '0'){
        if(oldVal.includes("-")){
            let s1 = oldVal
            let s2 = s1.substring(1)
            oldVal = s2
        }
        else{
            oldVal = "-" + oldVal
        }
        output.innerHTML = "<h1>" + oldVal.toString() + "</h1>"
    }
    else{
        if(countVal.includes("-")){
            let s1 = countVal
            let s2 = s1.substring(1)
            countVal = s2
        }
        else{
            countVal = "-" + countVal
        }
        output.innerHTML = "<h1>" + countVal.toString() + "</h1>"
    }
    
}
function Percent(){
    reset = true
    oldVal = parseFloat(oldVal) / 100
    output.innerHTML = "<h1>" + oldVal.toString() + "</h1>"
}

function Calculate(){
    if(count == 'div'){
        let sumValExact = parseFloat(oldVal) / parseFloat(countVal)
        sumVal = Math.round(sumValExact * 100) / 100;
        output.innerHTML = "<h2>" + oldVal.toString() + "/" + countVal.toString() + "=</h2><h1>" + sumVal.toString() + "</h1>"
    }
    else if(count == 'multi'){
        let sumValExact = parseFloat(oldVal) * parseFloat(countVal)
        sumVal = Math.round(sumValExact * 100) / 100;
        output.innerHTML = "<h2>" + oldVal.toString() + "*" + countVal.toString() + "=</h2><h1>" + sumVal.toString() + "</h1>"
    }
    else if(count == 'add'){
        let sumValExact = parseFloat(oldVal) + parseFloat(countVal)
        sumVal = Math.round(sumValExact * 100) / 100;
        output.innerHTML = "<h2>" + oldVal.toString() + "+" + countVal.toString() + "=</h2><h1>" + sumVal.toString() + "</h1>"
    }
    else if(count == 'minus'){
        let sumValExact = parseFloat(oldVal) - parseFloat(countVal)
        sumVal = Math.round(sumValExact * 100) / 100;
        output.innerHTML = "<h2>" + oldVal.toString() + "-" + countVal.toString() + "=</h2><h1>" + sumVal.toString() + "</h1>"
    }
    oldVal = sumVal.toString()
}


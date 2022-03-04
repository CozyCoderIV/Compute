// Attributes
let userInput = document.getElementById("input1");
const numButtons = document.querySelectorAll(".num");
const opButtons = document.querySelectorAll(".op");
const sumFinal = document.getElementById("result");
const allClear = document.querySelector(".clear");
const delButton = document.querySelector(".del");

let arg1 = 0;
let arg2 = 0;
let finalstr = "";
let numArray = ['one', 'two', 'three', 'four', 'five', 'six',
                 'seven', 'eight', 'nine', 'zero', 'dec'];
let opArray = ['add', 'sub', 'mul', 'div'];


// Events
numButtons.forEach((num) => {
    num.addEventListener("click",(e) => {
        let cemp = e.currentTarget.classList;

        if(cemp.contains('num')){
            console.log('num')
            for(let i = 0; i < numArray.length; i++){
                if(cemp.contains(numArray[i])){
                    if(numArray[i] == 'dec'){
                        finalstr += "."
                        setOut(finalstr);
                    } else if (numArray[i] == 'zero'){
                        finalstr += "0"
                        setOut(finalstr);
                    }   else {
                        finalstr += i+1;
                        setOut(finalstr);
                    }
                }
            }
        }
    })
})
opButtons.forEach((operator) => {
    operator.addEventListener("click",(e) => {
        let omp = e.currentTarget.classList;

        if(omp.contains('op')){
            console.log('op');
            for(let k = 0; k < opArray.length; k++){
                if(omp.contains(opArray[k])){
                    if(opArray[k] == 'add'){
                        finalstr += '+'
                        setOut(finalstr)
                    }
                    else if(opArray[k] == 'sub'){
                        finalstr += '-'
                        setOut(finalstr)
                    }
                    else if(opArray[k] == 'mul'){
                        finalstr += '*'
                        setOut(finalstr)
                    }
                    else{
                        finalstr += '/'
                        setOut(finalstr)
                    }
                }
            }
        }
    })
})
allClear.addEventListener("click",(e) => {
    let cb = e.currentTarget.classList;
    if(cb.contains('clear')){
        finalstr = "";
        setOut(finalstr);
    }
})
delButton.addEventListener("click",(e) => {
    let db = e.currentTarget.classList;
    if(db.contains('del')){
        tempstr = "";
        for(let c = 0; c < finalstr.length - 1; c++){
            tempstr += finalstr[c];
        }
        finalstr = tempstr;
        setOut(finalstr);
    }

})
sumFinal.addEventListener("click",(e) => {
    let emp = e.currentTarget.classList;
    if(emp.contains('equ')){
        let ts = finalstr;
        let finArray = [];
        for(let q = 0; q < ts.length; q++){
            if (ts.charAt(q) == '+'){
                let arguArray = ts.split("+");
                console.log(arguArray);
                finArray = arguArray;

                for(let c = 0; c < finArray.length; c++){
                    parseInt(finArray[c]);
                    arg1 = finArray[0];
                    arg2 = finArray[1];
                }

                let tempstr = "";
                let sum = parseInt(arg1) + parseInt(arg2);
                console.log(sum);
                
                tempstr += sum;
                finalstr = tempstr;
                setOut(finalstr);
            }
            else if (ts.charAt(q) == '-'){
                let arguArray = ts.split("-");
                console.log(arguArray);
                finArray = arguArray;

                for(let c = 0; c < finArray.length; c++){
                    parseInt(finArray[c]);
                    arg1 = finArray[0];
                    arg2 = finArray[1];
                }

                let tempstr = "";
                let sum = parseInt(arg1) - parseInt(arg2);
                console.log(sum);
                
                tempstr += sum;
                finalstr = tempstr;
                setOut(finalstr);
            }
            else if (ts.charAt(q) == '*'){
                let arguArray = ts.split("*");
                console.log(arguArray);
                finArray = arguArray;

                for(let c = 0; c < finArray.length; c++){
                    parseInt(finArray[c]);
                    arg1 = finArray[0];
                    arg2 = finArray[1];
                }

                let tempstr = "";
                let sum = parseInt(arg1) * parseInt(arg2);
                console.log(sum);
                
                tempstr += sum;
                finalstr = tempstr;
                setOut(finalstr);
            }
            else if (ts.charAt(q) == '/'){
                let arguArray = ts.split("/");
                console.log(arguArray);
                finArray = arguArray;

                for(let c = 0; c < finArray.length; c++){
                    parseInt(finArray[c]);
                    arg1 = finArray[0];
                    arg2 = finArray[1];
                }

                let tempstr = "";
                let sum = parseInt(arg1) / parseInt(arg2);
                console.log(sum);
                
                tempstr += sum;
                finalstr = tempstr;
                setOut(finalstr);
            }
        }

        console.log(arg1);
        console.log(arg2);
    }
})

// Methods
function setOut(str){
    userInput.innerHTML = str;
}

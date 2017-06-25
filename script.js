
function entry(e){

    document.calculator.textbox.value += e;
}

function equals(){

    document.calculator.textbox.value = eval(document.calculator.textbox.value);
}


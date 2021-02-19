//https://www.npmjs.com/package/scanf
const scanf = require('scanf');

//imprime no terminal sem pular uma linha ('\n')
function print(string_value) {
    process.stdout.write(string_value);
}

//compara dois números n1 e n2 (```Math.abs(n1 - n2)```) e se a diferença entre eles for maior do que um 
//delta (0.000_000_5), consideraremos estes números iguais
function numberIsEqual(n1, n2, delta = 0.000_000_5){
    let dif_abs = Math.abs(n1 - n2);
    return dif_abs <= delta ? true : false;
}

//Teste se number_value é do tipo numérico
function isNumber(number_value) {
    
    let temErro = !(typeof number_value === 'number') || !isFinite(number_value);

    if (temErro === false){
        temErro = isNaN(number_value);
    }

    return !temErro;
}

// imprime objetos que sobre-escrevem o método 'toString'
function console_log(...data) {

    let str_data = "";

    data.forEach(element => {
        if (typeof(element) == "object") {
            str_data = element.toString() + str_data;
        }else{
            str_data = element + str_data;
        }
    });

    console.log(str_data);
}

function prompt(text = "") {
    print(text); 
    return scanf("%s");
}

module.exports = {print, scanf, isNumber, console_log};

// Seccion container
var body = document.body;
var container = document.createElement('div');
var h1 = document.createElement('h1');
var h1Text = document.createTextNode('Generador de contraseñas');
container.classList.add('container');
body.appendChild(container);
h1.appendChild(h1Text);
container.appendChild(h1);
// Sección div de mostrar contraseña
var divShow = document.createElement('div');
var divPassword = document.createElement('div');
var divCopy = document.createElement('div');
var divRefresh = document.createElement('div');
divShow.classList.add('div-show');
container.appendChild(divShow);
divShow.appendChild(divPassword);
divShow.appendChild(divCopy);
divShow.appendChild(divRefresh);
divPassword.classList.add('password-section');
var p = document.createElement('span');
var textInit = document.createTextNode('e4!8@¿¿iJf04FTh');
p.appendChild(textInit);
divPassword.appendChild(p);
p.setAttribute("id", "textPass");
var iconCopy = document.createElement('img');
var iconRefresh = document.createElement('img');
iconCopy.setAttribute('src', './assets/copy.png');
iconCopy.setAttribute('alt', 'copy icon');
divCopy.classList.add('icons');
iconRefresh.setAttribute('src', './assets/refresh.png');
iconRefresh.setAttribute('alt', 'refresh icon');
divRefresh.classList.add('icons');
divCopy.appendChild(iconCopy);
divRefresh.appendChild(iconRefresh);
// Sección div de configurar contraseña
var divConfig = document.createElement('div');
var h4 = document.createElement('h4');
var h4Text = document.createTextNode("Personalice su contraseña");
divConfig.classList.add('div-config');
h4.classList.add('text-personalize');
container.appendChild(divConfig);
h4.appendChild(h4Text);
divConfig.appendChild(h4);
var divSpecificConfig = document.createElement('div');
var divLength = document.createElement('div');
var divRules = document.createElement('div');
var divCaracter = document.createElement('div');
divLength.classList.add('select-config');
divRules.classList.add('select-config');
divCaracter.classList.add('select-config');
var h6Length = document.createElement('h6');
var h6Rules = document.createElement('h6');
var h6Caracter = document.createElement('h6');
h6Length.classList.add('h6text');
h6Rules.classList.add('h6text');
h6Caracter.classList.add('h6text');
var h6LengthText = document.createTextNode("Longitud");
var h6RulesText = document.createTextNode("Reglas");
var h6CaracterText = document.createTextNode("Caracteres");
var form = document.createElement('form');
form.setAttribute("name", "passForm");
// form.setAttribute("onclick", "return validateForm()")
form.classList.add('specific-config');
divConfig.appendChild(divSpecificConfig);
divLength.appendChild(h6Length);
h6Length.appendChild(h6LengthText);
divRules.appendChild(h6Rules);
h6Rules.appendChild(h6RulesText);
divCaracter.appendChild(h6Caracter);
h6Caracter.appendChild(h6CaracterText);
divSpecificConfig.appendChild(form);
form.appendChild(divLength);
form.appendChild(divRules);
form.appendChild(divCaracter);
// Objetos de caracteres y tipos
var caracters = {
    numeros: "0 1 2 3 4 5 6 7 8 9",
    simbolos: "@ ! $ % & * @ ! $ % & * @ ! $ % & *",
    mayusculas: "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z",
    minusculas: "a b c d e f g h i j k l m n o p q r s t u v w x y z"
};
var types = {
    numeros: true,
    simbolos: true,
    mayusculas: true,
    minusculas: true
};
// For de longitud
var lengthChar = [12, 9, 6];
for (var _i = 0, lengthChar_1 = lengthChar; _i < lengthChar_1.length; _i++) {
    var elem = lengthChar_1[_i];
    var selectLength = document.createElement('div');
    var label = document.createElement('label');
    label.setAttribute("for", "check-".concat(elem));
    label.textContent = "".concat(elem, " caracteres");
    var input = document.createElement('input');
    input.setAttribute("type", "radio");
    input.setAttribute("id", "check-".concat(elem));
    input.setAttribute("name", "select-length");
    input.setAttribute("value", "".concat(elem));
    input.classList.add('long-input');
    // input[1].setAttribute("checked", "checked")
    selectLength.appendChild(input);
    selectLength.appendChild(label);
    divLength.appendChild(selectLength);
    input.addEventListener("change", function () {
        generatePassword();
        //console.log(e.target.value);
    });
}
//For de reglas
var rules = ["Solo-letras", "Lectura-simple", "Todos-los-caracteres"];
// const values = ["1", "2", "3"]
for (var _a = 0, rules_1 = rules; _a < rules_1.length; _a++) {
    var elem = rules_1[_a];
    var selectRules = document.createElement('div');
    var label = document.createElement('label');
    label.setAttribute("for", "check-".concat(elem));
    label.textContent = "".concat(elem);
    var input = document.createElement('input');
    input.setAttribute("type", "radio");
    input.setAttribute("id", "check-".concat(elem));
    input.setAttribute("name", "select-rules");
    input.setAttribute("value", "".concat(elem));
    input.classList.add('rules-input');
    selectRules.appendChild(input);
    selectRules.appendChild(label);
    divRules.appendChild(selectRules);
    input.addEventListener("change", function () {
        generatePassword();
    });
}
//const textSoloLetras = document.createTextNode("Solo letras")
// Funciones listener Reglas
// const checkSoloLetras = document.getElementById('check-Solo-letras')
// checkSoloLetras.addEventListener("change", () => { //hay que cambiar a change
//     // document.getElementById("check-simbolos").setAttribute("disabled", "true")
//     // document.getElementById("check-numeros").setAttribute("disabled", "true")
//     // document.getElementById('check-mayusculas').setAttribute("checked", "checked")
//     // document.getElementById('check-minusculas').setAttribute("checked", "checked")
//     // types.numeros = false
//     // types.simbolos = false
//     generatePassword()
// })
// const checkLecturaSimple = document.getElementById('check-Lectura-simple')
// checkLecturaSimple.addEventListener("change", (e) => { //hay que cambiar a change
//     // document.getElementById('check-mayusculas').setAttribute("checked", "checked")
//     // document.getElementById('check-minusculas').setAttribute("checked", "checked")
//     // document.getElementById('check-numeros').setAttribute("checked", "checked")
//     // document.getElementById("check-numeros").removeAttribute("disabled")
//     // types.numeros = true
//     // types.simbolos = false
//     generatePassword()
// })
// const checkTodosLosCaracteres = document.getElementById('check-Todos-los-caracteres')
// checkTodosLosCaracteres.addEventListener("change", (e) => { //hay que cambiar a change
//     document.getElementById('check-mayusculas').setAttribute("checked", "checked")
//     document.getElementById('check-minusculas').setAttribute("checked", "checked")
//     document.getElementById('check-numeros').setAttribute("checked", "checked")
//     document.getElementById('check-simbolos').setAttribute("checked", "checked")
//       document.getElementById("check-numeros").removeAttribute("disabled")
//       document.getElementById("check-simbolos").removeAttribute("disabled")
//     types.mayusculas = true
//     types.minusculas = true
//     types.numeros = true
//     types.simbolos = true
//     generatePassword()
// })
// Funciones listener Caracteres
// For de Caracteres
var character = ["mayusculas", "minusculas", "numeros", "simbolos"];
for (var _b = 0, character_1 = character; _b < character_1.length; _b++) {
    var elem = character_1[_b];
    var selectChar = document.createElement('div');
    var label = document.createElement('label');
    label.setAttribute("for", "check-".concat(elem));
    label.textContent = "".concat(elem);
    var input = document.createElement('input');
    input.setAttribute("type", "checkbox");
    input.setAttribute("id", "check-".concat(elem));
    input.setAttribute("name", "select-char");
    input.setAttribute("value", "".concat(elem));
    input.classList.add('select-char');
    selectChar.appendChild(input);
    selectChar.appendChild(label);
    divCaracter.appendChild(selectChar);
    input.addEventListener("change", function () {
        generatePassword();
    });
}
var generatePassword = function () {
    //validateFormRules()
    //validarChar()
    var longInputs = document.getElementsByClassName("long-input");
    var rulesInputs = document.getElementsByClassName("rules-input");
    var charInputs = document.getElementsByClassName("select-char");
    var char = "";
    var password = "";
    var selectValueLong = "";
    for (var _i = 0, longInputs_1 = longInputs; _i < longInputs_1.length; _i++) {
        var longInput = longInputs_1[_i];
        if (longInput.checked == true) {
            selectValueLong = longInput.value;
            //console.log(selectValueLong)
        }
    }
    for (var _a = 0, rulesInputs_1 = rulesInputs; _a < rulesInputs_1.length; _a++) {
        var ruleInput = rulesInputs_1[_a];
        //console.log(ruleInput.checked);
        if (ruleInput.checked == true) {
            if (ruleInput.value == "Solo-letras") {
                document.getElementById("check-simbolos").setAttribute("disabled", "true");
                document.getElementById("check-numeros").setAttribute("disabled", "true");
                document.getElementById('check-mayusculas').setAttribute("checked", "checked");
                document.getElementById('check-minusculas').setAttribute("checked", "checked");
                types.numeros = false;
                types.simbolos = false;
                console.log("funcionaa solo letras");
            }
            else if (ruleInput.value == "Lectura-simple") {
                document.getElementById('check-mayusculas').setAttribute("checked", "checked");
                document.getElementById('check-minusculas').setAttribute("checked", "checked");
                document.getElementById('check-numeros').setAttribute("checked", "checked");
                document.getElementById("check-numeros").removeAttribute("disabled");
                types.numeros = true;
                types.simbolos = false;
                console.log("funcionaa lectura simple");
            }
            else if (ruleInput.value == "Todos-los-caracteres") {
                document.getElementById('check-mayusculas').setAttribute("checked", "checked");
                document.getElementById('check-minusculas').setAttribute("checked", "checked");
                document.getElementById('check-numeros').setAttribute("checked", "checked");
                document.getElementById('check-simbolos').setAttribute("checked", "checked");
                document.getElementById("check-numeros").removeAttribute("disabled");
                document.getElementById("check-simbolos").removeAttribute("disabled");
                types.mayusculas = true;
                types.minusculas = true;
                types.numeros = true;
                types.simbolos = true;
                console.log("funcionaa todos los caracteres");
            }
        }
        for (var _b = 0, charInputs_1 = charInputs; _b < charInputs_1.length; _b++) {
            var selectChar = charInputs_1[_b];
            //console.log(selectChar.checked, selectChar.value);
            if (selectChar.checked == true) {
                //console.log("funcionaaaaaa------" selectChar.checked, selectChar.value);
                if (selectChar.value == "mayusculas") {
                    types.mayusculas = true;
                }
                else if (selectChar.value == "minusculas") {
                    types.minusculas = true;
                }
                else if (selectChar.value == "numeros") {
                    types.numeros = true;
                }
                else if (selectChar.value == "simbolos") {
                    types.numeros = true;
                }
            }
        }
        for (var type in types) {
            if (types[type] == true) {
                char = char + caracters[type] + " ";
                // console.log(char)
            }
        }
        var newArray = char.split(' ');
        // console.log(newArray);
        for (var i = 0; i < selectValueLong; i++) {
            password = password + newArray[Math.floor(Math.random() * newArray.length)];
        }
        textInit.textContent = password;
        //console.log(password);
    }
};
/*
**
** Funciones para personalizar la clave dependiendo de la regla
**
*/
// function valuateForm() {
//     let element = document.forms["passForm"].checked
//     if(element == true) {
//         console.log(element)
//     }
// }
// valuateForm()
// const findSimilar = (a, b) => {
//     char
//     for (let elem of char) {
//         if((a == "I" && b == 1) || (a == "i" && b == 1) || (a == "O" && b == 0) ||(a == "o" && b == 0)) {
//            b = a
//            console.log(a, b)
//         }
//     }
// }
// console.log(findSimilar("i", 1))
// function aHackerSpeak(str){
//         return str.replace(/[iI]/g, 1).replace(/[eE]/g, 3).replace(/[aA]/g, 4).replace(/[sS]/g,5).replace(/[oO]/g,0)
//
// function copyToClipBoard() {
//     let content = document.getElementById('textPass')
//     content.select();
//     document.execCommand('copy');
//     alert("Copied!");
// }
// iconCopy.addEventListener("click", copyToClipBoard())
iconRefresh.addEventListener("click", function () {
    generatePassword();
});
var inicializarPagina = function () {
    var checkInitLength = document.getElementById('check-12');
    var checkInitRules = document.getElementById('check-Solo-letras');
    var checkInitMayusculas = document.getElementById('check-mayusculas');
    var checkInitMinusculas = document.getElementById('check-minusculas');
    checkInitLength.setAttribute('checked', 'checked');
    checkInitRules.setAttribute('checked', 'checked');
    checkInitMayusculas.setAttribute('checked', 'checked');
    checkInitMinusculas.setAttribute('checked', 'checked');
    document.getElementById("check-simbolos").setAttribute("disabled", "true");
    document.getElementById("check-numeros").setAttribute("disabled", "true");
    types.numeros = false;
    types.simbolos = false;
    generatePassword();
};
window.onload = inicializarPagina();

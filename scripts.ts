// Seccion container
const body = document.body

const container = document.createElement('div')
const h1 = document.createElement('h1')

const h1Text = document.createTextNode('Generador de contraseñas')

container.classList.add('container')

body.appendChild(container)
h1.appendChild(h1Text)
container.appendChild(h1)

// Sección div de mostrar contraseña

const divShow = document.createElement('div')
const divPassword = document.createElement('div')
const divCopy = document.createElement('div')
const divRefresh = document.createElement('div')

divShow.classList.add('div-show')

container.appendChild(divShow)
divShow.appendChild(divPassword)
divShow.appendChild(divCopy)
divShow.appendChild(divRefresh)

divPassword.classList.add('password-section')

const p = document.createElement('span')
const textInit = document.createTextNode('e4!8@¿¿iJf04FTh')

p.appendChild(textInit)
divPassword.appendChild(p)

p.setAttribute("id", "textPass")

const iconCopy = document.createElement('img')
const iconRefresh = document.createElement('img')

iconCopy.setAttribute('src', './assets/copy.png')
iconCopy.setAttribute('alt', 'copy icon' )

divCopy.classList.add('icons')

iconRefresh.setAttribute('src', './assets/refresh.png')
iconRefresh.setAttribute('alt', 'refresh icon')

divRefresh.classList.add('icons')

divCopy.appendChild(iconCopy)
divRefresh.appendChild(iconRefresh)

// Sección div de configurar contraseña

const divConfig = document.createElement('div')
const h4 = document.createElement('h4')

const h4Text = document.createTextNode("Personalice su contraseña")

divConfig.classList.add('div-config')
h4.classList.add('text-personalize')

container.appendChild(divConfig)
h4.appendChild(h4Text)
divConfig.appendChild(h4)

const divSpecificConfig = document.createElement('div')
const divLength = document.createElement('div')
const divRules = document.createElement('div')
const divCaracter = document.createElement('div')

divLength.classList.add('select-config')
divRules.classList.add('select-config')
divCaracter.classList.add('select-config')

const h6Length = document.createElement('h6')
const h6Rules = document.createElement('h6')
const h6Caracter = document.createElement('h6')

h6Length.classList.add('h6text')
h6Rules.classList.add('h6text')
h6Caracter.classList.add('h6text')

const h6LengthText = document.createTextNode("Longitud")
const h6RulesText = document.createTextNode("Reglas")
const h6CaracterText = document.createTextNode("Caracteres")

const form = document.createElement('form')

form.setAttribute("name", "passForm")
// form.setAttribute("onclick", "return validateForm()")

form.classList.add('specific-config')

divConfig.appendChild(divSpecificConfig)
divLength.appendChild(h6Length)
h6Length.appendChild(h6LengthText)
divRules.appendChild(h6Rules)
h6Rules.appendChild(h6RulesText)
divCaracter.appendChild(h6Caracter)
h6Caracter.appendChild(h6CaracterText)
divSpecificConfig.appendChild(form)
form.appendChild(divLength)
form.appendChild(divRules)
form.appendChild(divCaracter)



// Objetos de caracteres y tipos

const caracters = {
    numeros: "0 1 2 3 4 5 6 7 8 9",
    simbolos: "@ ! $ % & * @ ! $ % & * @ ! $ % & *",
    mayusculas: "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z",
    minusculas: "a b c d e f g h i j k l m n o p q r s t u v w x y z"
}

const types = {
    numeros: true,
    simbolos: true,
    mayusculas: true,
    minusculas: true,
}

// For de longitud

const lengthChar = [12, 9, 6]

for (const elem of lengthChar) {
    const selectLength = document.createElement('div')

    const label = document.createElement('label')
    label.setAttribute("for", `check-${elem}`)
    label.textContent = `${elem} caracteres`

    const input = document.createElement('input')
    input.setAttribute("type", "radio")
    input.setAttribute("id", `check-${elem}`)
    input.setAttribute("name", "select-length")
    input.setAttribute("value", `${elem}`)
    input.classList.add('long-input')
    // input[1].setAttribute("checked", "checked")

    selectLength.appendChild(input)
    selectLength.appendChild(label)
    divLength.appendChild(selectLength)


    input.addEventListener("change", () => {
    generatePassword()
    //console.log(e.target.value);

    })
}

//For de reglas

const rules: string[] = ["Solo-letras", "Lectura-simple", "Todos-los-caracteres"]

// const values = ["1", "2", "3"]

for (const elem of rules) {

    const selectRules = document.createElement('div')

    const label = document.createElement('label')
    label.setAttribute("for", `check-${elem}`)
    label.textContent = `${elem}`

    const input = document.createElement('input');
    input.setAttribute("type", "radio");
    input.setAttribute("id", `check-${elem}`);
    input.setAttribute("name", "select-rules");
    input.setAttribute("value", `${elem}`)
    input.classList.add('rules-input')

    selectRules.appendChild(input)
    selectRules.appendChild(label)
    divRules.appendChild(selectRules)

    input.addEventListener("change", () => {
    generatePassword()

    })
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

const character: string[] = ["mayusculas", "minusculas", "numeros", "simbolos"]

for (const elem of character) {
    const selectChar = document.createElement('div')
    const label = document.createElement('label')
    label.setAttribute("for", `check-${elem}`)
    label.textContent = `${elem}`

    const input = document.createElement('input')
    input.setAttribute("type", "checkbox")
    input.setAttribute("id", `check-${elem}`)
    input.setAttribute("name", "select-char");
    input.setAttribute("value", `${elem}`)

    input.classList.add('select-char')

    selectChar.appendChild(input)
    selectChar.appendChild(label)
    divCaracter.appendChild(selectChar)

    input.addEventListener("change", () => {
    generatePassword()
    
    })

}



const generatePassword = () => {

    //validateFormRules()
    //validarChar()

    const longInputs = document.getElementsByClassName("long-input")
    const rulesInputs = document.getElementsByClassName("rules-input")
    const charInputs = document.getElementsByClassName("select-char")

    let char = ""
    let password = ""
    let selectValueLong = ""

    for(const longInput of longInputs) {
        if(longInput.checked == true) {
           selectValueLong = longInput.value
           //console.log(selectValueLong)
        }
    }


    for(const ruleInput of rulesInputs) {
        //console.log(ruleInput.checked);


        if (ruleInput.checked == true)  {
            if(ruleInput.value == "Solo-letras") {
                
                document.getElementById("check-simbolos").setAttribute("disabled", "true")
                document.getElementById("check-numeros").setAttribute("disabled", "true")
                document.getElementById('check-mayusculas').setAttribute("checked", "checked")
                document.getElementById('check-minusculas').setAttribute("checked", "checked")
                types.numeros = false
                types.simbolos = false
                console.log("funcionaa solo letras")
            } else if(ruleInput.value == "Lectura-simple") {
                document.getElementById('check-mayusculas').setAttribute("checked", "checked")
                document.getElementById('check-minusculas').setAttribute("checked", "checked")
                document.getElementById('check-numeros').setAttribute("checked", "checked")
                document.getElementById("check-numeros").removeAttribute("disabled")
                types.numeros = true
                types.simbolos = false
                console.log("funcionaa lectura simple")
            } else if(ruleInput.value == "Todos-los-caracteres") {
                document.getElementById('check-mayusculas').setAttribute("checked", "checked")
                document.getElementById('check-minusculas').setAttribute("checked", "checked")
                document.getElementById('check-numeros').setAttribute("checked", "checked")
                document.getElementById('check-simbolos').setAttribute("checked", "checked")
                document.getElementById("check-numeros").removeAttribute("disabled")
                document.getElementById("check-simbolos").removeAttribute("disabled")
                types.mayusculas = true
                types.minusculas = true
                types.numeros = true
                types.simbolos = true
                console.log("funcionaa todos los caracteres")
            }
        }


    for(const selectChar of charInputs) {
        //console.log(selectChar.checked, selectChar.value);
        if(selectChar.checked == true) {
            //console.log("funcionaaaaaa------" selectChar.checked, selectChar.value);
            if(selectChar.value == "mayusculas") {
                types.mayusculas = true
            } else if(selectChar.value == "minusculas") {
                types.minusculas = true
            } else if(selectChar.value == "numeros") {
                types.numeros = true
            } else if(selectChar.value == "simbolos") {
                types.numeros = true
            }
        }

    }

    for (let type in types) {
        if (types[type] == true) {
            char = char + caracters[type] + " "
            // console.log(char)
        }
    }

    let newArray = char.split(' ')

    // console.log(newArray);

    for(let i = 0; i < selectValueLong ; i++) {
        password = password + newArray[Math.floor(Math.random() * newArray.length)]
    }

    textInit.textContent = password
    //console.log(password);


    }




}



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


iconRefresh.addEventListener("click", () => {

    generatePassword()

})

const inicializarPagina = () => { // descomentar todo lo que esta comentado cuando el código funcione

    const checkInitLength = document.getElementById('check-12')
    const checkInitRules = document.getElementById('check-Solo-letras')
    const checkInitMayusculas = document.getElementById('check-mayusculas')
    const checkInitMinusculas = document.getElementById('check-minusculas')

    checkInitLength.setAttribute('checked', 'checked')
    checkInitRules.setAttribute('checked', 'checked')
    checkInitMayusculas.setAttribute('checked', 'checked')
    checkInitMinusculas.setAttribute('checked', 'checked')
    document.getElementById("check-simbolos").setAttribute("disabled", "true")
    document.getElementById("check-numeros").setAttribute("disabled", "true")
    types.numeros = false
    types.simbolos = false



    generatePassword()

}

window.onload = inicializarPagina()
const btns = document.querySelector(".buttons")
const display = document.getElementById("answertext")
const previous = document.getElementById("previouscalc")

const addAns = (value) => {
    if (display.innerText == "Invalid Operation" || display.innerText == "NaN") {
        display.innerText = ""
    }
    display.innerText = display.innerText + value
}

const clearAll = () => {
    location.reload()
}

const equalbtn = () => {
    let ans = display.innerText

    try {
        if (ans.includes("^")) {
            let cals = ans.split("^")
            previous.innerText = ans
            display.innerText = Number.parseFloat(cals[0]) ** Number.parseFloat(cals[1])
        }
        else if (ans.includes("x")) {
            let cals = ans.split("x")
            previous.innerText = ans
            display.innerText = Number.parseFloat(cals[0]) * Number.parseFloat(cals[1])

        }
        else {
            let cal = eval(ans)
            display.innerText = cal
            previous.innerText = ans
        }
    }
    catch (e) {
        display.innerText = "Invalid Operation"
    }
}

const backbtn = () => {
    let text = display.innerText
    display.innerText = text.substring(0, text.length - 1)
}
const getCalculations = (opt) => {
    switch (opt) {
        case "+":
            addAns(opt)
            break
        case "-":
            addAns(opt)
            break
        case "x":
            addAns(opt)
            break
        case "/":
            addAns(opt)
            break
        case "=":
            equalbtn()
            break
        case "CE":
            clearAll()
            break
        case "C":
            backbtn()
            break
        case ".":
            addAns(opt)
            break
        case "x2":
            addAns("^")
            break
        default:
            if (opt == "1" || opt == "2" || opt == "3" || opt == "4" || opt == "5" || opt == "6" || opt == "7" || opt == "8" || opt == "9" || opt == "0") {
                addAns(opt)
            }
            else if (opt == "Escape") {
                clearAll()
            }
            else if (opt == "Backspace") {
                backbtn()
            }
            else if (opt == "=" || opt == "Enter") {
                equalbtn()
            }
    }
}
function handleOperations(e) {
    let selectedBtn = e.target
    getCalculations(selectedBtn.innerText)
}

function handlekeyboard(e) {
    let operations = e.key
    getCalculations(operations)
}

let allbtns = btns.children
document.addEventListener("keydown", handlekeyboard)
Array.from(allbtns).forEach((value) => {
    value.addEventListener("click", handleOperations)
})



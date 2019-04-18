function computeRouterCode(str) {
    let arrStr = str.split("")
    switch (str[0]) {
        case "1":
            arrStr[3] = String.fromCharCode(str.charCodeAt([3]) + 1)
            arrStr[0] = "R"
            break
        case "2":
            arrStr[3] = String.fromCharCode(str.charCodeAt([3]) + 2)
            arrStr[0] = "R"
            break
        case "3":
            arrStr[3] = String.fromCharCode(str.charCodeAt([3]) - 1)
            arrStr[0] = "R"
            break
        case "4":
            arrStr[3] = String.fromCharCode(str.charCodeAt([3]) - 2)
            arrStr[0] = "R"
            break
        case "5":
            arrStr[0] = "L"
            break
        case "6":
            arrStr[1] = String.fromCharCode(str.charCodeAt([1]) + 1)
            arrStr[0] = "R"
            break
        case "7":
            arrStr[1] = String.fromCharCode(str.charCodeAt([1]) - 1)
            arrStr[0] = "R"
            break
        case "8":
            arrStr[2] = String.fromCharCode(str.charCodeAt([2]) + 1)
            break
        case "9":
            arrStr[2] = String.fromCharCode(str.charCodeAt([2]) + 1)
            arrStr[0] = "R"
            break
        default:
            alert("Invalid Code")
    }
    return arrStr
}

let sub = document.querySelector('#sub')

sub.addEventListener('click', () => {
    if (document.querySelector("#result")) {
        document.body.removeChild(document.querySelector("#result"))
    }
    let result = document.createElement("div")
    result.id = "result"
    let resultNode = document.createTextNode(
        computeRouterCode(document.querySelector('#code').value
        ).join("").toUpperCase())
    console.log(resultNode)
    result.appendChild(resultNode)
    document.body.appendChild(result)
})

sub.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        e.preventDefault()
        sub.click()
    }
})
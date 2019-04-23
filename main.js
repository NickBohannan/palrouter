function computeRouterCode(str) {
  let arrStr = str.split("")
  if (str.charCodeAt(0) < 58 && str.charCodeAt(0) > 48) {
    switch (str[0]) {
      case "1":
        if (arrStr[3] === "m" || arrStr[3] === "M") {
          arrStr[3] = "H"
        } else if (arrStr[3] === "h" || arrStr[3] === "H") {
          arrStr[3] = "X"
        } else {
          arrStr[3] = String.fromCharCode(str.charCodeAt([3]) + 1)
        }
        arrStr[0] = "R"
        break
      case "2":
        if (arrStr[3] === "m" || arrStr[3] === "M") {
          arrStr[3] = "X"
        } else if (arrStr[3] === "l" || arrStr[3] === "L") {
          arrStr[3] = "H"
        } else {
          arrStr[3] = String.fromCharCode(str.charCodeAt([3]) + 2)
        }
        arrStr[0] = "R"
        break
      case "3":
        if (arrStr[3] === "x" || arrStr[3] === "X") {
          arrStr[3] = "H"
        } else if (arrStr[3] === "h" || arrStr[3] === "H") {
          arrStr[3] = "M"
        } else {
          arrStr[3] = String.fromCharCode(str.charCodeAt([3]) - 1)
        }
        arrStr[0] = "R"
        break
      case "4":
        if (arrStr[3] === "x" || arrStr[3] === "X") {
          arrStr[3] = "M"
        } else if (arrStr[3] === "h" || arrStr[3] === "H") {
          arrStr[3] = "L"
        } else {
          arrStr[3] = String.fromCharCode(str.charCodeAt([3]) - 2)
        }
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
        arrStr[0] = "R"
        break
      case "9":
        arrStr[2] = String.fromCharCode(str.charCodeAt([2]) - 1)
        arrStr[0] = "R"
        break
      default:
        alert("Invalid Code")
    }
    return arrStr
  } else if (str.charCodeAt(0) === "r" || str.charCodeAt(0) === "R") {
  		let codeArray = []
      codeArray.push("1"+x)
      codeArray.push("2"+x)
      codeArray.push("3"+x)
      codeArray.push("4"+x)
      codeArray.push("6"+x)
      codeArray.push("7"+x)
      codeArray.push("8"+x)
      codeArray.push("9"+x)
      return codeArray
  }
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

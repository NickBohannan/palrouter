function translateOne(str) {
  let arrStr = str.split("")
  if (arrStr[3] === "x" || arrStr[3] === "X") {
    arrStr[3] = "H"
  } else if (arrStr[3] === "h" || arrStr[3] === "H") {
    arrStr[3] = "M"
  } else {
    arrStr[3] = String.fromCharCode(str.charCodeAt([3]) - 1)
  }
  arrStr[0] = "1"
  return arrStr.join("").toUpperCase()
}

function translateTwo(str) {
  let arrStr = str.split("")
  if (arrStr[3] === "x" || arrStr[3] === "X") {
    arrStr[3] = "M"
  } else if (arrStr[3] === "h" || arrStr[3] === "H") {
    arrStr[3] = "L"
  } else {
    arrStr[3] = String.fromCharCode(str.charCodeAt([3]) - 2)
  }
  arrStr[0] = "2"
  return arrStr.join("").toUpperCase()
}

function translateThree(str) {
  let arrStr = str.split("")
  if (arrStr[3] === "m" || arrStr[3] === "M") {
    arrStr[3] = "H"
  } else if (arrStr[3] === "h" || arrStr[3] === "H") {
    arrStr[3] = "X"
  } else {
    arrStr[3] = String.fromCharCode(str.charCodeAt([3]) + 1)
  }
  arrStr[0] = "3"
  return arrStr.join("").toUpperCase()
}

function translateFour(str) {
  let arrStr = str.split("")
  if (arrStr[3] === "m" || arrStr[3] === "M") {
    arrStr[3] = "X"
  } else if (arrStr[3] === "l" || arrStr[3] === "L") {
    arrStr[3] = "H"
  } else {
    arrStr[3] = String.fromCharCode(str.charCodeAt([3]) + 2)
  }
  arrStr[0] = "4"
  return arrStr.join("").toUpperCase()
}

function translateSix(str) {
  let arrStr = str.split("")
  arrStr[1] = String.fromCharCode(str.charCodeAt([1]) - 1)
  arrStr[0] = "6"
  return arrStr.join("").toUpperCase()
}

function translateSeven(str) {
  let arrStr = str.split("")
  arrStr[1] = String.fromCharCode(str.charCodeAt([1]) + 1)
  arrStr[0] = "7"
  return arrStr.join("").toUpperCase()
}

function translateEight(str) {
  let arrStr = str.split("")
  arrStr[2] = String.fromCharCode(str.charCodeAt([2]) - 1)
  arrStr[0] = "8"
  return arrStr.join("").toUpperCase()
}

function translateNine(str) {
  let arrStr = str.split("")
  arrStr[2] = String.fromCharCode(str.charCodeAt([2]) + 1)
  arrStr[0] = "9"
  return arrStr.join("").toUpperCase()
}

function computeRouterCode(str) {
  let arrStr = str.split("")
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
  return arrStr.join("").toUpperCase()
}

let sub = document.querySelector('#sub')

sub.addEventListener('click', () => {
  let codeVal = document.querySelector('#code').value
  console.log(codeVal)
  if (document.querySelector("#result")) {
    document.body.removeChild(document.querySelector("#result"))
  }
  let result = document.createElement("div")
  result.id = "result"
  let resultNode
  if (codeVal.charCodeAt(0) < 58 && codeVal.charCodeAt(0) > 48) {
    resultNode = document.createTextNode(computeRouterCode(codeVal))
  } else if (codeVal[0] === "R" || codeVal[0] === "r") {
    let resultNodeArray = []
    resultNodeArray.push(translateOne(codeVal))
    resultNodeArray.push(translateTwo(codeVal))
    resultNodeArray.push(translateThree(codeVal))
    resultNodeArray.push(translateFour(codeVal))
    resultNodeArray.push(translateSix(codeVal))
    resultNodeArray.push(translateSeven(codeVal))
    resultNodeArray.push(translateEight(codeVal))
    resultNodeArray.push(translateNine(codeVal))
    resultNode = document.createTextNode(resultNodeArray.join(", "))
  }
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

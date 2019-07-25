// These functions are used to translate one "R" code into many "number" codes
// They are called in the click event listener to make a list of "number" codes

function translateOne(string) {
  let arrayString = string.split("")
  if (arrayString[3] === "x" || arrayString[3] === "X") {
    arrayString[3] = "H"
  } else if (arrayString[3] === "h" || arrayString[3] === "H") {
    arrayString[3] = "M"
  } else {
    arrayString[3] = String.fromCharCode(string.charCodeAt(3) - 1)
  }
  arrayString[0] = "1"
  return arrayString.join("").toUpperCase()
}

function translateTwo(string) {
  let arrayString = string.split("")
  if (arrayString[3] === "x" || arrayString[3] === "X") {
    arrayString[3] = "M"
  } else if (arrayString[3] === "h" || arrayString[3] === "H") {
    arrayString[3] = "L"
  } else if (arrayString[3] === "y" || arrayString[3] === "Y") {
    arrayString[3] = "H"
  } else {
    arrayString[3] = String.fromCharCode(string.charCodeAt(3) - 2)
  }
  arrayString[0] = "2"
  return arrayString.join("").toUpperCase()
}

function translateThree(string) {
  let arrayString = string.split("")
  if (arrayString[3] === "m" || arrayString[3] === "M") {
    arrayString[3] = "H"
  } else if (arrayString[3] === "h" || arrayString[3] === "H") {
    arrayString[3] = "X"
  } else {
    arrayString[3] = String.fromCharCode(string.charCodeAt(3) + 1)
  }
  arrayString[0] = "3"
  return arrayString.join("").toUpperCase()
}

function translateFour(string) {
  let arrayString = string.split("")
  if (arrayString[3] === "m" || arrayString[3] === "M") {
    arrayString[3] = "X"
  } else if (arrayString[3] === "l" || arrayString[3] === "L") {
    arrayString[3] = "H"
  } else if (arrayString[3] === "h" || arrayString[0] === "H") {
    arrayString[3] = "Y"
  } else {
    arrayString[3] = String.fromCharCode(string.charCodeAt(3) + 2)
  }
  arrayString[0] = "4"
  return arrayString.join("").toUpperCase()
}

function translateSix(string) {
  let arrayString = string.split("")
  arrayString[1] = String.fromCharCode(string.charCodeAt(1) - 1)
  arrayString[0] = "6"
  return arrayString.join("").toUpperCase()
}

function translateSeven(string) {
  let arrayString = string.split("")
  arrayString[1] = String.fromCharCode(string.charCodeAt(1) + 1)
  arrayString[0] = "7"
  return arrayString.join("").toUpperCase()
}

function translateEight(string) {
  let arrayString = string.split("")
  arrayString[2] = String.fromCharCode(string.charCodeAt(2) - 1)
  arrayString[0] = "8"
  return arrayString.join("").toUpperCase()
}

function translateNine(string) {
  let arrayString = string.split("")
  arrayString[2] = String.fromCharCode(string.charCodeAt(2) + 1)
  arrayString[0] = "9"
  return arrayString.join("").toUpperCase()
}

// This function translates a single "number" code to it's corresponding "R" code

function computeRouterCode(string) {
  let arrayString = string.split("")
  arrayString[0] = "R"
  switch (string[0]) {
    case "1":
      if (arrayString[3] === "m" || arrayString[3] === "M") {
        arrayString[3] = "H"
      } else if (arrayString[3] === "h" || arrayString[3] === "H") {
        arrayString[3] = "X"
      } else {
        arrayString[3] = String.fromCharCode(string.charCodeAt(3) + 1)
      }
      break
    case "2":
      if (arrayString[3] === "m" || arrayString[3] === "M") {
        arrayString[3] = "X"
      } else if (arrayString[3] === "l" || arrayString[3] === "L") {
        arrayString[3] = "H"
      } else if (arrayString[3] === "h" || arrayString[3] === "H") {
        arrayString[3] = "Y"
      } else {
        arrayString[3] = String.fromCharCode(string.charCodeAt(3) + 2)
      }
      break
    case "3":
      if (arrayString[3] === "x" || arrayString[3] === "X") {
        arrayString[3] = "H"
      } else if (arrayString[3] === "h" || arrayString[3] === "H") {
        arrayString[3] = "M"
      } else {
        arrayString[3] = String.fromCharCode(string.charCodeAt(3) - 1)
      }
      break
    case "4":
      if (arrayString[3] === "x" || arrayString[3] === "X") {
        arrayString[3] = "M"
      } else if (arrayString[3] === "h" || arrayString[3] === "H") {
        arrayString[3] = "L"
      } else if (arrayString[3] === "y" || arrayString[3] === "Y") {
        arrayString[3] = "H"
      } else {
        arrayString[3] = String.fromCharCode(string.charCodeAt(3) - 2)
      }
      break
    case "5":
      arrayString[0] = "L"
      break
    case "6":
      arrayString[1] = String.fromCharCode(string.charCodeAt(1) + 1)
      break
    case "7":
      arrayString[1] = String.fromCharCode(string.charCodeAt(1) - 1)
      break
    case "8":
      arrayString[2] = String.fromCharCode(string.charCodeAt(2) + 1)
      break
    case "9":
      arrayString[2] = String.fromCharCode(string.charCodeAt(2) - 1)
      break
    default:
      alert("Invalid Code")
  }
  return arrayString.join("").toUpperCase()
}

// WIP foot description function

// function codeToDescription(string) {
//   let upperCaseString = string.toUpperCase()
//   let descriptionArray = []
//   for (let i=0; i<string.length; i++) {
//     if (i===0) {
//       let varusOrValgus
//       if (upperCaseString[i] === "R") {
//         varusOrValgus = "Varus"
//       }
//       if (upperCaseString[i] === "L") {
//         varusOrValgus = "Valgus"
//       }
//       descriptionArray.push(varusOrValgus)
//     }
//     if (i===1) {
//       let footLength = upperCaseString.charCodeAt(i)
//       descriptionArray.push("Foot Length: " + footLength + " mm")
//     }
//     if (i===2) {
//       let heelWidth = upperCaseString.charCodeAt(i)
//       descriptionArray.push("Heel Width: " + heelWidth + " mm")
//     }
//     if (i===3) {
//       let archHeight
//       switch (upperCaseString[i]) {
//         case "K":
//           archHeight = 18
//           break
//         case "L":
//           archHeight = 19
//           break
//         case "M":
//           archHeight = 20
//           break
//         case "H":
//           archHeight = 21
//           break
//         case "X":
//           archHeight = 22
//           break
//         case "Y":
//           archHeight = 23
//           break
//         case "Z":
//           archHeight = 24
//           break
//         default:
//           return 0
//       }
//       descriptionArray.push("Arch Height: " + archHeight + " mm")
//     }
//     if (i===4) {
//       let grindWidth = string.charCodeAt(i)
//       descriptionArray.push("Grind Width: " + grindWidth)

//     }
//     if (i===5) {
//       let rspGrind = string.charCodeAt(i)
//       descriptionArray.push("Additional Grind Specs: " + rspGrind)
//       if (string[i] == "R") {rspGrind = 18}
//       if (string[i] == "S") {rspGrind = 19}
//       if (string[i] == "P") {rspGrind = 20}
//     }
//     if (i===6) {
//       let heelCupHeight = string.charCodeAt(i)
//       descriptionArray.push("Heel Cup Height: " + heelCupHeight + " inches")
//     }
//   }
//   return descriptionArray.join(", ")
// }


let sub = document.querySelector('#sub')
let wrapper = document.querySelector('#wrapper')

// This event listener invokes all the functions necessary to get either 
// all the numbered codes or a single R code based on the value of the code entered

sub.addEventListener('click', () => {
  let codeVal = document.querySelector('#code').value
  let result = document.createElement("div")

  result.id = "result"

  let resultNode
  
  if (document.querySelector("#result")) {
    wrapper.removeChild(document.querySelector("#result"))
  }

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
  result.appendChild(resultNode)
  wrapper.appendChild(result)
})

document.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    e.preventDefault()
    sub.click()
  }
})

let atmKeys = {
   insertCard: "Use Pin Pad to Enter Pin number",
   takeReceipt: "Thank you for banking with us!",
   takeCash: "Take your cash Below and hit 'Take Receipt'",
   enterPin: "**** Deposit or Withdrawl",
   insertCash:"Cash Acceppted Take Receipt",
   deposit:"Insert Cash",
   withdraw:"Press Take Cash",
}

const takeTicket = () => {
let receipt = document.querySelector('.screenTxt')
receipt.innerHTML = atmKeys.takeReceipt
}
const usePin = () => {
    let card = document.querySelector('.screenTxt')
    card.innerHTML = atmKeys.insertCard
    }
const pinPad = () => {
  let number = document.querySelector('.screenTxt')
  number.innerHTML = atmKeys.enterPin
}   
const withDraw = () => {
    let draw= document.querySelector('.screenTxt')
    draw.innerHTML = atmKeys.withdraw
  } 
  const depoCash = () => {
    let addCash= document.querySelector('.screenTxt')
    addCash.innerHTML = atmKeys.deposit
  }
  const insertCash = () => {
    let addCash= document.querySelector('.screenTxt')
    addCash.innerHTML = atmKeys.insertCash
  }
  const takeCash = () => {
    let finalCash= document.querySelector('.screenTxt')
    finalCash.innerHTML = atmKeys.takeCash
  }








// let mainBox = document.querySelector('.screenTxt')
// //         mainBox.innerHTML = atmKeys.insertCard
//         let title = document.querySelector('.screen')
//         title.innerHTML = "Insert Card"
//     }
//     else if (boxName === "takeReceipt") {
//         let mainBox = document.querySelector('.screenTxt')
//         mainBox.innerHTML = atmKeys.takeReceipt
//         let title = document.querySelector('.screen')
//         title.innerHTML = "Take Receipt"
//     }
//     else if (boxName === "takeCash") {
//         let mainBox = document.querySelector('.screenTxt')
//         mainBox.innerHTML = atmKeys.takeCash
//         let title = document.querySelector('.screen')
//         title.innerHTML = "Take Cash"
//     }
//     else if (boxName === "enterPin") {
//         let mainBox= document.querySelector('.screenTxt')
//         mainBox.innerHTML = atmKeys.enterPin
//         let title = document.querySelector('.screen')
//         title.innerHTML = "Enter Pin"
//     }
// }
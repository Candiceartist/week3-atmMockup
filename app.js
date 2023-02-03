
let atmKeys = {
   insertCard: 'Card Accepted',
   takeReceipt: 'Thank you for banking with us!',
   takeCash: 'Take your cash Below',
   enterPin: 'Pin number',
}

// Query Selectors
let mainBox = document.querySelector()
let title = document.querySelector()


// functions
const uploadInfo = (boxName) => {
    if (boxName === "insertCard") {
        let mainBox = document.querySelector('.screenTxt')
        mainBox.innerHTML = atmKeys.insertCard
        let title = document.querySelector('.screen')
        title.innerHTML = "Insert Card"
    }
    else if (boxName === "takeReceipt") {
        let mainBox = document.querySelector('.screenTxt')
        mainBox.innerHTML = atmKeys.takeReceipt
        let title = document.querySelector('.screen')
        title.innerHTML = "Take Receipt"
    }
    else if (boxName === "takeCash") {
        let mainBox = document.querySelector('.screenTxt')
        mainBox.innerHTML = atmKeys.takeCash
        let title = document.querySelector('.screen')
        title.innerHTML = "Take Cash"
    }
    else if (boxName === "enterPin") {
        let mainBox= document.querySelector('.screenTxt')
        mainBox.innerHTML = atmKeys.enterPin
        let title = document.querySelector('.screen')
        title.innerHTML = "Enter Pin"
    }
}
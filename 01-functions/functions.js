// syntax basics
function doNothingReturnNothing(){

}

const doNothingReturnNothing = function(){

}

const doNothingReturnNothing = () => {
    
}


// doNothingReturnNothing()



// function parameters 1
// const greetUser = (userName) => {
//     console.log('hi there, ' + userName)
// }
// greetUser('Sam')

//function parameters 2
// const greetUser = (userName, msg = 'hi, ') => {
//     console.log(msg + userName)
// }
// greetUser('Sam') // logs 'hi, Sam'
// greetUser('Sam', 'where are you ') // logs 'where are you Sam'

// function parameters 3

// const logMessage = (msg) => {
//     console.log(msg)
// }

// const greetUser = (func, userName) => {
//     func('hi there, ' + userName) // this will be the logMessage function
// }
// greetUser(logMessage, 'Sam') // logs 'hi there, Sam '

//anonymous callback function
// const greetUser = (func, userName) => {
//     func('hi there, ' + userName)
// }
// greetUser((msg) => console.log(msg), 'Sam') // logs 'hi there, Sam '

// return values
// const sum = (a,b) => {
//     return a + b
//     }

// arrow function simple return
// const sum = (a,b) => a + b


// functions returning functions

function logMessage(punctuation){
    return (msg) => console.log(msg + punctuation)
    }

// store the return value of the function in a variable
const logConfused = logMessage('??!?') 

// value of the variable confused will be a FUNCTION
console.log(logConfused) 


logConfused('what the heck') // logs 'what the heck??!?'
logConfused('are you ok with this') // are you ok with this??!?'

logMessage('!!!!!')('what the heck') // logs 'what the heck!!!!!'
logMessage('!!!!!')('yay') // logs 'yay!!!!!'
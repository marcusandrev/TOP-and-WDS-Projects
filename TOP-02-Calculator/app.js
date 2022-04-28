const numberBtns = document.querySelectorAll('[data-number]');
const operationBtns = document.querySelectorAll('[data-operation]');
const ACBtn = document.querySelector('[data-AC]');
const clrBtn = document.querySelector('[data-Clear]');
const eqlBtn = document.querySelector('[data-equals]');
const upScreen = document.querySelector('[data-upper-screen]')
const lowScreen = document.querySelector('[data-lower-screen]')

class Calculator {
  constructor(upScreen, lowScreen) {
    this.upScreenTextElement = upScreen
    this.lowScreenTextElement = lowScreen
    this.AC()
  }

  AC() {
    this.upScreen = ''
    this.lowScreen = ''
    this.operation = undefined
  }

  display() {
    this.lowScreenTextElement.innerText = this.lowScreen
    
    this.upScreenTextElement.innerText = this.upScreen
  }

  appendNumber(number) {
    if (number === '.' && this.lowScreen.includes('.')) return 
    this.lowScreen = this.lowScreen.toString() + number.toString()
  }

  setOperation(operation) {
    if (this.lowScreen === '') return
    if (this.upScreen !== '') {
      this.compute()
    }
    this.operation = operation
    this.upScreen = this.lowScreen
    this.lowScreen = ''
  }

  compute() {
    let computation
    const prev = parseFloat(this.upScreen)
    const current = parseFloat(this.lowScreen)
    if (isNaN(prev) || isNaN(current)) return
    if (this.operation === '÷' && this.lowScreen === '0') {
      alert("You can't divide by 0!")
      return 
    }
    switch(this.operation) {
      case '+':
        computation = prev + current
        break
      case '-':
        computation = prev - current
        break
      case '×':
        computation = prev * current
        break
      case '÷':
        computation = prev / current
        break 
      default:
        return
    }

    this.upScreen = computation
    this.operation = undefined
    this.lowScreen = ''
    //bug in equals sign. Will be fixing next time
  }

  delete() {
    this.lowScreen = this.lowScreen.toString().slice(0, -1)
  }
}

const calculator = new Calculator(upScreen, lowScreen)

numberBtns.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.display()
  })
})

operationBtns.forEach(button => {
  button.addEventListener('click', () => {
    calculator.setOperation(button.innerText)
    calculator.display()
  })
})

ACBtn.addEventListener('click', () => {
  calculator.AC()
  calculator.display()
})

clrBtn.addEventListener('click', () => {
  calculator.delete()
  calculator.display()
})

eqlBtn.addEventListener('click', () => {
  calculator.compute()
  calculator.display()
})

//Learned OOP (Classes, Objects, and Constructors) with Kyle :https://www.youtube.com/watch?v=5AWRivBk0Gw&ab_channel=WebDevSimplified
//Used this tutorial for the structure of JS code: https://www.youtube.com/watch?v=j59qQ7YWLxw&ab_channel=WebDevSimplified
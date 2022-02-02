input.onButtonPressed(Button.A, function () {
    if (guess < upper) {
        guess += 1
    } else {
        basic.showString("Over")
    }
})
input.onButtonPressed(Button.B, function () {
    if (guess < upper) {
        guess += 1
    } else {
        basic.showString("Over")
    }
})
let upper = 0
let guess = 0
guess = 0
let lower = 1
upper = 10
let bingo = 5
while (guess != bingo) {
    while (!(input.buttonIsPressed(Button.AB))) {
        basic.showNumber(guess)
    }
    if (guess > bingo) {
        basic.showString("B")
        upper = guess
    } else if (guess < bingo) {
        basic.showString("S")
        lower = guess
    } else {
        break;
    }
}
for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        . # # # .
        . . . . .
        `)
}
basic.showString("You Win")

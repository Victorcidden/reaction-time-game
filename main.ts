input.onButtonPressed(Button.A, function () {
    if (starttid != 0) {
        basic.showString("A vann! Tid:")
    }
    basic.showNumber(input.runningTime() - starttid)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    if (starttid != 0) {
        basic.showString("B vann! Tid:")
    }
    basic.showNumber(input.runningTime() - starttid)
    basic.clearScreen()
})
let starttid = 0
music.play(music.tonePlayable(262, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
basic.showLeds(`
    . . . . .
    # . . . #
    # . . . #
    . # . # .
    . . # . .
    `)
basic.showLeds(`
    . . . . .
    . . # . .
    . . # . .
    . # . . .
    # . . . .
    `)
basic.showLeds(`
    . # . # .
    . . # . .
    . # . # .
    . # # # .
    . # . # .
    `)
basic.showLeds(`
    . # . . #
    # . . . #
    . # . . #
    # # . . #
    . # . . #
    `)
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    . . # # #
    `)
basic.showLeds(`
    . . # . #
    . . # . #
    . . # # .
    . . # . #
    # # # . #
    `)
basic.showLeds(`
    # . # . .
    # . # . #
    # # . . #
    # . # . #
    # . # . .
    `)
basic.showLeds(`
    . # # # .
    # . . . #
    # . . . #
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    # # . . .
    . . # . #
    . . # . #
    . . # . #
    # # . . #
    `)
basic.showLeds(`
    . # . # .
    # . # . #
    # . # . #
    # . . . #
    # . . . #
    `)
basic.showLeds(`
    . . # # #
    # . # . .
    # . # # #
    # . # . .
    # . # # #
    `)
basic.showLeds(`
    # # . . .
    . . . # .
    # # . # .
    . . . # .
    # # . # .
    `)
basic.showLeds(`
    . # . . .
    # . # . .
    # . # . .
    # . # . .
    # . # . .
    `)
basic.showLeds(`
    # # # # #
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    `)
basic.showLeds(`
    . . # . .
    . . . . .
    . . # . .
    . . # . .
    . . # . .
    `)
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    . . # # #
    `)
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    . . # # #
    `)
basic.showLeds(`
    . # . # .
    # . # . #
    # . # . #
    # . . . #
    # . . . #
    `)
basic.showLeds(`
    . . # . .
    . . . . .
    . . # . .
    . . # . .
    . . # . .
    `)
basic.showLeds(`
    # # # # #
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    `)
basic.showLeds(`
    # # # # #
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    `)
basic.showString("S")
basic.showLeds(`
    . # # # .
    . # . . #
    . # . . #
    . # # # .
    . # . . .
    `)
basic.showLeds(`
    . # # # .
    . # . . .
    . # # # .
    . # . . .
    . # # # .
    `)
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    . . # # #
    `)
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . . . . .
    . . # . .
    `)
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . . . . .
    . . # . .
    `)
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . . . . .
    . . # . .
    `)
basic.clearScreen()
basic.showNumber(3)
basic.showNumber(2)
basic.showNumber(1)
basic.clearScreen()
music.stopAllSounds()
starttid = 0
basic.pause(randint(2000, 7000))
basic.showLeds(`
    . . . . .
    . # # # .
    . # # # .
    . # # # .
    . . . . .
    `)
if (input.buttonIsPressed(Button.AB)) {
    music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
}
starttid = input.runningTime()
music.stopAllSounds()
basic.showString("PRESS A TO PLAY AGAIN")
pauseUntil(() => input.buttonIsPressed(Button.A))

let LongDelay = 0
let ShortDelay = 0
basic.forever(function () {
    LongDelay = 500
    ShortDelay = 50
    basic.pause(LongDelay)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(ShortDelay)
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(ShortDelay)
    basic.showIcon(IconNames.Diamond)
    basic.pause(LongDelay)
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(ShortDelay)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})

input.onGesture(Gesture.Shake, function () {
    倒數 += 1
})
let 倒數 = 0
let 開始 = 5
basic.showNumber(開始)
for (let index = 0; index < 5; index++) {
    開始 += -1
    basic.showNumber(開始)
}
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showIcon(IconNames.Butterfly)
music.playTone(277, music.beat(BeatFraction.Whole))
basic.pause(200)
music.playTone(311, music.beat(BeatFraction.Whole))
basic.pause(200)
music.playTone(208, music.beat(BeatFraction.Whole))
basic.pause(100)
music.playTone(311, music.beat(BeatFraction.Whole))
basic.pause(200)
music.playTone(349, music.beat(BeatFraction.Whole))
basic.pause(100)
music.playTone(415, music.beat(BeatFraction.Quarter))
music.playTone(370, music.beat(BeatFraction.Quarter))
music.playTone(349, music.beat(BeatFraction.Quarter))
music.playTone(311, music.beat(BeatFraction.Quarter))
music.playTone(277, music.beat(BeatFraction.Whole))
basic.pause(100)
music.playTone(311, music.beat(BeatFraction.Whole))
basic.pause(100)
music.playTone(208, music.beat(BeatFraction.Double))
music.playTone(415, music.beat(BeatFraction.Quarter))
music.playTone(370, music.beat(BeatFraction.Quarter))
music.playTone(349, music.beat(BeatFraction.Quarter))
music.playTone(311, music.beat(BeatFraction.Quarter))
music.playTone(277, music.beat(BeatFraction.Whole))
basic.pause(200)
music.playTone(311, music.beat(BeatFraction.Whole))
basic.pause(200)
music.playTone(208, music.beat(BeatFraction.Whole))
basic.pause(100)
music.playTone(311, music.beat(BeatFraction.Whole))
basic.pause(200)
music.playTone(349, music.beat(BeatFraction.Whole))
basic.pause(100)
music.playTone(415, music.beat(BeatFraction.Quarter))
music.playTone(370, music.beat(BeatFraction.Quarter))
music.playTone(349, music.beat(BeatFraction.Quarter))
music.playTone(311, music.beat(BeatFraction.Quarter))
music.playTone(277, music.beat(BeatFraction.Whole))
basic.pause(100)
music.playTone(311, music.beat(BeatFraction.Whole))
basic.pause(100)
music.playTone(208, music.beat(BeatFraction.Double))
music.playTone(277, music.beat(BeatFraction.Whole))
music.playTone(277, music.beat(BeatFraction.Whole))
basic.pause(200)
music.playTone(277, music.beat(BeatFraction.Quarter))
music.playTone(277, music.beat(BeatFraction.Quarter))
basic.pause(500)
music.playTone(233, music.beat(BeatFraction.Half))
music.playTone(262, music.beat(BeatFraction.Half))
music.playTone(277, music.beat(BeatFraction.Half))
music.playTone(277, music.beat(BeatFraction.Half))
music.playTone(311, music.beat(BeatFraction.Half))
music.playTone(262, music.beat(BeatFraction.Half))
music.playTone(233, music.beat(BeatFraction.Half))
music.playTone(208, music.beat(BeatFraction.Double))
basic.pause(200)
music.playTone(233, music.beat(BeatFraction.Half))
music.playTone(233, music.beat(BeatFraction.Half))
music.playTone(262, music.beat(BeatFraction.Half))
music.playTone(277, music.beat(BeatFraction.Half))
music.playTone(233, music.beat(BeatFraction.Half))
music.playTone(208, music.beat(BeatFraction.Half))
music.playTone(208, music.beat(BeatFraction.Whole))
music.playTone(208, music.beat(BeatFraction.Half))
music.playTone(311, music.beat(BeatFraction.Double))
basic.pause(200)
music.playTone(233, music.beat(BeatFraction.Half))
music.playTone(233, music.beat(BeatFraction.Half))
music.playTone(262, music.beat(BeatFraction.Half))
music.playTone(277, music.beat(BeatFraction.Half))
music.playTone(233, music.beat(BeatFraction.Half))
music.playTone(277, music.beat(BeatFraction.Half))
music.playTone(311, music.beat(BeatFraction.Half))
music.playTone(262, music.beat(BeatFraction.Half))
music.playTone(233, music.beat(BeatFraction.Half))
music.playTone(208, music.beat(BeatFraction.Double))
basic.pause(200)
music.playTone(233, music.beat(BeatFraction.Half))
music.playTone(233, music.beat(BeatFraction.Half))
music.playTone(262, music.beat(BeatFraction.Half))
music.playTone(277, music.beat(BeatFraction.Half))
music.playTone(233, music.beat(BeatFraction.Half))
music.playTone(208, music.beat(BeatFraction.Half))
music.playTone(311, music.beat(BeatFraction.Half))
music.playTone(311, music.beat(BeatFraction.Half))
music.playTone(311, music.beat(BeatFraction.Half))
music.playTone(349, music.beat(BeatFraction.Half))
music.playTone(311, music.beat(BeatFraction.Double))
basic.pause(200)
music.playTone(277, music.beat(BeatFraction.Double))
music.playTone(311, music.beat(BeatFraction.Half))
music.playTone(349, music.beat(BeatFraction.Half))
music.playTone(277, music.beat(BeatFraction.Half))
music.playTone(311, music.beat(BeatFraction.Half))
music.playTone(311, music.beat(BeatFraction.Half))
music.playTone(311, music.beat(BeatFraction.Half))
music.playTone(349, music.beat(BeatFraction.Half))
music.playTone(311, music.beat(BeatFraction.Half))
music.playTone(208, music.beat(BeatFraction.Half))
music.playTone(208, music.beat(BeatFraction.Double))
basic.pause(200)
music.playTone(233, music.beat(BeatFraction.Half))
music.playTone(262, music.beat(BeatFraction.Half))
music.playTone(277, music.beat(BeatFraction.Half))
music.playTone(233, music.beat(BeatFraction.Half))
music.playTone(311, music.beat(BeatFraction.Half))
music.playTone(349, music.beat(BeatFraction.Half))
music.playTone(311, music.beat(BeatFraction.Double))
basic.pause(200)
music.playTone(233, music.beat(BeatFraction.Quarter))
music.playTone(262, music.beat(BeatFraction.Quarter))
music.playTone(277, music.beat(BeatFraction.Quarter))
music.playTone(233, music.beat(BeatFraction.Quarter))
music.playTone(349, music.beat(BeatFraction.Half))
music.playTone(349, music.beat(BeatFraction.Half))
music.playTone(311, music.beat(BeatFraction.Double))
basic.pause(200)
music.playTone(208, music.beat(BeatFraction.Quarter))
music.playTone(233, music.beat(BeatFraction.Quarter))
music.playTone(262, music.beat(BeatFraction.Quarter))
music.playTone(208, music.beat(BeatFraction.Quarter))
music.playTone(311, music.beat(BeatFraction.Half))
music.playTone(311, music.beat(BeatFraction.Half))
music.playTone(277, music.beat(BeatFraction.Half))
music.playTone(262, music.beat(BeatFraction.Half))
music.playTone(233, music.beat(BeatFraction.Half))
music.playTone(233, music.beat(BeatFraction.Quarter))
music.playTone(262, music.beat(BeatFraction.Quarter))
music.playTone(277, music.beat(BeatFraction.Quarter))
music.playTone(233, music.beat(BeatFraction.Quarter))
music.playTone(277, music.beat(BeatFraction.Quarter))
music.playTone(311, music.beat(BeatFraction.Quarter))
music.playTone(262, music.beat(BeatFraction.Half))
music.playTone(233, music.beat(BeatFraction.Half))
music.playTone(208, music.beat(BeatFraction.Half))
music.playTone(175, music.beat(BeatFraction.Half))
music.playTone(311, music.beat(BeatFraction.Half))
music.playTone(277, music.beat(BeatFraction.Double))
basic.pause(200)

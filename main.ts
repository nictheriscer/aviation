radio.onReceivedString(function on_received_string(receivedString: string) {
    SOS()
    console.log("MAYDAY")
})
function SOS() {
    basic.showIcon(IconNames.Skull)
}

let y = 2
let x = 2
radio.setGroup(1)
basic.forever(function on_forever() {
    
    led.plot(x, y)
    if (input.rotation(Rotation.Roll) < -30) {
        x = 0
    } else if (input.rotation(Rotation.Roll) > -30 && input.rotation(Rotation.Roll) < 10) {
        x = 1
    } else if (input.rotation(Rotation.Roll) > -10 && input.rotation(Rotation.Roll) < 10) {
        x = 2
    } else if (input.rotation(Rotation.Roll) > 10 && input.rotation(Rotation.Roll) < 30) {
        x = 3
    } else {
        x = 4
    }
    
    basic.pause(500)
    basic.clearScreen()
})
basic.forever(function on_forever2() {
    
    if (input.rotation(Rotation.Pitch) < -30) {
        y = 4
        radio.sendString("MAYDAY")
    } else if (input.rotation(Rotation.Pitch) > -30 && input.rotation(Rotation.Pitch) < 10) {
        y = 3
    } else if (input.rotation(Rotation.Pitch) > -10 && input.rotation(Rotation.Pitch) < 10) {
        y = 2
    } else if (input.rotation(Rotation.Pitch) > 10 && input.rotation(Rotation.Pitch) < 30) {
        y = 1
    } else {
        y = 0
    }
    
    basic.pause(500)
    basic.clearScreen()
})

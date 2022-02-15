def on_received_string(receivedString):
    SOS()
    print("MAYDAY")
radio.on_received_string(on_received_string)

def SOS():
    basic.show_icon(IconNames.SKULL)
y = 2
x = 2
radio.set_group(1)

def on_forever():
    global x
    led.plot(x, y)
    if input.rotation(Rotation.ROLL) < -30:
        x = 0
    elif input.rotation(Rotation.ROLL) > -30 and input.rotation(Rotation.ROLL) < 10:
        x = 1
    elif input.rotation(Rotation.ROLL) > -10 and input.rotation(Rotation.ROLL) < 10:
        x = 2
    elif input.rotation(Rotation.ROLL) > 10 and input.rotation(Rotation.ROLL) < 30:
        x = 3
    else:
        x = 4
    basic.pause(500)
    basic.clear_screen()
basic.forever(on_forever)

def on_forever2():
    global y
    if input.rotation(Rotation.PITCH) < -30:
        y = 4
        radio.send_string("MAYDAY")
    elif input.rotation(Rotation.PITCH) > -30 and input.rotation(Rotation.PITCH) < 10:
        y = 3
    elif input.rotation(Rotation.PITCH) > -10 and input.rotation(Rotation.PITCH) < 10:
        y = 2
    elif input.rotation(Rotation.PITCH) > 10 and input.rotation(Rotation.PITCH) < 30:
        y = 1
    else:
        y = 0
    basic.pause(500)
    basic.clear_screen()
basic.forever(on_forever2)

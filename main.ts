let _in = 0
basic.showString("Hello!")
if (0 > _in) {
    radio.setTransmitSerialNumber(true)
    radio.setFrequencyBand(40)
    radio.raiseEvent(
    EventBusSource.MICROBIT_ID_BUTTON_A,
    EventBusValue.MICROBIT_EVT_ANY
    )
    radio.sendNumber(5)
}

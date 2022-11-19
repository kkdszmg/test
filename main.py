_in = 0
basic.show_string("Hello!")
if 0 > _in:
    radio.set_transmit_serial_number(True)
    radio.set_frequency_band(40)
    radio.raise_event(EventBusSource.MICROBIT_ID_BUTTON_A,
        EventBusValue.MICROBIT_EVT_ANY)
    radio.send_number(5)

/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#e09a16 icon="\uf02d"
namespace LE_Block {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */

    //% blockId=device_set_analog_Frequency block="Set Frequency|Pin %pin| Frq %Frequency"
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4
    //% pin.fieldOptions.tooltips="false"

    export function setFrequency(pin: AnalogPin, Frequency: number): void{

        let period = 1000000/Frequency
        pins.analogWritePin(pin, 0)
        pins.analogSetPeriod(pin, period)
    }

    //% blockId=device_set_analog_PWM block="Set PWM|Pin %pin| value %PWM"
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4
    //% pin.fieldOptions.tooltips="false"
    //% PWM.min=0 PWM.max=100

    export function setPWM(pin: AnalogPin, PWM: number): void{
        PWM = pins.map(PWM, 0, 100, 0, 1023)
        pins.analogWritePin(pin, PWM)
        
    }

}

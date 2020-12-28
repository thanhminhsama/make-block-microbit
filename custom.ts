
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
    //% 

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
        PWM = 100 - PWM
        PWM = pins.map(PWM, 0, 100, 0, 1023)
        pins.analogWritePin(pin, PWM)
        
    }
    
    //% block="Khởi tạo xe"
    export function initializationPWM(): void{
        setFrequency(AnalogPin.P5, 1000);
        setFrequency(AnalogPin.P6, 1000);
        setFrequency(AnalogPin.P7, 1000);
        setFrequency(AnalogPin.P8, 1000);
    }

    //% block="Đi tiến %wait mili giây| tốc độ %speed"
    //% pin.fieldOptions.tooltips="false"

    export function up(wait :number, speed :number): void{
        setPWM(AnalogPin.P5, 0)
        setPWM(AnalogPin.P6, speed)
        setPWM(AnalogPin.P7, speed)
        setPWM(AnalogPin.P8, 0)
        basic.pause(wait)
    }

    //% block="Đi lui %wait mili giây | tốc độ %speed"
    //% pin.fieldOptions.tooltips="false"

    export function down(wait :number, speed :number): void{
        setPWM(AnalogPin.P5, speed)
        setPWM(AnalogPin.P6, 100)
        setPWM(AnalogPin.P7, 100)
        setPWM(AnalogPin.P8, speed)
        basic.pause(wait)
    }
    //% block="Xoay trái %wait mili giây | tốc độ %speed"
    //% pin.fieldOptions.tooltips="false"

    export function left(wait :number, speed :number): void{
        setPWM(AnalogPin.P5, 0)
        setPWM(AnalogPin.P6, speed)
        setPWM(AnalogPin.P7, 0)
        setPWM(AnalogPin.P8, 0)
        basic.pause(wait)
    }
    //% block="Xoay phải %wait mili giây | tốc độ %speed"
    //% pin.fieldOptions.tooltips="false"

    export function right(wait :number, speed :number): void{
        setPWM(AnalogPin.P5, 0)
        setPWM(AnalogPin.P6, 0)
        setPWM(AnalogPin.P7, speed)
        setPWM(AnalogPin.P8, 0)
        basic.pause(wait)
    }
    //% weight=100 color=#f54242
    //% block="Dừng"
    //% pin.fieldOptions.tooltips="false"

    export function stop(): void{
        setPWM(AnalogPin.P5, 0)
        setPWM(AnalogPin.P6, 0)
        setPWM(AnalogPin.P7, 0)
        setPWM(AnalogPin.P8, 0)
    }
}

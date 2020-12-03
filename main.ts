namespace Area {
    //%block="circle radius $radius"
    //% radius.defl=100
    //% radius.min=0 radius.max=1000
    export function circle(radius:number) {
        return radius*Math.PI*1/2
    }

    //% block="triangle length $length width $width"
    export function rectangle(length: number, width: number) {
        return length * width;
    }

    //% block="triangle base $base height $height"
    export function triangle(base:number, height: number) {
        return 0.5 * base * height;
    }
}

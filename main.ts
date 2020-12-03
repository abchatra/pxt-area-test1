namespace Area {
    //%block="circle radius $radius"
    //% radius.defl=100
    //% radius.min=0 radius.max=1000
    export function circle(radius:number) {
        return radius*Math.PI*radius;
    }

    //% block="triangle length $length width $width"
    export function rectangle(length: number, width: number) {
        return length * width;
    }

    //% block="triangle base $base height $height"
    //% base.defl=20
    export function triangle(base:number, height: number) {
        return 0.5 * base * height;
    }
}

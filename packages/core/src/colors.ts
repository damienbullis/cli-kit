const _checkNumber = (n: number): boolean => {
    if (n > 255 || n < 0) {
        console.log(
            BgColor(9)(` Error `) +
                Color(9)(
                    ` Invalid number: ${n}\n\n   Number must be between 0 and 255\n`
                )
        )
        return false
    }
    return true
}
const isProd = process.env.NODE_ENV === 'production'
const checkNumber = isProd ? () => true : _checkNumber

const Reset = '\x1b[0m'

type ColorType = string | number
type ColorFn = (txt: ColorType) => string

export const Color = (c: number): ColorFn => {
    if (!checkNumber(c)) return (txt: ColorType) => `${txt}`
    return (txt: ColorType) => `\x1b[38;5;${c}m${txt}${Reset}`
}

export const BgColor = (c: number): ColorFn => {
    if (!checkNumber(c)) return (txt: ColorType) => `${txt}`
    return (txt: ColorType) => `\x1b[48;5;${c}m${txt}${Reset}`
}

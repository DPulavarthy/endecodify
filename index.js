let [{ StringDecoder }, once, pub, key] = [require(`string_decoder`), false]
module.exports = {
    startup(refs) {
        if (once) throw new Error(`Setup function has already been called`)
        once = !once
        if (!refs) {
            process.encode = this.encode
            process.decode = this.decode
        }
        key = {
            max: Buffer.from(new StringDecoder('utf8').write(Buffer.from(`0x${`4F 51 3D 3D`.split(` `).join(` 0x`)}`.split(` `))), `base64`).toString(`ascii`),
            min: Buffer.from(new StringDecoder('utf8').write(Buffer.from(`0x${`4D 41 3D 3D`.split(` `).join(` 0x`)}`.split(` `))), `base64`).toString(`ascii`),
            letters: [...Array(26)].map((val, i) => String.fromCharCode(i + 65)).concat([...Array(26)].map((val, i) => String.fromCharCode(i + 65)).map(letter => letter.toLowerCase()))
        }
        pub = {
            encodify: (input) => {
                let string = []
                for (let char of input.split(``)) {
                    char = parseInt(char)
                    let num = char === key.max ? key.min : ++char
                    let format = num % 2 === 0 ? `${++num * 2}i` : num
                    if ((format.toString().endsWith(`i`) && format.length - 1 < 2) || format < 10) string.push(`0${format}`)
                    else string.push(format)
                }
                return string
            },
            joinify: (input) => {
                let string = []
                for (let char of input) {
                    string.push(`8x${char}${key.letters[Math.floor(Math.random() * (char.toString().endsWith(`i`) ? key.letters.length / 2 : key.letters.length))]}`)
                }
                return string.join(` `)
            },
            splitify: (input) => {
                return input.replace(/8x/g, ``).split(` `)
            },
            decodify: (input) => {
                let string = []
                for (let char of input) {
                    char = char.substring(0, char.length - 1)
                    if (char.includes(`i`)) char = (parseInt(char.substring(0, char.length - 1)) / 2) - 1
                    else char = parseInt(char)
                    string.push(char === key.min ? key.max : --char)
                }
                return string.join(``)
            },
            encode: this.encode,
            decode: this.decode
        }
        if (process.argv[2]) {
            switch (process.argv[2].toLowerCase()) {
                case `decode`: {
                    console.log(pub.decode(process.argv.splice(3).join(` `)))
                    break
                }
                case `encode`: {
                    console.log(pub.encode(process.argv.splice(3).join(` `)))
                    break
                }
                default: {
                    break
                }
            }
        }
        return { case: `success`, code: `200`, message: `Successfully setup` }
    },
    encode(input) {
        if (!once) throw new Error(`Setup function has not been called`)
        return { case: `success`, code: `200`, data: pub.joinify(pub.encodify(Buffer.from(Buffer.from(Buffer.from(Buffer.from(input, `ascii`).toString(`base64`), `base64`).toString(`hex`), `ascii`).toString(`base64`), `base64`).toString(`hex`))) }
    },
    decode(input) {
        if (!once) throw new Error(`Setup function has not been called`)
        return { case: `success`, code: `200`, data: Buffer.from(Buffer.from(Buffer.from(Buffer.from(pub.decodify(pub.splitify(input)), `hex`).toString(`base64`), `base64`).toString(`ascii`), `hex`).toString(`base64`), `base64`).toString(`ascii`) }
    }
}

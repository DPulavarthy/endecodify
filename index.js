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
                let [_0xd50e, string] = [[``, `\x73\x70\x6C\x69\x74`, `\x6D\x61\x78`, `\x6D\x69\x6E`, `\x69`, `\x65\x6E\x64\x73\x57\x69\x74\x68`, `\x6C\x65\x6E\x67\x74\x68`, `\x30`, `\x70\x75\x73\x68`], []]
                for (let char of input[_0xd50e[1]](_0xd50e[0])) {
                    char = parseInt(char)
                    let num = char === key[_0xd50e[2]] ? key[_0xd50e[3]] : ++char
                    let format = num % 2 === 0 ? `${_0xd50e[0]}${++num * 2}${_0xd50e[4]}` : num
                    if ((format.toString()[_0xd50e[5]](`${_0xd50e[4]}`) && format[_0xd50e[6]] - 1 < 2) || format < 10) string[_0xd50e[8]](`${_0xd50e[7]}${format}${_0xd50e[0]}`)
                    else string[_0xd50e[8]](format)
                }
                return string
            },
            joinify: (input) => {
                let [_0xc3f9, string] = [[`\x38\x78`, ``, `\x72\x61\x6E\x64\x6F\x6D`, `\x69`, `\x65\x6E\x64\x73\x57\x69\x74\x68`, `\x6C\x65\x6E\x67\x74\x68`, `\x6C\x65\x74\x74\x65\x72\x73`, `\x66\x6C\x6F\x6F\x72`, `\x70\x75\x73\x68`, `\x20`, `\x6A\x6F\x69\x6E`], []]
                for (let char of input) {
                    string[_0xc3f9[8]](`${_0xc3f9[0]}${char}${_0xc3f9[1]}${key[_0xc3f9[6]][Math[_0xc3f9[7]](Math[_0xc3f9[2]]() * (char.toString()[_0xc3f9[4]](`${_0xc3f9[3]}`) ? key[_0xc3f9[6]][_0xc3f9[5]] / 2 : key[_0xc3f9[6]][_0xc3f9[5]]))]}${_0xc3f9[1]}`)
                }
                return string[_0xc3f9[10]](`${_0xc3f9[9]}`)
            },
            splitify: (input) => {
                let _0x2ef2 = [`\x20`, `\x73\x70\x6C\x69\x74`, ``, `\x72\x65\x70\x6C\x61\x63\x65`]
                return input[_0x2ef2[3]](/8x/g, `${_0x2ef2[2]}`)[_0x2ef2[1]](`${_0x2ef2[0]}`)
            },
            decodify: (input) => {
                var [_0x835a, string] = [[`\x6C\x65\x6E\x67\x74\x68`, `\x73\x75\x62\x73\x74\x72\x69\x6E\x67`, `\x69`, `\x69\x6E\x63\x6C\x75\x64\x65\x73`, `\x6D\x69\x6E`, `\x6D\x61\x78`, `\x70\x75\x73\x68`, ``, `\x6A\x6F\x69\x6E`], []]
                for (let char of input) {
                    char = char[_0x835a[1]](0, char[_0x835a[0]] - 1)
                    if (char[_0x835a[3]](`${_0x835a[2]}`)) char = (parseInt(char[_0x835a[1]](0, char[_0x835a[0]] - 1)) / 2) - 1
                    else char = parseInt(char)
                    string[_0x835a[6]](char === key[_0x835a[4]] ? key[_0x835a[5]] : --char)
                }
                return string[_0x835a[8]](`${_0x835a[7]}`)
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
        let _0xfc87 = [`\x73\x75\x63\x63\x65\x73\x73`, `\x32\x30\x30`, `\x68\x65\x78`, `\x62\x61\x73\x65\x36\x34`, `\x61\x73\x63\x69\x69`, `\x66\x72\x6F\x6D`, `\x65\x6E\x63\x6F\x64\x69\x66\x79`, `\x6A\x6F\x69\x6E\x69\x66\x79`]
        return { case: _0xfc87[0], code: _0xfc87[1], data: pub[_0xfc87[7]](pub[_0xfc87[6]](Buffer[_0xfc87[5]](Buffer[_0xfc87[5]](Buffer[_0xfc87[5]](Buffer[_0xfc87[5]](input, _0xfc87[4]).toString(_0xfc87[3]), _0xfc87[3]).toString(_0xfc87[2]), _0xfc87[4]).toString(_0xfc87[3]), _0xfc87[3]).toString(_0xfc87[2]))) }
    },
    decode(input) {
        if (!once) throw new Error(`Setup function has not been called`)
        let _0x1c73 = [`\x73\x75\x63\x63\x65\x73\x73`, `\x32\x30\x30`, `\x61\x73\x63\x69\x69`, `\x62\x61\x73\x65\x36\x34`, `\x73\x70\x6C\x69\x74\x69\x66\x79`, `\x64\x65\x63\x6F\x64\x69\x66\x79`, `\x68\x65\x78`, `\x66\x72\x6F\x6D`]
        return { case: _0x1c73[0], code: _0x1c73[1], data: Buffer[_0x1c73[7]](Buffer[_0x1c73[7]](Buffer[_0x1c73[7]](Buffer[_0x1c73[7]](pub[_0x1c73[5]](pub[_0x1c73[4]](input)), _0x1c73[6]).toString(_0x1c73[3]), _0x1c73[3]).toString(_0x1c73[2]), _0x1c73[6]).toString(_0x1c73[3]), _0x1c73[3]).toString(_0x1c73[2]) }
    }
}

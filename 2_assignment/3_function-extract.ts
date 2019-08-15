// trim :: String -> String
export const trim = (string: string) => string.trim()

// intFromString :: String -> Number
export const intFromString = (string: string) => Number.parseInt(string)

// add :: Number -> Number -> Number
export const add = (x: number) => (y: number) => x + y

// add1 :: Number -> Number
export const add1 = add(1)

// fromCharCode :: Number -> String
export const strFromCharCode = (number: number) => String.fromCharCode(number)

// contrivedExample_3 :: String -> [String]
const contrivedExample_3 = (string: string) =>
    Array.of(string)
    .map(trim)
    .map(intFromString)
    .map(add1)
    .map(strFromCharCode)

contrivedExample_3(' 64 ') //=> [‘A’]

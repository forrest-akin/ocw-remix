// contrivedExample_2 :: String -> [String]
const contrivedExample_2 = (string: string) =>
    Array.of(string)                                    // { string }
    .map(string => string.trim())                       // { string }
    .map(trimmed => parseInt(trimmed))                  // { string, trimmed }
    .map(number => number + 1)                          // { string, number }
    .map(nextNumber => String.fromCharCode(nextNumber)) // { string, nextNumber }

contrivedExample_2(' 64 ') //=> [‘A’]

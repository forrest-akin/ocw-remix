// contrivedExample_1 :: String -> String
const contrivedExample_1 = (string: string) => {
    const trimmed = string.trim()
    const number = parseInt(trimmed)
    const nextNumber = number + 1
    return String.fromCharCode(nextNumber)
}

contrivedExample_1(' 64 ') //=> 'A'



/*
 * ❌ UNIFY CALL SYNTAX
 * ❌ MINIMIZE STATE
 * ❌ CAPTURE ASSIGNMENT
 * ❌ FORCE CONTROL FLOW
 * ❌ MAXIMIZE COMPOSITIONALITY
 * ❌ MAXIMIZE COMPOSABILITY
 */

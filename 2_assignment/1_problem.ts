// contrivedExample_1 :: String -> String
const contrivedExample_1 = (string: string) => {
    const trimmed = string.trim()          // { string }
    const number = parseInt(trimmed)       // { string, trimmed }
    const nextNumber = number + 1          // { string, trimmed, number }
    return String.fromCharCode(nextNumber) // { string, trimmed, number, nextNumber }
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

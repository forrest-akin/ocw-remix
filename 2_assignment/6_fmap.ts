import {
    trim, intFromString, add1, strFromCharCode,
} from './3_function-extract'
import { Box } from './4_functor'
import { pipe } from './5_pipe'


// map :: (a -> b) -> f a -> f b
const map: IMap = f => F => F.map(f)

// ftrim :: f String -> f String
const ftrim = map(trim)

// fintFromString :: f String -> f Number
const fintFromString = map(intFromString)

// fadd1 :: f Number -> f Number
const fadd1 = map(add1)
    
// fstrFromCharCode :: f Number -> f String
const fstrFromCharCode = map(strFromCharCode)
    
// contrivedExample_6 :: f String -> f String
const contrivedExample_6a = pipe(
    ftrim,
    fintFromString,
    fadd1,
    fstrFromCharCode,
)

const contrivedExample_6b = map(
    pipe(
        trim,
        intFromString,
        add1,
        strFromCharCode
    )
)

// contrivedExample_6a === contrivedExample_6b

contrivedExample_6a(Array.of(' 64 ')) //=> ['A']
contrivedExample_6a(Box(' 64 '))      //=> Box('A')



/*
* ✅ UNIFY CALL SYNTAX
* ✅ MINIMIZE STATE
* ✅ CAPTURE ASSIGNMENT
* ✅ FORCE CONTROL FLOW
* ✅ MAXIMIZE COMPOSITIONALITY
* ✅ MAXIMIZE COMPOSABILITY
*/


    
type IMap = <A, B>(f: (a: A) => B) =>
    <F>(fa: Functor<F, A>) => Functor<F, B>

interface Functor<F, A> {
    map<B>(f: (a: A) => B): Functor<F, B>
}

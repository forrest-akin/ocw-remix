import {
    trim, intFromString, add1, strFromCharCode,
} from './3_function-extract'


// pipe :: (a -> b, ... , y -> z) -> a -> z
export const pipe: Pipe = (...fns) =>
    x => fns.reduce((y, f) => f(y), x)

// pipe(f, g) === x => g(f(x))

// compose :: (y -> z, ... , a -> b) -> a -> z
const compose: Compose = (...fns) =>
    x => fns.reduceRight((y, f) => f(y), x)

// compose(f, g) === x => f(g(x))
    
// contrivedExample_5 :: String -> String
const contrivedExample_5 = pipe(
    trim,             // String -> String
    intFromString,    // String -> Number
    add1,             // Number -> Number
    strFromCharCode,  // Number -> String
)
    
contrivedExample_5(' 64 ') //=> ‘A’
    
    
    
/**
 * REFERENTIAL TRANSPARENCY:
 *     the property of being able to replace a function invocation with its
 *     return value without changing the meaning of the program
 */
    
pipe(
    trim,             // String -> String
    intFromString,    // String -> Number
    add1,             // Number -> Number
    strFromCharCode,  // Number -> String
)(' 64 ')
// ===
pipe(
    () => ' 64 '.trim(), // ' 64 ' -> '64'
    intFromString,       // String -> Number
    add1,                // Number -> Number
    strFromCharCode,     // Number -> String
)()
// ===
pipe(
    () => Number.parseInt('64'), // '64' -> 64
    add1,                        // Number -> Number
    strFromCharCode,             // Number -> String
)()
// ===
pipe(
    () => 1 + 64,    // 64 -> 65
    strFromCharCode, // Number -> String
)()
// ===
pipe(
    () => String.fromCharCode(65), // 65 -> 'A'
)()
// ===
'A'



// credit to https://www.ackee.cz/blog/en/typescript/
type Lookup<T, K extends keyof any, Else=never> =
    K extends keyof T
    ? T[K]
    : Else
    
type Tail<T extends any[]> =
    ((...t: T) => void) extends ((x: any, ...u: infer U) => void)
    ? U
    : never;
    
type Func1 = (arg: any) => any;
    
type ArgType<F, Else=never> =
    F extends (arg: infer A) => any
    ? A
    : Else;
    
type AsChain<F extends [Func1, ...Func1[]], G extends Func1[]= Tail<F>> = {
    [K in keyof F]: (arg: ArgType<F[K]>) => ArgType<Lookup<G, K, any>, any>
};
    
type LastIndexOf<T extends any[]> =
    ((...x: T) => void) extends ((y: any, ...z: infer U) => void)
    ? U['length']
    : never
    
type Pipe = <F extends [(arg: any) => any, ...Array<(arg: any) => any>]>
    (...fns: F & AsChain<F>) =>
        (a?: ArgType<F[0]>) => ReturnType<F[LastIndexOf<F>]>

type Compose = <F extends [(arg: any) => any, ...Array<(arg: any) => any>]>
    (...fns: F & AsChain<F>) =>
        (a?: ArgType<F[LastIndexOf<F>]>) => ReturnType<F[0]>

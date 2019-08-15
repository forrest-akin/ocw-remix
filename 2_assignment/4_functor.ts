import {
    trim, intFromString, add1, strFromCharCode,
} from './3_function-extract'


/**
* Functor Laws
* i) identity law
*     F.map(id) === id(F)
*        where id = x => x
* ii) composition law
*     F.map(x => g(f(x))) === F.map(f).map(g)
*/

// Box a :: {
//     map :: (a -> b) -> Box b
// }
export const Box: IBox = x => ({
    map: f => Box(f(x))
})
    
// contrivedExample_4 :: String -> Box String
const contrivedExample_4 = (string: string) =>
    Box(string)
    .map(trim)
    .map(intFromString)
    .map(add1)
    .map(strFromCharCode)
    
contrivedExample_4(' 64 ') //=> Box(‘A’)
    

    
interface Functor<F, A> {
    map<B>(f: (a: A) => B): Functor<F, B>
}
    
interface Box<A> {
    map<B>(f: (a: A) => B): Box<B>
}

type IBox = <A>(a: A) => Box<A>

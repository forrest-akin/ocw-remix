const map = f => mappable => mappable.map(f)

const filter = f => filterable => filterable.filter(f)

const reduce = f => reducable => initial => reducable.reduce(f, initial)

const range = (i, count) =>
    unfold(x => {
        if (x <= count) return [x, x + 1]
    }, i)

range(5,10)
// [ 5, 6, 7, 8, 9, 10 ]

const alphabet = () =>
    unfold(x => {
        if (x < 26) return [String.fromCharCode(x + 65), x + 1]
    }, 0)

alphabet()
// [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z]

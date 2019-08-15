import Promise from 'bluebird'


const Future = f => x => Promise(f(x))

const identity = x => x

const FutureId = Future(identity)

FutureId(6)
.then(six => six / 2)
// Promise(3)

FutureId(6)
.then(six => FutureId(six / 2))
// Promise(3)

FutureId(6)
.map(six => six / 2)
// Promise(3)

FutureId(6)
.chain(six => FutureId(six / 2))
// Promise(3)

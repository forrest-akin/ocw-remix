Left('no ducks :(')
.fold(
    e => `we had an error: ${e}`,
    s => s.toUpperCase()
)
// we had an error: no ducks :(

Right('ducks')
.fold(
    e => `we had an error: ${e}`,
    s => s.toUpperCase()
)
//"DUCKS"

leftOrRight.fold(
    e => `we had an error: ${e}`,
    s => s.toUpperCase()
)

Right({ hair: 'brown' })
.map(obj => obj.hair)
.map(brown => brown.length)
.chain(five => Right(five * 2))
// Right(10)

Left('ignored')
.map(obj => obj.hair)
.map(brown => brown.length)
.chain(five => Left(five * 2))
// Left('ignored')

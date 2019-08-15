const ASSIGNMENT = () => {
    let stuff = [1, 2, 3]
    stuff = [1, 2]
    return stuff
}



const LOOPS = () => {
    const things = [{ amount: 101, name: 'kept' }]
    let keepers = []
    for (let thing of things) {
        if (thing.amount > 100) keepers.push(thing.name)
    }



    const cars = ['BMW']
    let text
    for (let i = 0; i < cars.length; i++) {
        text += cars[i] + "<br>"
    }
    


    let i = 0
    while (i < 10) {
        text += "The number is " + i
        i++
    }
}



const stuff = [1, 2, 3]
const SIDE_EFFECTS = () => {
    stuff.splice(0, 2)
    return stuff.pop()
}



const BRANCHING = (f, x, y) => {
    if (f()) {
        return x
    } else {
        return y
    }
}



const ERRORS = (f, x) => {
    try {
        return f(x)
    } catch (e) {
        console.error(e)
    }
}

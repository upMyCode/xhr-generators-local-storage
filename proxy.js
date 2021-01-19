const person = {
    name: 'Evrial',
    age: 20,
    adress: {
        street: 'Western Street',
        home: 27,
        city: 'Amsterdam'
    }
}



const trap = new Proxy(person, {
    get(target, prop) {
        return target[prop]
    },
    set(target, prop, value) {
        if(prop in target) {
            target[prop] = value
        } else {
            throw new Error(`No ${prop} in target`)
        }
    }
})

const ggwp = text => `ggwp: ${text}`



 const ggwp2 = new Proxy(ggwp, {
     apply(target, thisArg, args) {
         console.log(target)
         console.log(thisArg)
         console.log(args)
     }
 })




// CLASS construct()


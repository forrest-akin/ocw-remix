const getConfig = () => {
    try {
        return fs.readFileSync('cfg.json')
    } catch(e) {
        return null
    }
}



const getConfig = () => Either.try(fs.readFileSync)('cfg.json')



const contrivedEx3 = () => {
    const cfg = getConfig()
    if (cfg) {
        const parsed = JSON.parse(cfg)
        return parsed.port
    } else {
        return 3000
    }
}



const contrivedEx3 = () =>
    getConfig()
    .map(JSON.parse)
    .fold(
        e => 3000,
        c => c.port
    )



const contrivedEx4 = (user) => {
    const address = user.address
    
    if (address) {
        const zip = address.match(/(\d{5})$/i)
        
        if (zip) {
            const city = cityByZip(zip)
            
            if (city) {
                return city
            } else {
                return "can't find city"
            }
        }
    }
    
    return "can't find city"
}



const contrivedEx4 = user =>
    fromNullable(user.address)
    .chain(a => fromNullable(a.match(/(\d{5})$/i)))
    .chain(zip => fromNullable(cityByZip(zip)))
    .fold(
        () => "can't find city",
        city => city
    )
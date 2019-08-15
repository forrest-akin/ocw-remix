import fs from 'fs'

const contrivedEx2a = () =>
    fs.readFile('cfg.json', 'utf-8', (err, contents) => {
        if(err) throw err

        const newContents = contents.replace(/8/g, '6')

        fs.writeFile('cfg1.json', newContents, (err, _) => {
            if(err) throw err

            console.log('success!')
        })
    })



import util from 'util'

const readFile = util.promisify(fs.readFile)

const writeFile = util.promisify(fs.writeFile)

const contrivedEx2b = () =>
    readFile('cfg.json', 'utf-8')
    .map(contents => contents.replace(/8/g, '6'))
    .chain(replaced => writeFile('cfg1.json', replaced))

contrivedEx2b()
.fork(
    e => console.error(e),
    _ => console.log('success!')
)



const lib = username => getTweets(username)
    .map(ts => truncateTo130(ts))
    .chain(ts => writeFile('tweets.json', ts))

lib('@drboolean')

lib('@drboolean')
.chain(f => saveToS3(f))

lib('@drboolean')
.chain(f => saveToS3(f))
.fork(
    e => console.error(e),
    r => console.log(r)
)

const readline = require('readline')

const r1  = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r1.question(`input here: `, answer => {
    console.log(`you input ${answer}`)
    r1.close()
})
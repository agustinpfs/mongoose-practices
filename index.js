const mongoose = require('mongoose')
const Character = require('./models/Character')
const url = 'mongodb://127.0.0.1:27017/street-fighters'


mongoose.connect(url, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})


const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:', url)
})

db.on('error', err => {
  console.error('connection error:', err)
})


async function runCode() {
const ryu = new Character({
    name: 'Ryu',
    ultimate: 'Shinku Hadoken'
})

const doc = await ryu.save()
console.log(doc)


const ken = new Character({
    name: 'Ken',
    ultimate: 'Guren Enjinkyaku'
  })
  
  await ken.save()

const ryul = await Character.findOne({ name: 'Ryu' })
console.log(ryul)

const chars = await Character.find({ name: 'Ryu' }) //array documents
console.log(chars)




}

runCode()
.catch(error => { console.error(error) })


// await Character.deleteMany({})

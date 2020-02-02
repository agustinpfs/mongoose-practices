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
// const ryu = new Character({
//     name: 'Ryu',
//     ultimate: 'Shinku Hadoken'
// })

// const doc = await ryu.save()
// console.log(doc)


// const ken = new Character({
//     name: 'Ken',
//     ultimate: 'Guren Enjinkyaku'
//   })
  
//   await ken.save()

// // const ryu = await Character.findOne({ name: 'Ryu' })
// // console.log(ryu)

// const chars = await Character.find({ name: 'Ryu' }) //array documents
// console.log(chars)

// // const ryu = await Character.findOne({ name: 'Ryu' })
// // console.log(ryu)

// // update with findOne + save
// const ryu = await Character.findOne({ name: 'Ryu' })
// ryu.specials = [
//   'Hadoken',
//   'Shoryuken',
//   'Tatsumaki Senpukyaku'
// ]
// const doc = await ryu.save()
// console.log(doc)

// // update with findOneAndUpdate
// // Syntax
// await findOneAndUpdate(filter, update)
// // Usage
// const doc = await Character.findOneAndUpdate(
//     { name: 'Ryu' },
//     {
//       specials: [
//         'Hadoken',
//         'Shoryuken',
//         'Tatsumaki Senpukyaku'
//       ]
//     })
  
//   console.log(doc)

// //   Deleting a character
// // There are two ways to delete a character:
// // findOne + remove
// const ryu = await Character.findOne({ name: 'Ryu' })
// const deleted = await ryu.remove()
// // findOneAndDelete
// const deleted = await Character.findOneAndDelete({ name: 'Ken' })



// const ryu = {
//   name: 'Ryu',
//   specials: [{
//     name: 'Hadoken',
//     keys: '↓ ↘ → P'
//   }, {
//     name: 'Shoryuken',
//     keys: '→ ↓ ↘ → P'
//   }, {
//     name: 'Tatsumaki Senpukyaku',
//     keys: '↓ ↙ ← K'
//   }],
//   ultimate: {
//     name: 'Shinku Hadoken',
//     keys: '↓ ↘ → ↓ ↘ → P'
//   }
// }

const ryu = {
  description: 'hola que hola',
  type: 'Point',
  features: [{
      type: 'Feature',
      properties: {
        desc: null,
        image: null
      },
      geometry: {
        type: 'Point',
        coordinates: [
          -60.948243141174316,
          -34.58722018560401
        ]
      }
  }]
}

// const ryu = {
//   description: 'hola que hola',
//   type: 'FeatureCollection',
//   features: [         //array
//     {                   ///objeto
//       type: 'Feature',////string 
      // properties: {
      //   desc: null,
      //   image: null
      // },
      // geometry: {
      //   type: 'Point',
      //   coordinates: [
      //     -60.948243141174316,
      //     -34.58722018560401
      //   ]
      // }
//     }
//   ]
// }


// const ryu = {
//   description: 'hola que hola',
//   type: 'FeatureCollection',
//   features: {
      // type: 'Feature',////string 
      // properties: 'nullllee',
      // geometry: 'nule2'
//     }
  
// }



const char = new Character(ryu)

const doc = await char.save()
console.log(doc)






}

runCode()
.catch(error => { console.error(error) })


// await Character.deleteMany({})







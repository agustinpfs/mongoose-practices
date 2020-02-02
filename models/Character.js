const mongoose = require('mongoose')
const Schema = mongoose.Schema


// const characterSchema = new Schema({
//     name: { type: String, unique: true },
//     specials: Array,
//     ultimate: String
//   })

// const characterSchema = new Schema({
//   name: { type: String, unique: true },
//   // Array of subdocuments
//   specials: [{
//     name: String,
//     keys: String
//   }],
//   // Single subdocument
//   ultimate: {
//     name: String,
//     keys: String
//   }
// })

const characterSchema = new Schema({
  description: { $type: String },
  type: { $type: String },  

  // Array of subdocuments
  features: [{
    type: String,
    properties: {
      desc : Object,
      image : Object
      },
    geometry: {
      type: { $type: String },
      coordinates: [Number]
    }
  }],
  // Single subdocument
 
},{typeKey: '$type'})


// var schema = new Schema({
//   // Mongoose interpets this as 'loc is an object with 2 keys, type and coordinates'
//   loc: { type: String, coordinates: [Number] },
//   // Mongoose interprets this as 'name is a String'
//   name: { $type: String }
// }, { typeKey: '$type' });

// const characterSchema = new Schema({
//   type: String,
//   // Array of subdocuments
//   features: 
//           [{
              // type: String,
              // properties: String,
              // geometry: String
              
//           }],
// })




module.exports = mongoose.model('Character', characterSchema)

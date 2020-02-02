



//   subdocuments
const childSchema = new Schema({
    name: String
  });
  
  const parentSchema = new Schema({
    // Single subdocument
    child: childSchema,
  
    // Array of subdocuments
    children: [ childSchema ]
  });
  

  // This code is the same as above
const parentSchema = new Schema({
    // Single subdocument
    child: { name: String },
  
    // Array of subdocuments
    children: [{name: String }]
  });




//   ejemplo

  const characterSchema = new Schema({
    name: { type: String, unique: true },
    // Array of subdocuments
    specials: [{
      name: String,
      keys: String
    }],
    // Single subdocument
    ultimate: {
      name: String,
      keys: String
    }
  })

//   or:

const moveSchema = new Schema({
    name: String,
    keys: String
  })
  
  const characterSchema = new Schema({
    name: { type: String, unique: true },
    // Array of subdocuments
    specials: [moveSchema],
    // Single subdocument
    ultimate: moveSchema
  })

//Creating documents that contain subdocuments
// There are two ways to create documents that contain subdocuments:

// 1)Pass a nested object into new Model

// Method 1: Passing the entire object
// For this method, we construct a nested object that contains both Ryu’s name and his moves.

// Object con un string(name), un array de objetos(specials) y un objeto(ultimate)
const ryu = {
    name: 'Ryu',
    specials: [{
      name: 'Hadoken',
      keys: '↓ ↘ → P'
    }, {
      name: 'Shoryuken',
      keys: '→ ↓ ↘ → P'
    }, {
      name: 'Tatsumaki Senpukyaku',
      keys: '↓ ↙ ← K'
    }],
    ultimate: {
      name: 'Shinku Hadoken',
      keys: '↓ ↘ → ↓ ↘ → P'
    }
  }


  

  const char = new Character(ryu)
  const doc = await char.save()
  console.log(doc)

























// 2)Add properties into the created document.
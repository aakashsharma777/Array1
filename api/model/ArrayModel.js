const mongoose = require('mongoose')
//var schema=mongoose.Schema

const InputSchema=mongoose.Schema({
      value1: { 
        type: String
      },
      value2: { 
        type: String     
      },
      value3: {
        type: String
      }
    
})

const ValueSchema = mongoose.Schema({
  data: { 
    type: String
  },
  Input:[InputSchema]
})

module.exports=mongoose.model('Value',ValueSchema)
const { Schema, model } = require('../config/db-connection');

const userSchema = Schema({
  class_id: {
    type: Number,
    required: true,
   
  },
  learner_id: {
    type: Number,
   required:true,
    },
  score:[Number]
  })

module.exports = model('User', userSchema);

const mongoose = require('mongoose');

const AssessmentSchema = new mongoose.Schema({
  userID:{
    type: Number
  },
  nickname: {
    type: String
  },
  plannedChanges:{
    type: [String]
  },
  strugglingDuration:{
    type: String
  },
  sleepingTime:{
    type: String
  },
  wakeUpTime: {
    type: String
  },
  sleepDuration: {
    type: String
  }
});

module.exports = Assessment = mongoose.model('assessment', AssessmentSchema); 
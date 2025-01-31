const mongoose = require("mongoose");

const EventSchema = mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  eventDate: {
    type: String,
    default: Date.now,
  },
  venue: {
    type: String,
    required: true,
  },
  eventTime: {
    type: String,
    required: true,
  },
  isRegister: {
    type: Boolean,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  registerUsers :[{
    type: mongoose.Schema.Types.ObjectId,
    ref :'Register'
}]
});

module.exports = mongoose.model("Event", EventSchema);

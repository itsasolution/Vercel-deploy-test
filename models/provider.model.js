const mongoose = require('mongoose');
const { Schema } = mongoose
// const plm = require('passport-local-mongoose')


const providerSchema = new Schema({
  avatar: String,
  role: {
    type: String,
    default: "provider"
  },
  username: {
    type: String,
    unique: true
  },

  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    // unique: true,
    require: true
  },
  password: {
    type: String,
    required: true,
  },

  vehicles: [{
    type: Schema.Types.ObjectId,
    ref: 'Vehicle', // model name
  }],

  address: String,
  mobileNumber: Number,

  documents: {
    aadharNumber: Number,
    licenseNumberPlate: String
  }

}, { timestamps: true });

// providerSchema.plugin(plm)
module.exports = mongoose.model('Provider', providerSchema);


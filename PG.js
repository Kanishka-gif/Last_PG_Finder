const { required } = require("joi");
const { Schema, model } = require("mongoose");

const pgSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  rent: {
    type: Number,
    required: true,
  },
  facilities: [String],
  security: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  image:{
    required: true,
    type: String, // Assuming you want to store the image as a string (e.g., URL or base64)
  }
//   image: {
//     data: Buffer,
//     contentType: String,
//   },
//   owner: { 
//     type: Schema.Types.ObjectId, // This should be an ObjectId reference
//     ref: 'User', // This will reference the 'User' model
//     required: true,
//   },
});

module.exports = model('PG', pgSchema);

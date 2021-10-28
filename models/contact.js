// Require dependencies
const mongoose = require("mongoose");
// Create Schema shortcut variable
const Schema = mongoose.Schema;
// Define the Schema
const contactSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    companyName: String,
    managedBy: String, // <= the google firebase user's uid number
    // TODO: add embedded schema for notes => notes: [notesSchema]
  },
  { timestamps: true }
);

// Export the result of compiling the Schema into a model
module.exports = mongoose.model("Contact", contactSchema);

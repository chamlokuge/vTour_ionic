var mongoose = require('mongoose'),

    /* Create a Mongoose Schema object for generating
       document rules as to what structure MUST be
       expected when requesting/sending data to and from
       the MongoDB database collection */
    Schema = mongoose.Schema,

    /* Define the schema rules (field names, types and rules) */
    TravelAgentSchema = new Schema({
        fname: { type: String, required: true },
        lname: { type: String, required: true },
        username: { type: String },
        password: { type: String, required: true },
        email: { type: String, required: true },
        telephone: { type: [String] },
        address: { type: String },
        isadmin: { type: Boolean },
        profilepic: { type: String },
        usertype: { type: String, required: true },
    });

/* Export model for application usage */
module.exports = mongoose.model('travelagents', TravelAgentSchema);


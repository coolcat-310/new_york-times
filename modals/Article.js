/**
 * Created by juancarlosnavarrete on 6/22/17.
 */

import moongoose from 'mongoose';

let Schema = mongoose.Schema;

// Create article schema
var ArticleSchema = new Schema({
    // title is a required string
    title: {
        //headline.main
        type: String,
        required: true
    },
    // link is a required string
    link: {
        //web_url
        type: String,
        required: true
    },
    // This only saves one note's ObjectId, ref refers to the Note model
    description: {
        //lead_paragraph
        type: String,
        default: 'About the story'

    }
});

// Create the Article model with the ArticleSchema
var Article = mongoose.model("Article", ArticleSchema);

// Export the model
module.exports = Article;
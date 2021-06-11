const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    id: Number,
    sound_file: String,
    image_file: String,
    question: String,
    answer: String
});

module.exports = mongoose.model('Data', DataSchema);
const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://127.0.0.1:27017/pcat-test-db')

const PhotoSchema = new Schema({
    title: String,
    description: String
})

const Photo = mongoose.model('Photo', PhotoSchema)

// Photo.create({
//     title: 'Photo Title 12 ',
//     description: 'Photxo Title 12 description'
// });

Photo.find({}, (err, result) => {
    console.log(result);
})
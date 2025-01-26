var express = require('express')
var router = express.Router();

const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://2201100009bf:e6qshA6UryaIzKmf@cluster0.d5gzs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

router.get('/', async (req, res) => {
    const database = client.db('notes');
    const notes = database.collection('notes');

    const query = {id:1};
    const note = await notes.findOne(query);

    res.json(note.title);
})

module.exports = router;

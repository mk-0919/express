var express = require('express')
var router = express.Router();
require('dotenv').config();

const { MongoClient } = require("mongodb");
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

router.get('/', async (req, res) => {
    const database = client.db('notes');
    const notes = database.collection('notes');

    const query = {id:1};
    const note = await notes.findOne(query);

    res.json(note.title);
})

module.exports = router;

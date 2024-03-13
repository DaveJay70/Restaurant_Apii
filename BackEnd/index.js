const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const rest = require('./Model/model');

const cors = require('cors');
const connectionstring = 'mongodb+srv://Jay:jay@cluster0.3r7yu5a.mongodb.net/Restaurant';

mongoose.connect(connectionstring).then(() => {
    console.log("Connected to MongoDB");    
    const app = express();
    // app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(cors());

    app.get('/rest', async (req, res) => {
        const result = await rest.find();
        res.send(result);
    });

    app.get('/rest/:ItemID', async (req, res) => {
        const id = req.params.ItemID;
        const result = await rest.findOne({ ItemID: id });
        res.json(result);
    });

    app.delete('/rest/:ItemID', async (req, res) => {
        const id = req.params.ItemID;
        const result = await rest.deleteOne({ ItemID: id });
        res.json(result);
    });

    app.post('/rest',async(req,res)=>{
        const data = new rest(req.body);
        const result = await data.save();
        res.json(result);
    });
    app.put('/rest/:ItemID',async(req,res) =>{
        const id = req.params.ItemID;
        const result = await rest.findOneAndUpdate({ ItemID:id },{ $set:req.body});
        res.json(result);
    });
    app.listen(5000, () => {
        console.log("server is running on port 5000");
    });
})
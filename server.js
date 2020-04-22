const express=require('express')
const app=express()
const {MongoClient, ObjectID}=require('mongodb')
const bodyParser=require('body-parser')
const assert=require('assert')

app.use(bodyParser.json())

const mongo_url='mongodb://localhost:27017'
const database="contact-list"
MongoClient.connect(mongo_url, (err, client)=>{
    assert.equal(err, null, 'data base connectio failed')
    let db=client.db(database)
    
    app.post('/new_contact', (req,res)=>{
        let newContact= req.body
        db.collection('Contacts').insertOne(newContact, (err, data)=>
        {
            if(err)
            res.send('can t add contact')
            else
            res.send(data)
        })
    })
    app.get('/allcontacts', (req, res)=>{
        db.collection('Contacts').find().toArray((err, data)=>{
            if(err)
            res.send('can t fetch contatcs')
            else
            res.send(data)
        })
    })
    app.get('/allcontacts/:id', (req, res)=>{
        let contactid=ObjectID(req.params.id)
        db.collection('Contacts').findOne({_id:contactid},(err, data)=>{
            if(err)
            res.send('can t fetch contatcs')
            else
            res.send(data)
        })
    })
    app.delete('/deletedcontact/:id', (req,res)=>{
        let contactid=ObjectID(req.params.id)
        db.collection('Contacts').findOneAndDelete({_id:contactid}, (err)=>{
            if(err)
            res.send('contact not found')
            else
            res.send('contact deleted')
        })
    })
    app.put('/editcontact/:id', (req,res)=>{
        let contactid=ObjectID(req.params.id)
        db.collection('Contacts').findOneAndUpdate({_id:contactid}, {$set:{...req.body}},(err)=>
        {if(err)
        res.send('contact not found')
        else
        res.send('contact updated')})
         
    })
})

app.listen(5000, (err)=>
{
    if(err)
    res.send(err)
    else
    console.log ("server is running")
})

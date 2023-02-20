import { MongoClient } from "mongodb";

//this is a secure place to store our connections

// /api/new-meetup
// ONLY POST REQUESTS
async function handler(req,res) {
    //console.log('handler function called');
    if(req.method === 'POST'){
        const data = req.body;
        //console.log('Data from Body: ');
        //console.log(data);
        
        const uri = "mongodb+srv://gabo:uaUoQdtL5GHJSJT4@cluster0.gkvum.mongodb.net/meetups";
        const client = await MongoClient.connect(uri);
        const db = client.db();

        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data);

        //console.log(result);

        client.close();

        res.status(201).json({message: 'Meetup inserted'});
    }
}

export default handler;


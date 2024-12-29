const {MongoClient}=require('mongodb');
const url='mongodb://localhost:27017'
const client=new MongoClient(url);
async function dbConnect()
{
    let result=await client.connect();
    db=result.db('online-shop');
    return db.collection('product');
}
module.exports=dbConnect;
const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient
let _db

const MongoConnect = callback => {

    mongoClient.connect('mongodb+srv://Barsha:bd0chEIQnyn6lWiZ@cluster0-2xiby.mongodb.net/test?retryWrites=true&w=majority')
    .then(client =>{
        console.log("MongoDb Connected !!!")
        _db = client.db 
        callback(client)
    
    })
    .catch(error=>{
        console.log(error)
        throw error
    })
}

const getDb = ()=>{
    if(_db){
        return _db
    }
    throw 'No Database Found'
    
}


exports.MongoConnect = MongoConnect
exports.getDb = getDb
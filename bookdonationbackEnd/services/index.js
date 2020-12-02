const MongoClient = require("mongodb").MongoClient;

let state = { db: null, client: null };
let x={hello:10};
const connect = async() => {
 let client = await MongoClient.connect('mongodb://localhost:27017/',
 { useUnifiedTopology: true });
 state.db = client.db('bookDonation');
 state.client=client;   
  return state; 
}

console.log("what is db inside services ",state.client)

let res=connect().client;
console.log("what is db inside services ",res)
const get = () => {
    return state.db;
  };
  
  const client = () => {
    return state.client;
  };

  const hi = () => {
      return x.hello;
  }
exports.dbcon = {connect,get,client,hi} //dbcon={connect()}
// module.exports.dbcon=dbcon;


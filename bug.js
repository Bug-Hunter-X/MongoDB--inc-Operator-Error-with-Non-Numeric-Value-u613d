```javascript
//Incorrect usage of $inc operator in MongoDB update query
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{field1:1,field2:"someString"}});
```
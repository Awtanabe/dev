var express = require('express')
var bodyParser = require('body-parser');
var app = express()
 
var messages = [];
var id = 1;


app.use(bodyParser.json());


// GET localhost:3000/
app.get('/', function (req, res) {
  res.send('Our  Messager System')
})

// GET localhost:3000/messages

app.get('/messages', function(req, res){
    res.json(messages)
})


// GET localhost:3000/:id

app.get('/messages/:id', function(req, res){
  var id = parseInt(req.params.id)
  var flag = false

  for(var i = 0; i < messages.length; i++){
    if (messages[i].id === id){
      res.json(messages[i]);
      flag = true
      break;
    }
  }
  if (!flag){
      res.send("can't find any message")
  }

});



// POET localhost:3000/


app.post('/messages', function(req, res){
   var body = req.body; 
    var new_messages = {
        id: id++,
        name: body.name,
        content: body.content,
        read: body.read
    }
    messages.push(new_messages)
    res.send(" new mssage added")
})

// DELETE localhost:3000/
app.delete('/messages/:id', function(req,res){

    var id = parseInt(req.params.id)
    var flag = false
  
    for(var i = 0; i < messages.length; i++){
      if (messages[i].id === id){
        messages.splice(i,1);
        flag = true;
        break;
      }
    }
    if (!flag){
        res.send("can't find any message")
    }else {
        res.send("Message with ID =" + id + "has been deletes")
    }
    

})


app.listen(3000, function(){
 console.log("server is runing...")
})
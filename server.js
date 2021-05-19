const express = require('express')
server = express();

server.listen(3000,function(){
    console.log('listening on 3000')
})
console.log('May the node be with you!!')

// server.get('/',function(req,res){
//     res.send('Hello World')
// })

server.get('/',(req,res) => {
    res.send("ES6. Hello World")
})

server.post('/destinations', (req,res) => {
   res.send('Post hit');
    console.log("POST hI0T");
})


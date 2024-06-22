const express = require('express')
var suggest = require('suggestion');
const app = express()
const port = 3000





app.get('/:q', function (req, res) {
    suggest(req.params.q, function (err, suggestions) {
        if (err) throw err;
        // console.log(suggestions);
        res.send(suggestions)
       
      })
  });



  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
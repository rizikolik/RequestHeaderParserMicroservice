

// init project
var express = require('express');
var app = express();
var bodyParser = require('body-parser');



// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)

var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));
app.use(bodyParser.urlencoded({ extended: false }));




app.use(express.static('public'));


app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


. 
app.get("/api/:user", function (req, res) {
  let ip;
   req.header("x-forwarded-for")? ip=req.header("x-forwarded-for"):ip=req.connection.remoteAddress;
 const lang=req.header("accept-language");
  const software=req.header("user-agent");
  
  

  res.json({"ipaddress":ip.split(/,/)[0],"languages":lang,"user-software":software});
});



// listen for requests :)
var listener = app.listen(process.env.PORT,process.env.IP, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

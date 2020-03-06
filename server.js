// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint... 
app.get("/api/timestamp/", (req, res) => {
  res.json({ unix: Date.now(), utc: Date() });
});

app.get("/api/timestamp/:date_string", (req,res) => {
  const { date_string } = req.params;

  console.log(/\d{5,}/.test(dateString))

  if(/\d{5,}/.test(dateString)){
    const dateToInt = parseInt(date_string);
    res.json({ unix: date_string, utc: new Date(dateToInt).toUTCString() });
  }

  let dateObject = new Date(date_string);

  if(dateObject.toString() === "Invalid Date"){
    res.json({ error: "Invalid Date"});
  }
  else {
    res.json({ unix: dateObject.valueOf(), utc: dateObject.toUTCString() });
  }
})

// listen for requests :)
var listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
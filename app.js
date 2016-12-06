const express = require('express');
const bodyParser = require('body-parser');

// initiate an express application
const app = express();

const urlencodedParser = bodyParser.urlencoded({ extended: false })

// set the view engine
app.set('view engine', 'ejs');

// route all static files
app.use('/assets', express.static('assets'));

// set all routings
app.get('/', function(req, res){
    res.render('index');
});

app.get('/contact', function(req, res){
    res.render('contact');
});

app.post('/contact', urlencodedParser, function(req, res){
    // the body-parser will put the form data into req.body
    res.render('contact-success', {formData: req.body});
});


app.get('/profile', function(req, res){

    // retrive data from database
    const person = {
        name : "dennis",
        age : 32,
        job : 'developer',
        hobby : ["movie", "manga", "fishing"]
    }

    // pass the person obj to profile.ejs
    res.render('profile', {person : person});

});

// listen to port 300
app.listen(3000);
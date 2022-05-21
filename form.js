const credentials= require("./credentials")
const express = require("express");
const cookie=require("cookie-parser");
var handlebars = require("express-handlebars")
    .create({defaultLayout:'main',  
});

let app= express();

app.use(cookie('secret','credentials.cookiesecret'))
app.use(express.urlencoded({ extended:true}))
app.use(express.json());
app.engine('handlebars',handlebars.engine)
app.set('view engine', 'handlebars')
app.use(express.static(__dirname + '/public'));
let confirm=''
app.get('/', function(req, res){
    res.render('home')
})

function validatecookies(req,res,next) {
    const {cookies}=req
    console.log(cookies.name)
   if(cookies.name=='sessioning cookie'){
       console.log("user validated")
       next()
   }else{
       console.log("user not validated")
       res.status(404).send(cookies.name)
   }
   

}
var a=9;
var b=10;
const requireJsonContent = (request, response, next) => {
    if (a==b) {
        console.log('1',request.headers['content-type'])
        response.status(400).send('Server requires application/json')
    } else {
        console.log('1a')
      next()
    }
  }
app.post('/process-form',requireJsonContent,function(req, res){
    confirm=req.headers['content-type'];
    res.type('application/json')
      console.log('2',confirm)
      console.log("form submitted")
      res.redirect('/');
     
})
app.use('/form',validatecookies)
app.get('/form',function(req, res){
    res.cookie('session_id','nom nom',{HttpOnly:true})
    res.render('form')
})
 
app.get('/about',function(req, res){
    res.cookie('name','sessioning cookie')
    res.render('about')
})
app.get('/thank-you.html', function(req, res){
    console.log(req.body.name);
})

app.listen(5500, function(req,res){
    console.log('listening on 5500')

})
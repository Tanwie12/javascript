
var calc=require('./module.cjs')
var http=require('http')
let express=require('express')
let upload=require('express-fileupload')
let app=express();
// set up handlebars view engine

var handlebars=require('express-handlebars')
.create({defaultLayout:'main'})
app.engine('handlebars',handlebars.engine)
app.set('view engine', 'handlebars')

// declaring static webpages directory to be served to client
app.use(express.static(__dirname + '/public'))

app.get('/',function(req,res){
    

    res.render('home')

})
app.get('/about',function(req,res){
  
    //var randomimage=image[Math.floor(Math.random()*image.length)]
    res.render('about',{fortune:calc.getFortune()})
    //res.render('about',{img:randomimage})
})
app.use(function(req,res,next){
    res.status(404)
    res.render('404')

})
app.use(function(req,res,next){
    res.status(500)
    res.render('500')
})

app.listen(5500,(req,res)=>{
    console.log("listening on port 5500")

})
// javascript funtiond
 
   
   //var image=['uploads0_lMJk-80b7gr2TkDl.png','uploadsbingo.jpg','uploadsfree-construction-company-joomla-template.jpg']
   
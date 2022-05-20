
var calc=require('./module.cjs')
var http=require('http')
let express=require('express')
let upload=require('express-fileupload')
let app=express();
// set up handlebars view engine
var fortune=calc.fortunes;
var handlebars=require('express-handlebars')
.create({defaultLayout:'main'
          })
app.engine('handlebars',handlebars.engine)
app.set('view engine', 'handlebars')
//app.set('view cache',true)

// declaring static webpages directory to be served to client
app.use(express.static(__dirname + '/public'))

app.get('/',function(req,res){
    

    res.render('home')

})
app.get('/about',function(req,res){
       var ip=req.ip;
       var path=req.path;
       
    //var randomimage=image[Math.floor(Math.random()*image.length)]
    res.render('about',{
        
        ip:ip,
        port:1,
        fortunee:fortune,
        person:{ 
            name:'adey',
            age:30
        }
    })
    //res.render('about',{img:randomimage})
    
})

   
app.use(function(req,res,next){
    res.status(404)
    res.render('404')

})
app.use(function(err,req,res,next){
    res.status(500)
    res.render('500')
})
app.post('/next',(req, res)=>{
    console.log("received contact form"+req.body.name+'<'+req.body.email+'>')
    res.redirect('300','/')

})

app.listen(5500,(req,res)=>{
    console.log(fortune)
    console.log("listening on port 5500")

})
// javascript funtiond
 
   
   //var image=['uploads0_lMJk-80b7gr2TkDl.png','uploadsbingo.jpg','uploadsfree-construction-company-joomla-template.jpg']
  
function getWeatherData(){
 return {
 locations: [
 {
 name: 'Portland',
 forecastUrl: 'http://www.wunderground.com/US/OR/Portland.html',
 iconUrl: 'http://icons-ak.wxug.com/i/c/k/cloudy.gif',
 weather: 'Overcast',
 temp: '54.1 F (12.3 C)',
 },
 {
 name: 'Bend',
 forecastUrl: 'http://www.wunderground.com/US/OR/Bend.html',
 iconUrl: 'http://icons-ak.wxug.com/i/c/k/partlycloudy.gif',
 weather: 'Partly Cloudy',
 temp: '55.0 F (12.8 C)',
 },
 {
 name: 'Manzanita',
 forecastUrl: 'http://www.wunderground.com/US/OR/Manzanita.html',
 iconUrl: 'http://icons-ak.wxug.com/i/c/k/rain.gif',
 weather: 'Light Rain',
 temp: '55.0 F (12.8 C)',
 },
 ],
 };
}
app.use(function(req, res, next){
    if(!res.locals.partials) res.locals.partials = {};
    res.locals.partials.weather = getWeatherData();
    next();
   });
const prettier = require("prettier");
prettier.format(form.js, js);
const credentials = require("./credentials");
const express = require("express");
//const cookie=require("cookie-parser");
const session = require("express-session");
const store = new session.MemoryStore();
var handlebars = require("express-handlebars").create({
  defaultLayout: "main",
});

let app = express();

app.use(
  session({
    store,
    secret: "secret",
    saveUninitialized: false,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/public"));
let confirm = "";
app.get("/", function (req, res) {
  res.render("home");
});

var a = 9;
var b = 10;
const requireJsonContent = (request, response, next) => {
  if (a == b) {
    console.log("1", request.headers["content-type"]);
    response.status(400).send("Server requires application/json");
  } else {
    //console.log('1a')
    next();
  }
};
app.post("/process-form", requireJsonContent, function (req, res) {
  confirm = req.headers["content-type"];
  //res.type('application/json')
  //console.log('2',confirm)
  //console.log("form submitted")
  const { username, password } = req.body;

  if (req.session.authenticated) {
    res.redirect("/");
  } else {
    if (password == "123") {
      req.session.authenticated = true;
      req.session.user = {
        username,
        password,
      };
      res.cookie("user", req.sessionID);
      console.log(req.session);
      console.log(req.cookies);
      console.log(store);
      // res.json(store)
      console.log(store);
    } else {
      res.json("wrong password");
    }
  }
});

//app.use('/form',validatecookies)
app.get("/form", function (req, res) {
  //res.cookie('session_id','nom nom',{HttpOnly:true})
  res.clearCookie("session_id");
  res.render("form");
});

app.get("/about", function (req, res) {
  console.log(store);

  if (req.session.authenticated) {
    res.render("about");
  } else {
    res.redirect("/form");
  }
});
app.get("/thank-you.html", function (req, res) {
  console.log(req.body.name);
});

app.listen(5500, function (req, res) {
  console.log("listening on 5500");
});

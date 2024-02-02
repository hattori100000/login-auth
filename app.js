// const express = require("express")
// const expressLayouts = require("express-ejs-layouts")
// const mongoose = require("mongoose")
// const app = express()
// const port = process.env.port || 8000
// const flash = require('connect-flash')
// const session = require('express-session')

// const bodyParser = require('body-parser');
// const passport = require("./db/passport")


// require('./db/connect')

// //passport config
// require('./db/passport')(passport)



// //body parsere
// app.use(bodyParser.urlencoded({ extended: true }));

// //Expreess seession
// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: true }
// }))
 
// //passport middleware
// app.use(passport.initialize());
// app.use(passport.session());


// //connect flash
// app.use(flash())

// //Global variable
// app.use((req, res, next) => {
//   res.locals.success_msg = req.flash('success_msg')
//   res.locals.error_msg = req.flash('error_msg')
//   next()
// })

// //ejs
// app.use(expressLayouts);
// app.set ( "view engine" , "ejs")


// //router
// app.use('/' , require('./routes/index'))
// app.use('/users' , require('./routes/users'))


// app.listen(port , ()=> {
//   console.log(`this is listend at the port no ${port}`)
// })
const express = require("express")
const expressLayouts = require("express-ejs-layouts")
const mongoose = require("mongoose")
const app = express()
const port = process.env.port || 8000
const flash = require('connect-flash')
const session = require('express-session')

const bodyParser = require('body-parser');
const passport = require('passport');
// Rename this to avoid conflicts

require('./db/connect')

//passport config
require('./db/passport')(passport)

//body parser
app.use(bodyParser.urlencoded({ extended: true }));

//Express session
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))
 
//passport middleware
app.use(passport.initialize());
app.use(passport.session());

//connect flash
app.use(flash())

//Global variable
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg')
  res.locals.error_msg = req.flash('error_msg')
  res.locals.error = req.flash('error')
  next()
})

//ejs
app.use(expressLayouts);
app.set("view engine", "ejs")

//router
app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))

app.listen(port, () => {
  console.log(`This is listening at the port no ${port}`)
})

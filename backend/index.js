const express = require('express')
const cors = require('cors')
// ========== app.js 에서 이동한 부분 //
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var showAllDataRouter = require('./routes/show-all-data');
var loginRouter = require('./routes/login'); // 현재 사용중
var joinRouter = require('./routes/join');  // 현재 사용중
var passwordChangeRouter = require('./routes/password-change');



// ========== app.js 에서 이동한 부분 //

const app = express();
const bodyParser = require('body-parser');
const port = process.env.port || 3000;

let corsOptions = {
    origin: 'http://localhost:8080'
}

app.use(cors(corsOptions));

// ========== app.js 에서 이동한 부분 //
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/show-all-data', showAllDataRouter);
app.use('/login', loginRouter);
app.use('/join', joinRouter);
app.use('/password', passwordChangeRouter);




var boardRouter = require('./routes/board')
app.use('/board', boardRouter)

// ========== app.js 에서 이동한 부분 //

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

// ========== app.js 에서 이동한 부분 //
const mariaDB = require('./mysql-db');
mariaDB.connect();

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
// ========== app.js 에서 이동한 부분 //


app.get("/", (req,res) =>{
    res.json({message: "Welcome"});
})

const cookieSession = require('cookie-session')
const isLoggedIn = require('./Middleware/auth')

app.use(cookieSession({
  name: 'google-auth-session',
  keys: ['key1', 'key2']
}))

const db = require('./app/models')
db.sequelize.sync()

app.get('/auth/error', (req, res) => res.send('Unknown Error'))

// 처음 접속 경로 (localhost:3000/)로 접속했을 때 login이 되어있는지 확인
app.get('/', isLoggedIn,(req, res) => res.send(`Welcome ${req.user.displayName} ${req.user.emails[0]['value']} !`))
app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/auth');
})

// require("./routes/board.routes.js")(app); //어메이징한 부분


// ========== app.js 에서 이동한 부분 //
module.exports = app;
// ========== app.js 에서 이동한 부분 //


app.listen(3000,()=>{
  console.log('Serve is up and running at the port' + port)
})  
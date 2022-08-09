const createError = require('http-errors');
const express = require('express');
const {createServer} = require('http');
const {Server} = require("socket.io");
const SocketIOFileUpload = require("socketio-file-upload");
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const fs = require('fs');

const indexRouter = require('./routes/index');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  maxHttpBufferSize: 1e8,
  pingTimeout: 60000,
  cors: {
    origin: '*',
  }
})

// Socket.io File Uploader
// app.use(SocketIOFileUpload.router);

// DB Config
const db = require('./config/keys').mongoURI;

//Enable CORS
app.use(cors());

// Connect to MongoDB
// mongoose
//     .connect(db, { useNewUrlParser: true })
//     .then(() => console.log('MongoDB Connected'))
//     .catch(err => console.log(err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../frontend/build')));

app.use('/api/', indexRouter);
// app.use('/users', usersRouter);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


io.on("connection", (socket) => {
  // console.log("socket connected successfully");

  socket.on('reteriveFiles', (foldername) => {
    console.log(foldername);
    const basePath = path.join(__dirname, `uploads/${foldername}`);
    fs.readdir(basePath, function (err, filenames) {
      if (err) return;

      const files = [];
      for (let i = 0; i < filenames.length; i++) {
        const filename = filenames[i];
        const file = fs.statSync(path.join(basePath, filename))

        files.push({
          file: {
            name: filename,
            size: file.size,
            type: filename.split('.').pop()
          },
          uploaded: true,
        });
      }

      socket.emit('savedFiles', files)
    });
  })

  socket.on('fileUpload', (files) => {
    const fileNames = []
    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      fs.mkdirSync(`${__dirname}/uploads/${file.folder}`, {recursive: true})
      fs.writeFileSync(`${__dirname}/uploads/${file.folder}/${file.filename}`, file.file, 'binary');

      fileNames.push(file.filename)
    }

    socket.emit("success", fileNames)
  })

  socket.on('disconnect', () => {
    console.log('Disconnected');
  });
})

httpServer.listen(80, () => {
  console.log('server listening on port 80');
})

module.exports = app;

import { createError } from 'http-errors';
import express from 'express';
import { graphiqlExpress } from 'apollo-server-express';
import { connect } from './config/database';
import { graphQLRouter } from './api';

const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('../webpack.config.js');

const compiler = webpack(config);

const indexRouter = require('./routes/index');

const app = express();
connect();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  }),
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/graphql', graphQLRouter);
app.use('/docs', graphiqlExpress({ endpointURL: '/graphql' }));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// // error handler
// app.use((err, req, res) => {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('errors');
// });

module.exports = app;

// Application configuration - environment settings here are the same across
// all environments. To override settings locally, move "user.example.js" to
// "user.js"
let config = {};

// ---------------------------------------------------------------
// Config values common across environments (overridable defaults)
// ---------------------------------------------------------------

// HTTP port for Express
config.port = process.env.PORT || 4000;

// ----------------------------------------------------
// Assign values based on current execution environment
// ----------------------------------------------------
let environmentSettings = {};
switch (process.env.NODE_ENV) {
  case 'production':
    environmentSettings = require('./production');
    break;
  case 'testing':
    environmentSettings = require('./testing');
    break;
  default:
    environmentSettings = require('./development');
    break;
}

// Options for Sequelize ORM connection - overrides in production and test
// environments
config.databaseUrl = `mongodb://${process.env.DB_USERNAME}:${
  process.env.DB_PASSWORD
}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

console.log(config);

config = Object.assign(config, environmentSettings);

// Export final configuration object
module.exports = config;

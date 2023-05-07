const  config  = require('./../knexfile.js');
const knex = require('knex')(config);


knex.migrate.latest([config])
  .then(() => {
    console.log('All database migrations successful')
  })
  .catch((error) => {
    console.error('Error running database migrations:', error)
  })

module.exports = knex

require('dotenv').config()

module.exports = {
      client: 'pg',
      connection: {
      // URL: process.env.DATABASE_URL
      // host: process.env.DB_HOST,
      // port: process.env.PORT_DATA_BASE,
      database: process.env.DATA_BASE,
      user: process.env.USER_DATA_BASE,
      password: process.env.PASSWORD_DATA_BASE,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
    },
};

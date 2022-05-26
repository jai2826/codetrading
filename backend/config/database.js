module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_host', "db-postgresql-blr1-71263-do-user-11624818-0.b.db.ondigitalocean.com" ),
      port: env.int('DATABASE_port', 25060),
      database: env('DATABASE_database', "defaultdb"),
      user: env('DATABASE_username', "doadmin"),
      password: env('DATABASE_password', "AVNS_W91i24LNQ224Ryf hide"),
      schema: env('DATABASE_schema', "public")
    },
  },
});

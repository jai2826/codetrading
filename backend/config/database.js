module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_host' ),
      port: env.int('DATABASE_port'),
      database: env('DATABASE_database'),
      user: env('DATABASE_username'),
      password: env('DATABASE_password'),
      ssl: env.bool('DATABASE_sslmode'),
    },
  },
});

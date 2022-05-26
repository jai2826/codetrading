module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('host', '127.0.0.1'),
      port: env.int('port', 5432),
      database: env('database', 'codeblogs'),
      user: env('username', 'postgres'),
      password: env('password', 'Jaip2826@'),
      ssl: {
        rejctUnauthorized:false,
      },
      sslmode: env('sslmode', "require")
    },
  },
});

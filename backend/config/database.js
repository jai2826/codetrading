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
    acquireConnectionTimeout: 10000,
    pool: {
      min: 0,
      max: 1,
      acquireTimeoutMillis: 300000,
      createTimeoutMillis: 300000,
      destroyTimeoutMillis: 300000,
      idleTimeoutMillis: 30000,
      reapIntervalMillis:1000,
      createRetryIntervalMillis: 2000
    },
},
});

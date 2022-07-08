module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "codeblogs"),
      user: env("DATABASE_USER", "postgres"),
      password: env("DATABASE_PASSWORD", "Jaip2826@"),
      sslmode: env("sslmode", "require"),
    },
    acquireConnectionTimeout: 1000000,
    pool: {
      min: 0,
      max: 5,
      acquireTimeoutMillis: 300000,
      createTimeoutMillis: 300000,
      destroyTimeoutMillis: 300000,
      idleTimeoutMillis: 30000,
      reapIntervalMillis: 1000,
      createRetryIntervalMillis: 2000,
    },
  },
});

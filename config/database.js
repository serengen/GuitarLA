module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-ce1n4pda4996ndtoo7ng-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_hrhu'),
      user: env('DATABASE_USERNAME', 'serengen'),
      password: env('DATABASE_PASSWORD', '4NofoUQ5kTmHxwrGoPk8iEbZnomPo1ZV'),
      "ssl": { "rejectUnauthorized": false }
    },
  },
});

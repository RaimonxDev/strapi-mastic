module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'postgres'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi_mastic_db'),
        username: env('DATABASE_USERNAME', 'ramon'),
        password: env('DATABASE_PASSWORD', 'A_dreina_877'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});

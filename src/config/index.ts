export default () => ({
  env: process.env.APP_ENV || 'development',
  node_env: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT, 10) || 3000,
  db: {
    host: process.env.DATABASE_HOST || '0.0.0.0',
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    name: process.env.DATABASE_NAME || 'posteon',
    username: process.env.DATABASE_USER || 'postgres',
    password: process.env.DATABASE_PASSWORD || 'asdqwe123',
  },
});

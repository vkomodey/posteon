export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    host: process.env.DATABASE_HOST || '0.0.0.0',
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  },
});

export default {
  dsn: process.env.NODE_ENV === 'production' ? process.env.SENTRY_DSN : '',
};

export default {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_PORT,
    pass: process.env.MAIL_PASS,
  },
  secure: false,
  default: {
    from: 'José Eduardo - Equipe GoBarber <noreply@gobarber.com',
  },
};

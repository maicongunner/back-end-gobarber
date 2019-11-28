export default {
  host: process.env.MAIL_HOST, // 'smtp.mailtrap.io',
  port: process.env.MAIL_PORT, // '2525',
  secure: false,
  auth: {
    user: process.env.MAIL_USER, // 'd6876b789f6c40',
    pass: process.env.MAIL_PASS, // '14dabbabbc20bf',
  },
  default: {
    from: 'Equipe GoBarber <noreply@gobarber.com>',
  },
};

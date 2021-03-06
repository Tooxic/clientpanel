const nodemailer = require('nodemailer');
const crypto = require('crypto');
const Logger = require('../lib/customLogs');

module.exports = {
  /**
   *
   * @param email The email of the user.
   * @param account The account name for the user.
   * @param callback Returns the conf
   */
  resetPasswordEmail: async function (email, account, callback) {
    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SSL, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL, // generated ethereal user
        pass: process.env.EMAIL_PASSWORD, // generated ethereal password
      },
    });
    const conf = crypto.randomBytes(10).toString('hex');
    try {
      await transporter.sendMail({
        from: '"Sweplox hosting" <no-reply@sweplox.se>', // sender address
        to: `${email}`, // list of receivers
        subject: `Activation email for ${account}`, // Subject line
        text: `Reset password for ${account}`, // plain text body
        html: `Reset password email for ${account}, https://client.sweplox.net/restore/${conf}`, // html body
      });
    } catch (err) {
      Logger.warn(err);
    }
    callback({
      conf: conf,
    });
  },
};

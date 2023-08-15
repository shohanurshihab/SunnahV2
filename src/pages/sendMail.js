import nodemailer from 'nodemailer'
// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "b626a65e1fdb1e",
    pass: "3b9ea2026cab84"
  }
});

export default transporter;

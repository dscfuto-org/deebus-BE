// const nodemailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");

// create reusable transporter object using the default SMTP transport
// let transporter = nodemailer.createTransport({
// 	host: process.env.EMAIL_SMTP_HOST,
// 	port: process.env.EMAIL_SMTP_PORT,
// 	//secure: process.env.EMAIL_SMTP_SECURE, // lack of ssl commented this. You can uncomment it.
// 	auth: {
// 		user: process.env.EMAIL_SMTP_USERNAME || "apiKey",
// 		pass: process.env.EMAIL_SMTP_PASSWORD || "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"
// 	}
// });

exports.send = function (from, to, subject, html)
{
	// send mail with defined transport object
	// visit https://nodemailer.com/ for more options
	// return transporter.sendMail({
	// 	from: from, // sender address e.g. no-reply@xyz.com or "Fred Foo 👻" <foo@example.com>
	// 	to: to, // list of receivers e.g. bar@example.com, baz@example.com
	// 	subject: subject, // Subject line e.g. 'Hello ✔'
	// 	//text: text, // plain text body e.g. Hello world?
	// 	html: html // html body e.g. '<b>Hello world?</b>'
	// });
	sgMail.setApiKey(process.env.SENDGRID_API_KEY);
	const msg = {
		to,
		from,
		subject,
		text: `${html}`,
		html,
	};

	return sgMail.send(msg);
};
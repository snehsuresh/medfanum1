const express = require("express");
const router = new express.Router();
const nodemailer = require("nodemailer");


// async function sendMail(data) {
//   // Generate test SMTP service account from ethereal.email
//   // Only needed if you don't have a real mail account for testing
//   let testAccount = await nodemailer.createTestAccount();

//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: testAccount.user, // generated ethereal user
//       pass: testAccount.pass, // generated ethereal password
//     },
//   });
//   console.log('---',testAccount)
//   // send mail with defined transport object
//   let info = await transporter.sendMail({
//     from: `"Fred Foo 👻" devtanvirkhan@gmail.com`, // sender address
//     to: "snehsuresh02@gmail.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: data.message, // plain text body
//     html: "<b>Hello world?</b>", // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }




router.post("/emailus", (req,res)=>{
	// console.log(JSON.parse(req.body));
	console.log('Hey there')
	console.log(req.body);
	const {email, message} = req.body;

	try {
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.EMAIL,
				pass : process.env.PASSWORD
			}
		})
		const mailOptions = {
			from: email,
			to: process.env.EMAIL,
			subject: "Medfanum Client Mail",
			html: `<p>${message}</p>`
		}

		transporter.sendMail(mailOptions, (error, info)=>{
			if(error){
				console.log('Error', error)
			}else{
				console.log(('Email send'+ info.response))
				res.status(201).json({status:201,info})
			}
		})
		
	} catch (error) {
		res.status(401).json({status:401,error})
	}

	// sendMail(req.body)
})

module.exports = router;
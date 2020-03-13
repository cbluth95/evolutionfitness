const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

// Send Contact Email
router.post("/send", (req, res) => {
  // TODO: Add better server side validation.
  let reqArr = [];
  let valid = false;

  Object.keys(req.body).forEach(item => {
    reqArr.push(item);
  });

  if (reqArr.length >= 4) {
    valid = true;
  }

  if (valid) {
    const email = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      msg: req.body.msg
    };
    // let transporter = nodemailer.createTransport({
    //   host: "mail.themovies3.com",
    //   port: 465,
    //   secure: false,
    //   auth: {
    //     user: "contact@themovies3.com",
    //     pass: "Boxoffice3!"
    //   }
    // });
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "crackerjack0903@gmail.com",
        pass: "vjonrygfmklcwyud"
      }
    });
    let ContactMailOptions = {
      from: '"Evolution Fitness Contact Form" <themovies3.com>',
      to: "cjb9252@gmail.com",
      subject: "New message from your contact form!",
      html: `
      <div style="background-color: #F5F5F5;">
      <h2 style="text-align: center;">Sender Message:</h2>
      <h4 style="text-align:center;">${email.name} said:</h4>
      <p style="text-align:center;font-size:20px;">${email.msg}</p>
      <br>
      <h2 style="color: red;">Sender Info:</h2>
        <p>Name: ${email.name}</p>
        <p>Email: ${email.email}</p>
        <p>Phone: <a href="tel:${email.phone}">${email.phone}</a></p>
      </div>
      `
    };
    transporter.sendMail(ContactMailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    });
    res.status(201).send("Message has been sent");
  } else {
    let err = "Cannot Send message. Form is not complete";
    console.log(err);
    res.send(err);
  }
});

module.exports = router;

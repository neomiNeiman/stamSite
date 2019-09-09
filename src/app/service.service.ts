import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  constructor() { }

  sendEmail(name: string, family: string, email: string, phone: string, hodaaLakoach: string) {
    console.log(name, family, email, phone, hodaaLakoach);
//    const nodemailer = require('nodemailer');
//
//    const transporter = nodemailer.createTransport({
//  service: 'gmail',
//  auth: {
//    user: 'neomi4170@gmail.com',
//    pass: '208482661'
//  }
// });s
//
//    const mailOptions = {
//    from: email,
//    to: 'neomi4170@gmail.com',
//    subject: 'Sending Email using Node.js',
//    text: 'That was easy!'
//  };
//
//    transporter.sendMail(mailOptions, function(error, info) {
//  if (error) {
//    console.log(error);
//  } else {
//    console.log('Email sent: ' + info.response);
//  }
// });
  }
}

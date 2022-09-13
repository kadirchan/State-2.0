import { Component, OnInit } from '@angular/core';
// import { createTransport } from 'nodemailer';
@Component({
  selector: 'app-make-appoinment',
  templateUrl: './make-appoinment.component.html',
  styleUrls: ['./make-appoinment.component.css'],
})
export class MakeAppoinmentComponent implements OnInit {
  transporter!: any;
  constructor() {}

  ngOnInit(): void {
    this.transporter =
      // createTransport
      {
        service: 'gmail',
        auth: {
          user: 'kadircanbozkurt614@gmail.com',
          pass: 'wxG-QuYf4dvJn:7',
        },
      };
  }

  sendMail() {
    let mailoptions = {
      from: 'kadircanbozkurt614@gmail.com',
      to: 'sikishcan@gmail.com',
      subject: 'Test',
      text: 'selam',
    };
    // this.transporter.sendMail(mailoptions, (err: any, data: any) => {
    // if (err) console.log(err);
    // else console.log('mail gitti.');
    // });
  }
}

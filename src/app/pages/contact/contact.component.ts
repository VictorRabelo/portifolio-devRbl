import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ControllerBase } from '@app/controller/controller.base';
import { AppService } from '@app/services/app.service';
import { MessageService } from '@app/services/message.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent extends ControllerBase {

  loading: Boolean = false;

  constructor(
    private title: Title,
    private service: AppService,
    private message: MessageService,
    private spinner: NgxSpinnerService
  ) {
    super();
  }

  ngOnInit(): void {
    this.title.setTitle('DevRbl | Contact');
  }

  sendMail(form: NgForm): any {
    if (!form.valid) {
      this.message.toastWarning('Fill in the required fields!')
      return false;
    }

    this.spinner.show();
    this.service.sendMail(form.value).then((res) => {
      form.reset();
      this.spinner.hide();
      this.message.toastSuccess('Email sent successfully!', 'Thank you very much!');
    }, (err) => {
      this.spinner.hide();
      this.message.toastError('Please try again later!', 'Sending failed!')
    })
  }

}

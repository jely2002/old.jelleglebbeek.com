import { Component, OnInit } from '@angular/core';
import { FormService } from '../services/form.service';
import { Headers, Response } from '@angular/http';
import { NgForm } from '@angular/forms';
import { FormSubmission } from './FormSubmission'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  submissions: FormSubmission = { first_name: '', last_name: '', email: '', message: ''};

  validated = false;
  showForm = true;

  constructor(private formService:FormService) {}

  validate(res, inst) {
    if(res) {
      inst.validated = true;
    } else {
      inst.validated = false;
    }
  }


  serverValidate(key) {
    this.formService.request().post('../new/assets/mail/captcha.php', {
      response: key
    })
      .subscribe(
        (data) => {
          data = JSON.parse(data['_body']);
          this.validate(data, this);
        },
       (err: Error) => console.log(err)
      );
  }

  removeForm() {
    this.showForm = false;
    console.log(this.showForm)
  }

  submitForm(form:NgForm) {
    if(this.submissions.first_name != "" && this.submissions.last_name != "" && this.submissions.email != "" && this.submissions.message != ""){
    this.formService.request().post('../new/assets/mail/mail.php/', form.value)
      .subscribe(
        (data) => {},
       (err: Error) => console.log(err)
      );
    }
    this.removeForm();
  }

  ngOnInit() {
    console.log(this.showForm);
  }

}

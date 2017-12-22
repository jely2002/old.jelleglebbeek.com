import { Component, OnInit } from '@angular/core';
import { FormService } from '../services/form.service';
import { Headers, Response } from '@angular/http';
import { NgForm } from '@angular/forms';
import { FormSubmission } from 'form-submission'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  submissions: FormSubmission = { first_name: '', last_name: '', email: '', message: ''};

  constructor(private formService:FormService) {
  }

  submitForm(form:ngForm) {
    if(this.submissions.first_name != "" && this.submissions.last_name != "" && this.submissions.email != "" && this.submissions.message != ""){
    this.formService.request().post('../assets/mail/mail.php/', form.value)
      .subscribe(
        (data) => {
         console.log(data);
       },
       (err: Error) => console.log(err)
      );
    }
  }

  ngOnInit() {

  }

}

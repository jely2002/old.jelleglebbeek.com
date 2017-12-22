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

  constructor(private formService:FormService) {
  }

  removeForm() {
    $('.contact').html('<p style="  display: block; border-radius: 20px; padding: 5%; background-color: rgba(76, 175, 80, 0.4); font-size: 15px;" class="center">Thanks for submitting the contact form!</p>').fadeIn(1200);
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

  }

}

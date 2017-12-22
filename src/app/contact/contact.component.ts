import { Component, OnInit } from '@angular/core';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private formService:FormService) {
  }

  ngOnInit() {
    this.formService.http.post('http://jelleglebbeek.com/walksimulator/verify.php/')
      .subscribe(
        (res: Response) => {
         this.data = res;
         console.log(this.data)
       },
       (err: Error) => console.log(err)
      );
  }

}

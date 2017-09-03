import { Component, OnInit } from '@angular/core';
import { ContactModel } from '../../models/contact.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  states = ['', 'CA'];
  countries = ['', 'United States']
  model = new ContactModel(
    'Derrick Pedranti',
    'derrick@c2designstudio.com',
    'Irvine',
    'CA',
    'United States',
  );
  submitted = false;

  constructor() { }

  onSubmit() { this.submitted = true };

  // TODO: Remove this and persist to database instead
  get diagnostic() { return JSON.stringify(this.model); }

  ngOnInit() {
  }

}

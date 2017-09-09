import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { ContactModel } from '../../models/contact.model';
import states from 'datasets-us-states-names';
import countries from 'country-list';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  private countryNames = countries().getNames();
  private stateNames = states;

  model = new ContactModel(
    'Derrick Pedranti',
    'derrick@c2designstudio.com',
    'Irvine',
    'California',
    'United States',
  );
  submitted = false;

  constructor() { }

  searchState = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 2 ? []
        : this.stateNames.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));

  searchCountry = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 2 ? []
        : this.countryNames.filter(c => c.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));

  onSubmit() { this.submitted = true };

  // TODO: Remove this and persist to database instead
  get diagnostic() { return JSON.stringify(this.model); }

  ngOnInit() {
  }

}

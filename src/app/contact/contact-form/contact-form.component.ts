import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { ContactModel } from '../../models/contact.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import states from 'datasets-us-states-names';
import countries from 'country-list';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  private countryNames = countries().getNames();
  private stateNames = states;

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-z0-9_.]+@[a-zA-Z]+.[a-zA-Z]+')
    ]),
    phone: new FormControl(''),
    company: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    zip: new FormControl(''),
    country: new FormControl('', [Validators.required]),
    comments: new FormControl('')
  });

  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get city() {
    return this.contactForm.get('city');
  }

  get state() {
    return this.contactForm.get('state');
  }

  get country() {
    return this.contactForm.get('country');
  }

  searchState = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(
        term =>
          term.length < 2
            ? []
            : this.stateNames
                .filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)
                .slice(0, 10)
      )
    );

  searchCountry = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(
        term =>
          term.length < 2
            ? []
            : this.countryNames
                .filter(c => c.toLowerCase().indexOf(term.toLowerCase()) > -1)
                .slice(0, 10)
      )
    );
}

// export class ContactFormComponent implements OnInit {
//   private countryNames = countries().getNames();
//   private stateNames = states;

//   model = new ContactModel(
//     'Derrick Pedranti',
//     'derrick@c2designstudio.com',
//     'Irvine',
//     'California',
//     'United States'
//   );
//   submitted = false;

//   constructor() {}

//   searchState = (text$: Observable<string>) =>
//     text$.pipe(
//       debounceTime(200),
//       distinctUntilChanged(),
//       map(
//         term =>
//           term.length < 2
//             ? []
//             : this.stateNames
//                 .filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)
//                 .slice(0, 10)
//       )
//     );

//   searchCountry = (text$: Observable<string>) =>
//     text$.pipe(
//       debounceTime(200),
//       distinctUntilChanged(),
//       map(
//         term =>
//           term.length < 2
//             ? []
//             : this.countryNames
//                 .filter(c => c.toLowerCase().indexOf(term.toLowerCase()) > -1)
//                 .slice(0, 10)
//       )
//     );

//   onSubmit() {
//     this.submitted = true;
//   }

//   // TODO: Remove this and persist to database instead
//   get diagnostic() {
//     return JSON.stringify(this.model);
//   }

//   ngOnInit() {}
// }

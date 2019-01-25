import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import states from 'datasets-us-states-names';
import countries from 'country-list';
import { IContact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  private countryNames = countries().getNames();
  private stateNames = states;
  public readonly siteKey = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';

  submitted = false;
  errorMessage = '';
  contact: IContact[] | undefined;

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
    comments: new FormControl(''),
    recaptcha: new FormControl('', [Validators.required])
  });

  constructor(private contactService: ContactService) {}

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
      map(term =>
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
      map(term =>
        term.length < 2
          ? []
          : this.countryNames
              .filter(c => c.toLowerCase().indexOf(term.toLowerCase()) > -1)
              .slice(0, 10)
      )
    );

  onSubmit() {
    this.contactService.saveContact(this.contactForm.value).subscribe(
      (contact: IContact[]) => {
        this.contact = contact;
        this.submitted = true;
      },
      (err: any) => console.error(err)
    );
  }
}

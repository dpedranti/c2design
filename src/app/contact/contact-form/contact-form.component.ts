import { Component } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import states from 'datasets-us-states-names';
import countries from 'country-list';
import { IContact } from '../contact';
import { ContactService } from '../contact.service';
import { ToastrService } from '../../toastr/toastr.service';

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

  constructor(
    private contactService: ContactService,
    private toastrService: ToastrService
  ) {}

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
    const { value } = this.contactForm;
    const keys = Object.keys(value).filter(k => k !== 'recaptcha');
    const emailMessage = {
      to: 'derrick@c2designstudio.com', // TODO: Get from config
      subject: 'C2 Design Contact Form Submission',
      name: 'C2 Design',
      html: keys.map(k => `<p>${k}: ${value[k]}</p>`).join(' ')
    };
    const saveContact = this.contactService.saveContact(value);
    const emailContact = this.contactService.emailContact(emailMessage);
    forkJoin([saveContact, emailContact]).subscribe(
      response => {
        this.contact = response[0];
        this.submitted = true;
        this.toastrService.success({
          title: 'Success!',
          message: 'We received your form submission and will be in touch soon.'
        });
      },
      (err: any) => {
        this.toastrService.error({
          message: 'There was an error submitting your form. Please try again.'
        });
        console.error(err);
      }
    );
  }
}

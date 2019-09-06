import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle(
      'Orange County Web Development and Design - C2 Design Studio'
    );
    /* tslint:disable:max-line-length */
    this.meta.addTag({
      name: 'description',
      content:
        'Orange County mobile / web development and user experience design from Derrick Pedranti at C2 Design Studio.'
    });
    /* tslint:enable:max-line-length */
  }
}

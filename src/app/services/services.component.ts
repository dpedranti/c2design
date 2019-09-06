import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  openAccordions = [
    'web-mobile',
    'online-marketing',
    'all-digital',
    'web-maintenance'
  ];

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle(
      'Web / Mobile Development and Design Services - C2 Design Studio'
    );
    /* tslint:disable:max-line-length */
    this.meta.addTag({
      name: 'description',
      content:
        'Web and mobile design and development, online marketing, digital design and user experience analysis from C2 Design Studio.'
    });
    /* tslint:enable:max-line-length */
  }
}

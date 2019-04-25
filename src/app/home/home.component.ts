import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle(
      'Web / Mobile Development and Design - C2 Design Studio'
    );
    /* tslint:disable:max-line-length */
    this.meta.addTag({
      name: 'description',
      content:
        'Orange County web / mobile development, online marketing and graphic design services from C2 Design Studio and Derrick Pedranti.'
    });
    /* tslint:enable:max-line-length */
  }

  ngOnInit() {}
}

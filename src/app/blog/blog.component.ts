import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle(
      'Web / Mobile Design and Marketing Insights - C2 Design Studio'
    );
    /* tslint:disable:max-line-length */
    this.meta.addTag({
      name: 'description',
      content:
        'Web and mobile design, online marketing, digital design and user experience insights from Derrick Pedranti and C2 Design Studio.'
    });
    /* tslint:enable:max-line-length */
  }
}

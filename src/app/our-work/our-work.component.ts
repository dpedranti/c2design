import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { uniqueId } from 'lodash';
import { WEB, MARKETING, DIGITAL_SIGNAGE } from './portfolio-items';

@Component({
  selector: 'app-our-work',
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.scss']
})
export class OurWorkComponent {
  modalImage: string;
  modalVideo: string;
  modalTitle: string;
  modalIndex: string;

  web = WEB;
  marketing = MARKETING;
  digitalSignage = DIGITAL_SIGNAGE;

  constructor(
    private title: Title,
    private meta: Meta,
    private modalService: NgbModal
  ) {
    this.title.setTitle(
      'User-centered Design and Web Development - C2 Design Studio'
    );
    /* tslint:disable:max-line-length */
    this.meta.addTag({
      name: 'description',
      content:
        'User-centered web, online marketing and digital graphic design work from C2 Design Studio.'
    });
    /* tslint:enable:max-line-length */
  }

  openModal(content, portfolioItem) {
    this.modalService.open(content, { size: 'lg' });
    this.modalImage = portfolioItem.img;
    this.modalVideo = portfolioItem.video;
    this.modalTitle = portfolioItem.title;
    this.modalIndex = uniqueId();
  }
}

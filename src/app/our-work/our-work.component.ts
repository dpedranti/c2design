import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { uniqueId } from 'lodash';
import { WEB, MARKETING, DIGITAL_SIGNAGE } from './portfolio-items';

@Component({
  selector: 'app-our-work',
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.scss']
})
export class OurWorkComponent implements OnInit {
  modalImage: string;
  modalVideo: string;
  modalTitle: string;
  modalIndex: string;

  web = WEB;
  marketing = MARKETING;
  digitalSignage = DIGITAL_SIGNAGE;

  constructor(private modalService: NgbModal) {}

  openModal(content, portfolioItem) {
    this.modalService.open(content, { size: 'lg' });
    this.modalImage = portfolioItem.img;
    this.modalVideo = portfolioItem.video;
    this.modalTitle = portfolioItem.title;
    this.modalIndex = uniqueId();
  }

  ngOnInit() {}
}

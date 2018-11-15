import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PORTFOLIO_WEB, PORTFOLIO_MARKETING } from './portfolio-items';

@Component({
  selector: 'app-our-work',
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.scss']
})
export class OurWorkComponent implements OnInit {
  modalImage: string;
  modalTitle: string;

  portfolioWeb = PORTFOLIO_WEB;
  portfolioMarketing = PORTFOLIO_MARKETING;

  constructor(private modalService: NgbModal) {}

  openModal(content, portfolioItem) {
    this.modalService.open(content, { size: 'lg' });
    this.modalImage = portfolioItem.img;
    this.modalTitle = portfolioItem.title;
  }

  ngOnInit() {}
}

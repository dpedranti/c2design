import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  openAccordions = [
    'web-mobile',
    'online-marketing',
    'all-digital',
    'web-maintenance'
  ];

  constructor() {}

  ngOnInit() {}
}

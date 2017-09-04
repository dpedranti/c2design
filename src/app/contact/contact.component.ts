import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  iconUrl = '../../assets/images/icon-map-marker.svg';
  lat = 33.6864427;
  lng = -117.9134737;
  zoom = 10;
  styles = [
    {
      'featureType': 'administrative',
      'elementType': 'all',
      'stylers': [
        {
          'saturation': '-100'
        }
      ]
    },
    {
      'featureType': 'administrative.province',
      'elementType': 'all',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'landscape',
      'elementType': 'all',
      'stylers': [
        {
          'saturation': -100
        },
        {
          'lightness': 65
        },
        {
          'visibility': 'on'
        }
      ]
    },
    {
      'featureType': 'poi',
      'elementType': 'all',
      'stylers': [
        {
          'saturation': -100
        },
        {
          'lightness': '50'
        },
        {
          'visibility': 'simplified'
        }
      ]
    },
    {
      'featureType': 'road',
      'elementType': 'all',
      'stylers': [
        {
          'saturation': '-100'
        }
      ]
    },
    {
      'featureType': 'road.highway',
      'elementType': 'all',
      'stylers': [
        {
          'visibility': 'simplified'
        }
      ]
    },
    {
      'featureType': 'road.arterial',
      'elementType': 'all',
      'stylers': [
        {
          'lightness': '30'
        }
      ]
    },
    {
      'featureType': 'road.local',
      'elementType': 'all',
      'stylers': [
        {
          'lightness': '40'
        }
      ]
    },
    {
      'featureType': 'transit',
      'elementType': 'all',
      'stylers': [
        {
          'saturation': -100
        },
        {
          'visibility': 'simplified'
        }
      ]
    },
    {
      'featureType': 'water',
      'elementType': 'geometry',
      'stylers': [
        {
          'hue': '#ffff00'
        },
        {
          'lightness': -25
        },
        {
          'saturation': -97
        }
      ]
    },
    {
      'featureType': 'water',
      'elementType': 'labels',
      'stylers': [
        {
          'lightness': -25
        },
        {
          'saturation': -100
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

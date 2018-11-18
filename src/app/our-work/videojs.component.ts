import { Component, OnInit, AfterViewInit, Input } from '@angular/core';

import videojs from 'video.js';

@Component({
  selector: 'app-videojs',
  template: `
    <video
      *ngIf="url"
      id="video_{{idx}}"
      class="video-js vjs-default-skin vjs-big-play-centered vjs-16-9"
      controls
      preload="auto"
      width="800"
      height="450"
    >
      <source [src]="url" type="video/mp4" />
    </video>
  `
})
export class VideoJSComponent implements OnInit, AfterViewInit {
  @Input() idx: string;
  @Input() url: any;

  private player: any;

  constructor() {
    this.url = false;
    this.player = false;
  }

  ngOnInit() {}

  ngAfterViewInit() {
    const el = 'video_' + this.idx;

    this.player = videojs(document.getElementById(el), {}, function() {
      const videoPlayer = this;
      const id = videoPlayer.id();
      const aspectRatio = 450 / 800;

      function resizeVideoJS() {
        const width = document.getElementById(id).parentElement.offsetWidth;
        videoPlayer.width(width);
        videoPlayer.height(width * aspectRatio);
      }

      resizeVideoJS();

      window.onresize = resizeVideoJS;
    });
  }
}

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
      autoplay
      preload="auto"
      width="768"
      height="432"
    >
      <source [src]="url" [type]="type" />
    </video>
  `
})
export class VideoJSComponent implements OnInit, AfterViewInit {
  @Input() idx: string;
  @Input() url: any;
  @Input() type = 'video/mp4';

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
      const aspectRatio = 768 / 1366;

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

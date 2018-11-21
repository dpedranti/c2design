import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-swf',
  template: `
    <div
      [ngClass]="['flash-content', className]"
      [innerHtml]="htmlSnippet | safe: 'html'"
    ></div>
  `,
  styleUrls: ['./swf.component.scss']
})
export class SwfComponent implements OnInit {
  @Input() className: string;
  @Input() idx: string;
  @Input() url: any;

  htmlSnippet: string;

  constructor() {}

  ngOnInit() {
    this.htmlSnippet = `
    <object
      classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
      width="100%"
      height="100%"
      id="${this.idx}"
      align="middle"
    >
      <param name="movie" value="${this.url}" />
      <param name="quality" value="best" />
      <param name="bgcolor" value="#000000" />
      <param name="play" value="true" />
      <param name="loop" value="false" />
      <param name="wmode" value="window" />
      <param name="scale" value="showall" />
      <param name="menu" value="true" />
      <param name="devicefont" value="false" />
      <param name="salign" value="" />
      <param name="allowScriptAccess" value="sameDomain" />
      <param name="allowFullScreen" value="true" />
      <!-- [if !IE]> -->
      <object
        type="application/x-shockwave-flash"
        data="${this.url}"
        width="100%"
        height="100%"
      >
        <param name="movie" value="${this.url}" />
        <param name="quality" value="high" />
        <param name="bgcolor" value="#000000" />
        <param name="play" value="true" />
        <param name="loop" value="true" />
        <param name="wmode" value="window" />
        <param name="scale" value="showall" />
        <param name="menu" value="true" />
        <param name="devicefont" value="false" />
        <param name="salign" value="" />
        <param name="allowScriptAccess" value="sameDomain" />
        <param name="allowFullScreen" value="true" />
        <!-- <![endif] -->
        <div class="modal-content">
          <div class="alert alert-warning align-middle" role="alert">
            Note: This animation requires Adobe Flash Player. Please
            <a
              href="http://www.adobe.com/go/getflash"
              target="_blank"
              class="text-nowrap"
            >
              get Flash Player
            </a>.
          </div>
        </div>
        <!-- [if !IE]> -->
      </object>
      <!-- <![endif] -->
    </object>
  `;
  }
}

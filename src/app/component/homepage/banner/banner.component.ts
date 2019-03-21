import { Component, OnInit } from '@angular/core';
declare function lightGallery(): any;
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() {
    lightGallery()
  }

  ngOnInit() {
  }

}

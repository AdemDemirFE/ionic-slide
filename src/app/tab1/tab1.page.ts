import { Component,ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,

  };

  constructor() {}

}

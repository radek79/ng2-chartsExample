import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

/* an example of how to import a third party libary into ionic 2*/
import _ from "lodash";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
  
})
export class AboutPage {

  constructor(public navCtrl: NavController) {
  	console.log(_);
  }

}

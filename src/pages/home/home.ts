import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tapped = 0;
  pressed = 0;
  constructor(public navCtrl: NavController) {

  }
 //Call it int the parent html component
  onDidReset(resetType: string) {
    switch(resetType) {
      case 'tap' :
        this.tapped = 0;
        break;
      case 'press':
        this.pressed = 0;
        break;
      default:
        this.tapped = 0;
        this.pressed = 0;
    }
  }

  onTap(){
    this.tapped++;
  }

  onPress(){
    this.pressed++;
  }

  didWin() {
    return this.tapped == 2 && this.pressed == 4;
  }

}

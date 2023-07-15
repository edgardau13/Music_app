import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private menu: MenuController, private navCtrl: NavController) { }

  ngOnInit() {
  }

  CloseMenu(){
    this.menu.close();
  }

  logOut(){
    this.navCtrl.navigateRoot("/login")
  }

}

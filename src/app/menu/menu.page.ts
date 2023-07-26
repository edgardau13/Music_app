import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private menu: MenuController, private navCtrl: NavController, private storage: Storage) { }

  ngOnInit() {
  }

  CloseMenu(){
    this.menu.close();
  }

  logOut(){
    this.storage.set("isUserLoggedIn", false);
    this.navCtrl.navigateRoot("/login")
  }

  goIntro() {
    this.navCtrl.navigateForward("/intro")
  }

  goToSettings(){
    this.menu.close();
    this.navCtrl.navigateForward('/menu/settings');
  }
  goHome(){
    this.menu.close();
    this.navCtrl.navigateRoot('/menu/page1')
  }
}

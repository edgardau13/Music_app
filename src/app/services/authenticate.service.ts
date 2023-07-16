import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private storage: Storage, private alertController: AlertController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Invalido',
      message: 'Correo o contraseña invalidos',
      buttons: ['OK']
    });
    await alert.present();
  }

  loginUser(credentials:any){
    return new Promise((accept, reject)=> {
      if (
        credentials.email == "edgar@pca.com" && 
        credentials.password == "admin123"
      )
      {
        accept("login exitoso")
      }else {
        reject(this.presentAlert())
      }
    })
  }

 

  registerUser(userData:any){
    userData.password = btoa(userData.password);
    return this.storage.set("user", userData);
  }
}

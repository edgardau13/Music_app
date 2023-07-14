import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private storage: Storage) { }

  loginUser(credentials:any){
    return new Promise((accept, reject)=> {
      if (
        credentials.email == "edgar@pca.com" && 
        credentials.password == "admin123"
      )
      {
        accept("login exitoso")
      }else {
        reject("Correo o contraseña invalida")
      }
    })
  }

  registerUser(userData:any){
    userData.password = btoa(userData.password);
    return this.storage.set("user", userData);
  }
}

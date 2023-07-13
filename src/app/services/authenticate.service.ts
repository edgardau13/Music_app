import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }

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
}

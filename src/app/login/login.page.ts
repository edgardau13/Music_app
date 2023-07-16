import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  validation_messages = {
    email: [
      { type: "required", message: "El email es obligatio" },
      { type: "pattern", message: "Debe poner un email valido" }
    ],
    password: [
      { type: "required", message: "La contraseña es obligatoria"},
      { type: "minlength", message: "La contaseña debe tener min 6 caracteres"},
      { type: "maxlength", message: "La contaseña debe tener max 10 caracteres"}
    ]
  }
  errorMessage: string='';

  constructor(private formBuilder: FormBuilder, 
    private authService: AuthenticateService, 
    private navCtrl: NavController, 
    private storage: Storage) {
    this.loginForm = this.formBuilder.group(
      {
        email: new FormControl(
          "",
          Validators.compose(
            [
              Validators.required,
              Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9_.+-]+.[a-zA-Z0-9.-]+$")
          ]
          )
        ),
        password: new FormControl(
          "",
          Validators.compose(
            [
              Validators.required,
              Validators.minLength(5),
              Validators.maxLength(10)
            ]
          )
        )
      }
    )
   }

  ngOnInit() {
  }
   
  loginUser(credentials: any){
    console.log(credentials);
    this.authService.loginUser(credentials).then(res => {
      this.errorMessage = "";
      this.storage.set("isUserLoggedIn", true);
      this.navCtrl.navigateForward("menu/page1");
    }).catch(err => {
      this.errorMessage = err;
      console.log(this.errorMessage);
    })
  }

  goToRegister(){
    this.navCtrl.navigateForward("/register")
  }

}
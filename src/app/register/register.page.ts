import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private navCtrl: NavController,
    private authService: AuthenticateService
  ) {
    this.registerForm = this.formBuilder.group(
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
              Validators.minLength(6),
              Validators.maxLength(30)
            ]
          )
        ),
        name: new FormControl(
          "",
          Validators.compose(
            [
              Validators.required,
              Validators.minLength(2),
              Validators.maxLength(25)
            ]
          )
        ),
        last_name: new FormControl(
          "",
          Validators.compose(
            [
              Validators.required,
              Validators.minLength(2),
              Validators.maxLength(25)
            ]
          )
        )
      }
    )
   }

  ngOnInit() {
  }

  goToLogin(){
    this.navCtrl.back()
  }

  registerUser(userData:any){
    console.log(userData)
    this.authService.registerUser(userData).then(() => {
      this.navCtrl.navigateBack("/login")
    })
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Animation, createAnimation } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(private router: Router) {}

  ngOnInit() {
    const section = document.querySelector('section');
    const h2 = document.querySelector('h2');
    if (section && h2) {
      const animation: Animation = createAnimation()
        .addElement(section)
        .addElement(h2)
        .duration(10000)
        .iterations(Infinity)
        .keyframes([
          { offset: 0, backgroundPosition: '0 50%', color: 'red' },
          { offset: 0.5, backgroundPosition: '100% 50%', color: 'green' },
          { offset: 1, backgroundPosition: '0 50%', color: 'red' }
        ]);

      animation.play();
  }
}

  finish() {
    this.router.navigateByUrl("/login");
  }

  

}

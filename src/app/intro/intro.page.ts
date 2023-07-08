import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  Slides = [
    {
      title: "Spotify",
      img: "/assets/images/logo.png",
      description: "Spotify es la app de musica mas popular, con una facil interfaz de menejo y una gran variedad de musica lo que la hace mas atractiva para muchos usuarios"
      
    },

    {
      title: "Apple Music",
      img: "/assets/images/logo2.png",
      description: "Apple Music brinda a los artistas herramientas para crear, publicar y promocionar su música, y también para medir su alcance a nivel global"
    
    },

    {
      title: "Deezer",
      img: "/assets/images/3.png",
      description: "Deezer es una aplicación de música en streaming que te da acceso a más de 90 millones de canciones en todo el mundo y otros contenidos de audio como podcasts."
    
    },

    {
      title: "Amazon Music",
      img: "/assets/images/4.png",
      description: "Amazon Music es una plataforma de transmisión en directo de música y tienda perteneciente a la empresa Amazon. Se publicó la versión beta del servicio el 25 de septiembre de 2007. En enero de 2020, la plataforma contaba con 55 millones de usuarios"
    
    },

    {
      title: "Tidal",
      img: "/assets/images/5.png",
      description: "Tidal es un servicio de música de emisión continua basado en suscripción que combina audio sin pérdida y videos musicales de alta definición con una editorial selecta."
    
    }
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  finish() {
    this.router.navigateByUrl("/home");
  }

}

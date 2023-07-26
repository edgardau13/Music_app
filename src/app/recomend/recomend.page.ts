import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MusicSerService } from '../services/music-ser.service';
import { ModalController } from '@ionic/angular';
import { ModalSongslocalPage } from '../modal-songslocal/modal-songslocal.page';
@Component({
  selector: 'app-recomend',
  templateUrl: './recomend.page.html',
  styleUrls: ['./recomend.page.scss'],
})
export class RecomendPage implements OnInit {

  localArtists: any;
  song = {
    name:''
  }

  constructor(private navController: NavController, private musicServ: MusicSerService, private modalController: ModalController) { }

  ionViewDidEnter(){
    this.localArtists = this.musicServ.getArtistsFromJson();
    this.localArtists = this.localArtists.artists;
    //console.log(this.localArtists.artists);
  }

  async showSongs(artist:any){
    console.log(artist)
    const songs = await this.musicServ.getArtistsTracks(artist.id)
    console.log(songs);
    const modal = await this.modalController.create(
      {
        component: ModalSongslocalPage,
        componentProps: {
          songs: songs,
          name: artist.name
        } 
      }
    );
    modal.onDidDismiss().then( dataReturned => {
      this.song = dataReturned.data;
    })
    return await modal.present();
  }
  ngOnInit() {
  }

  finish(){
    this.navController.navigateBack('menu/page1')
  }

}

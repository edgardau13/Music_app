import { Component } from '@angular/core';
import { MusicSerService } from '../services/music-ser.service';
import { ModalController } from '@ionic/angular';
import { SongsModalPage } from '../songs-modal/songs-modal.page';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page {
  artists: any;
  localArtists: any;
  song = {
    name:''
  }
  constructor(private musicServ: MusicSerService, private modalController: ModalController) { }

  ionViewDidEnter(){
    this.musicServ.getArtists().then(listArtists => {
      this.artists = listArtists;
      console.log("variable",this.artists);
    })

    this.localArtists = this.musicServ.getArtistsFromJson();
    console.log(this.localArtists.artists);
  }

  async showSongs(artist:any){
    console.log(artist)
    const songs = await this.musicServ.getArtistsTracks(artist.id)
    console.log(songs);
    const modal = await this.modalController.create(
      {
        component: SongsModalPage,
        componentProps: {
          songs: songs,
          artist: artist.name
        } 
      }
    );
    modal.onDidDismiss().then( dataReturned => {
      this.song = dataReturned.data;
    })
    return await modal.present();
  }

}

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
    name:'',
    playing: false,
    preview_url: ''
  }

  currentSong: any;
  newTime: any;
  albums: any;
  constructor(private musicServ: MusicSerService, private modalController: ModalController) { }

  ionViewDidEnter(){
    this.musicServ.getArtists().then(listArtists => {
      this.artists = listArtists;
      console.log("variable",this.artists);
    })

    this.localArtists = this.musicServ.getArtistsFromJson();
    console.log(this.localArtists.artists);

    this.musicServ.getAlbums().then(listAlbums =>{
      this.albums = listAlbums;
    })
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
          name: artist.name
        } 
      }
    );
    modal.onDidDismiss().then( dataReturned => {
      this.song = dataReturned.data;
    })
    return await modal.present();
  }

  async showAlbumSongs(album:any){
    //console.log(artist);
    const songs = await this.musicServ.getAlbumsTracks(album.id);
    //console.log(songs);
    const modal = await this.modalController.create(
      {
        component: SongsModalPage,
        componentProps: {
          songs: songs,
          name: album.name
        }
      }
    );
    modal.onDidDismiss().then( dataReturned => {
      this.song = dataReturned.data;
    });
    return await modal.present();
  }

  play(){
    this.currentSong = new Audio(this.song.preview_url);
    this.currentSong.play();
    this.currentSong.addEventListener("timeupdate", () => {
      this.newTime = (1 / this.currentSong.duration) * this.currentSong.currentTime;
    })
    this.song.playing= true;
  }
  
  pause(){
    this.currentSong.pause();
    this.song.playing= false;
  }

  parseTime(time = "0.00"){
    if(time){
      const partTime = parseInt(time.toString().split(".")[0], 10);
      let minutes = Math.floor(partTime / 60).toString();
      if(minutes.length == 1){
        minutes = "0" + minutes;
      }

      let seconds = (partTime % 60).toString();
      if(seconds.length == 1){
        seconds = "0" + seconds;
      }

      return minutes + ":" + seconds
    }else{
      return "0:00"
    }
  }

}

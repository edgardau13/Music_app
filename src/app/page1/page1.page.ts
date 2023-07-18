import { Component } from '@angular/core';
import { MusicSerService } from '../services/music-ser.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page {
  artists: any;
  localArtists: any;
  constructor(private musicServ: MusicSerService) { }

  ionViewDidEnter(){
    this.musicServ.getArtists().then(listArtists => {
      this.artists = listArtists;
      console.log("variable",this.artists);
    })

    this.localArtists = this.musicServ.getArtistsFromJson();
    console.log(this.localArtists.artists);
  }


}

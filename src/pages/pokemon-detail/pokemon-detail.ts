import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController,LoadingController } from 'ionic-angular';
import {Http} from '@angular/http';

/**
 * Generated class for the PokemonDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pokemon-detail',
  templateUrl: 'pokemon-detail.html',
})
export class PokemonDetailPage {
  public url:string = "https://pokeapi.co/api/v2/pokemon/"
  public pokemon : any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public http:Http, 
    public viewCtrl:ViewController,
    public loadingCtrl: LoadingController ) {
      this.fetchContent();    
    console.log('Pokemon', navParams.get(''));
  }

  fetchContent():void{
    let loading = this.loadingCtrl.create({
      content: 'Fetching content...'
    });
    this.pokemon = this.navParams.get('pokemon');
console.log(this.pokemon);
    // loading.present();

    // this.http.get( this.navParams.get('pokeUrl'))
    // .map(res=>res.json())
    // .subscribe(data=>{
    //   this.pokemon = data;      
    //   loading.dismiss();
    // });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PokemonDetailPage');
  }

}
